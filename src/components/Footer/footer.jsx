import { motion } from "framer-motion";
import useIsMobile from "../useIsMobile";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import nalanLogo from "../../assets/images/nalan-logo.jpg";

function Footer() {
  const isMobile = useIsMobile();
  const BUSINESS_EMAIL = "nalancateringtrichy@gmail.com";

  const MAP_URL =
    "https://maps.app.goo.gl/U5s3qdCxq98LFPFQ9";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

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
  };

  const quickLinks = [
    { name: "முகப்பு", id: "home" },
    { name: "எங்களை பற்றி", id: "about" },
    { name: "சேவைகள்", id: "services" },
    { name: "உணவு பட்டியல்", id: "menu" },
    { name: "புகைப்படங்கள்", id: "gallery" },
    { name: "தொடர்பு", id: "contact" },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#063b1c]
        text-white
      "
    >

      {/* =====================================================
          GREEN BACKGROUND GLOWS
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 45, 0],
          y: [0, -25, 0],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-green-300
          blur-[70px] sm:blur-[130px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 25, 0],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-green-400
          blur-[75px] sm:blur-[140px]
          pointer-events-none
        "
      />

      {/* =====================================================
          DECORATIVE DOTS
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.25, 0.8, 0.25],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[20%]
          left-[8%]
          w-2
          h-2
          rounded-full
          bg-green-300
          hidden
          md:block
        "
      />

      <motion.div
        animate={{
          opacity: [0.25, 0.8, 0.25],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          absolute
          bottom-[20%]
          right-[8%]
          w-2
          h-2
          rounded-full
          bg-green-300
          hidden
          md:block
        "
      />

      {/* =====================================================
          MAIN FOOTER CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          pt-16
          md:pt-20
          pb-10
        "
      >

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
            lg:gap-16
          "
        >

          {/* ================= BRAND ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Logo + Brand Name */}

            <motion.button
              type="button"
              onClick={() => scrollToSection("home")}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                flex
                items-center
                gap-4
                p-0
                bg-transparent
                border-0
                cursor-pointer
                text-left
              "
              aria-label="Go to Nalan Catering home"
            >

              {/* Logo */}

              <img
                src={nalanLogo}
                alt="Nalan Catering Logo"
                className="
                  h-16
                  w-16
                  md:h-20
                  md:w-20
                  object-contain
                  rounded-xl
                  shadow-lg
                  shadow-green-950/40
                  shrink-0
                "
              />

              {/* Brand Name */}

              <div>

                <h2
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-green-50
                    whitespace-nowrap
                  "
                >
                  நளன் கேட்டரிங்
                </h2>

                <p
                  className="
                    mt-2
                    text-green-200
                    text-xs
                    md:text-sm
                    leading-5
                  "
                >
                  உணவில் தரம் என்றும் நிரந்தரம்
                </p>

              </div>

            </motion.button>

            {/* Tagline */}

            <p
              className="
                mt-5
                text-green-100/60
                text-sm
                leading-7
                max-w-sm
              "
            >
              நல்ல சுவை • நல்ல சேவை • நல்ல நினைவுகள்
            </p>

          </motion.div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <h3
              className="
                text-lg
                md:text-xl
                font-bold
                text-green-50
                mb-5
              "
            >
              விரைவு இணைப்புகள்
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (

                <li key={link.id}>

                  <button
                    type="button"
                    onClick={() =>
                      scrollToSection(link.id)
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-green-100/60
                      hover:text-green-200
                      transition-colors
                      text-sm
                      text-left
                    "
                  >

                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-green-400/50
                        group-hover:bg-green-300
                        group-hover:scale-125
                        transition-all
                      "
                    />

                    {link.name}

                  </button>

                </li>

              ))}

            </ul>

          </motion.div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >

            <h3
              className="
                text-lg
                md:text-xl
                font-bold
                text-green-50
                mb-5
              "
            >
              தொடர்புக்கு
            </h3>

            <div className="space-y-4">

              {/* PHONE */}

              <a
                href="tel:+918925059589"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-green-100/60
                  hover:text-green-200
                  transition-colors
                "
              >

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    rounded-lg
                    bg-green-900/40
                    border
                    border-green-400/20
                    group-hover:bg-green-800/50
                    group-hover:border-green-300/40
                    transition-all
                    shrink-0
                  "
                >
                  <Phone size={17} />
                </span>

                <span className="text-sm">
                  +91 89250 59589
                </span>

              </a>


              {/* EMAIL */}

              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-green-100/60
                  hover:text-green-200
                  transition-colors
                "
              >

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    rounded-lg
                    bg-green-900/40
                    border
                    border-green-400/20
                    group-hover:bg-green-800/50
                    group-hover:border-green-300/40
                    transition-all
                    shrink-0
                  "
                >
                  <Mail size={17} />
                </span>

                <span className="text-sm break-all">
                  {BUSINESS_EMAIL}
                </span>

              </a>


              {/* LOCATION */}

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-green-100/60
                  hover:text-green-200
                  transition-colors
                "
              >

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    rounded-lg
                    bg-green-900/40
                    border
                    border-green-400/20
                    group-hover:bg-green-800/50
                    group-hover:border-green-300/40
                    transition-all
                    shrink-0
                  "
                >
                  <MapPin size={17} />
                </span>

                <span className="text-sm">
                  Trichy, Tamil Nadu
                </span>

                <ArrowUpRight
                  size={15}
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                    shrink-0
                  "
                />

              </a>

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div
          className="
            mt-12
            md:mt-16
            h-px
            bg-gradient-to-r
            from-transparent
            via-green-400/30
            to-transparent
          "
        />


        {/* =====================================================
            COPYRIGHT
        ====================================================== */}

        <div
          className="
            pt-6
            text-center
            text-green-100/40
            text-xs
            md:text-sm
          "
        >
          © 2026 Nalan Catering. All Rights Reserved.
        </div>

      </div>


      {/* =====================================================
          DEVELOPER BRANDING
          RED • ROSE • BLUE MOVING EFFECT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          w-full
          border-t
          border-red-400/20
          bg-[#032812]
          overflow-hidden
        "
      >

        {/* =================================================
            MOVING RED → ROSE → BLUE LIGHT
        ================================================== */}

        <motion.div
          animate={{
            x: ["-100%", "300%"],
          }}
          transition={{
            duration: 4,
            repeat: isMobile ? 0 : Infinity,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            left-0
            w-[45%]
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-rose-400
            to-transparent
            shadow-[0_0_12px_rgba(244,63,94,0.8)]
            pointer-events-none
          "
        />

        {/* =================================================
            SECOND BLUE MOVING LIGHT
        ================================================== */}

        <motion.div
          animate={{
            x: ["300%", "-100%"],
          }}
          transition={{
            duration: 5,
            repeat: isMobile ? 0 : Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="
            absolute
            top-0
            left-0
            w-[35%]
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-blue-400
            to-transparent
            shadow-[0_0_12px_rgba(59,130,246,0.8)]
            pointer-events-none
          "
        />


        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            flex-wrap
            px-4
            py-3
            text-center
          "
        >

          {/* LEFT RED DOT */}

          <motion.span
            animate={{
              scale: [0.7, 1.35, 0.7],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: isMobile ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="
              w-[6px]
              h-[6px]
              rounded-full
              bg-red-500
              shadow-[0_0_8px_rgba(239,68,68,0.8)]
              shrink-0
            "
          />


          {/* DESIGNED & DEVELOPED TEXT */}

          <span
            className="
              font-mono
              text-[9px]
              md:text-[10px]
              font-medium
              text-green-100/40
              tracking-[1px]
              uppercase
              whitespace-nowrap
            "
          >
          Developed by
          </span>


          {/* SMALL ROSE DOT */}

          


          {/* =================================================
              COM SR INFOTECH
              RED → ROSE → BLUE MOVING TEXT
          ================================================== */}

          <motion.a
            href="https://comsrinfotech.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Com SR Infotech website"
            animate={{
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 4,
              repeat: isMobile ? 0 : Infinity,
              ease: "linear",
            }}
            className="
  relative
  inline-block
  font-mono
  font-black
  text-[13px]
  md:text-[15px]
  tracking-[0.5px]
  whitespace-nowrap

  bg-gradient-to-r
  from-red-500
  via-rose-400
  via-pink-400
  via-purple-400
  to-blue-500

  bg-[length:300%_100%]
  bg-clip-text
  text-transparent

  drop-shadow-[0_0_3px_rgba(244,63,94,0.9)]
  drop-shadow-[0_0_8px_rgba(59,130,246,0.45)]
"
          >
            Com SR Infotech
          </motion.a>


          {/* RIGHT BLUE DOT */}

          <motion.span
            animate={{
              scale: [0.7, 1.35, 0.7],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: isMobile ? 0 : Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="
              w-[6px]
              h-[6px]
              rounded-full
              bg-blue-500
              shadow-[0_0_8px_rgba(59,130,246,0.8)]
              shrink-0
            "
          />


          {/* ARROW */}

          <motion.div
            animate={{
              x: [0, 2, 0],
              y: [0, -2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: isMobile ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUpRight
              size={13}
              className="
                text-blue-400
                shrink-0
              "
            />
          </motion.div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM GREEN ACCENT
      ====================================================== */}

      <div
        className="
          h-1
          bg-gradient-to-r
          from-green-700
          via-green-300
          to-green-700
        "
      />

    </footer>
  );
}

export default Footer;