import { useEffect, useState } from "react";

// =====================================================
// useDiscoveredGalleryImages
//
// Lets a non-technical person add gallery photos WITHOUT
// running `npm run build` again: they just drop a file
// named 1.jpg, 2.jpg, 3.jpg... straight into the
// `gallery` folder next to index.html on the live site
// (or into /public/gallery before building), and it shows
// up on the site automatically the next time the page
// loads.
//
// How it works: since these files live in /public, Vite
// copies them to dist as-is and never touches them again —
// so replacing/adding files on the server doesn't require
// a rebuild. We just probe for numbered files at runtime
// and keep whichever ones actually exist.
// =====================================================

function probeImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function useDiscoveredGalleryImages(folder = "/gallery", maxCount = 40) {
  const [discovered, setDiscovered] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function discover() {
      const candidates = Array.from({ length: maxCount }, (_, i) => i + 1);

      const results = await Promise.all(
        candidates.map(async (n) => {
          const url = `${folder}/${n}.jpg?v=1`;
          const ok = await probeImage(url);
          return ok
            ? { n, src: `${folder}/${n}.jpg`, alt: `Nalan Catering gallery photo ${n}` }
            : null;
        })
      );

      if (cancelled) return;

      const found = results
        .filter(Boolean)
        .sort((a, b) => a.n - b.n)
        .map(({ src, alt }) => ({ src, alt }));

      setDiscovered(found);
    }

    discover();

    return () => {
      cancelled = true;
    };
  }, [folder, maxCount]);

  return discovered;
}

export default useDiscoveredGalleryImages;
