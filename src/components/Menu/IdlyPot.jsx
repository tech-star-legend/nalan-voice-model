import { motion } from "framer-motion";

// =====================================================
// IDLY POT
//
// A traditional South Indian aluminium idli-steaming pot,
// rendered in SVG (no external image needed) so it scales
// crisply on every screen. The lid lifts open/closes shut
// based on `potState`, steam puffs rise from the mouth
// while it's open, and the active category's name pops
// out of the pot like it's just been served.
//
// potState: "closed" | "opening" | "open" | "closing"
// =====================================================

function IdlyPot({ potState, label, emoji, hint }) {
  const isOpen = potState === "open" || potState === "opening";

  const lidVariants = {
    closed: { rotate: 0, x: 0, y: 0 },
    open: { rotate: -22, x: -34, y: -14 },
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[280px] flex-col items-center select-none">
      {/* ============= LABEL POPPING OUT OF THE POT ============= */}
      <div className="relative z-20 flex h-14 items-end justify-center">
        <motion.div
          initial={false}
          animate={
            isOpen
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 26, scale: 0.7 }
          }
          transition={{
            duration: 0.4,
            delay: potState === "opening" ? 0.32 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex items-center gap-2 rounded-full border border-green-200
            bg-white px-4 py-2 text-sm font-bold text-[#166534]
            shadow-[0_8px_20px_rgba(22,101,52,0.25)]
          "
        >
          <span aria-hidden="true">{emoji}</span>
          <span className="whitespace-nowrap">{label}</span>
        </motion.div>
      </div>

      {/* ============= STEAM ============= */}
      <div className="pointer-events-none relative z-10 h-6 w-full">
        {isOpen &&
          [0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="pot-steam"
              style={{
                left: `${38 + i * 8}%`,
                bottom: 0,
                width: `${10 + (i % 2) * 5}px`,
                height: `${10 + (i % 2) * 5}px`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
      </div>

      {/* ============= POT SVG ============= */}
      <svg
        viewBox="0 0 240 190"
        className="relative z-0 w-full max-w-[230px] drop-shadow-[0_18px_25px_rgba(0,0,0,0.22)]"
        role="img"
        aria-label={hint}
      >
        <defs>
          <linearGradient id="potBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b95a1" />
            <stop offset="18%" stopColor="#dfe4e9" />
            <stop offset="38%" stopColor="#aeb7c1" />
            <stop offset="55%" stopColor="#eef1f4" />
            <stop offset="75%" stopColor="#9aa3ad" />
            <stop offset="100%" stopColor="#6b7480" />
          </linearGradient>
          <linearGradient id="potLid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f2f4f6" />
            <stop offset="45%" stopColor="#c3cad1" />
            <stop offset="100%" stopColor="#838d99" />
          </linearGradient>
          <radialGradient id="potShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.35)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {/* ground shadow */}
        <ellipse cx="120" cy="178" rx="70" ry="9" fill="url(#potShadow)" />

        {/* pot body */}
        <path
          d="M55 90
             C 55 145, 70 172, 120 172
             C 170 172, 185 145, 185 90
             L 178 88
             C 178 138, 162 160, 120 160
             C 78 160, 62 138, 62 88
             Z"
          fill="url(#potBody)"
          stroke="#5c6570"
          strokeWidth="1.5"
        />

        {/* body ridge lines (steamer plates) */}
        <path d="M60 108 L180 108" stroke="#6b7480" strokeWidth="1" opacity="0.55" />
        <path d="M61 128 L179 128" stroke="#6b7480" strokeWidth="1" opacity="0.55" />
        <path d="M64 146 L176 146" stroke="#6b7480" strokeWidth="1" opacity="0.55" />

        {/* left handle */}
        <path
          d="M55 96 C 40 96, 40 118, 55 118"
          fill="none"
          stroke="#5c6570"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* right handle */}
        <path
          d="M185 96 C 200 96, 200 118, 185 118"
          fill="none"
          stroke="#5c6570"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* pot rim */}
        <ellipse cx="120" cy="90" rx="65" ry="14" fill="#eef1f4" stroke="#5c6570" strokeWidth="1.5" />
        <ellipse cx="120" cy="90" rx="52" ry="9" fill="#4b545e" opacity={isOpen ? 0.85 : 0.5} />

        {/* LID — animated group */}
        <motion.g
          initial={false}
          animate={isOpen ? lidVariants.open : lidVariants.closed}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "70px 92px" }}
        >
          <ellipse cx="120" cy="86" rx="66" ry="15" fill="url(#potLid)" stroke="#5c6570" strokeWidth="1.5" />
          <path
            d="M75 80 C 75 58, 165 58, 165 80 L 165 84 C 165 68, 75 68, 75 84 Z"
            fill="url(#potLid)"
            stroke="#5c6570"
            strokeWidth="1.5"
          />
          <ellipse cx="120" cy="68" rx="45" ry="9" fill="#dfe4e9" stroke="#5c6570" strokeWidth="1" />
          {/* knob */}
          <circle cx="120" cy="60" r="7" fill="#4b545e" />
          <circle cx="120" cy="60" r="3" fill="#7c8792" />
        </motion.g>
      </svg>

      {hint && (
        <motion.p
          initial={false}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="mt-1 text-center text-[11px] font-medium text-gray-400"
        >
          {hint}
        </motion.p>
      )}
    </div>
  );
}

export default IdlyPot;
