'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Locale } from './translations'

type LanguageContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: typeof translations['en']
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: translations['en'],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
