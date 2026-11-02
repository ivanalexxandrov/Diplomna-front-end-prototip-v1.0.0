import { useEffect, useRef, useState } from "react";
import micodelirio from "../assets/micodelirio.png";
import blondon from "../assets/b-london.png";
import ortoparisi from "../assets/ortoparisi.png";

const transitionDuration = 1000;
const autoScrollDelay = 10000;
const textAnimationDuration = 100;

function Home() {
const [currentPage, setCurrentPage] = useState(0);
const [textVisible, setTextVisible] = useState(true);

const currentPageRef = useRef(0);
const isAnimatingRef = useRef(false);
const autoScrollTimerRef = useRef(null);
const textAnimationTimerRef = useRef(null);

const pages = [
"PAGE ONE",
"PAGE TWO",
"PAGE THREE",
];

const footerHeight = 65;
const totalPages = pages.length + 1;

const goToPage = (nextPage) => {
if (nextPage === currentPageRef.current) {
return false;
}

if (nextPage < 0 || nextPage >= totalPages) {
return false;
}

if (isAnimatingRef.current) {
return false;
}

// Спираме таймера за автоматичен скрол
clearTimeout(autoScrollTimerRef.current);

// Първо скриваме текста на текущата страница
setTextVisible(false);

// След като текстът започне да изчезва,
// сменяме страницата
clearTimeout(textAnimationTimerRef.current);

textAnimationTimerRef.current = setTimeout(() => {
currentPageRef.current = nextPage;
setCurrentPage(nextPage);

isAnimatingRef.current = true;

// След приключване на движението на страницата
// показваме текста на новата страница
setTimeout(() => {
setTextVisible(true);
isAnimatingRef.current = false;

// Стартираме отново автоматичния скрол
if (currentPageRef.current < totalPages - 1) {
startAutoScroll();
}
}, transitionDuration);
}, textAnimationDuration);

return true;
};

const startAutoScroll = () => {
clearTimeout(autoScrollTimerRef.current);

if (currentPageRef.current >= pages.length - 1) {
return;
}

autoScrollTimerRef.current = setTimeout(() => {
goToPage(currentPageRef.current + 1);
}, autoScrollDelay);
};

const handlePageChange = (direction) => {
if (isAnimatingRef.current) {
return;
}

const nextPage =
direction === "down"
? currentPageRef.current + 1
: currentPageRef.current - 1;

goToPage(nextPage);
};

useEffect(() => {
const handleWheel = (event) => {
event.preventDefault();

if (event.deltaY > 0) {
handlePageChange("down");
}

if (event.deltaY < 0) {
handlePageChange("up");
}
};

window.addEventListener("wheel", handleWheel, {
passive: false,
});

startAutoScroll();

return () => {
window.removeEventListener("wheel", handleWheel);

clearTimeout(autoScrollTimerRef.current);
clearTimeout(textAnimationTimerRef.current);
};
}, []);

const translateY =
currentPage < pages.length
? currentPage * 100
: pages.length * 100 - (100 - footerHeight);

return (
<main
className="home"
style={{
transform: `translateY(-${translateY}vh)`,
transition: `transform ${transitionDuration}ms ease-in-out`,
}}
>
{/* PAGE 1 */}
<section className="page page-one hero-page">
<img
className="hero-image"
src={micodelirio}
alt=""
/>

{/*
<video
className="hero-video"
autoPlay
muted
loop
playsInline
>
<source src={heroVideo} type="video/mp4" />
</video>
*/}

<div
className={`hero-content ${
textVisible ? "" : "hero-content-hidden"
}`}
>
<h1>NASOMATTO'S MICODERILIO</h1>

<p>
Check out our most recent addition
</p>
</div>
</section>

{/* PAGE 2 */}
<section className="page page-two hero-page">
<img
className="page-image"
src={blondon}
alt=""
/>

{/*
<video
className="hero-video"
autoPlay
muted
loop
playsInline
>
<source src={heroVideo} type="video/mp4" />
</video>
*/}

<div
className={`page-content ${
textVisible ? "" : "page-content-hidden"
}`}
>
<h1>YARAYARA'S BESTSELLERS</h1>

<p>
See our most viewed and best sold fragrances
</p>
</div>
</section>

{/* PAGE 3 */}
<section className="page page-three">
<img
className="page-image"
src={ortoparisi}
alt=""
/>

{/*
<video
className="hero-video"
autoPlay
muted
loop
playsInline
>
<source src={heroVideo} type="video/mp4" />
</video>
*/}

<div
className={`page-content ${
textVisible ? "" : "page-content-hidden"
}`}
>
<h1>THE BRAND</h1>

<p>
The history, the tragedy, the noses
</p>
</div>
</section>

{/* FOOTER */}
<footer className="footer">
<div className="footer-top">
    <span>© 2026 YaraYaraPhonk. All Rights Reserved</span>
    <div className="footer-line"></div>
  </div>


    <div className="footer-content">
    {/* ЛЯВА ЧАСТ */}
    <div className="footer-left">
      <span>YARA YARA PHONK</span>
    </div>

    {/* ЦЕНТЪР */}
  <div className="footer-middle">
    <span>ABOUT US</span>
    <span>FRAGRANCES</span>
    <span>BRANDS</span>
    <span>DELIVERY</span>
    <span>REFUND</span>
  </div>

  {/* ДЯСНА ЧАСТ */}
  <div className="footer-right">
    <p className="footer-title">CONTACTS</p>
    <span>nqmame@email.com</span>
    <span>+359 69 420 8888</span>
    <span>Instagram</span>
    <span>Facebook</span>
    <span>TikTok</span>
  </div>
  </div>
</footer>


</main>
);
}

export default Home;