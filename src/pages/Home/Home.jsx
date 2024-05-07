import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <img width={"100%"} src={"./src/images/stepanka-bluda-1280x720.png"} />
      <AboutUs />
    </>
  );
}
