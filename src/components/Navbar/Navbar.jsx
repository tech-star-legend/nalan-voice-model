import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

import nalanLogo from "../../assets/images/nalan-logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =====================================================
      SCROLL TO SECTION
  ====================================================== */

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Section with id="${id}" not found`);
      return;
    }

    const navbarHeight =
      window.innerWidth < 768 ? 72 : 105;

    // If mobile menu is open, close it first.
    if (menuOpen) {
      setMenuOpen(false);

      // Wait for the mobile menu collapse animation
      // before calculating the final scroll position.
      setTimeout(() => {
        const elementPosition =
          element.getBoundingClientRect().top +
          window.scrollY;

        window.scrollTo({
          top: Math.max(
            0,
            elementPosition - navbarHeight
          ),
          behavior: "smooth",
        });
      }, 280);
    } else {
      const elementPosition =
        element.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: Math.max(
          0,
          elementPosition - navbarHeight
        ),
        behavior: "smooth",
      });
    }

    setActiveSection(id);
  };

  /* =====================================================
      ACTIVE SECTION DETECTION
  ====================================================== */

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "menu",
      "gallery",
      "testimonials",
      "booking",
      "contact",
    ];

    const handleScroll = () => {
      const navbarHeight =
        window.innerWidth < 768 ? 72 : 105;

      const checkPosition =
        navbarHeight + 45;

      let currentSection = "home";

      sections.forEach((id) => {
        const section =
          document.getElementById(id);

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (rect.top <= checkPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
      NAVIGATION LINKS
  ====================================================== */

  const links = [
    {
      name: "முகப்பு",
      id: "home",
    },
    {
      name: "எங்களை பற்றி",
      id: "about",
    },
    {
      name: "சேவைகள்",
      id: "services",
    },
    {
      name: "உணவு பட்டியல்",
      id: "menu",
    },
    {
      name: "தருணங்கள்",
      id: "gallery",
    },
    {
      name: "கருத்துகள் ",
      id: "testimonials",
    },
    {
      name: "முன்பதிவு",
      id: "booking",
    },
    {
      name: "தொடர்பு",
      id: "contact",
    },
  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
      "
    >

      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}

      <motion.div
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          hidden
          md:block
          bg-[#07150D]
          text-white
          text-xs
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-2
            flex
            items-center
            justify-between
          "
        >

          {/* PHONE + EMAIL */}

          <div
            className="
              flex
              items-center
              gap-6
            "
          >

            <motion.div
              whileHover={{
                y: -1,
              }}
              className="
                flex
                items-center
                gap-2
              "
            >
              <Phone
                size={13}
                className="text-green-400"
              />

              <span>
                +91 89250 59589
              </span>
            </motion.div>

            <motion.div
              whileHover={{
                y: -1,
              }}
              className="
                flex
                items-center
                gap-2
              "
            >
              <Mail
                size={13}
                className="text-green-400"
              />

              <span>
                nalancateringtrichy@gmail.com
              </span>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <motion.div
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.65,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          bg-white/95
          backdrop-blur-sm md:backdrop-blur-xl
          border-b
          border-green-100
          shadow-[0_5px_30px_rgba(0,0,0,0.08)]
        "
      >

        <div
          className="
            max-w-[1500px]
            mx-auto
            px-3
            sm:px-4
            md:px-5
            lg:px-6
            py-2
            sm:py-2.5
            flex
            items-center
            gap-3
            min-w-0
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <motion.button
            type="button"
            onClick={() =>
              scrollToSection("home")
            }
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              flex
              items-center
              gap-2
              shrink-0
              text-left
              min-w-0
            "
          >

            <img
              decoding="async"
              src={nalanLogo}
              alt="நளன் கேட்டரிங்"
              className="
                w-10
                h-10
                sm:w-11
                sm:h-11
                md:w-12
                md:h-12
                lg:w-13
                lg:h-13
                object-contain
                rounded-full
                shrink-0
              "
            />

            <div
              className="
                min-w-0
              "
            >

              <h1
                className="
                  text-[16px]
                  sm:text-[18px]
                  md:text-[20px]
                  lg:text-[21px]
                  font-bold
                  text-[#166534]
                  leading-none
                  whitespace-nowrap
                "
              >
                நளன் கேட்டரிங்
              </h1>

              <p
                className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-[11px]
                  lg:text-[11px]
                  text-green-600
                  font-medium
                  mt-1
                  whitespace-nowrap
                "
              >
                உணவில் தரம் • என்றும் நிரந்தரம்
              </p>

            </div>

          </motion.button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="
              hidden
              lg:flex
              flex-1
              min-w-0
              items-center
              justify-center
              gap-0
              xl:gap-0.5
            "
          >

            {links.map((link, index) => {

              const isActive =
                activeSection === link.id;

              return (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      0.15 +
                      index * 0.045,
                    ease: "easeOut",
                  }}
                  onClick={() =>
                    scrollToSection(
                      link.id
                    )
                  }
                  whileHover={{
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className={`
                    relative
                    group
                    flex
                    items-center
                    justify-center
                    shrink-0
                    px-2
                    xl:px-2.5
                    py-2
                    rounded-full
                    text-[11px]
                    xl:text-[12px]
                    font-medium
                    whitespace-nowrap
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-green-700"
                        : "text-gray-700 hover:text-[#166534]"
                    }
                  `}
                >

                  {/* ACTIVE HIGHLIGHT */}

                  {isActive && (
                    <motion.span
                      layoutId="activeNavbar"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-green-100
                        border
                        border-green-200
                        -z-10
                      "
                    />
                  )}

                  {/* TEXT */}

                  <span
                    className="
                      relative
                      z-10
                    "
                  >
                    {link.name}
                  </span>

                  {/* HOVER LINE */}

                  {!isActive && (
                    <motion.span
                      initial={{
                        width: 0,
                        left: "50%",
                      }}
                      whileHover={{
                        width: "100%",
                        left: "0%",
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        absolute
                        -bottom-0.5
                        h-[2px]
                        rounded-full
                        bg-green-500
                      "
                    />
                  )}

                </motion.button>
              );
            })}

          </nav>

          {/* =================================================
              DESKTOP BOOKING BUTTON
          ================================================== */}

          <motion.button
            type="button"
            onClick={() =>
              scrollToSection("booking")
            }
            whileHover={{
              scale: 1.03,
              y: -1,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              hidden
              lg:flex
              shrink-0
              items-center
              justify-center
              gap-1.5
              bg-green-600
              hover:bg-green-500
              text-white
              px-3
              xl:px-4
              py-2.5
              rounded-full
              font-semibold
              text-[11px]
              xl:text-[12px]
              whitespace-nowrap
              shadow-[0_8px_25px_rgba(22,163,74,0.25)]
              transition-colors
              duration-150
            "
          >

            <span>
              📞 பதிவு செய்யுங்கள்
            </span>

            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-150
                group-hover:translate-x-1
              "
            />

          </motion.button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <motion.button
            type="button"
            whileTap={{
              scale: 0.88,
            }}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            className="
              lg:hidden
              ml-auto
              w-10
              h-10
              sm:w-11
              sm:h-11
              shrink-0
              rounded-full
              flex
              items-center
              justify-center
              bg-green-50
              text-green-700
              border
              border-green-100
              shadow-sm
            "
          >

            <AnimatePresence mode="wait">

              {menuOpen ? (

                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                >
                  <X size={23} />
                </motion.div>

              ) : (

                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                >
                  <Menu size={23} />
                </motion.div>

              )}

            </AnimatePresence>

          </motion.button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================== */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                lg:hidden
                overflow-hidden
                bg-white
                border-t
                border-green-100
                shadow-lg
              "
            >

              <div
                className="
                  px-3
                  sm:px-4
                  py-2
                  sm:py-3
                "
              >

                {links.map(
                  (link, index) => {

                    const isActive =
                      activeSection ===
                      link.id;

                    return (
                      <motion.button
                        key={link.id}
                        type="button"
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.035,
                          duration: 0.2,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() =>
                          scrollToSection(
                            link.id
                          )
                        }
                        className={`
                          group
                          relative
                          w-full
                          flex
                          items-center
                          justify-between
                          text-left
                          px-3
                          sm:px-4
                          py-3
                          sm:py-3.5
                          rounded-xl
                          border-b
                          ${
                            isActive
                              ? "bg-green-100 border-green-200 text-green-700"
                              : "border-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
                          }
                          text-sm
                          sm:text-base
                          font-medium
                          transition-colors
                          duration-150
                        `}
                      >

                        <span>
                          {link.name}
                        </span>

                        <ArrowRight
                          size={15}
                          className={`
                            transition-transform
                            duration-150
                            ${
                              isActive
                                ? "text-green-700 translate-x-1"
                                : "text-green-500 group-hover:translate-x-1"
                            }
                          `}
                        />

                      </motion.button>
                    );
                  }
                )}

                {/* =================================================
                    MOBILE CTA
                ================================================== */}

                <div
                  className="
                    pt-3
                    sm:pt-4
                    pb-1
                  "
                >

                  <motion.button
                    type="button"
                    onClick={() =>
                      scrollToSection("booking")
                    }
                    whileHover={{
                      scale: 1.03,
                      y: -1,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-green-600
                      hover:bg-green-500
                      text-white
                      px-4
                      py-3
                      rounded-full
                      font-semibold
                      text-sm
                      shadow-[0_8px_25px_rgba(22,163,74,0.25)]
                      transition-colors
                      duration-150
                    "
                  >

                    <span>
                      📞 பதிவு செய்யுங்கள்
                    </span>

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                    />

                  </motion.button>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>

    </header>
  );
}

export default Navbar;