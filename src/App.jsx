import { useState } from "react";

import Home from "./pages/home";
import ScrollEffects from "./components/ScrollEffects";
import SEO from "./components/SEO";
import Intro from "./components/Intro/Intro";

import {
  LanguageProvider,
} from "./i18n/LanguageContext";
import { hasSeenIntro } from "./i18n/useLanguage";

function App() {
  // The intro (logo + language pick + voiceover) only plays
  // once per browser. If a visitor already picked a language
  // — including via the in-dashboard language button, which
  // reloads the homepage — we skip straight to the site.
  const [showIntro, setShowIntro] = useState(() => !hasSeenIntro());

  return (
    <LanguageProvider>
      <SEO />
      <ScrollEffects />

      {showIntro && (
        <Intro onFinish={() => setShowIntro(false)} />
      )}

      <Home />
    </LanguageProvider>
  );
}

export default App;
