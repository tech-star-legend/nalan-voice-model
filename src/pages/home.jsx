import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Menu from "../components/Menu/Menu";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Booking from "../components/Booking/Booking";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Menu />

        {/* Gallery appears ONLY ONCE */}
        <Gallery />

        <Testimonials />
        <Booking />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Home;