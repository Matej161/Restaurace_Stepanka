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
      <Grid container bgcolor={"black"}>
        <Grid
          container
          xs={12}
          md={6}
          lg={6}
          xl={4}
          sx={{
            ...gridItemStyles,
            backgroundImage: "url('./src/images/rizek.jpg')",
          }}
        >
          <Box sx={overlayStyles}></Box>
          <Typography variant="h3" sx={textStyles}>
            TÝDENNÍ NABÍDKA
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={6}
          lg={6}
          xl={4}
          sx={{
            ...gridItemStyles,
            backgroundImage: "url('./src/images/toast.jpeg')",
          }}
        >
          <Box sx={overlayStyles}></Box>
          <Typography variant="h3" sx={textStyles}>
            STÁLÁ NABÍDKA
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={12}
          lg={12}
          xl={4}
          sx={{
            ...gridItemStyles,
            backgroundImage: "url('./src/images/coffee.jpg')",
          }}
        >
          <Box sx={overlayStyles}></Box>
          <Typography variant="h3" sx={textStyles}>
            NÁPOJE
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography
          pt={"5px"}
          variant="h3"
          color={"#074f71"}
          fontFamily={"freeman"}
          textAlign={"center"}
        >
          STÁLÁ NABÍDKA
        </Typography>
        <Typography
          pt={"5px"}
          variant="h4"
          color={"#074f71"}
          fontFamily={"freeman"}
          textAlign={"center"}
        >
          08:00 - 11:00
        </Typography>
        <Typography
          color={"#074f71"}
          textAlign={"center"}
          mt={"7px"}
          fontFamily={"roboto"}
          variant="h6"
          sx={{ borderTop: 1,
                borderColor: "#074f71"
           }}
        >
          Vejce se šunkou, salátek, pečivo, máslo <br />  119,- <br />
          Studený toast s avokádovou guacamole salsou, microgreens <br />  59,- <br />
          Studený toast se sýrovou pomazánkou a uzeným lososem <br /> 79,- <br />
          Teplý toast ala štrůdl-zapečený s jablkem a skořicovým cukrem <br /> 59,- <br />
          Teplý nebo studený toast klasik šunka od kosti, gouda, máslo, salátek <br /> 65,- <br />
          Studený sendvič s kozím sýrem, rukolou a červenou řepou <br /> 79,- <br />

        </Typography>
      </Grid>
    </>
  );
}
