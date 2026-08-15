import { motion } from "framer-motion";
import useIsMobile from "../useIsMobile";

import {
  UtensilsCrossed,
  Award,
  Users,
  Sparkles,
} from "lucide-react";

import aboutImage from "../../assets/images/about.jpg";
import thathaImage from "../../assets/images/Thatha.png";
import appaImage from "../../assets/images/Appa.png";
import maganImage from "../../assets/images/Magan.png";

function About() {
  const isMobile = useIsMobile();
  const stats = [
    {
      icon: <UtensilsCrossed size={25} />,
      number: "50,000+",
      title: "வெற்றிகரமான நிகழ்வுகள்",
    },
    {
      icon: <Award size={25} />,
      number: "40+",
      title: "ஆண்டுகள் அனுபவம்",
    },
    {
      icon: <Users size={25} />,
      number: "100%",
      title: "வாடிக்கையாளர்களின் திருப்தி",
    },
  ];

  const owners = [
    {
      image: thathaImage,
      title: "நிறுவனர்",
      subtitle: "முதல் தலைமுறை",
      alt: "நளன் கேட்டரிங் நிறுவனர்",
    },
    {
      image: appaImage,
      title: "இரண்டாம் தலைமுறை",
      subtitle: "பாரம்பரியத்தை தொடர்கிறோம்",
      alt: "நளன் கேட்டரிங் இரண்டாம் தலைமுறை",
    },
    {
      image: maganImage,
      title: "மூன்றாம் தலைமுறை",
      subtitle: "பாரம்பரியத்துடன் புதிய தலைமுறை",
      alt: "நளன் கேட்டரிங் மூன்றாம் தலைமுறை",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#DDEEDB]
        via-[#E8F3E4]
        to-[#D2E8D0]
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        scroll-mt-[72px]
        md:scroll-mt-[105px]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      {/* Strong top green glow */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          w-80
          h-80
          sm:w-[420px]
          sm:h-[420px]
          rounded-full
          bg-green-500
          blur-[55px] sm:blur-[100px] md:blur-[130px]
          pointer-events-none
        "
      />

      {/* Strong bottom green glow */}

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-80
          h-80
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-green-700
          blur-[60px] sm:blur-[110px] md:blur-[140px]
          pointer-events-none
        "
      />

      {/* Floating leaves */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[5%]
          top-16
          text-5xl
          sm:text-7xl
          opacity-15
          pointer-events-none
        "
      >
        🍃
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[4%]
          bottom-16
          text-4xl
          sm:text-6xl
          opacity-15
          pointer-events-none
        "
      >
        🌿
      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            sm:gap-12
            lg:gap-16
            items-center
          "
        >
          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              amount: 0.2,
              once: false,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Label */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                amount: 0.5,
                once: false,
              }}
              transition={{
                duration: 0.4,
              }}
              className="flex items-center gap-2 sm:gap-3 mb-3"
            >
              <Sparkles
                size={16}
                className="text-green-600 sm:w-[18px] sm:h-[18px]"
              />

              <p
                className="
                  text-green-700
                  tracking-[2px]
                  sm:tracking-[3px]
                  font-semibold
                  text-xs
                  sm:text-sm
                "
              >
                எங்களை பற்றி
              </p>
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.4,
                once: false,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[2rem]
                sm:text-4xl
                md:text-5xl
                font-bold
                leading-[1.2]
                text-[#123524]
              "
            >
              தரமான உணவு
              <span className="text-green-600">
                {" "}•{" "}
              </span>
              சிறந்த சேவை
            </motion.h2>

            {/* Divider */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 75,
              }}
              viewport={{
                amount: 0.5,
                once: false,
              }}
              transition={{
                duration: 0.45,
                delay: 0.15,
              }}
              className="
                h-[3px]
                bg-green-600
                rounded-full
                mt-4
                sm:mt-5
              "
            />

            {/* Paragraph 1 */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
                once: false,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                mt-5
                sm:mt-7
                text-gray-700
                leading-7
                sm:leading-8
                text-sm
                sm:text-base
              "
            >
              நளன் கேட்டரிங் கடந்த 40+ ஆண்டுகளாக திருமணங்கள், நிச்சயதார்த்தங்கள்,
              பிறந்தநாள் விழாக்கள் மற்றும்
              Corporate Events ஆகியவற்றிற்கு தரமான உணவு மற்றும் சிறந்த
              சேவையை வழங்கி வருகிறது.
            </motion.p>

            {/* Paragraph 2 */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
                once: false,
              }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="
                mt-3
                sm:mt-4
                text-gray-700
                leading-7
                sm:leading-8
                text-sm
                sm:text-base
              "
            >
              எங்கள் நோக்கம் சுவையான உணவை மட்டும் வழங்குவது அல்ல,
              உங்கள் விழாவை அனைவரும் நினைவில் வைத்திருக்கும் ஒரு
              அனுபவமாக மாற்றுவதாகும்.
            </motion.p>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              amount: 0.2,
              once: false,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-5 sm:space-y-7"
          >
            {/* MAIN IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                amount: 0.25,
                once: false,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[22px]
                sm:rounded-[28px]
                shadow-[0_20px_50px_rgba(0,0,0,0.13)]
                border
                border-green-900/10
              "
            >
              <img
              decoding="async"
                src={aboutImage}
                alt="Nalan Catering"
                className="
                  w-full
                  h-[260px]
                  sm:h-[330px]
                  md:h-[420px]
                  object-cover
                  object-center
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#07150d]/65
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  right-3
                  sm:bottom-5
                  sm:left-5
                  sm:right-5
                  bg-[#07150d]/60
                  backdrop-blur-sm md:backdrop-blur-md
                  border
                  border-green-300/20
                  rounded-xl
                  sm:rounded-2xl
                  px-3
                  py-2.5
                  sm:px-4
                  sm:py-3
                  text-white
                "
              >
                <p className="text-[10px] sm:text-xs md:text-sm font-medium">
                   பாரம்பரிய சுவை • நவீன சேவை
                </p>
              </div>
            </motion.div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    amount: 0.25,
                    once: false,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.025,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    min-w-0
                    w-full
                    bg-white/75
                    backdrop-blur-sm
                    rounded-xl
                    sm:rounded-2xl
                    md:rounded-3xl
                    shadow-[0_10px_30px_rgba(0,0,0,0.07)]
                    p-2.5
                    sm:p-4
                    md:p-6
                    text-center
                    border
                    border-green-200
                  "
                >
                  <div
                    className="
                      absolute
                      -top-10
                      -right-10
                      w-24
                      h-24
                      rounded-full
                      bg-green-400/20
                      blur-2xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-200
                    "
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: -6,
                    }}
                    className="
                      relative
                      z-10
                      text-green-600
                      flex
                      justify-center
                      mb-1.5
                      sm:mb-3
                    "
                  >
                    {item.icon}
                  </motion.div>

                  <h3
                    className="
                      relative
                      z-10
                      text-base
                      sm:text-xl
                      md:text-3xl
                      font-bold
                      text-[#123524]
                    "
                  >
                    {item.number}
                  </h3>

                  <p
  className="
    relative
    z-10
    mt-1.5
    sm:mt-2
    text-[8px]
    sm:text-[10px]
    md:text-xs
    text-gray-600
    leading-[1.3]
    px-1
    break-words
  "
>
  {item.title}
</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            THREE GENERATIONS
        ====================================================== */}

        <div className="mt-16 sm:mt-20 lg:mt-24 relative">

          {/* Central green glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 5,
              repeat: isMobile ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-20
              -translate-x-1/2
              w-[350px]
              h-[350px]
              sm:w-[550px]
              sm:h-[350px]
              rounded-full
              bg-green-500
              blur-[55px] sm:blur-[100px]
              pointer-events-none
            "
          />

          {/* Section heading */}

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
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 text-center mb-10 sm:mb-12"
          >
            <motion.p
              initial={{
                opacity: 0,
                letterSpacing: "8px",
              }}
              whileInView={{
                opacity: 1,
                letterSpacing: "2px",
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                text-green-600
                text-xs
                sm:text-sm
                font-semibold
                uppercase
                mb-2
              "
            >
              எங்கள் பாரம்பரியம்
            </motion.p>

            <h3
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                text-[#166534]
              "
            >
              மூன்று தலைமுறைகளின் பயணம்
            </h3>

            <p
              className="
                text-gray-600
                text-sm
                sm:text-base
                max-w-2xl
                mx-auto
                mt-3
                leading-relaxed
              "
            >
              பாரம்பரியத்தை தொடர்ந்து, தரமான உணவையும் அன்பான சேவையையும்
              தலைமுறை தலைமுறையாக வழங்கி வருகிறோம்.
            </p>
          </motion.div>

          {/* OWNERS */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-10
              sm:gap-5
              lg:gap-10
              max-w-5xl
              mx-auto
            "
          >
            {owners.map((owner, index) => (
              <motion.div
                key={owner.title}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                }}
                className="text-center group"
              >
                {/* IMAGE AREA WITH STRONG GREEN GLOW */}

                <div className="relative mx-auto w-fit">

                  {/* Large green glow behind image */}

                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.35, 0.55, 0.35],
                    }}
                    transition={{
                      duration: 3.5 + index * 0.5,
                      repeat: isMobile ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="
                      absolute
                      inset-[-18px]
                      rounded-full
                      bg-green-500/50
                      blur-2xl
                      pointer-events-none
                    "
                  />

                  {/* Stronger outer green ring */}

                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: isMobile ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="
                      absolute
                      inset-[-8px]
                      rounded-full
                      bg-gradient-to-br
                      from-green-800
                      via-green-500
                      to-green-300
                      opacity-90
                      pointer-events-none
                    "
                  />

                  {/* IMAGE WRAPPER */}

                  <motion.div
                    whileHover={{
                      scale: 1.06,
                      rotate:
                        index === 1
                          ? 0
                          : index === 0
                          ? -1.5
                          : 1.5,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="
                      relative
                      z-10
                      mx-auto
                      w-44
                      h-44
                      sm:w-44
                      sm:h-44
                      md:w-52
                      md:h-52
                      rounded-full
                      p-[6px]
                      bg-gradient-to-br
                      from-[#064E3B]
                      via-[#16A34A]
                      to-[#86EFAC]
                      shadow-[0_15px_45px_rgba(22,101,52,0.35)]
                    "
                  >

                    {/* Animated outer ring */}

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 12,
                        repeat: isMobile ? 0 : Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        -inset-2
                        rounded-full
                        border
                        border-green-500/40
                        pointer-events-none
                      "
                    />

                    {/* Inner image */}

                    <div
                      className="
                        relative
                        w-full
                        h-full
                        rounded-full
                        overflow-hidden
                        bg-gradient-to-br
                        from-[#D5EAD2]
                        via-[#E8F3E4]
                        to-[#C5DFC2]
                        border-4
                        border-white
                      "
                    >
                      <img
              decoding="async"
                        src={owner.image}
                        alt={owner.alt}
                        className="
                          w-full
                          h-full
                          object-contain
                          object-center
                          transition-transform
                          duration-200
                          ease-out
                          group-hover:scale-110
                        "
                      />

                      {/* Subtle green tint */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-green-900/5
                          group-hover:bg-green-900/0
                          transition-colors
                          duration-200
                          pointer-events-none
                        "
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Owner title */}

                <motion.h4
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + index * 0.12,
                  }}
                  className="
                    mt-7
                    text-lg
                    sm:text-xl
                    font-bold
                    text-[#166534]
                  "
                >
                  {owner.title}
                </motion.h4>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + index * 0.12,
                  }}
                  className="text-gray-500 text-sm mt-1"
                >
                  {owner.subtitle}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;