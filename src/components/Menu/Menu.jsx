import { useState, useEffect, useRef, useCallback } from "react";
import useIsMobile from "../useIsMobile";
import { motion } from "framer-motion";

import {
  UtensilsCrossed,
  ChevronRight,
  Sparkles,
  Phone,
} from "lucide-react";

import IdlyPot from "./IdlyPot";
import { useTranslations } from "../../i18n/useLanguage";

const content = {
  ta: {
    sectionLabel: "எங்கள் உணவு பட்டியல்",
    headingA: "சுவையின்",
    headingB: "சிறப்பு விருந்து",
    intro:
      "பாரம்பரிய தமிழ் உணவுகளிலிருந்து சிறப்பு விருந்துகள் வரை, திருமணம், குடும்ப விழா, பிறந்தநாள் மற்றும் அனைத்து நிகழ்ச்சிகளுக்கும் ஏற்ற பல்வேறு சுவையான உணவு வகைகளை வழங்குகிறோம்.",
    categoriesAria: "உணவு வகைகள்",
    todaysSpecial: "இன்றைய சிறப்பு",
    bookCta: "பதிவு செய்ய",
    tapHint: "ஒரு வகையைத் தேர்ந்தெடுக்கவும்",
    categories: [
      {
        title: "முதல் நாள் இரவு டிபன்",
        emoji: "🌙",
        items: [
          "பன் அல்வா", "இட்லி", "இடியாப்பம்", "ஆனியன் ஊத்தாப்பம்",
          "சில்லி புரோட்டா", "வெஜ் புலாவ்", "சோலா பூரி", "வெள்ளையாப்பம்",
          "வெஜ் நூடுல்ஸ்", "தயிர் சாதம்", "ஊறுகாய்", "வெஜ் குருமா",
          "சென்னா மசால்", "தேங்காய் சட்னி", "கார சட்னி", "மல்லி சட்னி",
          "சாம்பார்", "பனங்கற்கண்டு பால்",
        ],
      },
      {
        title: "காலை டிபன்",
        emoji: "🥞",
        items: [
          "கோதுமை அல்வா", "புரூட் கேசரி", "இனிப்பு பனியாரம்", "நெய் புட்டு",
          "இளநீர் இட்லி", "நெய் ரோஸ்ட்", "அடை தோசை", "நெய் பொங்கல்",
          "மெது வடை", "பீட்ரூட் பூரி", "எண்ணெய் பொடி", "தேங்காய் சட்னி",
          "தக்காளி சட்னி", "உளுந்தச் சட்னி", "சாம்பார்", "பில்டர் காபி",
        ],
      },
      {
        title: "மதிய விருந்து",
        emoji: "🍛",
        items: [
          "ஸ்வீட்", "கோஸ் கேரட் பீன்ஸ் பொரியல்", "வெண்டைக்காய் தக்காளி பச்சடி",
          "நெல்லை அவியல்", "சேனை சாப்ஸ்", "காளிபிளவர் – 65", "வெஜ் பிரியாணி",
          "மல்லி சாதம் (அ)தேங்காய் சாதம்", "தயிர் பச்சடி", "சாதம்",
          "நெய் பருப்பு", "சாம்பார்", "வத்தக்குழம்பு", "ரசம்", "நெய் பாயசம்",
          "அப்பளம்", "கெட்டி மோர்", "ஊறுகாய்",
        ],
      },
      {
        title: "இரவு டிபன்",
        emoji: "🌙",
        items: [
          "இளநீர் அல்வா", "பன் அல்வா", "இளநீர் இட்லி", "இடியாப்பம்",
          "ஆனியன் ஊத்தாப்பம்", "கொத்து புரோட்டா", "காளான் பிரியாணி",
          "வெஜ் லாலிபாப்", "ரொமாலி", "வெஜ் நூடுல்ஸ்", "தயிர் சாதம்",
          "ஊறுகாய்", "வெஜ் குருமா", "பட்டர் பன்னீர் மசால்", "தேங்காய் சட்னி",
          "கார சட்னி", "மல்லி சட்னி", "சாம்பார்", "மசாலா பால்", "ஜிகர்தண்டா",
        ],
      },
    ],
  },
  en: {
    sectionLabel: "Our Menu",
    headingA: "A Special Feast",
    headingB: "Of Flavour",
    intro:
      "From traditional Tamil dishes to grand feasts, we offer a wide range of delicious food suited to weddings, family functions, birthdays, and every occasion.",
    categoriesAria: "Menu categories",
    todaysSpecial: "Today's Special",
    bookCta: "Book Now",
    tapHint: "Tap a category to open the pot",
    categories: [
      {
        title: "Day-Before Night Tiffin",
        emoji: "🌙",
        items: [
          "Bread Halwa", "Idli", "Idiyappam", "Onion Uthappam",
          "Chilli Parotta", "Veg Pulao", "Chola Poori", "Vellayappam",
          "Veg Noodles", "Curd Rice", "Pickle", "Veg Kurma",
          "Chana Masala", "Coconut Chutney", "Spicy Chutney", "Coriander Chutney",
          "Sambar", "Palm Jaggery Milk",
        ],
      },
      {
        title: "Morning Tiffin",
        emoji: "🥞",
        items: [
          "Wheat Halwa", "Fruit Kesari", "Sweet Paniyaram", "Ghee Puttu",
          "Tender Coconut Idli", "Ghee Roast", "Adai Dosa", "Ghee Pongal",
          "Medhu Vadai", "Beetroot Poori", "Gunpowder (Oil Podi)", "Coconut Chutney",
          "Tomato Chutney", "Ulundu Chutney", "Sambar", "Filter Coffee",
        ],
      },
      {
        title: "Lunch Feast",
        emoji: "🍛",
        items: [
          "Sweet", "Cabbage Carrot Beans Poriyal", "Ladies Finger Tomato Pachadi",
          "Nellai Aviyal", "Yam Chops", "Cauliflower – 65", "Veg Biryani",
          "Coriander Rice / Coconut Rice", "Curd Pachadi", "Rice",
          "Ghee Dal (Paruppu)", "Sambar", "Vathakuzhambu", "Rasam", "Ghee Payasam",
          "Appalam", "Thick Buttermilk", "Pickle",
        ],
      },
      {
        title: "Night Tiffin",
        emoji: "🌙",
        items: [
          "Tender Coconut Halwa", "Bread Halwa", "Tender Coconut Idli", "Idiyappam",
          "Onion Uthappam", "Kothu Parotta", "Mushroom Biryani",
          "Veg Lollipop", "Rumali Roti", "Veg Noodles", "Curd Rice",
          "Pickle", "Veg Kurma", "Butter Paneer Masala", "Coconut Chutney",
          "Spicy Chutney", "Coriander Chutney", "Sambar", "Masala Milk", "Jigarthanda",
        ],
      },
    ],
  },
};

