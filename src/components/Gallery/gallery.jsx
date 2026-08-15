import { useEffect, useRef, useState } from "react";

import {
  Images,
  Video,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// =====================================================
// IMAGES
// =====================================================

import galleryImage1 from "../../assets/images/img1.jpg";
import galleryImage2 from "../../assets/images/img2.jpg";
import galleryImage3 from "../../assets/images/img3.jpg";
import galleryImage4 from "../../assets/images/img4.jpg";
import galleryImage5 from "../../assets/images/img5.jpg";

// =====================================================
// VIDEOS
// =====================================================

import galleryVideo1 from "../../assets/videos/gallery1.mp4";
import galleryVideo2 from "../../assets/videos/gallery2.mp4";
import galleryVideo3 from "../../assets/videos/gallery3.mp4";


// =====================================================
// COMPONENT
// =====================================================

function Gallery() {
  // ===================================================
  // DATA
  // ===================================================

  const images = [
    {
      src: galleryImage1,
      alt: "Nalan Catering wedding catering service in Trichy",
    },
    {
      src: galleryImage2,
      alt: "Traditional Tamil food catering by Nalan Catering",
    },
    {
      src: galleryImage3,
      alt: "Nalan Catering food arrangement for a special event",
    },
    {
      src: galleryImage4,
      alt: "Wedding food and catering service by Nalan Catering",
    },
    {
      src: galleryImage5,
      alt: "Traditional South Indian catering service in Trichy",
    },
  ];

  const videos = [
    {
      src: galleryVideo1,
      title: "Nalan Catering customer feedback",
    },
    {
      src: galleryVideo2,
      title: "Nalan Catering event and food service",
    },
    {
      src: galleryVideo3,
      title: "Nalan Catering celebration and catering service",
    },
  ];


  // ===================================================
  // INFINITE CAROUSEL DATA
  //
  // [LAST] [1] [2] [3] [4] [5] [FIRST]
  //
  // This prevents the visible jump when looping.
  // ===================================================

  const infiniteImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  const infiniteVideos = [
    videos[videos.length - 1],
    ...videos,
    videos[0],
  ];


  // ===================================================
  // CAROUSEL STATE
  //
  // Start at 1 because index 0 is the cloned last item.
  // ===================================================

  const [imageIndex, setImageIndex] = useState(1);
  const [videoIndex, setVideoIndex] = useState(1);

  const [imageTransition, setImageTransition] = useState(true);
  const [videoTransition, setVideoTransition] = useState(true);


  // ===================================================
  // POPUP STATE
  // ===================================================

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);


  // ===================================================
  // VIEWPORT REFERENCES
  // ===================================================

  const imageViewportRef = useRef(null);
  const videoViewportRef = useRef(null);


  // ===================================================
  // VIEWPORT WIDTH
  // ===================================================

  const [imageStep, setImageStep] = useState(0);
  const [videoStep, setVideoStep] = useState(0);


  // ===================================================
  // AUTOPLAY PAUSE FLAGS
  //
  // Used so a manual swipe / arrow click / dot click
  // doesn't get immediately fought by the autoplay
  // interval while the loop is resetting.
  // ===================================================

  const imagePausedRef = useRef(false);
  const videoPausedRef = useRef(false);

  const imagePauseTimeoutRef = useRef(null);
  const videoPauseTimeoutRef = useRef(null);

  const pauseImageAutoplay = () => {
    imagePausedRef.current = true;

    if (imagePauseTimeoutRef.current) {
      clearTimeout(imagePauseTimeoutRef.current);
    }

    imagePauseTimeoutRef.current = setTimeout(() => {
      imagePausedRef.current = false;
    }, 4000);
  };

  const pauseVideoAutoplay = () => {
    videoPausedRef.current = true;

    if (videoPauseTimeoutRef.current) {
      clearTimeout(videoPauseTimeoutRef.current);
    }

    videoPauseTimeoutRef.current = setTimeout(() => {
      videoPausedRef.current = false;
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (imagePauseTimeoutRef.current) {
        clearTimeout(imagePauseTimeoutRef.current);
      }

      if (videoPauseTimeoutRef.current) {
        clearTimeout(videoPauseTimeoutRef.current);
      }
    };
  }, []);


  // ===================================================
  // MEASURE CAROUSELS
  // ===================================================

  useEffect(() => {
    const updateSizes = () => {
      if (imageViewportRef.current) {
        const width = imageViewportRef.current.offsetWidth;

        // 62% card + 16px gap
        setImageStep(width * 0.62 + 16);
      }

      if (videoViewportRef.current) {
        const width = videoViewportRef.current.offsetWidth;

        setVideoStep(width * 0.62 + 16);
      }
    };

    updateSizes();

    window.addEventListener("resize", updateSizes);

    return () => {
      window.removeEventListener("resize", updateSizes);
    };
  }, []);


  // ===================================================
  // IMAGE AUTO SLIDE
  // ===================================================

  useEffect(() => {
    const timer = setInterval(() => {
      if (!imagePausedRef.current) {
        setImageIndex((current) => current + 1);
      }
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  // ===================================================
  // VIDEO AUTO SLIDE
  // ===================================================

  useEffect(() => {
    const timer = setInterval(() => {
      if (!videoPausedRef.current) {
        setVideoIndex((current) => current + 1);
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  // ===================================================
  // IMAGE LOOP HANDLER
  //
  // When reaching cloned FIRST image:
  //
  // [5] [1]  <-- visible
  //
  // We silently move to the REAL first image.
  // Since both images are identical, user sees NO jump.
  // ===================================================

  const handleImageTransitionEnd = () => {
    if (imageIndex === images.length + 1) {
      setImageTransition(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setImageIndex(1);

          requestAnimationFrame(() => {
            setImageTransition(true);
          });
        });
      });
    }

    if (imageIndex === 0) {
      setImageTransition(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setImageIndex(images.length);

          requestAnimationFrame(() => {
            setImageTransition(true);
          });
        });
      });
    }
  };


  // ===================================================
  // VIDEO LOOP HANDLER
  // ===================================================

  const handleVideoTransitionEnd = () => {
    if (videoIndex === videos.length + 1) {
      setVideoTransition(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVideoIndex(1);

          requestAnimationFrame(() => {
            setVideoTransition(true);
          });
        });
      });
    }

    if (videoIndex === 0) {
      setVideoTransition(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVideoIndex(videos.length);

          requestAnimationFrame(() => {
            setVideoTransition(true);
          });
        });
      });
    }
  };


  // ===================================================
  // IMAGE CONTROLS
  // ===================================================

  const nextImage = () => {
    pauseImageAutoplay();
    setImageTransition(true);
    setImageIndex((current) => current + 1);
  };

  const previousImage = () => {
    pauseImageAutoplay();
    setImageTransition(true);
    setImageIndex((current) => current - 1);
  };


  // ===================================================
  // VIDEO CONTROLS
  // ===================================================

  const nextVideo = () => {
    pauseVideoAutoplay();
    setVideoTransition(true);
    setVideoIndex((current) => current + 1);
  };

  const previousVideo = () => {
    pauseVideoAutoplay();
    setVideoTransition(true);
    setVideoIndex((current) => current - 1);
  };


  // ===================================================
  // DOT INDEX
  //
  // Converts infinite index into real item index.
  //
  // Example:
  // 1 -> 0
  // 2 -> 1
  // 3 -> 2
  // 5 -> 4
  // 6 -> 0
  // ===================================================

  const activeImageDot =
    ((imageIndex - 1) % images.length + images.length) %
    images.length;

  const activeVideoDot =
    ((videoIndex - 1) % videos.length + videos.length) %
    videos.length;


  // ===================================================
  // DOT CLICK
  // ===================================================

  const goToImage = (index) => {
    pauseImageAutoplay();
    setImageTransition(true);
    setImageIndex(index + 1);
  };

  const goToVideo = (index) => {
    pauseVideoAutoplay();
    setVideoTransition(true);
    setVideoIndex(index + 1);
  };


  // ===================================================
  // POPUP SCROLL LOCK
  // ===================================================

  useEffect(() => {
    const popupOpen = selectedImage || selectedVideo;

    if (popupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedVideo]);


  // ===================================================
  // ESCAPE KEY
  // ===================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);


  // ===================================================
  // RENDER
  // ===================================================

  return (
    <>
      {/* =================================================
          GALLERY SECTION
      ================================================== */}

      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="
          relative
          overflow-hidden
          bg-[#071a11]
          py-16
          sm:py-20
        "
      >

        {/* =================================================
            BACKGROUND
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#0a2417]
            via-[#071a11]
            to-[#04100a]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0
            h-72
            w-[700px]
            max-w-full
            -translate-x-1/2
            rounded-full
            bg-green-500/[0.06]
            blur-3xl
          "
        />


        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            sm:px-6
            lg:px-8
          "
        >

          {/* =================================================
              HEADER
          ================================================== */}

          <header className="mx-auto max-w-3xl text-center">

            <div
              className="
                mb-3
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <Images
                size={18}
                aria-hidden="true"
                className="text-green-400"
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-green-300
                  sm:text-sm
                "
              >
                எங்கள் நினைவுகள்
              </span>

            </div>


            <h2
              id="gallery-heading"
              className="
                text-3xl
                font-bold
                leading-tight
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              ஒவ்வொரு விழாவும்

              <span className="block text-green-400">
                ஒரு இனிய நினைவு
              </span>
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-white/70
                sm:text-base
              "
            >
              நளன் கேட்டரிங் வழங்கும் திருமணம், பிறந்தநாள்,
              குடும்ப விழாக்கள் மற்றும் சிறப்பு நிகழ்வுகளின்
              அழகான தருணங்களை காணுங்கள்.
            </p>


            <div
              aria-hidden="true"
              className="
                mx-auto
                mt-5
                h-1
                w-14
                rounded-full
                bg-green-500
              "
            />

          </header>


          {/* =================================================
              IMAGE + VIDEO
          ================================================== */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-2
              lg:gap-8
            "
          >

            {/* =================================================
                IMAGES
            ================================================== */}

            <div className="min-w-0">

              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <h3
                    className="
                      flex
                      items-center
                      gap-2
                      text-xl
                      font-bold
                      text-white
                      sm:text-2xl
                    "
                  >

                    <Images
                      size={21}
                      aria-hidden="true"
                      className="text-green-400"
                    />

                    புகைப்படங்கள்

                  </h3>

                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    Swipe or tap to explore
                  </p>

                </div>


                {/* IMAGE ARROWS */}

                <div className="flex gap-2">

                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous gallery image"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400/30
                      bg-green-500/10
                      text-green-300
                      transition
                      hover:bg-green-500/20
                    "
                  >
                    <ChevronLeft size={18} />
                  </button>


                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next gallery image"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400/30
                      bg-green-500/10
                      text-green-300
                      transition
                      hover:bg-green-500/20
                    "
                  >
                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>


              {/* IMAGE VIEWPORT */}

              <div
                ref={imageViewportRef}
                className="
                  overflow-hidden
                  rounded-2xl
                "
              >

                <div
                  className={`
                    flex
                    gap-4
                    ${
                      imageTransition
                        ? "transition-transform duration-700 ease-in-out"
                        : ""
                    }
                  `}
                  style={{
                    transform: `translate3d(-${
                      imageIndex * imageStep
                    }px, 0, 0)`,
                    visibility: imageStep ? "visible" : "hidden",
                  }}
                  onTransitionEnd={handleImageTransitionEnd}
                >

                  {infiniteImages.map((image, index) => (

                    <button
                      key={`image-${index}-${image.src}`}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      aria-label={`View gallery image`}
                      className="
                        group
                        relative
                        block
                        min-w-[62%]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-black
                        text-left
                        shadow-lg
                        outline-none
                        focus:border-green-400
                      "
                    >

                      <div className="aspect-[4/3] overflow-hidden">

                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          decoding="async"
                          width="800"
                          height="600"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />

                      </div>


                      {/* IMAGE LABEL */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          bg-gradient-to-t
                          from-black/80
                          to-transparent
                          px-4
                          pb-4
                          pt-12
                        "
                      >

                        <p
                          className="
                            text-xs
                            font-semibold
                            text-white
                            sm:text-sm
                          "
                        >
                          Nalan Catering • Trichy
                        </p>

                      </div>


                      {/* IMAGE ICON */}

                      <div
                        className="
                          absolute
                          right-3
                          top-3
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-black/50
                          text-white
                          backdrop-blur-sm
                          opacity-0
                          transition
                          group-hover:opacity-100
                        "
                      >
                        <Images size={17} />
                      </div>

                    </button>

                  ))}

                </div>

              </div>


              {/* IMAGE DOTS */}

              <div
                className="
                  mt-4
                  flex
                  justify-center
                  gap-2
                "
                aria-label="Image gallery navigation"
              >

                {images.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() => goToImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        activeImageDot === index
                          ? "w-7 bg-green-400"
                          : "w-1.5 bg-white/25"
                      }
                    `}
                  />

                ))}

              </div>

            </div>


            {/* =================================================
                VIDEOS
            ================================================== */}

            <div className="min-w-0">

              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <h3
                    className="
                      flex
                      items-center
                      gap-2
                      text-xl
                      font-bold
                      text-white
                      sm:text-2xl
                    "
                  >

                    <Video
                      size={21}
                      aria-hidden="true"
                      className="text-green-400"
                    />

                    வீடியோ தருணங்கள்

                  </h3>

                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    Watch our catering moments
                  </p>

                </div>


                {/* VIDEO ARROWS */}

                <div className="flex gap-2">

                  <button
                    type="button"
                    onClick={previousVideo}
                    aria-label="Previous gallery video"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400/30
                      bg-green-500/10
                      text-green-300
                      transition
                      hover:bg-green-500/20
                    "
                  >
                    <ChevronLeft size={18} />
                  </button>


                  <button
                    type="button"
                    onClick={nextVideo}
                    aria-label="Next gallery video"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400/30
                      bg-green-500/10
                      text-green-300
                      transition
                      hover:bg-green-500/20
                    "
                  >
                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>


              {/* VIDEO VIEWPORT */}

              <div
                ref={videoViewportRef}
                className="
                  overflow-hidden
                  rounded-2xl
                "
              >

                <div
                  className={`
                    flex
                    gap-4
                    ${
                      videoTransition
                        ? "transition-transform duration-700 ease-in-out"
                        : ""
                    }
                  `}
                  style={{
                    transform: `translate3d(-${
                      videoIndex * videoStep
                    }px, 0, 0)`,
                    visibility: videoStep ? "visible" : "hidden",
                  }}
                  onTransitionEnd={handleVideoTransitionEnd}
                >

                  {infiniteVideos.map((video, index) => (

                    <button
                      key={`video-${index}-${video.src}`}
                      type="button"
                      onClick={() => setSelectedVideo(video)}
                      aria-label={`Play ${video.title}`}
                      className="
                        group
                        relative
                        block
                        min-w-[62%]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-black
                        text-left
                        shadow-lg
                        outline-none
                        focus:border-green-400
                      "
                    >

                      <div
                        className="
                          relative
                          aspect-[4/3]
                          overflow-hidden
                        "
                      >

                        <video
                          src={video.src}
                          muted
                          playsInline
                          preload="metadata"
                          aria-label={video.title}
                          className="
                            h-full
                            w-full
                            object-cover
                          "
                        />


                        {/* DARK OVERLAY */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-black/20
                            transition
                            group-hover:bg-black/35
                          "
                        />


                        {/* PLAY BUTTON */}

                        <div
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            flex
                            h-12
                            w-12
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            bg-green-500
                            text-white
                            shadow-lg
                            transition
                            duration-300
                            group-hover:scale-110
                            group-hover:bg-green-400
                          "
                        >

                          <Play
                            size={20}
                            fill="currentColor"
                            className="ml-0.5"
                          />

                        </div>

                      </div>


                      {/* VIDEO TITLE */}

                      <div className="px-4 py-3">

                        <h4
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-white
                          "
                        >
                          {video.title}
                        </h4>

                        <p className="mt-1 text-xs text-white/50">
                          Nalan Catering • Trichy, Tamil Nadu
                        </p>

                      </div>

                    </button>

                  ))}

                </div>

              </div>


              {/* VIDEO DOTS */}

              <div
                className="
                  mt-4
                  flex
                  justify-center
                  gap-2
                "
                aria-label="Video gallery navigation"
              >

                {videos.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() => goToVideo(index)}
                    aria-label={`Go to video ${index + 1}`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        activeVideoDot === index
                          ? "w-7 bg-green-400"
                          : "w-1.5 bg-white/25"
                      }
                    `}
                  />

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              BOTTOM TEXT
          ================================================== */}

          <div className="mt-10 text-center">

            <p className="text-sm font-medium text-green-300/80">
              தமிழ் பாரம்பரியம் • சுவையின் பெருமை
            </p>

          </div>

        </div>


        {/* =================================================
            BOTTOM ACCENT
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-green-500/50
            to-transparent
          "
        />

      </section>


      {/* =====================================================
          IMAGE POPUP
          Small centered modal — NOT fullscreen.
      ===================================================== */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            p-4
          "
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="
              relative
              flex
              max-h-[82vh]
              max-w-3xl
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="
                max-h-[72vh]
                max-w-[82vw]
                rounded-xl
                object-contain
                shadow-2xl
                sm:max-w-[75vw]
              "
            />


            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="
                absolute
                right-2
                top-2
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
                backdrop-blur-sm
                transition
                hover:bg-black/80
              "
            >
              <X size={22} />
            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          VIDEO POPUP
          Small centered modal — NOT fullscreen.
      ===================================================== */}

      {selectedVideo && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            p-4
          "
          role="dialog"
          aria-modal="true"
          aria-label="Gallery video player"
          onClick={() => setSelectedVideo(null)}
        >

          <div
            className="
              relative
              w-full
              max-w-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >

            <video
              src={selectedVideo.src}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="
                max-h-[70vh]
                w-full
                rounded-xl
                bg-black
                object-contain
                shadow-2xl
              "
            />


            {/* VIDEO TITLE */}

            <div className="mt-3 text-center">

              <p
                className="
                  text-sm
                  font-semibold
                  text-white
                  sm:text-base
                "
              >
                {selectedVideo.title}
              </p>

              <p className="mt-1 text-xs text-white/50">
                Nalan Catering • Trichy, Tamil Nadu
              </p>

            </div>


            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video player"
              className="
                absolute
                right-2
                top-2
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
                backdrop-blur-sm
                transition
                hover:bg-black/80
              "
            >
              <X size={22} />
            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default Gallery;
