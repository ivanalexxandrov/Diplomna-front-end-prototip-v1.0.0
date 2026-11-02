import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import nasomattoImage from "./assets/blamage.png";
import nasomattoImage2 from "./assets/narcoticv.jpg";
import nasomattoImage3 from "./assets/baronada.jpg";

import nasomattoVideo from "./assets/videos/nasomatto.mp4";

import "./nasomatto.css";
import "./index.css";


function BrandNasomatto() {

  const navigate = useNavigate();


  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const [collectionProgress, setCollectionProgress] = useState(0);
  const [collectionImageVisible, setCollectionImageVisible] =
    useState(false);



  const collectionCarouselRef = useRef(null);
  const collectionSectionRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);


  useEffect(() => {

    let lastScrollY = window.scrollY;


    const handleScroll = () => {

      const currentScroll = window.scrollY;

      setScrollY(currentScroll);



      const collectionSection =
        collectionSectionRef.current;

      if (collectionSection) {

        const rect =
          collectionSection.getBoundingClientRect();

        const collectionStarted =
          rect.top <= 0;

        setCollectionImageVisible(
          collectionStarted
        );
      }



      if (currentScroll <= 20) {

        setHeaderVisible(true);

      } else if (currentScroll > lastScrollY) {

        setHeaderVisible(false);

      } else if (currentScroll < lastScrollY) {

        setHeaderVisible(true);

      }

      lastScrollY = currentScroll;



      const sections =
        document.querySelectorAll(
          "[data-nasomatto-section]"
        );

      let currentSection = 0;


      sections.forEach(
        (section, index) => {

          const rect =
            section.getBoundingClientRect();

          if (
            rect.top <=
            window.innerHeight * 0.5
          ) {

            currentSection = index;

          }

        }
      );


      setActiveSection(
        Math.min(currentSection, 3)
      );

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );


    handleScroll();


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);



  const blurProgress =
    Math.min(
      scrollY / 800,
      1
    );

  const blurAmount =
    blurProgress * 15;

  const overlayOpacity =
    blurProgress * 0.35;



  const scrollToSection = (index) => {

    const sections =
      document.querySelectorAll(
        "[data-nasomatto-section]"
      );


    if (sections[index]) {

      sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };



  const handleCollectionScroll = () => {

    const carousel =
      collectionCarouselRef.current;

    if (!carousel) return;


    const maxScroll =
      carousel.scrollWidth -
      carousel.clientWidth;


    if (maxScroll <= 0) {

      setCollectionProgress(0);

      return;

    }


    const progress =
      carousel.scrollLeft /
      maxScroll;


    setCollectionProgress(
      Math.max(
        0,
        Math.min(progress, 1)
      )
    );

  };



  const handleCollectionScrollbarClick = (event) => {

    const carousel =
      collectionCarouselRef.current;

    if (!carousel) return;


    const track =
      event.currentTarget;

    const rect =
      track.getBoundingClientRect();


    const clickPosition =
      event.clientX -
      rect.left;


    const percentage =
      clickPosition /
      rect.width;


    const maxScroll =
      carousel.scrollWidth -
      carousel.clientWidth;


    carousel.scrollTo({

      left:
        percentage *
        maxScroll,

      behavior: "smooth",

    });

  };



  const handlePointerDown = (event) => {

    const carousel =
      collectionCarouselRef.current;

    if (!carousel) return;


    isDragging.current = true;


    startX.current =
      event.clientX;


    startScrollLeft.current =
      carousel.scrollLeft;


    carousel.classList.add(
      "is-dragging"
    );


    carousel.setPointerCapture(
      event.pointerId
    );

  };


  const handlePointerMove = (
    event
  ) => {

    const carousel =
      collectionCarouselRef.current;

    if (
      !carousel ||
      !isDragging.current
    ) {
      return;
    }


    const distance =
      event.clientX -
      startX.current;


    carousel.scrollLeft =
      startScrollLeft.current -
      distance;

  };


  const handlePointerUp = (
    event
  ) => {

    const carousel =
      collectionCarouselRef.current;

    if (!carousel) return;


    isDragging.current =
      false;


    carousel.classList.remove(
      "is-dragging"
    );


    if (
      carousel.hasPointerCapture(
        event.pointerId
      )
    ) {

      carousel.releasePointerCapture(
        event.pointerId
      );

    }

  };



  return (

    <main className="nasomatto-page">


      {/* podheader */}

      <div
        className={`
          nasomatto-subheader

          ${
            scrollY > 800
              ? "nasomatto-subheader-visible"
              : ""
          }

          ${
            headerVisible
              ? "nasomatto-subheader-with-header"
              : "nasomatto-subheader-without-header"
          }
        `}
      >


        {/* breadcrumbs */}

        <div className="nasomatto-breadcrumbs">

          <button
            onClick={() =>
              navigate("/")
            }
          >
            HOME
          </button>

          <span>/</span>

          <button
            onClick={() =>
              navigate("/brands")
            }
          >
            BRANDS
          </button>

          <span>/</span>

          <span>NASOMATTO</span>

        </div>


        {/* nav */}

        <div className="nasomatto-section-navigation">


          <div className="nasomatto-section-labels">

            {[
              "NASOMATTO",
              "COLLECTION",
              "PHILOSOPHY",
              "DISCOVER",
            ].map(
              (title, index) => (

                <button
                  key={index}

                  className={`
                    nasomatto-section-label

                    ${
                      activeSection === index
                        ? "active"
                        : ""
                    }
                  `}

                  onClick={() =>
                    scrollToSection(index)
                  }
                >

                  {title}

                </button>

              )
            )}

          </div>



          <div className="nasomatto-section-line">

            <div
              className="nasomatto-section-progress"

              style={{
                width:
                  `${12.5 +
                    activeSection * 25}%`,
              }}
            />

          </div>

        </div>

      </div>


      {/* fixed video */}

      <video
        className="nasomatto-video"

        src={nasomattoVideo}

        autoPlay
        muted
        loop
        playsInline

        style={{
          filter:
            `blur(${blurAmount}px)`,
        }}
      />


      <div
        className="nasomatto-overlay"

        style={{
          opacity:
            overlayOpacity,
        }}
      />

      <section className="nasomatto-hero">

        <h1 className="nasomatto-title">
          NASOMATTO
        </h1>

      </section>


      {/* sec 1 */}

      <section
        className="nasomatto-section"

        data-nasomatto-section
      >

        <div className="nasomatto-section-content">

          <h2>
            NASOMATTO
          </h2>

          <p>
            Nasomatto is an independent Italian
            perfume house founded by Alessandro
            Gualtieri, known for its unconventional
            approach to fragrance creation. Born
            from a desire to challenge traditional
            perfumery, Nasomatto explores raw
            materials, instinct, memory, and
            emotion through bold, distinctive
            compositions.
          </p>

        </div>

      </section>


      {/* collection */}

      <section
        className="
          nasomatto-section
          nas-gray-div
        "

        data-nasomatto-section

        ref={collectionSectionRef}
      >


        {/* lqvo */}

        <div className="nas-collection-text">

          <h2>
            THE COLLECTION
          </h2>

          <p>
            A collection created through an
            experimental approach to fragrance,
            materials and memory.
          </p>

        </div>


        {/* dqsno */}

        <div
          className="nas-collection-carousel"

          ref={collectionCarouselRef}

          onScroll={
            handleCollectionScroll
          }

          onPointerDown={
            handlePointerDown
          }

          onPointerMove={
            handlePointerMove
          }

          onPointerUp={
            handlePointerUp
          }

          onPointerCancel={
            handlePointerUp
          }
        >

          <div className="nas-collection-track">


            <div
                className="nas-perfume-card"
                onClick={() => {
                  console.log("PERFUME 01 CLICK");
                  navigate("/brands/nasomatto/perfume-01");
                  }}>
                    
  <div className="nas-perfume-image">
    <span>PERFUME 01</span>
  </div>
</div>


            <div className="nas-perfume-card">

              <div className="nas-perfume-image">

                <span>
                  PERFUME 02
                </span>

              </div>

            </div>


            <div className="nas-perfume-card">

              <div className="nas-perfume-image">

                <span>
                  PERFUME 03
                </span>

              </div>

            </div>


            <div className="nas-perfume-card">

              <div className="nas-perfume-image">

                <span>
                  PERFUME 04
                </span>

              </div>

            </div>


            <div className="nas-perfume-card">

              <div className="nas-perfume-image">

                <span>
                  PERFUME 05
                </span>

              </div>

            </div>


          </div>

        </div>


        {/* scrollbar */}

        <div
          className="
            nas-collection-scrollbar
          "

          onClick={
            handleCollectionScrollbarClick
          }
        >

          <div
            className="
              nas-collection-scrollbar-track
            "
          >

            <div
              className="
                nas-collection-scrollbar-thumb
              "

              style={{
                left:
                  `${collectionProgress * 80}%`,
              }}
            />

          </div>

        </div>

      </section>


      {/* fixed snimkata */}

      <section
        className="
          nasomatto-fixed-image-section
        "
      >

        <div
          className={`
            nasomatto-fixed-image

            ${
              collectionImageVisible
                ? "visible"
                : ""
            }
          `}
        >

          <img
            src={nasomattoImage}

            alt="Nasomatto"
          />

        </div>

      </section>


      {/* bqloto */}

      <section
        className="
          nasomatto-white-section
        "
      >


        {/* philosophy */}

        <div
          className="
            nasomatto-philosophy
          "

          data-nasomatto-section
        >


          <div
            className="
              nasomatto-philosophy-image
            "
          >

            <img
              src={nasomattoImage2}

              alt="Nasomatto Philosophy"
            />

          </div>


          <div
            className="
              nasomatto-philosophy-content
            "
          >

            <h2>
              PHILOSOPHY
            </h2>

            <p>
              Nasomatto explores fragrance as
              an artistic expression rather than
              a conventional perfume experience.
            </p>

          </div>

        </div>


        {/* discover */}

        <div
          className="
            nasomatto-discover
          "

          data-nasomatto-section
        >


          <div
            className="
              nasomatto-discover-content
            "
          >

            <h2>
              DISCOVER
            </h2>

            <p>
              Explore the fragrances and discover
              the world of Nasomatto.
            </p>

          </div>



          <div
            className="
              nasomatto-discover-image
            "
          >

            <img
              src={nasomattoImage3}

              alt="Discover Nasomatto"
            />

          </div>

        </div>

      </section>


      {/* footer */}

      <footer
        className="
          footer
          zindex
        "
      >

        <div className="footer-top">

          <span>
            © 2026 YaraYaraPhonk.
            All Rights Reserved
          </span>

          <div className="footer-line" />

        </div>


        <div className="footer-content">


          {/* lqvo */}

          <div className="footer-left">

            <span>
              YARA YARA PHONK
            </span>

          </div>


          {/* centur */}

          <div className="footer-middle">

            <span>
              ABOUT US
            </span>

            <span>
              FRAGRANCES
            </span>

            <span>
              BRANDS
            </span>

            <span>
              DELIVERY
            </span>

            <span>
              REFUND
            </span>

          </div>


          {/* dqsno */}

          <div className="footer-right">

            <p className="footer-title">
              CONTACTS
            </p>

            <span>
              nqмаme@email.com
            </span>

            <span>
              +359 69 420 8888
            </span>

            <span>
              Instagram
            </span>

            <span>
              Facebook
            </span>

            <span>
              TikTok
            </span>

          </div>

        </div>

      </footer>


    </main>

  );

}


export default BrandNasomatto;
