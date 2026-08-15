import { motion, useScroll, useTransform } from "framer-motion";
import useIsMobile from "../useIsMobile";
import heroImage from "../../assets/images/IMG-20260803-WA0010.jpg";

function Hero() {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 600], [0, 120]);
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const contentY = useTransform(scrollY, [0, 500], [0, -80]);
  const contentOpacity = useTransform(
    scrollY,
    [0, 350],
    [1, 0]
  );

  const scrollToContact = () => {
    const element = document.getElementById("contact");

    if (element) {
      const navbarOffset = 80;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        flex
        items-center
        justify-center
        bg-green-950
      "
    >
      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
        "
      >
        <img
          src={heroImage}
          alt="Nalan Catering food and catering service"
          className="
            w-full
            h-full
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* =====================================================
          DARK GREEN OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-green-950/70
          via-green-950/45
          to-green-950/85
          z-[1]
        "
      />

      {/* =====================================================
          GREEN GLOW
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          z-[2]
          bg-green-500/10
          pointer-events-none
        "
      />

      {/* =====================================================
          DECORATIVE GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-32
          -left-32
          w-[400px]
          h-[400px]
          rounded-full
          bg-green-400
          blur-[65px] sm:blur-[120px]
          z-[2]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 9,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-emerald-400
          blur-[70px] sm:blur-[130px]
          z-[2]
          pointer-events-none
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          pt-24
          pb-20
          text-center
        "
      >
        <motion.div>
          
        </motion.div>

        {/* Main heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            text-white
            drop-shadow-2xl
          "
        >
          உங்கள் விழா
          <br />

          <span
            className="
              text-green-300
              drop-shadow-[0_0_20px_rgba(134,239,172,0.25)]
            "
          >
            எங்கள் பொறுப்பு
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            mt-5
            max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            md:text-lg
            leading-7
            text-green-50/85
          "
        >
          உங்கள் திருமணம், பிறந்தநாள் மற்றும் அனைத்து
          சிறப்பு நிகழ்வுகளுக்கும் சுவையான உணவும்,
          சிறந்த சேவையும் வழங்குகிறோம்.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            sm:gap-4
          "
        >
          <motion.button
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={scrollToContact}
            className="
              w-full
              sm:w-auto
              px-7
              py-3.5
              rounded-full
              bg-green-600
              hover:bg-green-500
              text-white
              font-semibold
              shadow-[0_10px_35px_rgba(22,163,74,0.35)]
              transition-colors
              duration-200
            "
          >
            📞 பதிவு செய்யுங்கள்
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => {
              const element = document.getElementById("menu");

              if (element) {
                const navbarOffset = 80;

                const elementPosition =
                  element.getBoundingClientRect().top +
                  window.scrollY;

                window.scrollTo({
                  top: elementPosition - navbarOffset,
                  behavior: "smooth",
                });
              }
            }}
            className="
              w-full
              sm:w-auto
              px-7
              py-3.5
              rounded-full
              bg-white/10
              hover:bg-white/20
              backdrop-blur-sm md:backdrop-blur-md
              border
              border-white/30
              text-white
              font-semibold
              transition-all
              duration-200
            "
          >
            உணவு பட்டியல்
          </motion.button>
        </motion.div>
      </motion.div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-green-950
          to-transparent
          z-[3]
          pointer-events-none
        "
      />

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-10
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-green-100/60
          text-xs
        "
      >
        <span>Scroll to explore</span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-5
            h-8
            rounded-full
            border
            border-green-200/40
            flex
            justify-center
            pt-1
          "
        >
          <span
            className="
              w-1
              h-1
              rounded-full
              bg-green-300
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;