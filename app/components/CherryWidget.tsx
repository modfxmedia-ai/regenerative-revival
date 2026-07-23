"use client";

import { useEffect } from "react";

/**
 * Cherry "buy now, pay later" financing widget (full-page embed).
 *
 * Loads the Cherry widget loader once and renders the financing sections into
 * the container divs below. Snippet/config provided by Cherry's script
 * generator for slug "regenerative-revival".
 */

declare global {
  interface Window {
    _hw?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

const WIDGET_SRC = "https://files.withcherry.com/widgets/widget.js";
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";

export default function CherryWidget() {
  useEffect(() => {
    // Load Open Sans (the widget's configured font) once.
    if (!document.getElementById("cherry-font")) {
      const link = document.createElement("link");
      link.id = "cherry-font";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }

    // Initialize the Cherry command queue and inject the loader once.
    window._hw =
      window._hw ||
      function (...args: unknown[]) {
        (window._hw!.q = window._hw!.q || []).push(args);
      };

    if (!document.getElementById("_hw")) {
      const js = document.createElement("script");
      const fjs = document.getElementsByTagName("script")[0];
      js.id = "_hw";
      js.src = WIDGET_SRC;
      js.async = true;
      fjs.parentNode?.insertBefore(js, fjs);
    }

    window._hw(
      "init",
      {
        debug: false,
        variables: {
          slug: "regenerative-revival",
          name: "Regenerative Revival",
          images: [6],
          customLogo: "",
          defaultPurchaseAmount: 1000,
          customImage: "",
          imageCategory: "other",
          language: "en",
        },
        styles: {
          primaryColor: "#0E202F",
          secondaryColor: "#0E202F10",
          fontFamily: "Open Sans",
          headerFontFamily: "Open Sans",
        },
      },
      ["hero", "calculator", "howitworks", "faq"],
    );
  }, []);

  return (
    <div className="cherry-widget mx-auto max-w-[1200px] px-6 lg:px-8">
      <div id="all" />
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />
    </div>
  );
}
