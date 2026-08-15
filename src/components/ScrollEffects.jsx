import { useEffect } from "react";

function ScrollEffects() {
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    // Phones use native scrolling. More importantly, GSAP/Lenis are loaded
    // only on desktop so mobile doesn't have to download/parse them.
    if (mobileQuery.matches) {
      return undefined;
    }

    let destroyed = false;
    let cleanup = () => {};

    const initDesktopScroll = async () => {
      const [lenisModule, gsapModule, scrollTriggerModule] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (destroyed) return;

      const Lenis = lenisModule.default;
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.8,
        touchMultiplier: 1,
        lerp: 0.09,
      });

      let animationFrame;

      const raf = (time) => {
        lenis.raf(time);
        ScrollTrigger.update();
        animationFrame = requestAnimationFrame(raf);
      };

      animationFrame = requestAnimationFrame(raf);

      gsap.utils.toArray(".travel-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.7, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );
      });

      gsap.utils.toArray(".scroll-float").forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 === 0 ? -100 : 100,
          rotate: index % 2 === 0 ? 5 : -5,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      gsap.utils.toArray(".scroll-parallax").forEach((element) => {
        gsap.to(element, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      cleanup = () => {
        cancelAnimationFrame(animationFrame);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    initDesktopScroll();

    return () => {
      destroyed = true;
      cleanup();
    };
  }, []);

  return null;
}

export default ScrollEffects;
