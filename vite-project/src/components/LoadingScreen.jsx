import { useEffect, useState } from "react";
 

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="logo">YARAYARAPHONK</div>
    </div>
  );
}

export default LoadingScreen;