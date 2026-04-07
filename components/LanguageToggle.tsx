"use client";

import { useContent, useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const content = useContent();

  return (
    <div
      role="group"
      aria-label={content.header.languageLabel}
      className="y2k-pill inline-flex items-center gap-1 p-1"
    >
      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={language === "id"}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] transition ${
          language === "id"
            ? "bg-[var(--pink-primary)] text-white shadow-[0_6px_16px_rgba(191,27,89,0.38)]"
            : "text-[var(--burgundy)]"
        }`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] transition ${
          language === "en"
            ? "bg-[var(--pink-primary)] text-white shadow-[0_6px_16px_rgba(191,27,89,0.38)]"
            : "text-[var(--burgundy)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
