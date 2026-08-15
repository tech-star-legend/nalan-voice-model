NALAN CATERING - OPTIMIZED COMPONENTS

Replace your existing src/components files with the files in this package.

IMPORTANT:
1. The old SmoothScroll component is now only a compatibility wrapper. ScrollEffects owns the single Lenis instance, so you do not get two smooth-scroll engines.
2. ScrollEffects keeps the richer GSAP scroll effects on desktop but avoids the expensive scrub/parallax effects on small mobile screens.
3. Large decorative background glow animations stop looping on mobile. Interactive/button/menu animations remain.
4. Large blur values are reduced on mobile and restored at larger breakpoints.
5. Gallery images use lazy loading/async decoding, and gallery videos use preload="none" to reduce mobile bandwidth and decoding work.
6. Hero image remains high-priority because it is above the fold.
7. SEO.jsx adds title, meta description, robots, Open Graph, canonical URL and LocalBusiness/Caterer structured data without an extra package.

SEO INTEGRATION:
In App.jsx add:

import SEO from "./components/SEO";

Then render <SEO /> once near the top of App's JSX, for example:

function App() {
  return (
    <>
      <SEO />
      <Home />
    </>
  );
}

If your App already has Loader/ScrollEffects/SmoothScroll, keep them as they are. The optimized SmoothScroll no longer creates another Lenis instance.

For best SEO, also set the initial <title> and <meta name="description"> in index.html because those are available before JavaScript executes:

<title>Nalan Catering Trichy | Wedding & Event Catering Services</title>
<meta name="description" content="Nalan Catering in Trichy, Tamil Nadu provides quality South Indian catering for weddings, family functions, birthdays, corporate events and special occasions." />
<meta name="robots" content="index, follow" />

No visual redesign was intentionally made.
