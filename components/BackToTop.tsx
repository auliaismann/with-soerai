"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

export default function BackToTop() {
  const { scrollY } = useScroll();
  const [showButton, setShowButton] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowButton(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButton ? (
        <motion.button
          key="back-to-top"
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-8 right-8 z-[52] grid h-12 w-12 place-items-center rounded-full bg-[#bf1b59] text-white shadow-[0_12px_28px_rgba(191,27,89,0.55),0_0_0_3px_rgba(255,255,255,0.35)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bf1b59] focus-visible:ring-offset-2"
        >
          <ChevronUp size={22} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
