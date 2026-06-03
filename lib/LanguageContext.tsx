"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Locale, translations } from "./translations";

type Translation = typeof translations["en"];

interface LangContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translation;
}

const LangContext = createContext<LangContextType>({
  locale: "en",
  setLocale: () => {},
  t: translations["en"],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = translations[locale] as Translation;
  return (
    <LangContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