function Menu() {
  const isMobile = useIsMobile();
  const t = useTranslations(content);
  const categories = t.categories;
  const [activeCategory, setActiveCategory] = useState(null);

  // ===================================================
  // IDLY POT STATE MACHINE
  //
  // closed  -> nothing showing, pot lid shut
  // opening -> lid lifts, label + steam appear, card
  //            rises out of the pot
  // open    -> fully revealed, idle timer running
  // closing -> card sinks back into the pot, lid shuts;
  //            if another category was requested while
  //            closing, it opens right after
  // ===================================================

  const [potState, setPotState] = useState("closed");
  const pendingCategoryRef = useRef(null);
  const idleTimerRef = useRef(null);

  const openCategory = (index) => {
    if (activeCategory === null) {
      setActiveCategory(index);
      setPotState("opening");
    } else if (activeCategory === index) {
      pendingCategoryRef.current = null;
      setPotState("closing");
    } else {
      pendingCategoryRef.current = index;
      setPotState("closing");
    }
  };

  const handlePotCloseComplete = useCallback(() => {
    if (pendingCategoryRef.current !== null) {
      const next = pendingCategoryRef.current;
      pendingCategoryRef.current = null;
      setActiveCategory(next);
      setPotState("opening");
    } else {
      setActiveCategory(null);
      setPotState("closed");
    }
  }, []);

  const handlePotOpenComplete = useCallback(() => {
    setPotState((current) => (current === "opening" ? "open" : current));
  }, []);

  // Auto-close after 20s of no interaction — both mobile & desktop.
  useEffect(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

    if (activeCategory !== null && potState !== "closing") {
      idleTimerRef.current = setTimeout(() => {
        setPotState("closing");
      }, 20000);
    }

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [activeCategory, potState]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");

    if (element) {
      const navbarHeight = window.innerWidth < 768 ? 72 : 105;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const activeMenu =
    activeCategory !== null ? categories[activeCategory] : null;

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-20
        md:px-6
        md:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-green-400
          blur-[60px]
          sm:blur-[110px]
        "
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.04, 0.08, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-96
          w-96
          rounded-full
          bg-green-700
          blur-[65px]
          sm:blur-[120px]
        "
      />

      {/* Decorative leaves */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-24
          text-5xl
          opacity-[0.06]
          md:text-7xl
        "
      >
        🍃
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-20
          left-[5%]
          text-4xl
          opacity-[0.05]
          md:text-6xl
        "
      >
        🍃
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">

            <Sparkles
              size={18}
              className="text-green-600"
              aria-hidden="true"
            />

            <p
              className="
                text-sm
                font-semibold
                tracking-[3px]
                text-green-600
              "
            >
              {t.sectionLabel}
            </p>

            <Sparkles
              size={18}
              className="text-green-600"
              aria-hidden="true"
            />

          </div>

          <h2
            id="menu-heading"
            className="
              text-3xl
              font-bold
              text-gray-900
              sm:text-4xl
              md:text-5xl
            "
          >
            {t.headingA}{" "}
            <span className="text-[#166534]">
              {t.headingB}
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-600
              md:text-base
            "
          >
            {t.intro}
          </p>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 90,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              mx-auto
              mt-6
              h-[3px]
              rounded-full
              bg-green-500
            "
          />
        </motion.div>

        {/* =================================================
            CATEGORY BUTTONS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.45,
          }}
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-2.5
            md:mt-12
            md:gap-3
          "
          role="tablist"
          aria-label={t.categoriesAria}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.title}
              type="button"
              role="tab"
              aria-selected={activeCategory === index}
              aria-controls={`menu-panel-${index}`}
              onClick={() => openCategory(index)}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              whileTap={{
                scale: 1.08,
                y: -5,
              }}
              transition={{
                duration: 0.12,
                ease: "easeOut",
              }}
              className={`
                flex
                items-center
                gap-2
                rounded-full
                px-4
                py-2.5
                text-xs
                font-semibold
                transition-colors
                duration-200
                sm:text-sm
                md:px-5
                md:py-3
                md:text-base

                ${
                  activeCategory === index
                    ? "bg-[#166534] text-white shadow-lg shadow-green-900/20"
                    : "border border-green-200 bg-white text-gray-700 hover:border-green-400 hover:bg-green-50"
                }
              `}
            >
              <span aria-hidden="true">
                {category.emoji}
              </span>

              <span>
                {category.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* =================================================
            IDLY POT REVEAL
        ================================================== */}

        <div className="mt-8 md:mt-10">
          <IdlyPot
            potState={potState}
            label={activeMenu ? activeMenu.title : ""}
            emoji={activeMenu ? activeMenu.emoji : "🍲"}
            hint={t.tapHint}
          />
        </div>

        {/* =================================================
            MENU CARD
        ================================================== */}

        <div className="mx-auto mt-4 max-w-5xl md:mt-6">

          {activeMenu && (

            <motion.div
              key={activeCategory}
              id={`menu-panel-${activeCategory}`}
              variants={{
                hidden: { opacity: 0, y: 70, scale: 0.85 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              initial="hidden"
              animate={potState === "closing" ? "hidden" : "visible"}
              onAnimationComplete={(definition) => {
                if (definition === "hidden" && potState === "closing") {
                  handlePotCloseComplete();
                }
                if (definition === "visible" && potState === "opening") {
                  handlePotOpenComplete();
                }
              }}
              role="tabpanel"
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-green-100
                  bg-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >

                {/* =================================================
                    CARD HEADER
                ================================================== */}

                <div
                  className="
                    relative
                    bg-[#166534]
                    px-5
                    py-6
                    text-white
                    md:px-8
                    md:py-7
                  "
                >

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-green-300/20
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          flex-shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-green-400
                          text-2xl
                          shadow-lg
                          md:h-14
                          md:w-14
                        "
                      >
                        {activeMenu.emoji}
                      </div>

                      <div>

                        <p
                          className="
                            text-xs
                            font-medium
                            text-green-200
                            md:text-sm
                          "
                        >
                          {t.todaysSpecial}
                        </p>

                        <h3
                          className="
                            mt-1
                            text-xl
                            font-bold
                            md:text-3xl
                          "
                        >
                          {activeMenu.title}
                        </h3>

                      </div>

                    </div>

                    <UtensilsCrossed
                      size={28}
                      className="
                        hidden
                        text-green-300
                        sm:block
                      "
                      aria-hidden="true"
                    />

                  </div>

                </div>

                {/* =================================================
                    SCROLLABLE FOOD ITEMS AREA
                    IMPORTANT: Only this inner area scrolls.
                    minHeight: 0 is required because this sits inside
                    a flex column parent — without it, browsers let
                    the child grow to fit its content and ignore
                    maxHeight, which was why scroll leaked to the page.
                ================================================== */}

                <div
                  className="
                    relative
                    bg-[#F8FFFA]
                    p-5
                    md:p-8
                    flex
                    flex-col
                  "
                >

                  <div
                    className="menu-scroll-area"
                    style={{
                      maxHeight: isMobile ? "300px" : "340px",
                      overflowY: "auto",
                      overscrollBehavior: "contain",
                      touchAction: "pan-y",
                      WebkitOverflowScrolling: "touch",
                      minHeight: 0,
                    }}
                    onWheel={(e) => e.stopPropagation()}
                  >

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-3
                        sm:grid-cols-2
                        md:gap-4
                        pr-1
                        md:pr-2
                      "
                    >

                      {activeMenu.items.map((item, index) => (

                        <motion.div
                          key={`${activeCategory}-${item}`}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.045,
                          }}
                          whileHover={{
                            x: 5,
                          }}
                          className="
                            group
                            flex
                            items-center
                            rounded-2xl
                            border
                            border-gray-100
                            bg-white
                            px-4
                            py-3.5
                            shadow-sm
                            transition-all
                            duration-150
                            hover:border-green-200
                            hover:shadow-md
                            md:px-5
                            md:py-4
                          "
                        >

                          <div
                            className="
                              flex
                              min-w-0
                              items-center
                              gap-3
                            "
                          >

                            {/* BULLET */}

                            <span
                              aria-hidden="true"
                              className="
                                flex-shrink-0
                                text-xl
                                font-bold
                                leading-none
                                text-green-600
                              "
                            >
                              •
                            </span>

                            {/* FOOD NAME */}

                            <span
                              className="
                                text-sm
                                font-medium
                                text-gray-700
                                transition-colors
                                group-hover:text-[#166534]
                                md:text-base
                              "
                            >
                              {item}
                            </span>

                          </div>

                        </motion.div>

                      ))}

                    </div>

                  </div>

                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    h-1
                    bg-gradient-to-r
                    from-green-300
                    via-green-500
                    to-green-300
                  "
                />

              </div>

            </motion.div>

          )}

        </div>

        {/* =================================================
            CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            mt-10
            text-center
            md:mt-12
          "
        >

          <motion.button
            type="button"
            onClick={scrollToContact}
            aria-label="நளன் கேட்டரிங் சேவைக்கு இலவசமாக விலைப்பெறுங்கள்"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-green-600
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_12px_35px_rgba(22,163,74,0.25)]
              transition-all
              duration-200
              hover:bg-green-700
              hover:shadow-[0_16px_40px_rgba(22,163,74,0.35)]
              md:px-8
              md:py-4
              md:text-base
            "
          >
            <Phone
              size={18}
              aria-hidden="true"
            />

            <span>
              {t.bookCta}
            </span>

            <ChevronRight
              size={18}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
              aria-hidden="true"
            />
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}

export default Menu;
