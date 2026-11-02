import { useRef } from "react";

import "./perfume.css";

import perfumeImage1 from "./assets/perfume/per1.png";
import perfumeImage2 from "./assets/perfume/per2.jpg";
import perfumeImage3 from "./assets/perfume/per3.jfif";
import perfumeImage4 from "./assets/perfume/per4.jpg";
import perfumeImage5 from "./assets/perfume/per5.jpg";
import perfumeImage6 from "./assets/perfume/per6.png";
import perfumeImage7 from "./assets/perfume/per7.jpg";
import perfumeImage8 from "./assets/perfume/per8.jpg";


function Perfume() {

  const imageCarouselRef = useRef(null);


  return (

    <main className="perfume-page perfume-page-with-header">


      <section
        className="perfume-image-side"
        ref={imageCarouselRef}
      >

        <div className="perfume-image-track">


          <div className="perfume-image-slide">

            <img
              src={perfumeImage1}
              alt="Perfume 01"
            />

            <div className="perfume-image-number">
              01 / 08
            </div>

          </div>


          <div className="perfume-image-slide">

            <img
              src={perfumeImage2}
              alt="Perfume 01"
            />

            <div className="perfume-image-number">
              02 / 08
            </div>

          </div>


          <div className="perfume-image-slide">

            <img
              src={perfumeImage3}
              alt="Perfume 01"
            />

            <div className="perfume-image-number">
              03 / 08
            </div>

          </div>

          <div className="perfume-image-slide">

            <img
              src={perfumeImage4}
              alt="Perfume 01"
            />

            <div className="perfume-image-number">
              04 / 08
            </div>

          </div>

          <div className="perfume-image-slide">

            <img
              src={perfumeImage5}
              alt="Perfume 01"
            />

            <div className="perfume-image-number">
              05 / 08
            </div>

          </div>

          <div className="perfume-image-slide">

            <img
              src={perfumeImage6}
              alt="Perfume 01"
            />

            <div className="perfume-image-number">
              06 / 08
            </div>

          </div>

          <div className="perfume-image-slide">

            <img
              src={perfumeImage7}
              alt="Perfume 01"
            />

            <div className="perfume-image-number">
              07 / 08
            </div>

          </div>

          <div className="perfume-image-slide">

            <img
              src={perfumeImage8}
              alt="Perfume 01"
            />

            <div className="perfume-image-number">
              08 / 08
            </div>

          </div>

        </div>


      </section>


      {/* dqsno */}

      <section className="perfume-info-side">

        <div className="perfume-info-content">


          <button
            className="perfume-back"
            onClick={() => window.history.back()}
          >
            ← BACK TO COLLECTION
          </button>


          <div className="perfume-name">

            <span className="perfume-label">
              NASOMATTO
            </span>

            <h1>
              BLACK AFGANO
            </h1>

            <div className="perfume-line" />

          </div>


          <div className="perfume-description">

            <p>
              Black Afgano is a dark, intense fragrance created for those drawn to depth and mystery. Rich woody and resinous notes blend with smoky nuances, creating a warm and powerful composition that feels both raw and refined. Its distinctive character unfolds slowly, leaving a deep and memorable impression.
            </p>

            <p>
              More than a conventional fragrance, Black Afgano is an exploration of atmosphere, texture and emotion. Its bold presence balances darkness with warmth, creating a scent that feels intimate, enigmatic and unmistakably distinctive.
            </p>

          </div>


          <div className="perfume-details">

            <div className="perfume-detail-row">

              <span>
                HOUSE
              </span>

              <span>
                NASOMATTO
              </span>

            </div>


            <div className="perfume-detail-row">

              <span>
                CREATOR
              </span>

              <span>
                ALESSANDRO GUALTIERI
              </span>

            </div>


            <div className="perfume-detail-row">

              <span>
                TYPE
              </span>

              <span>
                EXTRAIT DE PARFUM
              </span>

            </div>


            <div className="perfume-detail-row">

              <span>
                SIZE
              </span>

              <span>
                30 ML
              </span>

            </div>

          </div>


          <div className="perfume-notes">

            <h2>
              NOTES
            </h2>

            <div className="perfume-notes-list">

              <span>
                TOP
              </span>

              <p>
                Cannabis · Green notes · Davana · Saffron · Thyme
              </p>


              <span>
                HEART
              </span>

              <p>
                Resins · Woodsy notes · Tobacco · Coffee · Raspberry · Cinnamon · Violet
              </p>


              <span>
                BASE
              </span>

              <p>
                Agarwood · Incense · Amber · Animal notes · Guaiac · Musk · Cedar · Tonka · Gurjan · Ambroxan · Vanilla
              </p>

            </div>

          </div>


          <div className="perfume-story">

            <h2>
              THE FRAGRANCE
            </h2>

            <p>
              The cap is made out of burnt oak.

              <br />
              <br />

              Made in Italy

              <br />
              <br />

              Released in 2009
            </p>

          </div>


          <div className="perfume-purchase">

            <div className="perfume-price">
              € 145
            </div>

            <button className="perfume-add-button">
              ADD TO CART
            </button>

          </div>


          <div className="perfume-info-footer">

            <span>
              NASOMATTO
            </span>

            <span>
              YARA YARA PHONK
            </span>

          </div>

        </div>

      </section>

    </main>

  );
}


export default Perfume;
