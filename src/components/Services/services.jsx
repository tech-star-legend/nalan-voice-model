import { motion } from "framer-motion";
import useIsMobile from "../useIsMobile";

import {
  UtensilsCrossed,
  Cake,
  Building2,
  Home,
} from "lucide-react";

import marriageImage from "../../assets/images/marraigeserv.jpg";
import birthdayImage from "../../assets/images/birthday.jpg";
import corporateImage from "../../assets/images/corporate.jpg";
import houseImage from "../../assets/images/house.jpg";


function Services() {
  const isMobile = useIsMobile();

  const services = [
    {
      image: marriageImage,
      icon: <UtensilsCrossed size={24} />,
      title: "திருமண விழாக்கள்",
      subtitle: "Wedding Catering",
      description:
        "திருமண விழாக்களுக்கு பாரம்பரிய சுவையுடன் தரமான உணவு, சிறந்த catering சேவை மற்றும் அனுபவமிக்க பணியாளர்களை வழங்குகிறோம்.",
      alt:
        "நளன் கேட்டரிங் திருமண விழா உணவு மற்றும் wedding catering சேவை",
    },

    {
      image: birthdayImage,
      icon: <Cake size={24} />,
      title: "பிறந்தநாள் விழாக்கள்",
      subtitle: "Birthday Parties",
      description:
        "பிறந்தநாள் கொண்டாட்டங்களுக்கு சுவையான உணவு மற்றும் சிறந்த catering சேவையுடன் உங்கள் சிறப்பு நாளை மறக்க முடியாததாக மாற்றுகிறோம்.",
      alt:
        "நளன் கேட்டரிங் பிறந்தநாள் விழா உணவு மற்றும் birthday catering சேவை",
    },

    {
      image: corporateImage,
      icon: <Building2 size={24} />,
      title: "நிறுவன நிகழ்வுகள்",
      subtitle: "Corporate Events",
      description:
        "Meetings, conferences மற்றும் corporate events போன்ற நிறுவன நிகழ்வுகளுக்கு தரமான உணவு மற்றும் professional catering சேவையை வழங்குகிறோம்.",
      alt:
        "நளன் கேட்டரிங் corporate event மற்றும் நிறுவன நிகழ்வு catering சேவை",
    },

    {
      image: houseImage,
      icon: <Home size={24} />,
      title: "வீட்டு விழாக்கள்",
      subtitle: "Family Functions",
      description:
        "குடும்ப விழாக்கள், சிறப்பு நிகழ்வுகள் மற்றும் வீட்டில் நடைபெறும் கொண்டாட்டங்களுக்கு வீட்டுச் சுவையுடன் தரமான உணவு மற்றும் catering சேவை.",
      alt:
        "நளன் கேட்டரிங் வீட்டு விழா மற்றும் family function catering சேவை",
    },
  ];


  return (

    <section
      id="services"
      aria-labelledby="services-heading"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#e0f0df]
        via-[#edf7eb]
        to-[#d5ead4]
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        scroll-mt-[72px]
        md:scroll-mt-[105px]
      "
    >

      {/* =====================================================
          BACKGROUND GREEN GLOWS
      ====================================================== */}

      {/* Top green glow */}

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.19, 0.12],
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
          bg-green-400
          blur-[55px] sm:blur-[100px] md:blur-[130px]
          pointer-events-none
        "
      />


      {/* Center green glow */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.12, 0.06],
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
          w-[400px]
          h-[300px]
          sm:w-[600px]
          sm:h-[400px]
          rounded-full
          bg-green-500
          blur-[65px] sm:blur-[120px]
          pointer-events-none
        "
      />


      {/* Bottom green glow */}

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
          opacity: [0.10, 0.17, 0.10],
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


      {/* Floating leaf decorations */}

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
          MAIN CONTAINER
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
          md:px-8
        "
      >


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
            amount: 0.2,
            once: false,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-center
            mb-10
            sm:mb-12
            md:mb-16
          "
        >

          {/* Decorative symbol */}

          <motion.p
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              amount: 0.5,
              once: false,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              text-green-600
              text-base
              sm:text-lg
              mb-2
            "
            aria-hidden="true"
          >
            ✦ ❖ ✦
          </motion.p>


          {/* SEO friendly section label */}

          <p
            className="
              text-green-700
              uppercase
              tracking-[2px]
              sm:tracking-[4px]
              font-semibold
              text-xs
              sm:text-sm
              md:text-base
            "
          >
            எங்கள் கேட்டரிங் சேவைகள்
          </p>


          {/* Main SEO heading */}

          <h2
            id="services-heading"
            className="
              text-2xl
              sm:text-3xl
              md:text-5xl
              font-bold
              leading-tight
              mt-3
              sm:mt-4
              text-[#123524]
            "
          >
            உங்கள் ஒவ்வொரு விழாவிற்கும்

            <span
              className="
                block
                text-green-700
                mt-1.5
                sm:mt-2
              "
            >
              சிறந்த Catering சேவைகள்
            </span>
          </h2>


          {/* SEO description */}

          <p
            className="
              text-gray-600
              mt-4
              sm:mt-6
              max-w-3xl
              mx-auto
              leading-7
              sm:leading-8
              text-sm
              sm:text-base
              px-1
            "
          >
            சிறிய குடும்ப விழாவிலிருந்து பெரிய திருமண விழா வரை,
            திருமணங்கள், பிறந்தநாள் விழாக்கள், நிறுவன நிகழ்வுகள் மற்றும்
            குடும்ப நிகழ்வுகளுக்கு தரமான உணவு மற்றும் சிறந்த
            கேட்டரிங் சேவையை தமிழ்நாடு முழுவதும் வழங்குகிறோம்.
          </p>

        </motion.div>



        {/* =================================================
            SERVICE CARDS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            sm:gap-5
            md:gap-7
          "
        >

          {services.map((service, index) => (

            <motion.article
              key={service.title}

              initial={{
                opacity: 0,
                y: 45,
                scale: 0.97,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                amount: 0.15,
                once: false,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.16,
                  ease: "easeOut",
                },
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
                group
                relative
                overflow-hidden
                bg-white/75
                backdrop-blur-sm
                rounded-[22px]
                sm:rounded-[26px]
                md:rounded-[28px]
                shadow-[0_12px_35px_rgba(22,101,52,0.10)]
                hover:shadow-[0_20px_45px_rgba(22,101,52,0.18)]
                border
                border-green-100
                hover:border-green-300
                cursor-pointer
                transition-shadow
                duration-200
                min-w-0
              "
            >


              {/* ===========================================
                  IMAGE + GREEN GLOW
              ============================================ */}

              <div
                className="
                  relative
                  h-52
                  sm:h-56
                  md:h-56
                  overflow-visible
                "
              >

                {/* Extra green glow behind image */}

                <div
                  className="
                    absolute
                    -inset-2
                    rounded-[25px]
                    bg-green-500/25
                    blur-xl
                    opacity-60
                    group-hover:opacity-90
                    group-hover:bg-green-500/35
                    transition-all
                    duration-300
                    pointer-events-none
                  "
                />


                {/* Image container */}

                <div
                  className="
                    relative
                    w-full
                    h-full
                    overflow-hidden
                    rounded-t-[22px]
                    sm:rounded-t-[26px]
                    md:rounded-t-[28px]
                    bg-green-100
                  "
                >

                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"

                    className="
                      w-full
                      h-full
                      object-cover
                    "

                    whileHover={{
                      scale: 1.08,
                    }}

                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                  />


                  {/* Green image tint */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-green-950/55
                      via-green-900/5
                      to-green-500/5
                      pointer-events-none
                    "
                  />


                  {/* Shine effect */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      -translate-x-full
                      group-hover:translate-x-full
                      transition-transform
                      duration-700
                      pointer-events-none
                    "
                  />


                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: -6,
                      scale: 1.1,
                    }}

                    transition={{
                      duration: 0.16,
                      ease: "easeOut",
                    }}

                    className="
                      absolute
                      bottom-3
                      left-3
                      sm:bottom-4
                      sm:left-4
                      w-11
                      h-11
                      sm:w-12
                      sm:h-12
                      rounded-xl
                      sm:rounded-2xl
                      bg-green-600
                      text-white
                      flex
                      items-center
                      justify-center
                      shadow-[0_8px_20px_rgba(22,101,52,0.30)]
                    "
                    aria-hidden="true"
                  >
                    {service.icon}
                  </motion.div>

                </div>

              </div>



              {/* ===========================================
                  CONTENT
              ============================================ */}

              <div
                className="
                  p-4
                  sm:p-5
                  md:p-6
                "
              >

                {/* Title */}

                <h3
                  className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    font-bold
                    leading-snug
                    text-[#123524]
                  "
                >
                  {service.title}
                </h3>


                {/* Subtitle */}

                <p
                  className="
                    text-green-600
                    font-semibold
                    mt-1.5
                    sm:mt-2
                    text-xs
                    sm:text-sm
                  "
                >
                  {service.subtitle}
                </p>


                {/* Description */}

                <p
                  className="
                    text-gray-600
                    text-xs
                    sm:text-sm
                    leading-6
                    mt-2.5
                    sm:mt-3
                  "
                >
                  {service.description}
                </p>


                {/* Animated bottom line */}

                <motion.div
                  initial={{
                    width: "20%",
                  }}

                  whileHover={{
                    width: "100%",
                  }}

                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}

                  className="
                    h-[2px]
                    bg-green-500
                    mt-3
                    sm:mt-4
                    rounded-full
                  "
                />

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}


export default Services;