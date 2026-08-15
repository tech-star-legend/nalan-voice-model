import { motion } from "framer-motion";
import useIsMobile from "../useIsMobile";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import nalanLogo from "../../assets/images/nalan-logo.jpg";

function Footer() {
  const isMobile = useIsMobile();
  const language = localStorage.getItem("nalan-language") === "en" ? "en" : "ta";
  const BUSINESS_EMAIL = "nalancateringtrichy@gmail.com";
  const MAP_URL = "https://maps.app.goo.gl/U5s3qdCxq98LFPFQ9";

  const content = language === "en" ? {
    brand: "Nalan Catering", tagline: "Quality in Every Bite, Forever Right.", summary: "Traditional Tamil taste, dependable service and memorable celebrations.",
    quick: "Quick Links", contact: "Contact Us", home: "Home", about: "About Us", services: "Services", menu: "Menu", gallery: "Gallery",
    location: "13, Viyasaraja nagar, Mangamma nagar, Amma Mandapam road, Srirangam, Trichy - 620006",
    copyright: "© 2026 Nalan Catering. All Rights Reserved.", developer: "Developed by", developerName: "Com SR Infotech"
  } : {
    brand: "நளன் கேட்டரிங்", tagline: "உணவில் தரம் என்றும் நிரந்தரம்", summary: "பாரம்பரிய தமிழ் சுவை • சிறந்த சேவை • இனிய நினைவுகள்",
    quick: "விரைவு இணைப்புகள்", contact: "தொடர்புக்கு", home: "முகப்பு", about: "எங்களை பற்றி", services: "சேவைகள்", menu: "உணவு பட்டியல்", gallery: "புகைப்படங்கள்",
    location: "13, வியாசராஜ நகர், மங்கம்மா நகர், அம்மா மண்டபம் ரோடு, ஶ்ரீரங்கம், திருச்சி - 620006",
    copyright: "© 2026 Nalan Catering. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", developer: "உருவாக்கம்", developerName: "Com SR Infotech"
  };

  const links = [
    [content.home, "home"], [content.about, "about"], [content.services, "services"],
    [content.menu, "menu"], [content.gallery, "gallery"], [content.contact, "contact"]
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#063b1c] text-white">
      {/* The same ambient footer animation is intentionally active on mobile too. */}
      <motion.div animate={{ x: [0, 45, 0], y: [0, -25, 0], opacity: [0.08, 0.16, 0.08] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-green-300 blur-[70px] sm:blur-[130px] pointer-events-none" />
      <motion.div animate={{ x: [0, -40, 0], y: [0, 25, 0], opacity: [0.06, 0.14, 0.06] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-green-400 blur-[75px] sm:blur-[140px] pointer-events-none" />
      <motion.div animate={{ opacity: [0.25, 0.8, 0.25], scale: [1, 1.4, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[8%] h-2 w-2 rounded-full bg-green-300" />
      <motion.div animate={{ opacity: [0.25, 0.8, 0.25], scale: [1, 1.4, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-green-300" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-16 md:px-6 md:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <motion.button type="button" onClick={() => scrollToSection("home")} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-4 bg-transparent p-0 text-left">
              <img src={nalanLogo} alt="Nalan Catering Logo" className="h-16 w-16 shrink-0 rounded-xl object-contain shadow-lg shadow-green-950/40 md:h-20 md:w-20" />
              <div><h2 className="text-xl font-bold text-green-50 md:text-2xl">{content.brand}</h2><p className="mt-2 text-xs leading-5 text-green-200 md:text-sm">{content.tagline}</p></div>
            </motion.button>
            <p className="mt-5 max-w-sm text-sm leading-7 text-green-100/60">{content.summary}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h3 className="mb-5 text-lg font-bold text-green-50 md:text-xl">{content.quick}</h3>
            <ul className="space-y-3">
              {links.map(([name, id]) => <li key={id}><button type="button" onClick={() => scrollToSection(id)} className="group flex items-center gap-2 text-left text-sm text-green-100/60 transition-colors hover:text-green-200"><span className="h-1.5 w-1.5 rounded-full bg-green-400/50 transition-all group-hover:scale-125 group-hover:bg-green-300" />{name}</button></li>)}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="mb-5 text-lg font-bold text-green-50 md:text-xl">{content.contact}</h3>
            <div className="space-y-4">
              <a href="tel:+918925059589" className="group flex items-center gap-3 text-sm text-green-100/60 hover:text-green-200"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-green-400/20 bg-green-900/40"><Phone size={17} /></span>+91 89250 59589</a>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="group flex items-center gap-3 break-all text-sm text-green-100/60 hover:text-green-200"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-green-400/20 bg-green-900/40"><Mail size={17} /></span>{BUSINESS_EMAIL}</a>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-sm text-green-100/60 hover:text-green-200"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-green-400/20 bg-green-900/40"><MapPin size={17} /></span><span>{content.location}</span><ArrowUpRight size={15} className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent md:mt-16" />
        <div className="pt-6 text-center text-xs text-green-100/40 md:text-sm">{content.copyright}</div>
      </div>

      {/* Original Com SR Infotech developer animation restored for both desktop and mobile. */}
      <div className="relative z-20 w-full overflow-hidden border-t border-red-400/20 bg-[#032812]">
        <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 top-0 h-[2px] w-[45%] bg-gradient-to-r from-transparent via-rose-400 to-transparent shadow-[0_0_12px_rgba(244,63,94,0.8)] pointer-events-none" />
        <motion.div animate={{ x: ["300%", "-100%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }} className="absolute left-0 top-0 h-[2px] w-[35%] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_12px_rgba(59,130,246,0.8)] pointer-events-none" />
        <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-3 text-center">
          <motion.span animate={{ scale: [0.7, 1.35, 0.7], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
          <span className="text-xs text-white/50 md:text-sm">{content.developer}</span>
          <motion.a href="https://www.comsrinfotech.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} className="text-sm font-bold tracking-wide text-white transition-colors hover:text-rose-300 md:text-base">{content.developerName}</motion.a>
          <motion.span animate={{ scale: [0.7, 1.35, 0.7], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
