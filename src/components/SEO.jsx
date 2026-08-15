import { useEffect } from "react";

function upsertMeta(name, content) {
  let node = document.head.querySelector(`meta[name="${name}"]`);
  if (!node) { node = document.createElement("meta"); node.setAttribute("name", name); document.head.appendChild(node); }
  node.setAttribute("content", content);
}

function upsertProperty(property, content) {
  let node = document.head.querySelector(`meta[property="${property}"]`);
  if (!node) { node = document.createElement("meta"); node.setAttribute("property", property); document.head.appendChild(node); }
  node.setAttribute("content", content);
}

function link(rel, href, extra = {}) {
  const selector = Object.entries({ rel, ...extra }).map(([key, value]) => `[${key}="${value}"]`).join("");
  let node = document.head.querySelector(`link${selector}`);
  if (!node) { node = document.createElement("link"); node.rel = rel; Object.entries(extra).forEach(([key, value]) => node.setAttribute(key, value)); document.head.appendChild(node); }
  node.href = href;
}

function SEO() {
  useEffect(() => {
    const siteUrl = "https://www.nalancateringtrich.com";
    const language = /^\/en\/?$/.test(window.location.pathname) || localStorage.getItem("nalan-language") === "en" ? "en" : "ta";
    const currentUrl = language === "en" ? `${siteUrl}/en/` : `${siteUrl}/ta/`;
    const title = language === "en"
      ? "Nalan Catering Trichy | Wedding & Event Catering Services"
      : "நளன் கேட்டரிங் திருச்சி | திருமணம் & விழா கேட்டரிங் சேவைகள்";
    const description = language === "en"
      ? "Nalan Catering in Srirangam, Trichy provides traditional Tamil and South Indian catering for weddings, birthdays, family functions, corporate events and special occasions."
      : "ஸ்ரீரங்கம், திருச்சியில் நளன் கேட்டரிங் திருமணம், பிறந்தநாள், குடும்ப விழா, நிறுவன நிகழ்வுகள் மற்றும் அனைத்து சிறப்பு நிகழ்ச்சிகளுக்கும் பாரம்பரிய தமிழ் மற்றும் தென்னிந்திய உணவுகளை வழங்குகிறது.";

    document.title = title;
    upsertMeta("description", description);
    upsertMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta("author", "Nalan Catering");
    upsertMeta("theme-color", "#166534");
    upsertMeta("viewport", "width=device-width, initial-scale=1, viewport-fit=cover");
    upsertProperty("og:type", "website");
    upsertProperty("og:title", title);
    upsertProperty("og:description", description);
    upsertProperty("og:url", currentUrl);
    upsertProperty("og:site_name", "Nalan Catering");
    upsertProperty("og:locale", language === "en" ? "en_IN" : "ta_IN");
    upsertProperty("og:image", `${siteUrl}/favicon.svg`);
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);

    link("canonical", currentUrl);
    link("alternate", `${siteUrl}/en/`, { hreflang: "en-IN" });
    link("alternate", `${siteUrl}/ta/`, { hreflang: "ta-IN" });
    link("alternate", `${siteUrl}/`, { hreflang: "x-default" });

    const schemaId = "nalan-catering-structured-data";
    let schema = document.getElementById(schemaId);
    if (!schema) { schema = document.createElement("script"); schema.id = schemaId; schema.type = "application/ld+json"; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Caterer",
          "@id": `${siteUrl}/#business`,
          name: "Nalan Catering",
          url: siteUrl,
          telephone: "+91 89250 59589",
          email: "nalancateringtrichy@gmail.com",
          description,
          address: { "@type": "PostalAddress", streetAddress: "13, Viyasaraja nagar, Mangamma nagar, Amma Mandapam road", addressLocality: "Srirangam, Trichy", postalCode: "620006", addressRegion: "Tamil Nadu", addressCountry: "IN" },
          areaServed: ["Srirangam", "Trichy", "Tamil Nadu"],
          servesCuisine: ["Tamil Cuisine", "South Indian Cuisine"],
          slogan: "Quality in Every Bite, Forever Right."
        },
        { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Nalan Catering", publisher: { "@id": `${siteUrl}/#business` } }
      ]
    });
  }, []);
  return null;
}

export default SEO;
