import * as React from "react";
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

export default function Footer() {
  return (
    <>
      <Grid container justifyContent={"center"} sx={{ background: "white", color: "#074f71", textAlign: "center" }}>
        <Grid
        
          xs={12}
          md={12}
          container
          justifyContent={"center"}
        >
          <Box mt={2} >
            <Typography variant="h5" fontFamily={"freeman"}>
              ŠTĚPÁNKA
            </Typography>

          </Box>
        </Grid>
        <Grid md={12} display={"flex"} justifyContent={"center"}>
          <Grid md={1} sm={12}>dwa</Grid>
          <Grid md={1} sm={12}>dwa</Grid>
          <Grid md={1} sm={12}>wda</Grid>
          <Grid md={1} sm={12}>dwa</Grid>
        </Grid>
        <Grid md={6} display={"flex"} justifyContent={"center"}>
          <Grid md={1}>dwa</Grid>
          <Grid md={1}>dwa</Grid>
          <Grid md={1}>wda</Grid>
          <Grid md={1}>dwa</Grid>
        </Grid>
      </Grid>
    </>
  );
}
