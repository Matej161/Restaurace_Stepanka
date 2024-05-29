import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Onas from "./Onas/Onas";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/onas" element={<Onas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}