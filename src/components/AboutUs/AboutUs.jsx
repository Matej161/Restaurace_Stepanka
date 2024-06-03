import React from "react";
import { useState } from "react";
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
import "./AboutUs.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
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
            backgroundPosition: "center"
          }}>
        </Grid>
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
              Menu
            </Typography>
            <Typography sx={{ fontSize: "x-large", color: "#074f71" }}>
              Prohlédněte si náš jídelní lístek a objevte skvělou nabídku pokrmů připravených z nejčerstvějších surovin.
              Každé jídlo je mistrovským dílem našich kuchařů, kteří se starají o vaši spokojenost.
            </Typography>
            <Box mt={2}>

              <Link to={"/menu"}>
                <Button
                  sx={{
                    ":hover": {
                      bgcolor: "#074f71",
                      color: "white",
                      borderColor: "#074f71",
                      border: 2,
                    },
                    ":active": {
                      bgcolor: "#074f71",
                    },
                    bgcolor: "white",
                    fontSize: "x-large",
                    color: "#074f71",
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 0.2,
                    paddingBottom: 0.2,
                    border: 2,
                    borderColor: "#074f71",
                    marginBottom: 2,
                  }}
                >
                  Více
                </Button>
              </Link>
            </Box>
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
              O nás
            </Typography>
            <Typography sx={{ fontSize: "x-large", color: "#074f71" }}>
              Prozkoumejte více o restauraci Štěpánka.
            </Typography>
            <Box mt={2}>
              {" "}
              <Link to={"/Onas"}>
                <Button
                  sx={{
                    ":hover": {
                      bgcolor: "#074f71",
                      color: "white",
                      border: "#074f71",
                      border: 2,
                    },
                    ":active": {
                      bgcolor: "#074f71",
                    },
                    bgcolor: "white",
                    fontSize: "x-large",
                    color: "#074f71",
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 0.2,
                    paddingBottom: 0.2,
                    border: 2,
                    borderColor: "#074f71",
                    marginBottom: 2,
                  }}
                >
                  Více
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          padding={0}
          xs={12}
          md={6}
          order={{ xs: 2, md: 2 }}
          sx={{
            backgroundImage: "url('./src/images/pani-onas.jpg')",
            height: 800,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>

        </Grid>
      </Grid>

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
            backgroundPosition: "center"
          }}>
        </Grid>
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
              Galerie
            </Typography>
            <Typography sx={{ fontSize: "x-large", color: "#074f71" }}>
              Objevte naše obrázky a ponořte se do světa lahodné gastronomie a příjemné atmosféry.
              Naše fotogalerie vám umožní nahlédnout do naší restaurace z pohodlí vašeho domova
              a získat inspiraci pro svou další návštěvu.
            </Typography>
            <Box mt={2}>
              {" "}
              <Link to={"/galerie"}>
                <Button
                  sx={{
                    ":hover": {
                      bgcolor: "#074f71",
                      color: "white",
                      borderColor: "#074f71",
                      border: 2,
                    },
                    ":active": {
                      bgcolor: "#074f71",
                    },
                    bgcolor: "white",
                    fontSize: "x-large",
                    color: "#074f71",
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 0.2,
                    paddingBottom: 0.2,
                    border: 2,
                    borderColor: "#074f71",
                    marginBottom: 2,
                  }}
                >
                  Více
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>

    </>
  );
}
