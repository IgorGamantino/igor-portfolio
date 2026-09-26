"use client";

import { useEffect } from "react";
import { initAnalytics, trackEvent } from "@/lib/firebase";

const SECTIONS = ["about", "skills", "experience", "education", "contact"];

export default function FirebaseAnalytics() {
  useEffect(() => {
    initAnalytics();

    // Log visits coming from ad campaigns (e.g. ?utm_source=linkedin).
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    if (utmSource) {
      trackEvent("campaign_visit", {
        utm_source: utmSource,
        ...Object.fromEntries(
          ["utm_medium", "utm_campaign", "utm_content"]
            .map((key) => [key, params.get(key)])
            .filter(([, value]) => value)
        ),
      });
    }

    // Log each section once per visit when it reaches the middle of the screen.
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !seen.has(id)) {
            seen.add(id);
            trackEvent("section_view", { section: id });
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
