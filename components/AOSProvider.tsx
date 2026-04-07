"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    AOS.init({
      duration: prefersReducedMotion ? 0 : 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });
  }, []);

  return null;
}