import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Onas from "./Onas/Onas";
import Galerie from "./Galerie/Galerie";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/onas" element={<Onas />} />
          <Route path="/galerie" element={<Galerie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}