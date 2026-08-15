import { useEffect } from "react";

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

function SEO() {
  useEffect(() => {
    const siteUrl = window.location.origin;
    const title = "Nalan Catering Trichy | Wedding & Event Catering Services";
    const description =
      "Nalan Catering in Trichy, Tamil Nadu provides quality South Indian catering for weddings, family functions, birthdays, corporate events and special occasions.";
    const keywords =
      "Nalan Catering, catering in Trichy, Trichy catering services, wedding catering Trichy, marriage catering Trichy, South Indian catering Trichy, event catering Tamil Nadu";

    document.title = title;

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow");
    setMeta("author", "Nalan Catering");
    setMeta("theme-color", "#166534");

    setProperty("og:type", "website");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", siteUrl);
    setProperty("og:site_name", "Nalan Catering");
    setProperty("og:locale", "en_IN");

    setProperty("twitter:card", "summary");
    setProperty("twitter:title", title);
    setProperty("twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", siteUrl);

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
      url: siteUrl,
      telephone: "+91 89250 59589",
      email: "nalancateringtrichy@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Trichy",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      areaServed: [
        "Trichy",
        "Tamil Nadu",
      ],
      servesCuisine: [
        "South Indian",
        "Tamil Cuisine",
      ],
    });

    return () => {
      // Keep the page metadata in place during normal SPA navigation.
    };
  }, []);

  return null;
}

export default SEO;
