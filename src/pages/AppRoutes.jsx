import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Menu/Menu"    
export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}