import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Hidden,
  IconButton,
  Dialog,
  Slide,
  Container,
  Grid,
  Drawer,
} from "@mui/material";

export default function Onas() {
  return (
    <>
      <Navbar />
      <Grid container sx={{ background: "black" }}>
        <Grid
          item
          bgcolor={"#dadada"}
          xs={12}
          md={6}
          order={{ xs: 2, md: 2 }}
          sx={{
            backgroundImage: "url('./src/images/moderni_jidlo.jpg')",
            height: 900,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: 2 }}
          container
          alignItems={"center"}
          sx={{ background: "white" }}
          pl={3}
          justifyContent={"center"}
        >
          <Box mr={20} ml={20}>
            <Typography
              sx={{ color: "#074f71" }}
              variant="h2"
              fontFamily={"freeman"}
            >
              O nás
            </Typography>
            <Typography sx={{ fontSize: "x-large", color: "#074f71" }}>
              Nově otevřená moderní restaurace v netradičních prostorech.
              Nachází se ve 3. patře nové budovy Kliniky Dr. Pírka, přináší
              nádherný výhled na lesopark Štěpánka a potok Klenice.
            </Typography>
            <Box mt={2}></Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ background: "black" }}>
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: 2 }}
          container
          alignItems={"center"}
          sx={{ background: "white" }}
          pl={3}
          justifyContent={"center"}
        >
          <Box mr={20} ml={20}>
            <Typography
              sx={{ color: "#074f71" }}
              variant="h2"
              fontFamily={"freeman"}
            >
              Náš tým
            </Typography>
            <Typography sx={{ fontSize: "x-large", color: "#074f71" }}>
              Prozkoumejte více o restauraci Štěpánka.
            </Typography>
            <Box mt={2}> </Box>
          </Box>
        </Grid>
        <Grid
          item
          padding={0}
          xs={12}
          md={6}
          order={{ xs: 2, md: 2 }}
          sx={{
            backgroundImage: "url('./src/images/downi.jpg')",
            height: 800,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
      <Footer />
    </>
  );
}
