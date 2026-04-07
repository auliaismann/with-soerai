"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    AOS.init({
      duration: prefersReducedMotion ? 0 : 920,
      delay: 20,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 70,
      anchorPlacement: "top-bottom",
    });

    const refreshAOS = () => {
      AOS.refreshHard();
    };

    const timerId = window.setTimeout(refreshAOS, 180);
    window.addEventListener("load", refreshAOS);
    window.addEventListener("resize", refreshAOS);
    window.addEventListener("orientationchange", refreshAOS);

    return () => {
      window.clearTimeout(timerId);
      window.removeEventListener("load", refreshAOS);
      window.removeEventListener("resize", refreshAOS);
      window.removeEventListener("orientationchange", refreshAOS);
    };
  }, []);

  return null;
}