import { useContext } from "react";
import { LanguageContext } from "./languageContextObject";

export const LANGUAGES = {
  en: { code: "en", label: "English", short: "E" },
  ta: { code: "ta", label: "தமிழ்", short: "த" },
};

const LANGUAGE_KEY = "nalan_lang";
const INTRO_SEEN_KEY = "nalan_intro_seen";

export function hasSeenIntro() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(INTRO_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

export function markIntroSeen() {
  try {
    window.localStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    /* ignore (private browsing / storage disabled) */
  }
}

export function getStoredLanguage() {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(LANGUAGE_KEY);
    return stored === "en" || stored === "ta" ? stored : null;
  } catch {
    return null;
  }
}

export function persistLanguage(lang) {
  try {
    window.localStorage.setItem(LANGUAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return ctx;
}

// Small helper so components can do:
//   const t = useTranslations(content);
//   t.heading
export function useTranslations(dictionary) {
  const { language } = useLanguage();
  return dictionary[language] || dictionary.ta;
}
