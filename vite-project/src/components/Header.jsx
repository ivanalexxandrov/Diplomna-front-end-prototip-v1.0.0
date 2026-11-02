import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate
} from "react-router-dom";


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();


  /*
  =========================================
  ПРОВЕРЯВАМЕ СТРАНИЦАТА
  =========================================
  */

  const isNasomatto =
    location.pathname === "/brands/nasomatto";

  const isPerfumePage =
    location.pathname === "/brands/nasomatto/perfume-01";


  /*
  =========================================
  HEADER SCROLL
  =========================================
  */

  useEffect(() => {

    // Само Nasomatto използва
    // скриване/показване при scroll.

    if (!isNasomatto) {

      setHeaderVisible(true);
      setHeaderScrolled(false);

      return;
    }


    let lastScrollY = window.scrollY;


    const handleScroll = () => {

      const currentScrollY = window.scrollY;


      /*
      -----------------------------------------
      НАЙ-ОТГОРЕ
      -----------------------------------------
      */

      if (currentScrollY <= 20) {

        setHeaderVisible(true);
        setHeaderScrolled(false);

      }


      /*
      -----------------------------------------
      СКРОЛ НАДОЛУ
      -----------------------------------------
      */

      else if (
        currentScrollY >
        lastScrollY + 5
      ) {

        setHeaderVisible(false);

      }


      /*
      -----------------------------------------
      СКРОЛ НАГОРЕ
      -----------------------------------------
      */

      else if (
        currentScrollY <
        lastScrollY - 5
      ) {

        setHeaderVisible(true);
        setHeaderScrolled(true);

      }


      lastScrollY = currentScrollY;

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );


    // Начално състояние
    handleScroll();


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, [isNasomatto]);


  /*
  =========================================
  LOGO
  =========================================
  */

  const handleLogoClick = () => {

    navigate("/");

  };


  /*
  =========================================
  RENDER
  =========================================
  */

  return (
    <>


      {/* =================================
          HEADER
      ================================= */}

      <header
        className={`header

          ${
            isNasomatto &&
            !headerVisible
              ? "header-hidden"
              : ""
          }

          ${
            isNasomatto &&
            headerScrolled
              ? "nasomatto-header-scrolled"
              : ""
          }

          ${
            isPerfumePage
              ? "perfume-header"
              : ""
          }

        `}
      >


        {/* MENU */}

        <button
          className="header-button"
          onClick={() =>
            setMenuOpen(true)
          }
        >
          MENU
        </button>


        {/* LOGO */}

        <button
          className="header-logo"
          onClick={handleLogoClick}
        >
          YaraYaraPhonk
        </button>


        {/* RIGHT */}

        <nav className="header-right">

          <button
            className="header-button"
          >
            DISCOVER
          </button>


          <button
            className="header-button"
            onClick={() =>
              navigate("/brands")
            }
          >
            BRANDS
          </button>

        </nav>

      </header>


      {/* =================================
          MENU OVERLAY
      ================================= */}

      <div
        className={`menu-overlay ${
          menuOpen
            ? "menu-open"
            : ""
        }`}

        onClick={(event) => {

          const menuWidth =
            window.innerWidth * 0.35;


          if (
            event.clientX >
            menuWidth
          ) {

            setMenuOpen(false);

          }

        }}
      >


        {/* CLOSE */}

        <button
          className="menu-close"
          onClick={() =>
            setMenuOpen(false)
          }
        >

          <span>
            X
          </span>

        </button>


        {/* NAVIGATION */}

        <nav className="menu-navigation">


          <div className="menu-main">

            <button>
              HOME
            </button>

            <button>
              ABOUT US
            </button>

            <button>
              FRAGRANCES
            </button>

            <button>
              BRANDS
            </button>

            <button>
              DELIVERY
            </button>

            <button>
              REFUND
            </button>

          </div>


          {/* CONTACT */}

          <div className="menu-contact">

            <hr
              className="menu-contact-line"
            />


            <span
              className="menu-contact-title"
            >
              CONTACT
            </span>


            <a
              href="mailto:hello@example.com"
            >
              nqmame@email.com
            </a>


            <a
              href="tel:+359888888888"
            >
              +359 69 420 8888
            </a>


            <a href="#">
              INSTAGRAM
            </a>

          </div>

        </nav>

      </div>

    </>
  );

}


export default Header;
