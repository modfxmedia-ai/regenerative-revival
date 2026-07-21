import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LEAD_RECIPIENTS = [
  "info@regenerativerevival.com",
  "justin@modfxmedia.com",
];

// Optional dual-write targets - leads also forwarded to GHL and Tyriacore CRM
// when these env vars are present. Both are fire-and-forget; failures never
// break the user-facing response.
const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;
const TYRIACORE_WEBHOOK_URL = process.env.TYRIACORE_WEBHOOK_URL;

// ── Tyria form API (tyriacore.app) ──────────────────────────────────────
// Direct submission into the Tyria "Contact Form". Fire-and-forget like the
// CRM webhooks; failures are logged but never surface to the user.
const TYRIA_API_KEY = process.env.TYRIA_API_KEY;
const TYRIA_FORM_ID =
  process.env.TYRIA_FORM_ID || "frm_cf7dade5-7e28-419f-a82e-ce232bd0012a";
// Question ids from the Tyria form template (see form updates/details.md).
const TYRIA_FIELDS = {
  firstName: "2290b181-cd97-4744-b8fc-87a5d916c9e3",
  lastName: "9dc96eb6-d2c6-45a5-91b7-e824de65fdfc",
  email: "266f6a32-5ba5-4a9c-b99a-4e0067abd51a",
  phone: "f3aa2c29-7132-4aa8-b596-36e13452b774",
  painAreas: "c12fc52d-9825-46f4-b03c-1d7b93dce6e5",
  whatLed: "96710b63-d616-48a2-9fac-2288b53107e1",
  everflowId: "5a12ac4a-0f54-44de-ad75-479b90068412",
} as const;

async function forwardToWebhook(
  url: string,
  label: string,
  payload: Record<string, unknown>,
) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error(`[${label} WEBHOOK ERROR]`, res.status, await res.text());
    }
  } catch (err) {
    console.error(`[${label} WEBHOOK EXCEPTION]`, err);
  }
}

