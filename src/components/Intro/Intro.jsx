import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

import nalanLogo from "../../assets/images/nalan-logo.jpg";

import englishMale from "../../assets/audio/english-male.mp3";
import englishFemale from "../../assets/audio/english-female.mp3";
import tamilMale from "../../assets/audio/tamil-male.mp3";
import tamilFemale from "../../assets/audio/tamil-female.mp3";

import { useLanguage, markIntroSeen } from "../../i18n/useLanguage";

// =====================================================
// INTRO / SPLASH FLOW
//
// STAGE "logo"     -> plain logo pop, ~2s, no audio.
// STAGE "language" -> pick English / Tamil.
// STAGE "voice"    -> logo + cooking themed reveal
//                     animation while the matching
//                     voiceover plays (~5-6s). Falls
//                     through automatically when the
//                     audio ends, or after a safety
//                     timeout if audio can't play.
// =====================================================

const VOICES = {
  en: [englishMale, englishFemale],
  ta: [tamilMale, tamilFemale],
};

const COPY = {
  en: {
    tagline: "Traditional Tamil Catering",
    choose: "Choose your language",
    english: "English",
    tamil: "தமிழ்",
    skip: "Skip intro",
    entering: "Preparing your feast...",
  },
  ta: {
    tagline: "பாரம்பரிய தமிழ் கேட்டரிங்",
    choose: "மொழியை தேர்வு செய்யவும்",
    english: "English",
    tamil: "தமிழ்",
    skip: "தவிர்க்க",
    entering: "விருந்து தயாராகிறது...",
  },
};

