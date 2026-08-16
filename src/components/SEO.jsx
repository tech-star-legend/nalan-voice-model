import { useEffect } from "react";
import { useLanguage } from "../i18n/useLanguage";

const SITE_URL = "https://www.nalancateringtrich.com";

const COPY = {
  ta: {
    title: "நளன் கேட்டரிங் திருச்சி | திருமணம் மற்றும் விழா கேட்டரிங் சேவைகள்",
    description:
      "நளன் கேட்டரிங் திருச்சி, தமிழ்நாட்டில் திருமணம், குடும்ப விழாக்கள், பிறந்தநாள் மற்றும் நிறுவன நிகழ்வுகளுக்கு தரமான தென்னிந்திய கேட்டரிங் சேவையை வழங்குகிறது.",
    keywords:
      "நளன் கேட்டரிங், திருச்சி கேட்டரிங், திருமண கேட்டரிங் திருச்சி, தென்னிந்திய கேட்டரிங், Nalan Catering, catering in Trichy",
    locale: "ta_IN",
  },
  en: {
    title: "Nalan Catering Trichy | Wedding & Event Catering Services",
    description:
      "Nalan Catering in Trichy, Tamil Nadu provides quality South Indian catering for weddings, family functions, birthdays, corporate events and special occasions.",
    keywords:
      "Nalan Catering, catering in Trichy, Trichy catering services, wedding catering Trichy, marriage catering Trichy, South Indian catering Trichy, event catering Tamil Nadu",
    locale: "en_IN",
  },
};

function setMeta(name, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setProperty(property, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setLink(rel, href, extraAttrs = {}) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);

  Object.entries(extraAttrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function SEO() {
  const { language } = useLanguage();

  useEffect(() => {
    const copy = COPY[language] || COPY.ta;
    const { title, description, keywords, locale } = copy;

    document.title = title;

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow");
    setMeta("author", "Nalan Catering");
    setMeta("theme-color", "#166534");

    setProperty("og:type", "website");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", SITE_URL);
    setProperty("og:site_name", "Nalan Catering");
    setProperty("og:locale", locale);

    setProperty("twitter:card", "summary");
    setProperty("twitter:title", title);
    setProperty("twitter:description", description);

    // Single canonical URL: language is a client-side toggle
    // on the same page, not a separate route.
    setLink("canonical", SITE_URL);

    const schemaId = "nalan-catering-local-business-schema";
    let schema = document.getElementById(schemaId);

    if (!schema) {
      schema = document.createElement("script");
      schema.id = schemaId;
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Caterer",
      name: "Nalan Catering",
      description,
      url: SITE_URL,
      telephone: "+91 89250 59589",
      email: "nalancateringtrichy@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "13, Viyasaraja Nagar, Mangamma Nagar, Amma Mandapam Road, Srirangam",
        addressLocality: "Trichy",
        addressRegion: "Tamil Nadu",
        postalCode: "620006",
        addressCountry: "IN",
      },
      areaServed: ["Trichy", "Srirangam", "Tamil Nadu"],
      servesCuisine: ["South Indian", "Tamil Cuisine"],
      priceRange: "₹₹",
      availableLanguage: ["Tamil", "English"],
    });
  }, [language]);

  return null;
}

export default SEO;
