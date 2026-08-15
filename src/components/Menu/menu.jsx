import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, ChevronRight, Flame } from "lucide-react";

const categories = [
  { ta: "முதல் நாள் இரவு டிபன்", en: "First Night Dinner", items: ["பன் அல்வா", "இட்லி", "இடியாப்பம்", "ஆனியன் ஊத்தாப்பம்", "சில்லி புரோட்டா", "வெஜ் புலாவ்", "சோலா பூரி", "வெள்ளையாப்பம்", "வெஜ் நூடுல்ஸ்", "தயிர் சாதம்", "ஊறுகாய்", "வெஜ் குருமா", "சென்னா மசால்", "தேங்காய் சட்னி", "கார சட்னி", "மல்லி சட்னி", "சாம்பார்", "பனங்கற்கண்டு பால்"] },
  { ta: "காலை டிபன்", en: "Breakfast", items: ["கோதுமை அல்வா", "புரூட் கேசரி", "இனிப்பு பனியாரம்", "நெய் புட்டு", "இளநீர் இட்லி", "நெய் ரோஸ்ட்", "அடை தோசை", "நெய் பொங்கல்", "மெது வடை", "பீட்ரூட் பூரி", "எண்ணெய் பொடி", "தேங்காய் சட்னி", "தக்காளி சட்னி", "உளுந்தச் சட்னி", "சாம்பார்", "பில்டர் காபி"] },
  { ta: "மதிய விருந்து", en: "Lunch", items: ["ஸ்வீட்", "கோஸ் கேரட் பீன்ஸ் பொரியல்", "வெண்டைக்காய் தக்காளி பச்சடி", "நெல்லை அவியல்", "சேனை சாப்ஸ்", "காளிபிளவர் – 65", "வெஜ் பிரியாணி", "மல்லி சாதம் (அ)தேங்காய் சாதம்", "தயிர் பச்சடி", "சாதம்", "நெய் பருப்பு", "சாம்பார்", "வத்தக்குழம்பு", "ரசம்", "நெய் பாயசம்", "அப்பளம்", "கெட்டி மோர்", "ஊறுகாய்"] },
  { ta: "இரவு டிபன்", en: "Dinner", items: ["இளநீர் அல்வா", "பன் அல்வா", "இளநீர் இட்லி", "இடியாப்பம்", "ஆனியன் ஊத்தாப்பம்", "கொத்து புரோட்டா", "காளான் பிரியாணி", "வெஜ் லாலிபாப்", "ரொமாலி", "வெஜ் நூடுல்ஸ்", "தயிர் சாதம்", "ஊறுகாய்", "வெஜ் குருமா", "பட்டர் பன்னீர் மசால்", "தேங்காய் சட்னி", "கார சட்னி", "மல்லி சட்னி", "சாம்பார்", "மசாலா பால்", "ஜிகர்தண்டா"] }
];

const itemEnglish = {
  "பன் அல்வா": "Bun Halwa", "இட்லி": "Idli", "இடியாப்பம்": "Idiyappam", "ஆனியன் ஊத்தாப்பம்": "Onion Uthappam", "சில்லி புரோட்டா": "Chilli Parotta", "வெஜ் புலாவ்": "Veg Pulao", "சோலா பூரி": "Chola Poori", "வெள்ளையாப்பம்": "Vellayappam", "வெஜ் நூடுல்ஸ்": "Veg Noodles", "தயிர் சாதம்": "Curd Rice", "ஊறுகாய்": "Pickle", "வெஜ் குருமா": "Veg Kurma", "சென்னா மசால்": "Channa Masala", "தேங்காய் சட்னி": "Coconut Chutney", "கார சட்னி": "Spicy Chutney", "மல்லி சட்னி": "Coriander Chutney", "சாம்பார்": "Sambar", "பனங்கற்கண்டு பால்": "Palm Sugar Milk", "கோதுமை அல்வா": "Wheat Halwa", "புரூட் கேசரி": "Fruit Kesari", "இனிப்பு பனியாரம்": "Sweet Paniyaram", "நெய் புட்டு": "Ghee Puttu", "இளநீர் இட்லி": "Tender Coconut Idli", "நெய் ரோஸ்ட்": "Ghee Roast", "அடை தோசை": "Adai Dosa", "நெய் பொங்கல்": "Ghee Pongal", "மெது வடை": "Medu Vada", "பீட்ரூட் பூரி": "Beetroot Poori", "எண்ணெய் பொடி": "Idli Podi", "தக்காளி சட்னி": "Tomato Chutney", "உளுந்தச் சட்னி": "Urad Dal Chutney", "பில்டர் காபி": "Filter Coffee", "ஸ்வீட்": "Sweet", "கோஸ் கேரட் பீன்ஸ் பொரியல்": "Cabbage, Carrot & Beans Poriyal", "வெண்டைக்காய் தக்காளி பச்சடி": "Okra Tomato Pachadi", "நெல்லை அவியல்": "Nellai Avial", "சேனை சாப்ஸ்": "Elephant Yam Chops", "காளிபிளவர் – 65": "Cauliflower 65", "வெஜ் பிரியாணி": "Veg Biryani", "மல்லி சாதம் (அ)தேங்காய் சாதம்": "Coriander Rice / Coconut Rice", "தயிர் பச்சடி": "Curd Pachadi", "சாதம்": "Steamed Rice", "நெய் பருப்பு": "Ghee Dal", "வத்தக்குழம்பு": "Vatha Kuzhambu", "ரசம்": "Rasam", "நெய் பாயசம்": "Ghee Payasam", "அப்பளம்": "Appalam", "கெட்டி மோர்": "Thick Buttermilk", "இளநீர் அல்வா": "Tender Coconut Halwa", "கொத்து புரோட்டா": "Kothu Parotta", "காளான் பிரியாணி": "Mushroom Biryani", "வெஜ் லாலிபாப்": "Veg Lollipop", "ரொமாலி": "Rumali Roti", "பட்டர் பன்னீர் மசால்": "Butter Paneer Masala", "மசாலா பால்": "Masala Milk", "ஜிகர்தண்டா": "Jigarthanda"
};

