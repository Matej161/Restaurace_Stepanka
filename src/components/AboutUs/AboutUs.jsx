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

export default function AboutUs() {
  return (
    <>
      <Grid container sx={{background: "black"}}>
        <Grid xs={12} md={6}>
          <Box>
            <img width={"100%"} src={"./src/images/moderni_jidlo.jpg"} />
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <Box>
            <h1>MENU</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            nesciunt, possimus quas accusamus saepe neque laudantium error
            numquam cum repudiandae perspiciatis molestias aspernatur natus
            doloremque sequi nemo quibusdam vero veniam.
          </Box>
        </Grid>
      </Grid>
      <img width={"100%"} src={"./src/images/moderni_jidlo.jpg"} />
    </>
  );
}
