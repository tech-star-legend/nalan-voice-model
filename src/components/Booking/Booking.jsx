import { motion } from "framer-motion";
import useIsMobile from "../useIsMobile";
import {
  Phone,
  CalendarDays,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "../../i18n/useLanguage";

const content = {
  ta: {
    badge: "உங்கள் சிறப்பு நாள்",
    headingA: "உங்கள் விழாவை",
    headingB: "சிறப்பாக திட்டமிடுவோம்",
    description:
      "உங்கள் நிகழ்விற்கான சிறந்த உணவு மற்றும் கேட்டரிங் சேவையைப் பெற இன்றே எங்களை தொடர்பு கொள்ளுங்கள்.",
    book: "பதிவு செய்யுங்கள்",
    call: "தொலைபேசி",
  },
  en: {
    badge: "Your Special Day",
    headingA: "Let's Plan Your",
    headingB: "Celebration Perfectly",
    description:
      "Get in touch with us today for the best food and catering service for your event.",
    book: "Book Now",
    call: "Call Us",
  },
};

function Booking() {
  const isMobile = useIsMobile();
  const t = useTranslations(content);
  const scrollToContact = () => {
    const element = document.getElementById("contact");

    if (!element) return;

    const navbarHeight = window.innerWidth < 768 ? 72 : 105;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, elementPosition - navbarHeight),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="booking"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        md:py-28
      "
    >
      {/* =====================================================
          LARGE ANIMATED GREEN GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [-180, 180, -180],
          y: [0, -40, 0],
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[350px]
          md:w-[900px]
          md:h-[500px]
          rounded-full
          bg-green-400
          blur-[65px] sm:blur-[120px] md:blur-[150px]
          pointer-events-none
        "
      />

      {/* =====================================================
          LEFT FLOATING GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-10
          w-[400px]
          h-[400px]
          rounded-full
          bg-emerald-300
          blur-[60px] sm:blur-[110px]
          pointer-events-none
        "
      />

      {/* =====================================================
          RIGHT FLOATING GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.07, 0.17, 0.07],
        }}
        transition={{
          duration: 7,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          absolute
          -right-40
          bottom-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-green-300
          blur-[65px] sm:blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          FLOATING DOT - LEFT
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
          scale: [1, 1.5, 1],
          opacity: [0.25, 0.8, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[25%]
          left-[8%]
          w-3
          h-3
          rounded-full
          bg-green-400
          hidden
          md:block
        "
      />

      {/* =====================================================
          FLOATING DOT - RIGHT
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.75, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="
          absolute
          bottom-[25%]
          right-[8%]
          w-3
          h-3
          rounded-full
          bg-green-400
          hidden
          md:block
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-4
          sm:px-6
          text-center
        "
      >

        {/* =====================================================
            SMALL BADGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-green-50
            border
            border-green-200
            text-green-700
            text-xs
            md:text-sm
            font-medium
            shadow-sm
          "
        >
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.8,
              repeat: isMobile ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="
              w-2
              h-2
              rounded-full
              bg-green-500
            "
          />

          <span>
            {t.badge}
          </span>

          <Sparkles
            size={14}
            className="text-green-500"
          />
        </motion.div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          className="
            mt-6
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-green-950
          "
        >
          {t.headingA}{" "}

          <motion.span
            animate={{
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 2.5,
              repeat: isMobile ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="
              inline-block
              text-green-600
            "
          >
            {t.headingB}
          </motion.span>
        </motion.h2>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-5
            md:mt-6
            max-w-2xl
            mx-auto
            text-gray-600
            text-sm
            sm:text-base
            md:text-lg
            leading-7
            md:leading-8
          "
        >
          {t.description}
        </motion.p>

        {/* =====================================================
            BUTTONS
        ====================================================== */}

        <div
          className="
            mt-8
            md:mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            sm:gap-4
          "
        >

          {/* =================================================
              BOOK BUTTON
          ================================================== */}

          <motion.button
            type="button"
            onClick={scrollToContact}
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group
              relative
              overflow-hidden
              w-full
              sm:w-auto
              flex
              items-center
              justify-center
              gap-2
              px-7
              py-3.5
              md:px-8
              md:py-4
              rounded-full
              bg-green-600
              hover:bg-green-500
              text-white
              font-semibold
              text-sm
              md:text-base
              shadow-[0_12px_35px_rgba(22,163,74,0.30)]
              transition-colors
            "
          >
            {/* Moving shine */}

            <motion.span
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 2.5,
                repeat: isMobile ? 0 : Infinity,
                ease: "linear",
                repeatDelay: 1.5,
              }}
              className="
                absolute
                top-0
                bottom-0
                left-0
                w-12
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
                skew-x-[-20deg]
                pointer-events-none
              "
            />

            <CalendarDays
              size={18}
              className="relative z-10"
            />

            <span className="relative z-10">
                {t.book}
            </span>

            <ArrowRight
              size={17}
              className="
                relative
                z-10
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </motion.button>

          {/* =================================================
              CALL BUTTON
          ================================================== */}

          <motion.a
            href="tel:+918925059589"
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group
              w-full
              sm:w-auto
              flex
              items-center
              justify-center
              gap-2
              px-7
              py-3.5
              md:px-8
              md:py-4
              rounded-full
              bg-white
              border-2
              border-green-200
              text-green-700
              hover:bg-green-50
              hover:border-green-300
              font-semibold
              text-sm
              md:text-base
              shadow-[0_10px_30px_rgba(22,101,52,0.10)]
              transition-colors
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2,
                repeat: isMobile ? 0 : Infinity,
                ease: "easeInOut",
              }}
            >
              <Phone size={18} />
            </motion.span>

            <span>
               {t.call}
            </span>
          </motion.a>
        </div>

        {/* =====================================================
            ANIMATED BOTTOM LINE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 1.1,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-12
            md:mt-16
            mx-auto
            max-w-2xl
            origin-center
          "
        >
          <div
            className="
              h-[2px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-green-300
              to-transparent
            "
          />

          {/* Moving highlight stays INSIDE the line */}

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: isMobile ? 0 : Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-0
              left-0
              w-1/3
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              pointer-events-none
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Booking;