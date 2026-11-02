import "./Brands.css";
import toskovatLogo from "./assets/brands/tosk.png";
import BFLondonLogo from "./assets/brands/beaufortlondon.jpg";
import nasomattoLogo from "./assets/brands/nasomatto.jpg";

import { useNavigate } from "react-router-dom";

function Brands() {
  const navigate = useNavigate();
  return (
    
    <main className="brands-page">

      <h1 className="brands-title">AVAILABLE BRANDS</h1>

      <div className="brands-grid">

        <div className="brand-item">
          <div className="brand-card">
            <img
              src={BFLondonLogo}
              alt="Beaufort London"
              className="brand-image"
            />

            <span className="brand-hover-name">
              BEAUFORT <br></br> LONDON
            </span>
          </div>

        </div>


        <div className="brand-item">
          <div className="brand-card">
            <img
              src={toskovatLogo}
              alt="Toskovat"
              className="brand-image"
            />

            <span className="brand-hover-name">
              TOSKOVAT
            </span>
          </div>
        </div>


        <div className="brand-item" onClick={() => navigate("/brands/nasomatto")}>
          <div className="brand-card">
            <img
              src={nasomattoLogo}
              alt="Nasomatto"
              className="brand-image"
            />

            <span className="brand-hover-name">
              NASOMATTO
            </span>
          </div>

        </div>

      </div>

    </main>
  );
}

export default Brands;