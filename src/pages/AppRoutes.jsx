import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Onas from "./Onas/Onas";
import Galerie from "./Galerie/Galerie";
import Kontakt from "./Kontakt/Kontakt";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/onas" element={<Onas />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
