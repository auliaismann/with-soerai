"use client";

import { motion } from "framer-motion";
import { ListOrdered, Sparkles } from "lucide-react";
import { useContent } from "@/context/LanguageContext";
import { useStableReducedMotion } from "@/lib/useStableReducedMotion";

const EASING = [0.22, 1, 0.36, 1] as const;

export default function VisionMissionSection() {
  const content = useContent();
  const reduceMotion = useStableReducedMotion();

  const revealHeading = {
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      ease: EASING,
    },
  };

  const slideInLeft = {
    initial: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -48 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      ease: EASING,
    },
  };

  const slideInRight = {
    initial: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 48 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      ease: EASING,
    },
  };

  return (
    <section id="visi-misi" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          {...revealHeading}
          className="text-center font-hero text-4xl italic text-[var(--burgundy)] sm:text-5xl"
        >
          {content.visionMission.sectionTitle}
        </motion.h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.article
            {...slideInLeft}
            className="interactive-card shimmer-border relative overflow-hidden rounded-3xl border border-white/35 bg-[linear-gradient(135deg,var(--pink-primary),var(--burgundy))] p-7 text-[var(--cream)] shadow-[0_22px_38px_rgba(112,23,50,0.28)]"
          >
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-white/16">
              <Sparkles size={22} />
            </div>
            <h3 className="font-subheading text-2xl font-semibold uppercase tracking-[0.12em]">
              {content.visionMission.visionTitle}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--cream)]/92 sm:text-base">
              {content.visionMission.visionBody}
            </p>
          </motion.article>

          <motion.article
            {...slideInRight}
            className="interactive-card shimmer-border relative rounded-3xl border border-[rgba(87,97,0,0.35)] bg-[rgba(244,248,222,0.92)] p-7 text-[var(--burgundy)] shadow-[0_18px_30px_rgba(112,23,50,0.12)]"
          >
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[var(--olive-light)]/30 text-[var(--olive-dark)]">
              <ListOrdered size={22} />
            </div>
            <h3 className="font-subheading text-2xl font-semibold uppercase tracking-[0.12em] text-[var(--olive-dark)]">
              {content.visionMission.missionTitle}
            </h3>

            <ol className="mt-4 space-y-3">
              {content.visionMission.missionPoints.map((point, index) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed sm:text-base">
                  <span className="mt-0.5 inline-grid size-6 shrink-0 place-items-center rounded-full bg-[var(--olive-light)] text-xs font-semibold text-[var(--olive-dark)]">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
