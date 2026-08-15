import { Phone, Mail, MapPin } from "lucide-react";
import nalanLogo from "../../assets/images/nalan-logo.jpg";

function Footer() {
  const language = localStorage.getItem("nalan-language") === "en" ? "en" : "ta";
  const address = language === "en"
    ? "13, Viyasaraja nagar, Mangamma nagar, Amma Mandapam road, Srirangam, Trichy - 620006"
    : "13, வியாசராஜ நகர், மங்கம்மா நகர், அம்மா மண்டபம் ரோடு, ஶ்ரீரங்கம், திருச்சி - 620006";

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="relative overflow-hidden bg-[#063b1c] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <button type="button" onClick={() => go("home")} className="flex items-center gap-4 text-left">
            <img src={nalanLogo} alt="Nalan Catering Logo" className="h-16 w-16 rounded-xl object-contain shadow-lg" />
            <div><h2 className="text-xl font-bold text-green-50 md:text-2xl">{language === "en" ? "Nalan Catering" : "நளன் கேட்டரிங்"}</h2><p className="mt-2 text-xs leading-5 text-green-200 md:text-sm">Quality in Every Bite, Forever Right.</p></div>
          </button>
          <p className="mt-5 max-w-sm text-sm leading-7 text-green-100/60">{language === "en" ? "Traditional Tamil taste, dependable service and memorable celebrations." : "பாரம்பரிய தமிழ் சுவை • சிறந்த சேவை • இனிய நினைவுகள்"}</p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-green-50">{language === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-green-100/65">
            {["home", "about", "services", "menu", "gallery", "contact"].map((id) => <button key={id} type="button" onClick={() => go(id)} className="text-left transition hover:text-white">{({ home: language === "en" ? "Home" : "முகப்பு", about: language === "en" ? "About Us" : "எங்களை பற்றி", services: language === "en" ? "Services" : "சேவைகள்", menu: language === "en" ? "Menu" : "உணவு பட்டியல்", gallery: language === "en" ? "Gallery" : "புகைப்படங்கள்", contact: language === "en" ? "Contact" : "தொடர்பு" })[id]}</button>)}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-green-50">{language === "en" ? "Contact Us" : "தொடர்புக்கு"}</h3>
          <div className="space-y-4 text-sm text-green-100/70">
            <a href="tel:+918925059589" className="flex items-start gap-3 hover:text-white"><Phone size={18} className="mt-0.5 shrink-0" />+91 89250 59589</a>
            <a href="mailto:nalancateringtrichy@gmail.com" className="flex items-start gap-3 break-all hover:text-white"><Mail size={18} className="mt-0.5 shrink-0" />nalancateringtrichy@gmail.com</a>
            <a href="https://maps.app.goo.gl/U5s3qdCxq98LFPFQ9" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-white"><MapPin size={18} className="mt-0.5 shrink-0" /><span>{address}</span></a>
          </div>
        </div>
      </div>
      <div className="border-t border-green-400/20 px-5 py-4 text-center text-xs text-green-100/40">© 2026 Nalan Catering. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
