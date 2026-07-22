export interface LeadData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  message?: string;
  subject?: string;
  inquiryType?: string;
  source: string;
}

/**
 * Read UTM params previously stashed in sessionStorage by <UtmCapture/>.
 * Safe on SSR - returns empty object if window is undefined.
 */
function readStoredUtms(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem("rr_utm");
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function readEverflowId(): string | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    return window.sessionStorage.getItem("rr_everflow") || undefined;
  } catch {
    return undefined;
  }
}

export async function submitLead(
  data: LeadData,
): Promise<{
  success: boolean;
  error?: string;
  leadId?: string | null;
  clientId?: string | null;
  prospectId?: string | null;
}> {
  try {
    const utms = readStoredUtms();
    const everflowId = readEverflowId();
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, ...utms, everflowId }),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { success: false, error: body.error || "Submission failed" };
    }
    // Entity ids are opaque CRM reference tokens (not PHI) - safe to hand to
    // downstream tools like the appointment embeddable.
    const body = (await res.json().catch(() => ({}))) as {
      leadId?: string | null;
      clientId?: string | null;
      prospectId?: string | null;
    };
    return {
      success: true,
      leadId: body.leadId ?? null,
      clientId: body.clientId ?? null,
      prospectId: body.prospectId ?? null,
    };
  } catch {
    return { success: false, error: "Network error - please try again" };
  }
}
