"use client";

import { motion } from "framer-motion";
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

function RoleCard({
  role,
  name,
  theme,
  underline = false,
}: {
  role: string;
  name: string;
  theme: "pink" | "burgundy";
  underline?: boolean;
}) {
  const cardClassName =
    theme === "pink"
      ? "bg-[var(--pink-primary)] text-[var(--cream)] shadow-[0_18px_34px_rgba(112,23,50,0.22)]"
      : "bg-[var(--burgundy)] text-[var(--cream)] shadow-[0_14px_26px_rgba(112,23,50,0.18)]";

  return (
    <article className={`interactive-card interactive-card-hover rounded-2xl border border-[var(--cream)]/70 px-5 py-5 text-center ${cardClassName}`}>
      <p className="font-subheading text-xs font-semibold uppercase tracking-[0.14em] text-[var(--cream)]/92">
        {role}
      </p>
      <p className="mt-1 font-accent text-2xl italic">{name}</p>
      {underline ? (
        <span className="mx-auto mt-3 block h-px w-16 bg-[var(--pink-light)]/80" />
      ) : null}
    </article>
  );
}

function DivisionCard({
  name,
  leader,
  members,
}: {
  name: string;
  leader: string;
  members: string[];
}) {
  return (
    <article className="interactive-card interactive-card-hover rounded-2xl border border-[rgba(87,97,0,0.28)] bg-[var(--cream)] px-4 py-4 shadow-[0_12px_22px_rgba(112,23,50,0.08)]">
      <div className="text-center">
        <p className="font-subheading text-sm font-semibold uppercase tracking-[0.12em] text-[var(--olive-dark)]">
          {name}
        </p>
        <p className="mt-2 font-semibold text-[var(--burgundy)]">{leader}</p>
        <span className="mx-auto mt-3 block h-px w-14 bg-[var(--pink-primary)]/65" />
      </div>

      <table className="mt-3 w-full border-collapse text-left text-sm text-[var(--burgundy)]/90">
        <tbody>
          {members.map((member, index) => (
            <tr
              key={`${name}-${member}`}
              className={
                index === 0 ? undefined : "border-t border-[rgba(112,23,50,0.12)]"
              }
            >
              <td className="px-2 py-2">{member}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default function OrgStructureSection() {
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
    <section id="struktur-organisasi" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <motion.h2 {...reveal("left", 0.02)} className="font-hero text-4xl italic text-[var(--burgundy)] sm:text-5xl">
            {content.org.sectionTitle}
          </motion.h2>
          <motion.p
            {...reveal("right", 0.08)}
            className="mx-auto mt-4 max-w-3xl text-[15px] text-[var(--burgundy)]/86 sm:text-lg"
          >
            {content.org.intro}
          </motion.p>
        </div>

        <div className="mt-8">
          <motion.div {...reveal("left", 0.1)} className="mx-auto max-w-[420px]">
            <RoleCard
              role={content.org.president.role}
              name={content.org.president.name}
              theme="pink"
            />
          </motion.div>

          <div className="mx-auto my-2 h-6 w-px bg-[var(--pink-primary)]/55" />

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-7 md:block">
              <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
              <span className="absolute left-1/4 right-1/4 top-3 h-px bg-[var(--pink-primary)]/55" />
              <span className="absolute left-1/4 top-3 h-4 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
              <span className="absolute left-3/4 top-3 h-4 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
            </div>

            <div className="grid gap-4 pt-2 md:grid-cols-2 md:pt-7">
              <motion.div {...reveal("left", 0.14)}>
                <RoleCard
                  role={content.org.secretary.role}
                  name={content.org.secretary.name}
                  theme="burgundy"
                  underline
                />
              </motion.div>
              <motion.div {...reveal("right", 0.18)}>
                <RoleCard
                  role={content.org.treasurer.role}
                  name={content.org.treasurer.name}
                  theme="burgundy"
                  underline
                />
              </motion.div>
            </div>
          </div>

          <div className="mx-auto my-2 h-6 w-px bg-[var(--pink-primary)]/55" />

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-8 md:block xl:hidden">
              <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
              <span className="absolute left-1/4 right-1/4 top-3 h-px bg-[var(--pink-primary)]/55" />
              <span className="absolute left-1/4 top-3 h-5 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
              <span className="absolute left-3/4 top-3 h-5 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-8 xl:block">
              <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
              <span className="absolute left-[12.5%] right-[12.5%] top-3 h-px bg-[var(--pink-primary)]/55" />
              <span className="absolute left-[12.5%] top-3 h-5 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
              <span className="absolute left-[37.5%] top-3 h-5 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
              <span className="absolute left-[62.5%] top-3 h-5 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
              <span className="absolute left-[87.5%] top-3 h-5 w-px -translate-x-1/2 bg-[var(--pink-primary)]/55" />
            </div>

            <div className="grid gap-4 pt-2 md:grid-cols-2 md:pt-8 xl:grid-cols-4">
              {content.org.divisions.map((division, index) => (
                <motion.div
                  key={division.name}
                  {...reveal(index % 2 === 0 ? "left" : "right", 0.2 + index * 0.04)}
                >
                  <DivisionCard
                    name={division.name}
                    leader={division.leader}
                    members={division.members}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
