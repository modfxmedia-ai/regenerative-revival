import Script from "next/script";

/**
 * LeadConnector (HighLevel) embed for the ONDA Pro consultation form.
 * Script loads once via next/script (afterInteractive).
 */
export default function OndaProLeadForm() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="w-full" style={{ minHeight: 462, height: 462 }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/ygOv3S54wTYr2NmK6ZPG"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: 8,
          }}
          id="inline-ygOv3S54wTYr2NmK6ZPG"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="ONDO Pro Form"
          data-height="462"
          data-layout-iframe-id="inline-ygOv3S54wTYr2NmK6ZPG"
          data-form-id="ygOv3S54wTYr2NmK6ZPG"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="ONDO Pro Form"
        />
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
