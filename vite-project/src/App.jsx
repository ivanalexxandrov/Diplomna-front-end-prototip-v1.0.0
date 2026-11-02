import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/Home";
import { usePreventZoom } from "./hooks/usePreventZoom";
import Header from "./components/Header";
import Brands from "./Brands";
import BrandNasomatto from "./brand_Nasomatto";
import Perfume from "./perfume";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
/>


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


function App() {

  usePreventZoom();

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Home />
              <LoadingScreen />
            </>
          }
        />

        <Route
          path="/brands"
          element={<Brands />}
        />

        <Route
          path="/brands/nasomatto"
          element={<BrandNasomatto />}
        />

        <Route
          path="/brands/nasomatto/perfume-01"
          element={<Perfume />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;
