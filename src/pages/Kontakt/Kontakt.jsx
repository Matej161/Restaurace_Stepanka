import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Typography, Grid } from "@mui/material";
import ScheduleTable from "../../components/tabulka";
import "./Kontakt.css";

export default function Kontakt() {
  const [open, setOpen] = useState(false);

  const gridItemStyles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.65,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "100%",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 1,
  };

  const textStyles = {
    zIndex: 1,
    color: "rgb(0, 0, 0)",
    textAlign: "center",
    margin: 0,
    padding: "0 20px",
    boxShadow: "black",
  };

  return (
    <>
      <Navbar />

      <Grid
        container
        sx={{
          width: "100%",
          height: "450px",
          backgroundColor: "white",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            ...gridItemStyles,
            backgroundImage: "url('./src/images/budova.jpg')",
          }}
        >
          <Box sx={overlayStyles}></Box>
          {/* <Typography variant="h3" sx={textStyles} fontFamily={"outfit"}>
            Jak nás najdete?
          </Typography>
          */}
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#074f71",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.782218503106!2d14.918391078019868!3d50.40789617158405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709550aaf85e0fd%3A0x5117c0ab2edd692!2zUmVzdGF1cmFjZSDFoHTEm3DDoW5rYQ!5e0!3m2!1sen!2scz!4v1717926325924!5m2!1sen!2scz"
                width="300"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: "0" }}
              />
              <Typography
                pl={"20px"}
                fontWeight={"bold"}
                color={"white"}
                mt={2}
                fontFamily={"outfit"}
              >
                Na Celně 885, 293 01 <br /> Mladá Boleslav III <br /> Klinika
                Dr. Pírka
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  overflowY: "auto",
                  width: "100%",
                  maxHeight: { xs: "300px", md: "auto" },
                }}
              >
                <ScheduleTable />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
