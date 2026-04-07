"use client";

import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function useStableReducedMotion() {
  const prefersReducedMotion = useReducedMotion();
  const isHydrated = useSyncExternalStore(subscribe, () => true, () => false);

  // Keep SSR and first client render identical to avoid hydration mismatch.
  return isHydrated ? prefersReducedMotion : false;
}