import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { Grid, Box, Typography, Drawer, Button } from "@mui/material";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const gridItemStyles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.5,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    ":hover": {
      opacity: 1,
      transition: "0.3s ease",
    },
    cursor: "pointer",

  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const textStyles = {
    zIndex: 1,
    color: "white",
  };

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid container xs={12} md={6} lg={6} xl={4} sx={{ ...gridItemStyles, backgroundImage: "url('./src/images/download (1).png')" }}>
          <Box sx={overlayStyles}></Box>
          <Typography variant="h3" sx={textStyles}>
            TÝDENNÍ NABÍDKA
          </Typography>
        </Grid>
        <Grid container xs={12} md={6} lg={6} xl={4} sx={{ ...gridItemStyles, backgroundImage: "url('./src/images/download (1).png')" }}>
          <Box sx={overlayStyles}></Box>
          <Typography variant="h3" sx={textStyles}>
            STÁLÁ NABÍDKA
          </Typography>
        </Grid>
        <Grid container xs={12} md={12} lg={12} xl={4} sx={{ ...gridItemStyles, backgroundImage: "url('./src/images/moderni_jidlo.jpg')" }}>
          <Box sx={overlayStyles}></Box>
          <Typography variant="h3" sx={textStyles}>
            NÁPOJE
          </Typography>
        </Grid>
        
      </Grid>
      <Typography pt={"5px"} variant="h3" color={"black"} fontFamily={"freeman"} textAlign={"center"}>
        08:00 - 11:00
      </Typography>
    </>
  );
}