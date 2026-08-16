import { motion } from "framer-motion";
import useIsMobile from "../useIsMobile";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useTranslations } from "../../i18n/useLanguage";

const content = {
  ta: {
    emailSubject: "நளன் கேட்டரிங் - நிகழ்வு விவரங்கள்",
    emailBody: ({ name, phone, eventType, date, guests, requirements }) => `
வணக்கம் நளன் கேட்டரிங்🙏,

எனது நிகழ்விற்காக கேட்டரிங் சேவை தொடர்பாக விசாரிக்க விரும்புகிறேன்.

பெயர்:
${name}

மொபைல் எண்:
${phone}

நிகழ்வு வகை:
${eventType}

நிகழ்வு தேதி:
${date}

எதிர்பார்க்கப்படும் விருந்தினர்கள்:
${guests}

கூடுதல் தேவைகள்:
${requirements || "குறிப்பிடப்படவில்லை"}

எனது நிகழ்விற்கான கேட்டரிங் சேவை தொடர்பாக இந்த விவரங்களை அனுப்புகிறேன்.

நன்றி,
${name}
    `.trim(),
    badge: "தொடர்புக்கு",
    headingA: "உங்கள் நிகழ்வை",
    headingB: "இன்றே  திட்டமிடுங்கள்",
    description:
      "திருமணம், பிறந்தநாள் விழா, குடும்ப நிகழ்வுகள், நிறுவன நிகழ்வுகள் மற்றும் அனைத்து விசேஷ நிகழ்வுகளுக்கும் நளன் கேட்டரிங்கை தொடர்பு கொள்ளுங்கள். பாரம்பரிய சுவையுடன் தரமான கேட்டரிங் சேவையை வழங்குகிறோம்.",
    getInTouch: "எங்களை தொடர்பு கொள்ளுங்கள்",
    getInTouchSub:
      "உங்கள் நிகழ்வின் தேவைகளை எங்களிடம் பகிர்ந்து கொள்ளுங்கள். உங்களுக்கு ஏற்ற கேட்டரிங் சேவையை வழங்க எங்கள் குழு மகிழ்ச்சியுடன் உதவும்.",
    phone: "தொலைபேசி",
    altPhone: "மாற்று தொலைபேசி",
    email: "மின்னஞ்சல்",
    location: "இடம்",
    locationValue: "திருச்சி, தமிழ்நாடு",
    viewOnMaps: "Google Maps-ல் இடத்தை காண்க",
    formTitle: "விவரங்களை பகிரவும்",
    formSub: "உங்கள் நிகழ்வு விவரங்களை நிரப்பி எங்களுக்கு அனுப்புங்கள்.",
    fullName: "உங்கள் பெயர்",
    fullNamePlaceholder: "உங்கள் பெயர்",
    mobile: "மொபைல் எண்",
    mobilePlaceholder: "மொபைல் எண்",
    eventType: "நிகழ்வு வகை",
    eventTypePlaceholder: "உதா: திருமணம், பிறந்தநாள், நிறுவன நிகழ்வு",
    eventDate: "நிகழ்வு தேதி",
    guests: "எதிர்பார்க்கப்படும் விருந்தினர்கள்",
    guestsPlaceholder: "விருந்தினர்களின் எண்ணிக்கை",
    requirements: "கூடுதல் தேவைகள்",
    optional: "(விருப்பம்)",
    requirementsPlaceholder: "உங்கள் கூடுதல் தேவைகளை இங்கே எழுதலாம்...",
    submit: "விவரங்களை அனுப்புங்கள்",
    submitNote: "உங்கள் மின்னஞ்சல் பயன்பாடு திறக்கப்பட்டு, விவரங்கள் தானாக நிரப்பப்படும்.",
    footerLine: "தரமான உணவு ✦ சிறந்த சேவை ✦ மறக்க முடியாத நிகழ்வுகள்",
  },
  en: {
    emailSubject: "Nalan Catering - Event Details",
    emailBody: ({ name, phone, eventType, date, guests, requirements }) => `
Hello Nalan Catering 🙏,

I would like to enquire about catering service for my event.

Name:
${name}

Mobile Number:
${phone}

Event Type:
${eventType}

Event Date:
${date}

Expected Guests:
${guests}

Additional Requirements:
${requirements || "Not specified"}

I'm sending these details for catering service for my event.

Thanks,
${name}
    `.trim(),
    badge: "Get in Touch",
    headingA: "Let's Plan Your",
    headingB: "Event Today",
    description:
      "Get in touch with Nalan Catering for weddings, birthday parties, family functions, corporate events, and every special occasion. We serve quality catering with traditional flavour.",
    getInTouch: "Get in Touch With Us",
    getInTouchSub:
      "Share your event requirements with us. Our team will be happy to help you find the right catering service.",
    phone: "Phone",
    altPhone: "Alternate Phone",
    email: "Email",
    location: "Location",
    locationValue: "Trichy, Tamil Nadu",
    viewOnMaps: "View location on Google Maps",
    formTitle: "Share Your Details",
    formSub: "Fill in your event details and send them to us.",
    fullName: "Your Name",
    fullNamePlaceholder: "Your Name",
    mobile: "Mobile Number",
    mobilePlaceholder: "Mobile Number",
    eventType: "Event Type",
    eventTypePlaceholder: "e.g. Wedding, Birthday, Corporate Event",
    eventDate: "Event Date",
    guests: "Expected Guests",
    guestsPlaceholder: "Number of guests",
    requirements: "Additional Requirements",
    optional: "(optional)",
    requirementsPlaceholder: "You can write any additional requirements here...",
    submit: "Send Details",
    submitNote: "Your email app will open with the details already filled in.",
    footerLine: "Quality Food ✦ Great Service ✦ Unforgettable Events",
  },
};