async function forwardToTyria(fields: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string | null;
  subject?: string | null;
  inquiryType?: string | null;
  source: string;
  everflowId?: string | null;
}): Promise<string | null> {
  if (!TYRIA_API_KEY) return null;
  try {
    const answers: Record<string, string> = {
      [TYRIA_FIELDS.firstName]: fields.firstName,
      [TYRIA_FIELDS.lastName]: fields.lastName,
      [TYRIA_FIELDS.email]: fields.email,
      [TYRIA_FIELDS.phone]: fields.phone,
    };
    const note = [fields.subject, fields.inquiryType, fields.message]
      .filter(Boolean)
      .join(" - ");
    if (note) answers[TYRIA_FIELDS.painAreas] = note;
    answers[TYRIA_FIELDS.whatLed] = "Website";
    if (fields.everflowId) answers[TYRIA_FIELDS.everflowId] = fields.everflowId;

    const res = await fetch(
      `https://www.tyriacore.app/api/v1/forms/${TYRIA_FORM_ID}/entries`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TYRIA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers,
          submittedBy: {
            email: fields.email,
            name: `${fields.firstName} ${fields.lastName}`.trim(),
          },
          meta: { source: fields.source || "website" },
        }),
      },
    );
    if (!res.ok) {
      console.error("[TYRIA FORM ERROR]", res.status, await res.text());
      return null;
    }
    // Return the opaque entry id (Lead ID). This is NOT PHI - it is a random
    // reference token used to link downstream tools (e.g. the appointment
    // embeddable) to this submission without passing any patient data.
    const json = (await res.json().catch(() => null)) as
      | { data?: { id?: string } }
      | null;
    return json?.data?.id ?? null;
  } catch (err) {
    console.error("[TYRIA FORM EXCEPTION]", err);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      subject,
      inquiryType,
      source,
      everflowId,
      // UTM attribution (optional, passed by client when present)
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
    } = body;

    // Quiz-router audit pings are internal analytics, not real leads. They
    // arrive with placeholder identity fields (anonymous@quiz.local, etc.), so
    // we log them server-side but never email the team, never send a
    // confirmation to the fake address, and never create a CRM contact.
    //
    // NOTE: match on the audit marker / placeholder identity ONLY. Real quiz
    // leads also use source === "consult-router" but carry a genuine email, so
    // we must NOT drop them here or those leads are silently lost.
    const isPlaceholderIdentity =
      typeof email === "string" &&
      /@quiz\.local$/i.test(email.trim());
    if (inquiryType === "quiz_router_audit" || isPlaceholderIdentity) {
      // Log source only - never PHI (no name/email/phone/message).
      console.log("[QUIZ ROUTER AUDIT]", { source: source || "unknown" });
      return NextResponse.json({ success: true, audit: true });
    }

    // Basic server-side validation
    if (!firstName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const fullName = `${firstName.trim()} ${(lastName || "").trim()}`.trim();

    // ── Dual-write to CRM webhooks (fire-and-forget) ─────────────────────
    // Runs in parallel with Resend, never blocks the response, never throws.
    const crmPayload = {
      firstName: firstName.trim(),
      lastName: (lastName || "").trim(),
      fullName,
      email: email.trim(),
      phone: phone.trim(),
      subject: subject || null,
      inquiryType: inquiryType || null,
      source: source || "website",
      message: message || null,
      utm: {
        source: utmSource || null,
        medium: utmMedium || null,
        campaign: utmCampaign || null,
        term: utmTerm || null,
        content: utmContent || null,
      },
      everflowId: everflowId || null,
      submittedAt: new Date().toISOString(),
    };

    const crmWrites: Promise<void>[] = [];
    if (GHL_WEBHOOK_URL) {
      crmWrites.push(forwardToWebhook(GHL_WEBHOOK_URL, "GHL", crmPayload));
    }
    if (TYRIACORE_WEBHOOK_URL) {
      crmWrites.push(
        forwardToWebhook(TYRIACORE_WEBHOOK_URL, "TYRIACORE", crmPayload),
      );
    }
    // Fire the webhook writes without blocking; errors are swallowed inside
    // forwardToWebhook. We `void` them so the unhandled-promise lint stays quiet.
    if (crmWrites.length) void Promise.all(crmWrites);

    // Write to the Tyria CRM and AWAIT it so we can capture the Lead ID (the
    // opaque entry id). Tyria is the BAA-covered system of record that holds
    // the PHI; the Lead ID is a non-PHI reference token returned to the client
    // for downstream use (e.g. the appointment embeddable).
    let leadId: string | null = null;
    if (TYRIA_API_KEY) {
      leadId = await forwardToTyria({
        firstName: firstName.trim(),
        lastName: (lastName || "").trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message || null,
        subject: subject || null,
        inquiryType: inquiryType || null,
        source: source || "website",
        everflowId: everflowId || null,
      });
    }

    // HIPAA: the team notification email contains NO PHI. Patient identity and
    // any health details live only in the BAA-covered CRM. This email is just a
    // ping with the non-PHI Lead ID so the team can open the record in the CRM.
    const htmlBody = `
      <h2>New Lead from Regenerative Revival</h2>
      <p style="font-size:14px;color:#555;">A new lead was submitted through the website. For HIPAA compliance, no patient or health information is included in this email. Open the record in the CRM using the Lead ID below to view details and follow up.</p>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Lead ID</td><td style="padding:8px;border-bottom:1px solid #eee;">${leadId || "(unavailable - check CRM)"}</td></tr>
        ${source ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Source</td><td style="padding:8px;border-bottom:1px solid #eee;">${source}</td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Submitted</td><td style="padding:8px;border-bottom:1px solid #eee;">${new Date().toISOString()}</td></tr>
      </table>
    `;

    if (!RESEND_API_KEY) {
      // Log non-PHI only (source + Lead ID). Never log name/email/phone/message.
      console.log("[LEAD] received", { source: source || "website", leadId });
      return NextResponse.json({ success: true, leadId, warning: "Email not configured - lead logged to server." });
    }

    // Send lead notification to team
    const leadEmail = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Regenerative Revival <leads@regenerativerevival.com>",
        to: LEAD_RECIPIENTS,
        // No PHI in the subject line (no name). reply_to is intentionally
        // omitted so the patient email is not exposed in the message headers.
        subject: `New website lead${source ? ` (${source})` : ""}`,
        html: htmlBody,
      }),
    });

    // Send confirmation auto-reply to the user
    const confirmationHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#333;">
        <div style="background:linear-gradient(135deg,#6B3FA0,#8B5FC7);padding:32px;text-align:center;border-radius:12px 12px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:24px;">Regenerative Revival</h1>
        </div>
        <div style="padding:32px;background:#fff;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px;">
          <h2 style="color:#6B3FA0;margin-top:0;">Thank you, ${firstName.trim()}!</h2>
          <p style="font-size:16px;line-height:1.6;">
            We've received your submission and a member of our team will be reaching out to you shortly - typically within 24 hours.
          </p>
          <p style="font-size:16px;line-height:1.6;">
            In the meantime, if you have any urgent questions, feel free to call us directly at <a href="tel:+16124533182" style="color:#6B3FA0;">612-453-3182</a> or reply to this email.
          </p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
          <p style="font-size:13px;color:#999;line-height:1.5;">
            Regenerative Revival · Nationwide Regenerative Medicine<br/>
            <a href="https://regenerativerevival.com" style="color:#6B3FA0;">regenerativerevival.com</a>
          </p>
        </div>
      </div>
    `;

    const confirmEmail = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Regenerative Revival <no-reply@regenerativerevival.com>",
        to: [email.trim()],
        subject: "We've received your inquiry - Regenerative Revival",
        html: confirmationHtml,
      }),
    });

    // Fire both emails in parallel
    const [leadRes, confirmRes] = await Promise.all([leadEmail, confirmEmail]);

    if (!leadRes.ok) {
      console.error("[LEAD EMAIL ERROR]", await leadRes.text());
    }
    if (!confirmRes.ok) {
      console.error("[CONFIRMATION EMAIL ERROR]", await confirmRes.text());
    }

    return NextResponse.json({ success: true, leadId });
  } catch (err) {
    console.error("[LEAD API ERROR]", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
