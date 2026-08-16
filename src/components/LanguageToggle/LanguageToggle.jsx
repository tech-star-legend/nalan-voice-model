import { Languages } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage, LANGUAGES } from "../../i18n/useLanguage";

// =====================================================
// LANGUAGE TOGGLE
//
// Shows the CURRENT language as a short glyph (E / த).
// Clicking switches to the other language and reloads the
// site from the homepage top — works from anywhere,
// including deep in the dashboard, without replaying the
// intro/voiceover.
// =====================================================

function LanguageToggle({ variant = "pill" }) {
  const { language, switchLanguageAndReload } = useLanguage();
  const other = language === "en" ? LANGUAGES.ta : LANGUAGES.en;
  const current = LANGUAGES[language];

  const handleClick = () => switchLanguageAndReload(other.code);

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Switch language to ${other.label}`}
        className="
          flex items-center gap-1.5 rounded-full border border-green-200
          bg-green-50 px-3 py-2 text-xs font-semibold text-green-700
          transition-colors hover:bg-green-100
        "
      >
        <Languages size={14} aria-hidden="true" />
        <span>{current.short}</span>
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.94 }}
      onClick={handleClick}
      aria-label={`Switch language to ${other.label}`}
      title={`${current.label} → ${other.label}`}
      className="
        flex h-9 w-9 shrink-0 items-center justify-center gap-1 rounded-full
        border border-green-200 bg-green-50 text-green-700
        shadow-sm transition-colors hover:bg-green-100
        sm:h-10 sm:w-auto sm:gap-1.5 sm:px-3
      "
    >
      <Languages size={15} aria-hidden="true" />
      <span className="hidden text-sm font-bold sm:inline">
        {current.short}
      </span>
    </motion.button>
  );
}

export default LanguageToggle;
