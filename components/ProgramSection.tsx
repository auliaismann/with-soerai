"use client";

import { motion } from "framer-motion";
import BotanicalDeco from "@/components/BotanicalDeco";
import ProgramCard from "@/components/ProgramCard";
import { useContent } from "@/context/LanguageContext";
import { useStableReducedMotion } from "@/lib/useStableReducedMotion";

const EASING = [0.22, 1, 0.36, 1] as const;

export default function ProgramSection() {
  const content = useContent();
  const reduceMotion = useStableReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: EASING,
        staggerChildren: reduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: reduceMotion ? 0 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: EASING,
      },
    },
  };

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
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASING }}
          className="text-center"
        >
          <p className="font-subheading text-xs font-semibold uppercase tracking-[0.15em] text-[var(--olive-dark)]">
            WITH SOERAI
          </p>
          <h2 className="mt-2 font-hero text-4xl italic text-[var(--burgundy)] sm:text-5xl">
            {content.program.sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] text-[var(--burgundy)]/88 sm:text-lg">
            {content.program.intro}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {content.program.cards.map((program) => {
            return (
              <motion.div
                key={program.id}
                variants={itemVariants}
                className="h-full"
              >
                <ProgramCard
                  title={program.title}
                  subtitle={program.subtitle}
                  description={program.description}
                  outputs={program.outputs}
                  outcomes={program.outcomes}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
