import { useEffect, useState } from "react";
import { Images, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import fallback1 from "../../assets/images/img1.jpg";
import fallback2 from "../../assets/images/img2.jpg";
import fallback3 from "../../assets/images/img3.jpg";
import fallback4 from "../../assets/images/img4.jpg";
import fallback5 from "../../assets/images/img5.jpg";
import fallbackVideo1 from "../../assets/videos/gallery1.mp4";
import fallbackVideo2 from "../../assets/videos/gallery2.mp4";
import fallbackVideo3 from "../../assets/videos/gallery3.mp4";

const fallbackImages = [fallback1, fallback2, fallback3, fallback4, fallback5];
const fallbackVideos = [fallbackVideo1, fallbackVideo2, fallbackVideo3];

// One shared media source for Tamil and English. Language changes only the UI text.
async function discoverSharedGallery() {
  const found = [];
  let consecutiveMisses = 0;
  for (let index = 1; index <= 40; index += 1) {
    let foundThisIndex = false;
    for (const ext of ["jpg", "jpeg", "png", "webp", "avif"]) {
      const url = `/gallery/${index}.${ext}`;
      try {
        const response = await fetch(url, { method: "HEAD", cache: "no-store" });
        if (response.ok) {
          found.push(url);
          foundThisIndex = true;
          break;
        }
      } catch {
        // Keep bundled fallback images if the static host does not allow HEAD.
      }
    }
    consecutiveMisses = foundThisIndex ? 0 : consecutiveMisses + 1;
    if (consecutiveMisses >= 2 && found.length) break;
  }
  return found;
}

function Gallery() {
  const [language, setLanguage] = useState(localStorage.getItem("nalan-language") === "en" ? "en" : "ta");
  const [images, setImages] = useState(fallbackImages);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const sync = () => setLanguage(localStorage.getItem("nalan-language") === "en" ? "en" : "ta");
    window.addEventListener("storage", sync);
    discoverSharedGallery().then((files) => {
      if (files.length) setImages(files);
    });
    return () => window.removeEventListener("storage", sync);
  }, []);

  const next = () => setActive((value) => (value + 1) % images.length);
  const previous = () => setActive((value) => (value - 1 + images.length) % images.length);

  const copy = language === "en"
    ? {
        label: "OUR MEMORIES", title: "Every Celebration Becomes", titleAccent: "A Beautiful Memory",
        description: "Explore moments from weddings, birthdays, family celebrations and special events served by Nalan Catering.",
        photos: "Photos", upload: "Add images to dist/gallery after your build.", videos: "Videos"
      }
    : {
        label: "எங்கள் நினைவுகள்", title: "ஒவ்வொரு விழாவும்", titleAccent: "ஒரு இனிய நினைவு",
        description: "நளன் கேட்டரிங் வழங்கும் திருமணம், பிறந்தநாள், குடும்ப விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகளின் அழகான தருணங்களை காணுங்கள்.",
        photos: "புகைப்படங்கள்", upload: "Build செய்த பிறகு dist/gallery கோப்புறையில் படங்களை சேர்க்கவும்.", videos: "வீடியோக்கள்"
      };

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#071a11] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2"><Images size={18} className="text-green-400" /><span className="text-xs font-semibold uppercase tracking-[3px] text-green-300 sm:text-sm">{copy.label}</span></div>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{copy.title}<span className="block text-green-400">{copy.titleAccent}</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{copy.description}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div><h3 className="flex items-center gap-2 text-xl font-bold sm:text-2xl"><Images size={21} className="text-green-400" />{copy.photos}</h3><p className="mt-1 text-xs text-white/50 sm:text-sm">{copy.upload}</p></div>
              <div className="flex gap-2"><button type="button" onClick={previous} aria-label="Previous image" className="rounded-full border border-green-400/30 p-2 hover:bg-green-400/10"><ChevronLeft size={18} /></button><button type="button" onClick={next} aria-label="Next image" className="rounded-full border border-green-400/30 p-2 hover:bg-green-400/10"><ChevronRight size={18} /></button></div>
            </div>
            <button type="button" onClick={() => setSelected(images[active])} className="group block w-full overflow-hidden rounded-3xl border border-green-400/20 bg-black/20 shadow-2xl">
              <img src={images[active]} alt={`${language === "en" ? "Nalan Catering Trichy gallery" : "நளன் கேட்டரிங் திருச்சி புகைப்படம்"} ${active + 1}`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            </button>
            <div className="mt-3 flex justify-center gap-1.5">{images.map((_, index) => <button key={index} type="button" aria-label={`Open image ${index + 1}`} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${index === active ? "w-7 bg-green-400" : "w-1.5 bg-white/25"}`} />)}</div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2"><Play size={21} className="text-green-400" /><h3 className="text-xl font-bold sm:text-2xl">{copy.videos}</h3></div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {fallbackVideos.map((video, index) => <button type="button" key={video} onClick={() => setSelected(video)} className="group overflow-hidden rounded-2xl border border-green-400/20 bg-black/20 text-left"><video src={video} muted playsInline preload="metadata" className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><span className="block px-3 py-2 text-xs text-white/70">{language === "en" ? `Nalan Catering event video ${index + 1}` : `நளன் கேட்டரிங் நிகழ்வு வீடியோ ${index + 1}`}</span></button>)}
            </div>
          </div>
        </div>
      </div>

      {selected && <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4" onClick={() => setSelected(null)}><button type="button" aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white"><X size={22} /></button>{selected.endsWith(".mp4") ? <video src={selected} controls autoPlay playsInline className="max-h-[88vh] max-w-full rounded-2xl" onClick={(event) => event.stopPropagation()} /> : <img src={selected} alt="Nalan Catering gallery" className="max-h-[88vh] max-w-full rounded-2xl object-contain" onClick={(event) => event.stopPropagation()} />}</div>}
    </section>
  );
}

export default Gallery;
