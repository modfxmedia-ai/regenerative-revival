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

export async function submitLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { success: false, error: body.error || "Submission failed" };
    }
    return { success: true };
  } catch {
    return { success: false, error: "Network error — please try again" };
  }
}
