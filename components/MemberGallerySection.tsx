"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useContent, useLanguage } from "@/context/LanguageContext";
import { members, MemberType } from "@/lib/members";
import { useStableReducedMotion } from "@/lib/useStableReducedMotion";

type Filter = "all" | MemberType;
const EASING = [0.22, 1, 0.36, 1] as const;

export default function MemberGallerySection() {
  const content = useContent();
  const { language } = useLanguage();
  const reduceMotion = useStableReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

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
    hidden: reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : {
            type: "spring" as const,
            duration: 0.5,
            bounce: 0.28,
            delay: index * 0.04,
          },
    }),
  };

  const filteredMembers = useMemo(() => {
    if (filter === "all") {
      return members;
    }

    return members.filter((person) => person.type === filter);
  }, [filter]);

  const renderCard = (person: (typeof members)[number], index: number, compact: boolean) => {
    const roleText = language === "id" ? person.roleId : person.roleEn;
    const photoSrc = encodeURI(person.imagePlaceholder);
    const typeLabel =
      person.type === "mentor"
        ? content.gallery.roleLabel.mentor
        : content.gallery.roleLabel.member;

    return (
      <motion.article
        key={person.id}
        variants={itemVariants}
        custom={index}
        className={`interactive-card interactive-card-hover rounded-2xl border border-[rgba(112,23,50,0.14)] bg-white shadow-[0_10px_24px_rgba(112,23,50,0.08)] ${
          compact ? "p-3" : "w-[78vw] max-w-[280px] shrink-0 snap-start p-4"
        }`}
      >
        <div className="relative aspect-square overflow-hidden rounded-xl border border-[rgba(112,23,50,0.14)] bg-white">
          <Image
            src={photoSrc}
            alt={`Foto ${person.name}`}
            fill
            sizes={compact ? "(min-width: 1280px) 14vw, (min-width: 1024px) 18vw, (min-width: 768px) 24vw" : "78vw"}
            className="object-cover object-center"
          />
        </div>

        <div className={compact ? "mt-2" : "mt-3"}>
          <h3 className={compact ? "text-sm font-semibold text-[var(--burgundy)]" : "text-base font-semibold text-[var(--burgundy)]"}>
            {person.name}
          </h3>
          <p className={compact ? "text-xs text-[var(--burgundy)]/78" : "text-sm text-[var(--burgundy)]/78"}>
            {roleText}
          </p>
        </div>

        <span
          className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            person.type === "mentor"
              ? "bg-[var(--pink-primary)]/14 text-[var(--pink-primary)]"
              : "bg-[var(--olive-light)]/25 text-[var(--olive-dark)]"
          }`}
        >
          {typeLabel}
        </span>
      </motion.article>
    );
  };

  return (
    <section id="galeri" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASING }}
          className="text-center"
        >
          <h2 className="font-hero text-4xl italic text-[var(--burgundy)] sm:text-5xl">
            {content.gallery.sectionTitle}
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "all"
                ? "bg-[var(--pink-primary)] text-white shadow-[0_10px_22px_rgba(191,27,89,0.3)]"
                : "ghost-btn border-[var(--olive-dark)]/45"
            }`}
          >
            {content.gallery.filters.all}
          </button>
          <button
            type="button"
            onClick={() => setFilter("member")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "member"
                ? "bg-[var(--pink-primary)] text-white shadow-[0_10px_22px_rgba(191,27,89,0.3)]"
                : "ghost-btn border-[var(--olive-dark)]/45"
            }`}
          >
            {content.gallery.filters.member}
          </button>
          <button
            type="button"
            onClick={() => setFilter("mentor")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "mentor"
                ? "bg-[var(--pink-primary)] text-white shadow-[0_10px_22px_rgba(191,27,89,0.3)]"
                : "ghost-btn border-[var(--olive-dark)]/45"
            }`}
          >
            {content.gallery.filters.mentor}
          </button>
        </div>

        <div className="mt-10 md:hidden">
          <motion.div
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4"
          >
            {filteredMembers.map((person, index) => renderCard(person, index, false))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 hidden grid-cols-3 gap-3 md:grid lg:grid-cols-4 xl:grid-cols-6"
        >
          {filteredMembers.map((person, index) => renderCard(person, index, true))}
        </motion.div>
      </div>
    </section>
  );
}
