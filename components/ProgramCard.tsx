"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
  outcomes: string[];
}

export function ProgramCard({
  title,
  subtitle,
  description,
  outputs,
  outcomes,
}: ProgramCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { language } = useLanguage();

  const detailLabel = language === "id" ? "Lihat Detail →" : "View Details →";
  const backLabel = language === "id" ? "← Kembali" : "← Back";
  const outputLabel = language === "id" ? "Output Program" : "Program Outputs";
  const outcomeLabel = language === "id" ? "Hasil" : "Outcomes";
  const overlineLabel = language === "id" ? "Program Unggulan" : "Featured Program";

  return (
    <div style={{ perspective: "1200px" }} className="h-full w-full">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          height: "100%",
        }}
        className="relative min-h-[320px]"
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#bf1b59]/20 border-t-[5px] border-t-[#bf1b59] bg-[#f4f8de] p-7 shadow-[0_14px_28px_rgba(112,23,50,0.12)]"
        >
          <div>
            <p className="mb-3 font-subheading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#abb039]">
              {overlineLabel}
            </p>
            <h3 className="mb-2 font-hero text-3xl italic text-[#701732]">{title}</h3>
            <p className="text-sm leading-relaxed text-[#576100]">{subtitle}</p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="rounded-full border border-[#bf1b59] px-5 py-2 font-subheading text-sm font-semibold text-[#bf1b59] transition-colors duration-200 hover:bg-[#bf1b59] hover:text-white"
            >
              {detailLabel}
            </button>
          </div>
        </div>

        <div
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 flex flex-col rounded-2xl bg-[#701732] p-7 text-[#f4f8de] shadow-[0_16px_30px_rgba(112,23,50,0.2)]"
        >
          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
            <h3 className="font-hero text-2xl italic text-[#f4f8de]">{title}</h3>
            <p className="text-sm leading-relaxed text-[#f4f8de]/90">
              {description}
            </p>

            <div>
              <p className="mb-2 font-subheading text-xs font-bold uppercase tracking-[0.14em] text-[#e26a8a]">
                {outputLabel}
              </p>
              <ul className="space-y-1 text-sm text-[#f4f8de]/85">
                {outputs.map((item) => (
                  <li key={`${title}-output-${item}`} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {outcomes.length > 0 && (
              <div>
                <p className="mb-2 font-subheading text-xs font-bold uppercase tracking-[0.14em] text-[#e26a8a]">
                  {outcomeLabel}
                </p>
                <ul className="space-y-1 text-sm text-[#f4f8de]/85">
                  {outcomes.map((item) => (
                    <li key={`${title}-outcome-${item}`} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="rounded-full border border-[#f4f8de]/40 px-5 py-2 font-subheading text-sm font-semibold text-[#f4f8de] transition-colors duration-200 hover:border-[#f4f8de] hover:bg-[#f4f8de] hover:text-[#701732]"
            >
              {backLabel}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProgramCard;
