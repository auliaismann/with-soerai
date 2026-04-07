"use client";

import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Unlock } from "lucide-react";
import { useContent } from "@/context/LanguageContext";
import { useStableReducedMotion } from "@/lib/useStableReducedMotion";

const pillarIcons = [Unlock, ShieldCheck, Rocket];
const SCROLL_SPRING = {
  type: "spring",
  damping: 20,
  stiffness: 100,
} as const;

const SCROLL_VIEWPORT = {
  once: true,
  margin: "-100px",
} as const;

export default function AboutSection() {
  const content = useContent();
  const reduceMotion = useStableReducedMotion();

  const reveal = (direction: "left" | "right", delay = 0) => ({
    initial: reduceMotion
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: direction === "left" ? -60 : 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: SCROLL_VIEWPORT,
    transition: {
      ...SCROLL_SPRING,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section id="tentang-kami" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
        <motion.div {...reveal("left")} className="flex items-end justify-between gap-4">
          <div>
            <p className="font-subheading text-xs font-semibold uppercase tracking-[0.16em] text-[var(--olive-dark)]">
              WITH SOERAI
            </p>
            <h2 className="mt-2 font-hero text-4xl italic text-[var(--burgundy)] sm:text-5xl">
              {content.about.title}
            </h2>
          </div>
        </motion.div>

        <motion.div
          {...reveal("right", 0.05)}
          className="interactive-card grid gap-8 rounded-[2rem] border border-[rgba(112,23,50,0.14)] bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(244,248,222,0.95))] p-6 sm:p-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]"
        >
          <motion.div
            {...reveal("left", 0.08)}
            className="interactive-card gloss-card flex min-h-[230px] items-center p-6 sm:p-8"
          >
            <div>
              <p className="font-subheading text-xs font-semibold uppercase tracking-[0.16em] text-[var(--pink-primary)]/80">
                {content.about.context.eyebrow}
              </p>
              <p className="mt-4 font-accent text-2xl leading-tight text-[var(--burgundy)] sm:text-3xl">
                &quot;{content.about.context.pullQuote}&quot;
              </p>
            </div>
          </motion.div>

          <motion.div {...reveal("right", 0.12)} className="flex flex-col justify-center">
            <p className="font-subheading text-xs font-semibold uppercase tracking-[0.16em] text-[var(--olive-dark)]">
              {content.about.context.subtitle}
            </p>
            <p className="mt-4 text-base text-[var(--burgundy)]/90 sm:text-lg">
              {content.about.context.paragraph}
            </p>
            <div className="deco-ruled-line mt-8" />
          </motion.div>
        </motion.div>

        <motion.div
          {...reveal("left", 0.08)}
          className="interactive-card rounded-[2rem] border border-[var(--cream)]/70 bg-[var(--burgundy)] px-6 py-10 text-[var(--cream)] shadow-[0_24px_38px_rgba(112,23,50,0.32)] sm:px-8"
        >
          <motion.p {...reveal("left", 0.1)} className="font-subheading text-xs font-semibold uppercase tracking-[0.15em] text-[var(--cream)]/80">
            {content.about.urgency.eyebrow}
          </motion.p>
          <motion.h3 {...reveal("right", 0.12)} className="mt-2 font-hero text-3xl italic sm:text-4xl">
            {content.about.urgency.subtitle}
          </motion.h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.about.urgency.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Rocket;
              return (
                <motion.div
                  key={pillar}
                  {...reveal(index % 2 === 0 ? "left" : "right", 0.14 + index * 0.05)}
                  className="interactive-card interactive-card-hover y2k-pill flex items-center gap-3 rounded-2xl border border-[var(--pink-light)]/35 bg-[var(--cream)]/96 px-4 py-4 text-[var(--burgundy)]"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-[var(--pink-light)]/20 text-[var(--olive-dark)]">
                    <Icon size={18} />
                  </span>
                  <p className="font-subheading text-sm font-semibold uppercase tracking-[0.06em] text-[var(--burgundy)]">
                    {pillar}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.p {...reveal("right", 0.22)} className="mt-7 max-w-4xl text-[15px] text-[var(--cream)]/90 sm:text-base">
            {content.about.urgency.paragraph}
          </motion.p>
        </motion.div>

        <motion.div
          {...reveal("right", 0.11)}
          className="interactive-card rounded-[2rem] border border-[rgba(87,97,0,0.25)] bg-[rgba(244,248,222,0.82)] px-6 py-12 sm:px-10"
        >
          <motion.p
            {...reveal("left", 0.13)}
            className="text-center font-subheading text-xs font-semibold uppercase tracking-[0.15em] text-[var(--olive-dark)]"
          >
            {content.about.overview.eyebrow}
          </motion.p>
          <motion.h3
            {...reveal("right", 0.16)}
            className="mt-2 text-center font-subheading text-sm font-semibold uppercase tracking-[0.2em] text-[var(--pink-primary)]"
          >
            {content.about.overview.subtitle}
          </motion.h3>
          <motion.p
            {...reveal("left", 0.2)}
            className="mx-auto mt-5 max-w-3xl text-center font-accent text-3xl italic leading-tight text-[var(--burgundy)] sm:text-4xl"
          >
            &quot;{content.about.overview.quote}&quot;
          </motion.p>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {content.about.overview.pillars.map((pillar, index) => (
              <motion.article
                key={pillar.name}
                {...reveal(index % 2 === 0 ? "left" : "right", 0.22 + index * 0.05)}
                className="interactive-card interactive-card-hover gloss-card rounded-2xl border border-[rgba(87,97,0,0.3)] p-6"
              >
                <h4 className="font-subheading text-base font-semibold tracking-[0.08em] text-[var(--olive-dark)]">
                  {pillar.name}
                </h4>
                <p className="mt-2 text-sm text-[var(--burgundy)]/85">{pillar.detail}</p>
              </motion.article>
            ))}
          </div>

          <motion.p
            {...reveal("right", 0.28)}
            className="mt-8 text-center text-base font-medium text-[var(--burgundy)] sm:text-lg"
          >
            {content.about.overview.closing}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
