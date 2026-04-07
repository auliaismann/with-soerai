"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { content, LanguageCode, SiteContent } from "@/lib/content";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: Dispatch<SetStateAction<LanguageCode>>;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("id");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => {
        setLanguage((prev) => (prev === "id" ? "en" : "id"));
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

export function useContent(): SiteContent {
  const { language } = useLanguage();
  return useMemo(() => content[language], [language]);
}
