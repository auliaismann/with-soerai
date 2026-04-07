"use client";

import { motion } from "framer-motion";
import BotanicalDeco from "@/components/BotanicalDeco";
import ProgramCard from "@/components/ProgramCard";
import { useContent } from "@/context/LanguageContext";
import { useStableReducedMotion } from "@/lib/useStableReducedMotion";

const SCROLL_SPRING = {
  type: "spring",
  damping: 20,
  stiffness: 100,
} as const;

const SCROLL_VIEWPORT = {
  once: true,
  margin: "-100px",
} as const;

export default function ProgramSection() {
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
    <section id="program" className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <BotanicalDeco
        className="absolute -left-2 top-8 w-[88px] opacity-80 sm:left-2 sm:top-16 sm:w-[122px] lg:left-4 lg:top-24 lg:w-[220px]"
        label="Flower 03"
        duration={10.7}
        delay={0.85}
      />
      <BotanicalDeco
        className="absolute right-0 top-6 w-[78px] opacity-80 sm:right-2 sm:top-14 sm:w-[108px] lg:right-6 lg:top-20 lg:w-[168px]"
        label="Leaf 04"
        duration={11.2}
        delay={1.35}
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <motion.p
            {...reveal("left", 0.03)}
            className="font-subheading text-xs font-semibold uppercase tracking-[0.15em] text-[var(--olive-dark)]"
          >
            WITH SOERAI
          </motion.p>
          <motion.h2
            {...reveal("right", 0.08)}
            className="mt-2 font-hero text-4xl italic text-[var(--burgundy)] sm:text-5xl"
          >
            {content.program.sectionTitle}
          </motion.h2>
          <motion.p
            {...reveal("left", 0.14)}
            className="mx-auto mt-4 max-w-3xl text-[15px] text-[var(--burgundy)]/88 sm:text-lg"
          >
            {content.program.intro}
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.program.cards.map((program, index) => {
            return (
              <motion.div
                key={program.id}
                {...reveal(index % 2 === 0 ? "left" : "right", 0.18 + index * 0.06)}
                className="h-full"
              >
                <ProgramCard
                  programId={program.id}
                  title={program.title}
                  subtitle={program.subtitle}
                  description={program.description}
                  outputs={program.outputs}
                  outcomes={program.outcomes}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
