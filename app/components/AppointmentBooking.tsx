"use client";

import { useEffect } from "react";

// ── Tyria appointment-booking embeddable ──────────────────────────────────
// Default post-submit scheduling widget. The loader script scans the page for
// [data-tyria-appointment-booking] nodes and renders the calendar into them.
// When a lead was just captured we hand the (non-PHI) Lead ID to the widget via
// window.TyriaAppointmentBooking.setContext so the booking is linked to that
// contact and pre-fills their email/name.
export const TYRIA_BOOKING_WORKSPACE = "regenerative-revival";
export const TYRIA_APPOINTMENT_TYPE =
  "appt_05cbefea-6bbf-445d-94bd-1930313577ca";
const TYRIA_BOOKING_SCRIPT =
  "https://www.tyriacore.app/embeds/appointment-booking.js";

interface BookingContext {
  entityType: "lead" | "prospect" | "client";
  entityId: string;
  email?: string;
  name?: string;
}

declare global {
  interface Window {
    TyriaAppointmentBooking?: {
      setContext: (ctx: BookingContext) => void;
    };
  }
}

interface AppointmentBookingProps {
  /** Non-PHI CRM reference ids returned from /api/leads. When present the booking
   * is linked to that contact and their email/name are pre-filled. Priority when
   * more than one is set: client > prospect > lead. */
  leadId?: string | null;
  clientId?: string | null;
  prospectId?: string | null;
  /** Contact email to pre-fill (only used when an id is present). */
  email?: string;
  /** Contact name to pre-fill (only used when an id is present). */
  name?: string;
  /** Wrapper class for layout/spacing around the widget. */
  className?: string;
}

export default function AppointmentBooking({
  leadId,
  clientId,
  prospectId,
  email,
  name,
  className,
}: AppointmentBookingProps) {
  // Inject the Tyria loader script once per page.
  useEffect(() => {
    if (
      document.querySelector(`script[src="${TYRIA_BOOKING_SCRIPT}"]`)
    ) {
      return;
    }
    const script = document.createElement("script");
    script.src = TYRIA_BOOKING_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Once the widget is initialized, link the just-captured contact. Resolve the
  // entity the same way Tyria does: client > prospect > lead.
  useEffect(() => {
    const entityId = clientId ?? prospectId ?? leadId ?? null;
    const entityType: BookingContext["entityType"] | null = clientId
      ? "client"
      : prospectId
        ? "prospect"
        : leadId
          ? "lead"
          : null;
    if (!entityId || !entityType) return;

    let cancelled = false;
    const ctx: BookingContext = {
      entityType,
      entityId,
      email,
      name,
    };

    const apply = (): boolean => {
      if (cancelled) return true;
      if (window.TyriaAppointmentBooking?.setContext) {
        window.TyriaAppointmentBooking.setContext(ctx);
        return true;
      }
      return false;
    };

    if (apply()) return;

    // Poll briefly until the loader script has attached the global.
    const interval = setInterval(() => {
      if (apply()) clearInterval(interval);
    }, 200);
    const timeout = setTimeout(() => clearInterval(interval), 15000);

    return () => {
      cancelled = true;
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [leadId, clientId, prospectId, email, name]);

  return (
    <div className={className}>
      <div
        data-tyria-appointment-booking
        data-workspace={TYRIA_BOOKING_WORKSPACE}
        data-appointment-type={TYRIA_APPOINTMENT_TYPE}
      />
    </div>
  );
}
