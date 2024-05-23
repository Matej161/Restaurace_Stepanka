import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";
import { Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
     <Grid container  > <img width={"100%"} src={"./src/images/stepanka-bluda-1280x720.png"} /></Grid>
     
      <AboutUs />
      <Footer/>
    </>
  );
}
