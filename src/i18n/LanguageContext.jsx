import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./languageContextObject";
import {
  getStoredLanguage,
  markIntroSeen,
  persistLanguage,
} from "./useLanguage";

// =====================================================
// LANGUAGE CONTEXT
//
// Single source of truth for the site's active language.
// - Persists the choice in localStorage so returning
//   visitors skip the intro language picker.
// - "home" reload requirement: switching language from
//   the language button anywhere on the site (e.g. after
//   scrolling deep into the dashboard/sections) does a
//   full reload back to "/" so every section re-renders
//   top-to-bottom in the new language, instead of trying
//   to patch already-mounted animations in place.
//
// Hooks and helpers (useLanguage, useTranslations, LANGUAGES,
// hasSeenIntro, markIntroSeen) live in ./useLanguage.js so
// this file only exports the Provider component, keeping
// Fast Refresh happy.
// =====================================================

// Provider component only — see ./languageContextObject.js for
// the raw context, and ./useLanguage.js for hooks/helpers.
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(
    () => getStoredLanguage() || "ta"
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Sets the language WITHOUT reloading — used only by the
  // intro flow, since the whole app hasn't mounted yet.
  const setLanguage = useCallback((lang) => {
    if (lang !== "en" && lang !== "ta") return;
    persistLanguage(lang);
    setLanguageState(lang);
  }, []);

  // Switches language from anywhere in the dashboard and
  // reloads from the homepage top, per spec — no need to
  // replay the intro/voiceover again.
  const switchLanguageAndReload = useCallback((lang) => {
    if (lang !== "en" && lang !== "ta") return;
    persistLanguage(lang);
    markIntroSeen();
    window.location.href = "/";
  }, []);

  const value = useMemo(
    () => ({
      language,
      isEnglish: language === "en",
      isTamil: language === "ta",
      setLanguage,
      switchLanguageAndReload,
    }),
    [language, setLanguage, switchLanguageAndReload]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