function Menu() {
  const [active, setActive] = useState(0);
  const [language, setLanguage] = useState(localStorage.getItem("nalan-language") === "en" ? "en" : "ta");
  const [potOpen, setPotOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const sync = () => setLanguage(localStorage.getItem("nalan-language") === "en" ? "en" : "ta");
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const chooseCategory = (index) => {
    if (index === active && potOpen) return;
    setAnimating(true);
    setPotOpen(false);
    window.setTimeout(() => {
      setActive(index);
      setPotOpen(true);
      setAnimating(false);
    }, 650);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPotOpen(false), 20000);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const category = categories[active];
  const title = language === "en" ? category.en : category.ta;
  const items = category.items;

  return (
    <section id="menu" className="relative overflow-hidden bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[3px] text-green-600">{language === "en" ? "OUR MENU" : "எங்கள் உணவு பட்டியல்"}</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">{language === "en" ? "A Feast of " : "சுவையின் "}<span className="text-[#166534]">{language === "en" ? "Exceptional Flavours" : "சிறப்பு விருந்து"}</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">{language === "en" ? "Traditional Tamil cuisine prepared with care for weddings, family functions, birthdays and every special occasion." : "பாரம்பரிய தமிழ் உணவுகளிலிருந்து சிறப்பு விருந்துகள் வரை, திருமணம், குடும்ப விழா, பிறந்தநாள் மற்றும் அனைத்து நிகழ்ச்சிகளுக்கும் ஏற்ற சுவையான உணவு வகைகளை வழங்குகிறோம்."}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5 md:mt-12">
          {categories.map((cat, index) => (
            <button key={cat.ta} type="button" onClick={() => chooseCategory(index)} className={`rounded-full px-4 py-2.5 text-xs font-semibold transition sm:text-sm md:px-5 md:py-3 md:text-base ${active === index ? "bg-[#166534] text-white shadow-lg" : "border border-green-200 bg-white text-gray-700 hover:bg-green-50"}`}>
              {language === "en" ? cat.en : cat.ta}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative mx-auto flex h-44 max-w-md items-end justify-center sm:h-52">
            <AnimatePresence>
              {potOpen && !animating && (
                <motion.div initial={{ opacity: 0, y: 30, scale: .9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} className="absolute top-0 z-20 text-center">
                  <motion.div animate={{ y: [0, -5, 0], opacity: [.25, .65, .25] }} transition={{ duration: 2.2, repeat: Infinity }} className="mx-auto mb-1 h-8 w-16 rounded-full bg-gray-400/20 blur-md" />
                  <motion.h3 initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .15 }} className="text-2xl font-black tracking-wide text-green-800 sm:text-3xl">{title}</motion.h3>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div animate={{ y: potOpen ? 14 : 0 }} className="relative w-56 sm:w-64">
              <div className="absolute -top-3 left-1/2 z-20 h-8 w-48 -translate-x-1/2 rounded-[50%] border-4 border-gray-700 bg-gray-900 shadow-xl sm:w-56" />
              <motion.div animate={{ y: potOpen ? -30 : 0, rotateX: potOpen ? 48 : 0 }} transition={{ duration: .55, ease: [0.22,1,0.36,1] }} className="absolute -top-5 left-1/2 z-30 h-7 w-48 -translate-x-1/2 rounded-[50%] border-2 border-gray-600 bg-gray-800 shadow-lg sm:w-56" />
              <div className="h-24 rounded-[0_0_45px_45px] border-x-4 border-b-4 border-gray-700 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-950 shadow-[0_20px_35px_rgba(0,0,0,.25)] sm:h-28" />
              <div className="absolute bottom-1 left-1/2 h-2 w-40 -translate-x-1/2 rounded-full bg-black/50 blur-sm" />
              <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-2"><span className="h-2 w-12 rounded-full bg-gray-700" /><span className="h-2 w-12 rounded-full bg-gray-700" /></div>
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {potOpen && (
              <motion.div key={active} initial={{ opacity: 0, y: 35, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -25 }} transition={{ duration: .55 }} className="overflow-hidden rounded-[28px] border border-green-100 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,.08)] md:p-8">
                <div className="mb-5 flex items-center gap-2 text-green-700"><ChefHat size={20} /><span className="font-bold">{language === "en" ? "Today's selection" : "இன்றைய உணவு தேர்வு"}</span><Flame size={18} /></div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <motion.div key={`${item}-${index}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .025 }} className="rounded-2xl border border-green-100 bg-green-50/50 px-4 py-3 text-sm font-medium text-gray-800">{language === "en" ? itemEnglish[item] || item : item}</motion.div>
                  ))}
                </div>
                <button type="button" onClick={() => setPotOpen(false)} className="mx-auto mt-6 flex items-center gap-2 rounded-full border border-green-200 px-4 py-2 text-xs font-semibold text-green-700 hover:bg-green-50">{language === "en" ? "Close menu" : "மெனுவை மூடுக"}<ChevronRight size={14} /></button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Menu;
