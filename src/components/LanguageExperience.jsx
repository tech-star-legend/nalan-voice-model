import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Volume2, ChefHat, Flame } from "lucide-react";
import nalanLogo from "../assets/images/nalan-logo.jpg";
import { INTRO_KEY, LANGUAGE_KEY, translateDom } from "../i18n/language";

const voicePhrases = {
  ta: "நளன் கேட்டரிங் உங்களை அன்புடன் வரவேற்கிறது. உணவில் தரம் என்றும் நிரந்தரம்.",
  en: "Nalan Catering warmly welcomes you. Quality in Every Bite, Forever Right.",
};

function getStoredLanguage() {
  if (/^\/en\/?$/.test(window.location.pathname)) return "en";
  if (/^\/ta\/?$/.test(window.location.pathname)) return "ta";
  return localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "ta";
}

function pickVoice(language) {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  const matching = voices.filter((voice) => new RegExp(`^${language}`, "i").test(voice.lang));
  if (!matching.length) return null;
  const femaleHints = /female|woman|samantha|zira|susan|karen|google.*female/i;
  const maleHints = /male|man|daniel|david|alex|ravi|google.*male/i;
  const pool = Math.random() < 0.5 ? matching.filter((voice) => femaleHints.test(voice.name)) : matching.filter((voice) => maleHints.test(voice.name));
  const choices = pool.length ? pool : matching;
  return choices[Math.floor(Math.random() * choices.length)];
}

function speak(language) {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) { resolve(); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(voicePhrases[language]);
    utterance.lang = language === "ta" ? "ta-IN" : "en-IN";
    utterance.rate = 0.9;
    const voice = pickVoice(language);
    if (voice) utterance.voice = voice;
    utterance.onend = resolve;
    utterance.onerror = resolve;
    window.speechSynthesis.speak(utterance);
  });
}

function LanguageExperience() {
  const [language, setLanguage] = useState(getStoredLanguage);
  const [showIntro, setShowIntro] = useState(() => !localStorage.getItem(INTRO_KEY));
  const [phase, setPhase] = useState("logo");
  const [chooser, setChooser] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    translateDom(language);
    const observer = new MutationObserver(() => translateDom(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => { setPhase("language"); setChooser(true); }, 2000);
    return () => clearTimeout(timer);
  }, [showIntro]);

  const selectLanguage = async (nextLanguage) => {
    if (startedRef.current) return;
    startedRef.current = true;
    localStorage.setItem(LANGUAGE_KEY, nextLanguage);
    setLanguage(nextLanguage);
    setChooser(false);
    setPhase("voice");
    setSpeaking(true);
    await Promise.all([speak(nextLanguage), new Promise((resolve) => setTimeout(resolve, 5200))]);
    setSpeaking(false);
    localStorage.setItem(INTRO_KEY, "1");
    setShowIntro(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const changeLanguage = (nextLanguage) => {
    localStorage.setItem(LANGUAGE_KEY, nextLanguage);
    window.location.assign(nextLanguage === "en" ? "/en/" : "/ta/");
  };

  return (
    <>
      {!showIntro && (
        <div className="fixed right-3 top-3 z-[100] md:right-5 md:top-5">
          <div className="flex items-center gap-1 rounded-full border border-green-200 bg-white/95 p-1 shadow-lg backdrop-blur-xl">
            <Languages size={16} className="ml-2 text-green-700" />
            <button type="button" onClick={() => changeLanguage(language === "en" ? "ta" : "en")} aria-label="Change language" className="min-w-9 rounded-full px-2.5 py-1.5 text-sm font-bold text-green-800 transition hover:bg-green-50">{language === "en" ? "E" : "த"}</button>
          </div>
        </div>
      )}
      <AnimatePresence>
        {showIntro && (
          <motion.div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#06150d] px-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,.18),transparent_55%)]" />
            <motion.div className="relative flex w-full max-w-md flex-col items-center text-center" initial={{ scale: 0.78, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }}>
              <motion.div animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative">
                <div className="absolute -inset-7 rounded-full bg-green-400/15 blur-2xl" />
                <img src={nalanLogo} alt="Nalan Catering" className="relative h-32 w-32 rounded-full border-4 border-green-200/40 object-contain shadow-2xl sm:h-40 sm:w-40" />
                <motion.div animate={{ y: [12, -45], opacity: [0, .6, 0], scale: [.7, 1.25] }} transition={{ duration: 2.2, repeat: Infinity }} className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="block h-8 w-4 rounded-full bg-white/20 blur-md" /></motion.div>
                <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute -bottom-4 -right-5 rounded-full bg-green-700 p-3 text-green-50 shadow-lg"><ChefHat size={24} /></motion.div>
                <motion.div animate={{ opacity: [.35, 1, .35] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute -bottom-3 -left-4 rounded-full bg-orange-500 p-2 text-white shadow-lg"><Flame size={18} /></motion.div>
              </motion.div>
              {phase === "logo" && <motion.p className="mt-8 text-sm font-medium tracking-[3px] text-green-100/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>QUALITY • TRADITION • TASTE</motion.p>}
              {chooser && <motion.div className="mt-8 w-full" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}><p className="mb-4 text-lg font-semibold text-white">Choose your language</p><div className="grid grid-cols-2 gap-3"><button type="button" onClick={() => selectLanguage("en")} className="rounded-2xl border border-green-300/30 bg-white/10 px-5 py-4 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/20"><span className="block text-xl font-bold">English</span><span className="mt-1 block text-xs text-green-100/60">Male / Female voice</span></button><button type="button" onClick={() => selectLanguage("ta")} className="rounded-2xl border border-green-300/30 bg-white/10 px-5 py-4 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/20"><span className="block text-xl font-bold">தமிழ்</span><span className="mt-1 block text-xs text-green-100/60">ஆண் / பெண் குரல்</span></button></div></motion.div>}
              {phase === "voice" && <motion.div className="mt-8 flex items-center gap-3 rounded-full border border-green-300/20 bg-white/10 px-5 py-3 text-green-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Volume2 size={18} className={speaking ? "animate-pulse" : ""} /><span>{language === "ta" ? "வரவேற்பு..." : "Welcome..."}</span></motion.div>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default LanguageExperience;
