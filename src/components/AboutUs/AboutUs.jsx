import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
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

export default function AboutUs() {
  return (
    <>
      <Grid container sx={{ background: "black" }}>
        <Grid bgcolor={"#dadada"} xs={12} md={6}>
          <Box>
            <img width={"100%"} src={"./src/images/moderni_jidlo.jpg"} />
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          container
          alignItems={"center"}
          sx={{ background: "white" }}
          pl={3}
          justifyContent={"center"}
        >
          <Box>
            <Typography variant="h4" fontFamily={"freeman"}>
              MENU
            </Typography>
            <Typography variant="body1" fontFamily={"freeman"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              nesciunt, possimus quas accusamus saepe neque laudantium error
              numquam cum repudiandae perspiciatis molestias aspernatur natus
              doloremque sequi nemo quibusdam vero veniam.
            </Typography>
            <Box ml={2} mt={2}>
              {" "}
              {/*<Button
                sx={{
                  ":hover": {
                    bgcolor: "green",
                    color: "white",
                  },
                  ":active": {
                    bgcolor: "yellow",
                  },
                  bgcolor: "#dadada",
                }}
              >
                AHOJ
              </Button>*/}
              <button id="menu-button"> Button </button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <img width={"100%"} src={"./src/images/moderni_jidlo.jpg"} />
    </>
  );
}
