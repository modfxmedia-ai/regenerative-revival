"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const RSVP_FORM_SRC =
  "https://www.tyriacore.app/forms/frm_a1bb3ad6-9d92-4fd8-b61e-5f401a75ecfb?workspaceId=ws_962d7611-e9b4-4990-9ddc-89bf7c899735&eventContextToken=pctx_ws_962d7611-e9b4-4990-9ddc-89bf7c899735--WxZCv3_376q4EiiN.YSajU14vS4VXmm91QY1z_Rml1VNil8ODY1Phcq9UrCI&embed=1";

type RsvpButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RsvpButton({ children, className }: RsvpButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Reserve your seats"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[200] flex items-stretch justify-center overflow-y-auto bg-[#021E3C]/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-xl flex-col overflow-hidden bg-white shadow-2xl sm:max-h-[92vh] sm:rounded-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#EDE8F7] px-4 py-3">
              <span className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[#1A1F30]">
                Reserve your seats
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#4A4F66] transition-colors hover:bg-[#F1ECF8] hover:text-[#1A1F30]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              src={RSVP_FORM_SRC}
              title="RSVP Form"
              className="block h-[calc(100vh-53px)] w-full border-0 sm:h-[80vh]"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
