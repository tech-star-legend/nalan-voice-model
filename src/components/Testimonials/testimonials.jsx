import { motion } from "framer-motion";
import useIsMobile from "../useIsMobile";
import { Quote, Star, Sparkles } from "lucide-react";

function Testimonials() {
  const isMobile = useIsMobile();

  const testimonials = [
    {
      name: "பிரியா & குடும்பத்தினர்",
      event: "திருமண விழா",
      text: "உணவு மிகவும் சுவையாகவும் தரமாகவும் இருந்தது. அனைத்து உணவு வகைகளும் சரியான சுவையில் இருந்தன. எங்கள் திருமண விழாவிற்கு நலன் கேட்டரிங் சிறப்பான சேவையை வழங்கியது.",
    },
    {
      name: "கார்த்திக்",
      event: "குடும்ப விழா",
      text: "உணவின் சுவை மிகவும் அருமையாக இருந்தது. பரிமாறும் விதமும் மிகவும் சிறப்பாக இருந்தது. விழாவிற்கு வந்த அனைவரும் உணவைப் பாராட்டினர்.",
    },
    {
      name: "சுரேஷ்",
      event: "பிறந்தநாள் விழா",
      text: "மிகவும் சுவையான உணவு மற்றும் சிறந்த சேவை. கேட்டரிங் குழுவினர் மிகவும் பொறுப்புடன் பணியாற்றினர். எங்கள் விழா சிறப்பாக அமைய உதவியதற்கு நன்றி.",
    },
    {
      name: "ரமேஷ்",
      event: "நிச்சயதார்த்த விழா",
      text: "உணவின் தரமும் சுவையும் மிகவும் சிறப்பாக இருந்தது. அனைத்து உணவு வகைகளும் சுத்தமாகவும் நேர்த்தியாகவும் தயாரிக்கப்பட்டிருந்தன. நலன் கேட்டரிங்கை நிச்சயமாக பரிந்துரைக்கலாம்.",
    },
    {
      name: "அனிதா",
      event: "சுப நிகழ்ச்சி",
      text: "வீட்டு சுவையை நினைவுபடுத்தும் வகையில் உணவு மிகவும் சுவையாக இருந்தது. கேட்டரிங் சேவை சரியான நேரத்தில் சிறப்பாக வழங்கப்பட்டது. மிகவும் திருப்தியாக இருந்தது.",
    },
    {
      name: "விக்னேஷ்",
      event: "காதணி விழா",
      text: "உணவு முதல் பரிமாறும் சேவை வரை அனைத்தும் மிகவும் சிறப்பாக இருந்தது. விருந்தினர்கள் அனைவரும் உணவை மிகவும் விரும்பினர். சிறந்த கேட்டரிங் சேவை.",
    },
    {
      name: "மகேஷ் & குடும்பத்தினர்",
      event: "திருமண வரவேற்பு",
      text: "விருந்தினர்களின் விருப்பத்திற்கு ஏற்ற வகையில் உணவு வகைகள் மிகவும் அருமையாக இருந்தன. சுவை, தரம் மற்றும் சேவை அனைத்திலும் நலன் கேட்டரிங் சிறப்பாக செயல்பட்டது.",
    },
    {
      name: "தீபா",
      event: "குடும்ப விழா",
      text: "சைவ உணவுகள் அனைத்தும் மிகவும் சுவையாக இருந்தன. உணவின் தரம் மிகவும் நன்றாக இருந்தது. பணியாளர்களின் அணுகுமுறையும் மிகவும் அன்பாக இருந்தது.",
    },
    {
      name: "அரவிந்த்",
      event: "சிறப்பு நிகழ்ச்சி",
      text: "நாங்கள் எதிர்பார்த்ததை விட உணவு மிகவும் சிறப்பாக இருந்தது. சுவையான உணவு, நேர்த்தியான பரிமாறுதல் மற்றும் சிறந்த சேவை. நலன் கேட்டரிங்கிற்கு மனமார்ந்த நன்றி.",
    },
    {
      name: "கிருஷ்ணா",
      event: "விழா நிகழ்ச்சி",
      text: "உணவின் சுவை மிகவும் அருமை. அனைத்து உணவு வகைகளும் புதிதாகவும் தரமாகவும் இருந்தன. விழாவிற்கு வந்த அனைவரிடமும் நல்ல பாராட்டுகளைப் பெற்றோம்.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        md:py-28
      "
    >
      {/* LARGE ANIMATED GREEN GLOW */}
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
          blur-[65px]
          sm:blur-[120px]
          md:blur-[150px]
          pointer-events-none
        "
      />

      {/* LEFT GREEN GLOW */}
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
          blur-[60px]
          sm:blur-[110px]
          pointer-events-none
        "
      />

      {/* RIGHT GREEN GLOW */}
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
          blur-[65px]
          sm:blur-[120px]
          pointer-events-none
        "
      />

      {/* FLOATING DOT LEFT */}
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

      {/* FLOATING DOT RIGHT */}
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

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
        "
      >
        {/* SECTION HEADER */}
        <div className="text-center">

          {/* BADGE */}
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
              amount: 0.25,
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
              எங்கள் வாடிக்கையாளர்களின் கருத்துகள்
            </span>

            <Sparkles
              size={14}
              className="text-green-500"
            />
          </motion.div>

          {/* HEADING */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
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
            எங்களைப் பற்றி{" "}

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
              அவர்கள் சொல்வது
            </motion.span>
          </motion.h2>

          {/* DESCRIPTION */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-5
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
            எங்கள் உணவு மற்றும் சேவையை அனுபவித்த
            வாடிக்கையாளர்களின் அன்பான கருத்துகள்.
          </motion.p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div
          className="
            mt-12
            md:mt-16
            grid
            md:grid-cols-3
            gap-6
            lg:gap-8
          "
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.94,
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
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-white
                border
                border-green-100
                p-6
                md:p-7
                shadow-[0_10px_40px_rgba(22,101,52,0.08)]
                hover:shadow-[0_18px_50px_rgba(22,101,52,0.15)]
                transition-shadow
                duration-300
              "
            >
              {/* CARD GREEN GLOW */}
              <motion.div
                animate={{
                  opacity: [0.03, 0.09, 0.03],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: isMobile ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="
                  absolute
                  -top-20
                  -right-20
                  w-40
                  h-40
                  rounded-full
                  bg-green-400
                  blur-[35px]
                  pointer-events-none
                "
              />

              {/* MOVING CARD SHINE */}
              <motion.div
                animate={{
                  x: ["-130%", "230%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: isMobile ? 0 : Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                  delay: index * 0.5,
                }}
                className="
                  absolute
                  top-0
                  left-0
                  w-16
                  h-full
                  bg-gradient-to-r
                  from-transparent
                  via-green-100/50
                  to-transparent
                  skew-x-[-20deg]
                  pointer-events-none
                "
              />

              {/* QUOTE ICON */}
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -20,
                }}
                whileInView={{
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + index * 0.15,
                  type: "spring",
                  stiffness: 250,
                }}
                className="
                  relative
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-50
                  border
                  border-green-100
                  text-green-600
                "
              >
                <Quote size={21} />
              </motion.div>

              {/* STARS */}
              <div
                className="
                  relative
                  flex
                  gap-1
                  mt-5
                "
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.3,
                      delay:
                        0.3 +
                        index * 0.15 +
                        star * 0.06,
                    }}
                  >
                    <Star
                      size={15}
                      className="
                        fill-green-500
                        text-green-500
                      "
                    />
                  </motion.div>
                ))}
              </div>

              {/* TESTIMONIAL TEXT */}
              <p
                className="
                  relative
                  mt-5
                  text-gray-600
                  text-sm
                  md:text-base
                  leading-7
                "
              >
                “{testimonial.text}”
              </p>

              {/* CUSTOMER */}
              <div
                className="
                  relative
                  mt-6
                  pt-5
                  border-t
                  border-green-100
                "
              >
                <p
                  className="
                    text-green-900
                    font-semibold
                    text-sm
                    md:text-base
                  "
                >
                  {testimonial.name}
                </p>

                <p
                  className="
                    mt-1
                    text-green-600
                    text-xs
                    md:text-sm
                  "
                >
                  {testimonial.event}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM ANIMATED LINE */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 1.1,
            delay: 0.4,
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

          {/* WHITE MOVING HIGHLIGHT */}
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

export default Testimonials;