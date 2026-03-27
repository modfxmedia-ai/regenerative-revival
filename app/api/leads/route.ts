import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LEAD_RECIPIENTS = [
  "info@regenerativerevival.com",
  "justin@modfxmedia.com",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message, subject, inquiryType, source } = body;

    // Basic server-side validation
    if (!firstName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const fullName = `${firstName.trim()} ${(lastName || "").trim()}`.trim();

    const htmlBody = `
      <h2>New Lead from Regenerative Revival</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${fullName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
        ${subject ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Subject</td><td style="padding:8px;border-bottom:1px solid #eee;">${subject}</td></tr>` : ""}
        ${inquiryType ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Inquiry Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${inquiryType}</td></tr>` : ""}
        ${source ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Source</td><td style="padding:8px;border-bottom:1px solid #eee;">${source}</td></tr>` : ""}
        ${message ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${message}</td></tr>` : ""}
      </table>
    `;

    if (!RESEND_API_KEY) {
      // Log the lead so it's not lost even if email isn't configured yet
      console.log("[LEAD]", { fullName, email, phone, message, subject, inquiryType, source });
      return NextResponse.json({ success: true, warning: "Email not configured — lead logged to server." });
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
        subject: `New Lead: ${fullName} — ${subject || inquiryType || "Website Inquiry"}`,
        html: htmlBody,
        reply_to: email,
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
            We've received your submission and a member of our team will be reaching out to you shortly — typically within 24 hours.
          </p>
          <p style="font-size:16px;line-height:1.6;">
            In the meantime, if you have any urgent questions, feel free to call us directly at <a href="tel:+15551234567" style="color:#6B3FA0;">(555) 123-4567</a> or reply to this email.
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
        subject: "We've received your inquiry — Regenerative Revival",
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[LEAD API ERROR]", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
