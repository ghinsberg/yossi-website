"use client";

import { useEffect } from "react";

// Fires Meta Pixel Lead event + GA4 generate_lead on the /thank-you page
export default function ConversionFire() {
  useEffect(() => {
    // Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    // GA4
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "booking",
        event_label: "thank_you_page",
      });
    }
  }, []);

  return null;
}