function Intro({ onFinish }) {
  const { setLanguage } = useLanguage();
  const [stage, setStage] = useState("logo");
  const [pickedLang, setPickedLang] = useState("ta");
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const safetyTimerRef = useRef(null);

  // Language used just for the intro's own UI text (before
  // the visitor has chosen), defaults to Tamil first.
  const uiLang = stage === "logo" ? "ta" : pickedLang;
  const copy = COPY[uiLang] || COPY.ta;

  // Pick male/female voice once the visitor confirms a
  // language — done inside the click handler (not render)
  // so both uploaded voice actors get used across visits
  // without violating React's render-purity rules.

  // Stage 1: logo alone for ~2 seconds, then move to
  // language selection.
  useEffect(() => {
    if (stage !== "logo") return undefined;
    const timer = setTimeout(() => setStage("language"), 2000);
    return () => clearTimeout(timer);
  }, [stage]);

  const finishIntro = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    markIntroSeen();
    onFinish();
  };

  const choose = (lang) => {
    setPickedLang(lang);
    setLanguage(lang);
    setStage("voice");

    const src = VOICES[lang][Math.random() < 0.5 ? 0 : 1];
    const audio = new Audio(src);
    audio.muted = muted;
    audioRef.current = audio;

    audio.addEventListener("ended", finishIntro);

    audio.play().catch(() => {
      // Autoplay with sound was blocked — the reveal
      // animation keeps running and the safety timer below
      // still moves the visitor into the site.
    });

    // Safety net: never trap a visitor on the splash screen
    // even if audio metadata/loading misbehaves.
    safetyTimerRef.current = setTimeout(finishIntro, 6500);
  };

  useEffect(() => {
    return () => {
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", finishIntro);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMute = () => {
    setMuted((m) => {
      const next = !m;
      if (audioRef.current) audioRef.current.muted = next;
      return next;
    });
  };

  return (
    <div
      className="
        fixed inset-0 z-[10000]
        flex items-center justify-center
        overflow-hidden
        bg-gradient-to-br from-[#07150D] via-[#0B2416] to-[#123A22]
      "
      role="dialog"
      aria-modal="true"
      aria-label="Welcome"
    >
      {/* ================= AMBIENT BACKDROP ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(74,222,128,0.18), transparent 45%), radial-gradient(circle at 80% 75%, rgba(34,197,94,0.15), transparent 45%)",
        }}
      />

      {/* ================= STEAM (cooking themed) ================= */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="intro-steam"
            style={{
              left: `${38 + i * 6}%`,
              animationDelay: `${i * 0.55}s`,
              width: `${16 + (i % 3) * 6}px`,
              height: `${16 + (i % 3) * 6}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">
        <AnimatePresence mode="wait">
          {/* ================= STAGE: LOGO ================= */}
          {stage === "logo" && (
            <motion.div
              key="logo-stage"
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <LogoBadge cooking />
              <p className="mt-5 text-sm font-medium tracking-[3px] text-green-200/80">
                NALAN CATERING
              </p>
            </motion.div>
          )}

          {/* ================= STAGE: LANGUAGE PICK ================= */}
          {stage === "language" && (
            <motion.div
              key="language-stage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center"
            >
              <LogoBadge small />

              <p className="mt-6 text-sm font-semibold tracking-[3px] text-green-200/80">
                {COPY.ta.choose} / {COPY.en.choose}
              </p>

              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => choose("en")}
                  className="
                    flex-1 rounded-2xl border border-green-400/40
                    bg-white/5 px-6 py-4 text-white backdrop-blur-sm
                    transition-colors hover:bg-green-500/20
                  "
                >
                  <span className="block text-lg font-bold">English</span>
                  <span className="mt-1 block text-xs text-green-200/70">
                    Continue in English
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => choose("ta")}
                  className="
                    flex-1 rounded-2xl border border-green-400/40
                    bg-white/5 px-6 py-4 text-white backdrop-blur-sm
                    transition-colors hover:bg-green-500/20
                  "
                >
                  <span className="block text-lg font-bold">தமிழ்</span>
                  <span className="mt-1 block text-xs text-green-200/70">
                    தமிழில் தொடரவும்
                  </span>
                </motion.button>
              </div>

              <button
                type="button"
                onClick={() => choose("ta")}
                className="mt-6 text-xs font-medium text-green-200/50 underline-offset-4 hover:text-green-200 hover:underline"
              >
                {COPY.ta.skip} / {COPY.en.skip}
              </button>
            </motion.div>
          )}

          {/* ================= STAGE: VOICEOVER REVEAL ================= */}
          {stage === "voice" && (
            <motion.div
              key="voice-stage"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <LogoBadge cooking active />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-base font-semibold text-white sm:text-lg"
              >
                {copy.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-2 text-xs text-green-200/70"
              >
                {copy.entering}
              </motion.p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute voiceover" : "Mute voiceover"}
                  className="
                    flex h-9 w-9 items-center justify-center rounded-full
                    border border-white/20 text-white/70
                    transition hover:border-white/40 hover:text-white
                  "
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                <button
                  type="button"
                  onClick={finishIntro}
                  className="text-xs font-medium text-green-200/60 underline-offset-4 hover:text-green-200 hover:underline"
                >
                  {copy.skip}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// =====================================================
// LOGO BADGE
// A round logo frame with a subtle simmering / cooking
// ring animation — ladle-stir glow + rising steam — used
// across all three stages so the reveal feels continuous.
// =====================================================

function LogoBadge({ cooking = false, active = false, small = false }) {
  const size = small ? "h-20 w-20" : "h-28 w-28 sm:h-32 sm:w-32";

  return (
    <div className={`relative ${size}`}>
      {cooking && (
        <motion.span
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{
            duration: active ? 3 : 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute -inset-2 rounded-full
            bg-[conic-gradient(from_0deg,rgba(74,222,128,0.05),rgba(74,222,128,0.55),rgba(74,222,128,0.05))]
            blur-[2px]
          "
        />
      )}

      <motion.div
        animate={
          cooking
            ? { scale: [1, 1.04, 1] }
            : undefined
        }
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute inset-1 overflow-hidden rounded-full
          border-2 border-green-300/70 bg-[#0B2416]
          shadow-[0_0_35px_rgba(74,222,128,0.35)]
        "
      >
        <img
          src={nalanLogo}
          alt="Nalan Catering logo"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Intro;