function Contact() {
  const isMobile = useIsMobile();
  const t = useTranslations(content);
  const BUSINESS_EMAIL = "nalancateringtrichy@gmail.com";

  // Your exact Google Maps location
  const MAP_URL =
    "https://maps.app.goo.gl/" + "U5s3qdCxq98LFPFQ9";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const eventType = formData.get("eventType");
    const date = formData.get("date");
    const guests = formData.get("guests");
    const requirements = formData.get("requirements");

    const subject = t.emailSubject;

    const body = t.emailBody({
      name,
      phone,
      eventType,
      date,
      guests,
      requirements,
    });

    const mailtoLink =
      `mailto:${BUSINESS_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative
        overflow-hidden
        scroll-mt-[72px]
        md:scroll-mt-[105px]
        py-20
        md:py-28
        px-4
        md:px-6
        bg-gradient-to-b
        from-white
        via-[#F4FBF6]
        to-[#E8F6EC]
      "
    >
      {/* =====================================================
          BACKGROUND GREEN GLOWS
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          opacity: [0.08, 0.14, 0.08],
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
          bg-green-400
          blur-[70px] sm:blur-[130px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          opacity: [0.06, 0.12, 0.06],
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
          bg-green-700
          blur-[75px] sm:blur-[140px]
          pointer-events-none
        "
      />

      {/* =====================================================
          DECORATIVE DOTS
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3,
          repeat: isMobile ? 0 : Infinity,
        }}
        className="
          absolute
          top-[25%]
          left-[8%]
          w-2
          h-2
          rounded-full
          bg-green-500
          hidden
          md:block
        "
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: isMobile ? 0 : Infinity,
          delay: 1,
        }}
        className="
          absolute
          bottom-[25%]
          right-[8%]
          w-2
          h-2
          rounded-full
          bg-green-500
          hidden
          md:block
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center"
        >
          {/* Small label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              flex
              items-center
              justify-center
              gap-3
              mb-5
            "
          >
            <span className="h-px w-10 bg-green-500" />

            <p
              className="
                text-green-700
                text-xs
                md:text-sm
                uppercase
                tracking-[3px]
                font-semibold
              "
            >
              {t.badge}
            </p>

            <span className="h-px w-10 bg-green-500" />
          </motion.div>

          {/* Heading */}

          <h2
            id="contact-heading"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-gray-900
              leading-tight
            "
          >
            {t.headingA}{" "}
            <span className="text-green-700">
              {t.headingB}
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              text-gray-600
              mt-6
              max-w-3xl
              mx-auto
              text-sm
              md:text-base
              leading-7
            "
          >
            {t.description}
          </p>

          {/* Divider */}

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
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              h-[3px]
              bg-green-500
              rounded-full
              mx-auto
              mt-7
            "
          />
        </motion.div>

        {/* =================================================
            CONTACT + FORM
        ================================================== */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            lg:gap-16
            mt-16
            md:mt-20
            items-start
          "
        >

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

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
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="space-y-5"
          >

            {/* Intro */}

            <div className="mb-7">
              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-gray-900
                "
              >
                {t.getInTouch}
              </h3>

              <p
                className="
                  mt-3
                  text-gray-600
                  leading-7
                  text-sm
                  md:text-base
                "
              >
                {t.getInTouchSub}
              </p>
            </div>

            {/* Phone 1 */}

            <motion.a
              href="tel:+918925059589"
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                flex
                items-center
                gap-4
                p-4
                md:p-5
                rounded-2xl
                bg-white/70
                border
                border-green-100
                shadow-sm
                hover:shadow-lg
                hover:border-green-300
                transition-all
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  bg-green-100
                  text-green-700
                  shrink-0
                  group-hover:bg-green-600
                  group-hover:text-white
                  transition-colors
                "
              >
                <Phone size={23} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  {t.phone}
                </h4>

                <p className="text-gray-600 mt-1">
                  +91 89250 59589
                </p>
              </div>
            </motion.a>

            {/* Phone 2 */}

            <motion.a
              href="tel:+919442783393"
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                flex
                items-center
                gap-4
                p-4
                md:p-5
                rounded-2xl
                bg-white/70
                border
                border-green-100
                shadow-sm
                hover:shadow-lg
                hover:border-green-300
                transition-all
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  bg-green-100
                  text-green-700
                  shrink-0
                  group-hover:bg-green-600
                  group-hover:text-white
                  transition-colors
                "
              >
                <Phone size={23} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  {t.altPhone}
                </h4>

                <p className="text-gray-600 mt-1">
                  +91 94427 83393
                </p>
              </div>
            </motion.a>

            {/* Email */}

            <motion.a
              href={`mailto:${BUSINESS_EMAIL}`}
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                flex
                items-center
                gap-4
                p-4
                md:p-5
                rounded-2xl
                bg-white/70
                border
                border-green-100
                shadow-sm
                hover:shadow-lg
                hover:border-green-300
                transition-all
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  bg-green-100
                  text-green-700
                  shrink-0
                  group-hover:bg-green-600
                  group-hover:text-white
                  transition-colors
                "
              >
                <Mail size={23} />
              </div>

              <div className="min-w-0">
                <h4 className="font-bold text-gray-900">
                  {t.email}
                </h4>

                <p className="text-gray-600 mt-1 break-all">
                  {BUSINESS_EMAIL}
                </p>
              </div>
            </motion.a>

            {/* Location */}

            <motion.a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                flex
                items-center
                gap-4
                p-4
                md:p-5
                rounded-2xl
                bg-white/70
                border
                border-green-100
                shadow-sm
                hover:shadow-lg
                hover:border-green-300
                transition-all
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  bg-green-100
                  text-green-700
                  shrink-0
                  group-hover:bg-green-600
                  group-hover:text-white
                  transition-colors
                "
              >
                <MapPin size={23} />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900">
                  {t.location}
                </h4>

                <p className="text-gray-600 mt-1">
                  {t.locationValue}
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="
                  text-green-600
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform
                "
              />
            </motion.a>

            {/* Map button */}

            <motion.a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                mt-2
                py-3
                rounded-xl
                border
                border-green-600
                text-green-700
                font-semibold
                hover:bg-green-600
                hover:text-white
                transition-all
              "
            >
              <MapPin size={18} />
              {t.viewOnMaps}
              <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>

          {/* =================================================
              ENQUIRY FORM
          ================================================== */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="
              relative
              bg-white/80
              backdrop-blur-sm md:backdrop-blur-xl
              p-5
              md:p-8
              rounded-3xl
              border
              border-green-100
              shadow-xl
              overflow-hidden
            "
          >

            {/* Form glow */}

            <div
              className="
                absolute
                -top-24
                -right-24
                w-48
                h-48
                rounded-full
                bg-green-300/20
                blur-3xl
                pointer-events-none
              "
            />

            <div className="relative z-10">

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-gray-900
                "
              >
                {t.formTitle}
              </h3>

              <p
                className="
                  text-gray-500
                  text-sm
                  mt-2
                  mb-7
                "
              >
                {t.formSub}
              </p>

              {/* Name */}

              <label
                htmlFor="name"
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                {t.fullName}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={t.fullNamePlaceholder}
                className="
                  w-full
                  p-3
                  md:p-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  outline-none
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  transition
                  mb-4
                "
              />

              {/* Phone */}

              <label
                htmlFor="phone"
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                {t.mobile}
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder={t.mobilePlaceholder}
                className="
                  w-full
                  p-3
                  md:p-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  outline-none
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  transition
                  mb-4
                "
              />

              {/* Event type */}

              <label
                htmlFor="eventType"
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                {t.eventType}
              </label>

              <input
                id="eventType"
                name="eventType"
                type="text"
                required
                placeholder={t.eventTypePlaceholder}
                className="
                  w-full
                  p-3
                  md:p-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  outline-none
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  transition
                  mb-4
                "
              />

              {/* Date */}

              <label
                htmlFor="date"
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                {t.eventDate}
              </label>

              <input
                id="date"
                name="date"
                type="date"
                required
                className="
                  w-full
                  p-3
                  md:p-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  outline-none
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  transition
                  mb-4
                "
              />

              {/* Guests */}

              <label
                htmlFor="guests"
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                {t.guests}
              </label>

              <input
                id="guests"
                name="guests"
                type="number"
                required
                min="1"
                placeholder={t.guestsPlaceholder}
                className="
                  w-full
                  p-3
                  md:p-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  outline-none
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  transition
                  mb-4
                "
              />

              {/* Optional requirements */}

              <label
                htmlFor="requirements"
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                {t.requirements}
                <span className="text-gray-400 font-normal">
                  {" "}
                  {t.optional}
                </span>
              </label>

              <textarea
                id="requirements"
                name="requirements"
                rows="4"
                placeholder={t.requirementsPlaceholder}
                className="
                  w-full
                  p-3
                  md:p-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  outline-none
                  resize-none
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  transition
                  mb-6
                "
              />

              {/* Submit */}

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-3
                  md:py-4
                  rounded-xl
                  font-semibold
                  shadow-lg
                  shadow-green-600/20
                  transition-colors
                "
              >
                <Mail size={19} />

                {t.submit}

                <ArrowUpRight size={18} />
              </motion.button>

              <p
                className="
                  text-center
                  text-xs
                  text-gray-400
                  mt-4
                "
              >
                {t.submitNote}
              </p>

            </div>
          </motion.form>
        </div>

        {/* =================================================
            BOTTOM TRUST TEXT
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
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            text-center
            mt-14
            md:mt-16
          "
        >
          <p
            className="
              text-green-700/70
              text-xs
              md:text-sm
              font-medium
            "
          >
             {t.footerLine} 
          </p>
        </motion.div>

      </div>

      {/* Bottom accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-1
          bg-gradient-to-r
          from-green-300
          via-green-600
          to-green-300
        "
      />
    </section>
  );
}

export default Contact;

