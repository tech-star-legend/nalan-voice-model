import Home from "./pages/home";
import ScrollEffects from "./components/ScrollEffects";
import SEO from "./components/SEO";
import LanguageExperience from "./components/LanguageExperience";

function App() {
  return (
    <>
      <SEO />
      <LanguageExperience />
      <ScrollEffects />
      <Home />
    </>
  );
}

export default App;
