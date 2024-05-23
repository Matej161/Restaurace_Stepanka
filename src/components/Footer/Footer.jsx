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
    <>      <Grid container sx={{ background: "black" }}>


<Grid
        xs={12}
        md={4}
        container
        alignItems={"center"}
        sx={{ background: "#dadada" }}
        pl={3}
        justifyContent={"center"}
      >
        <Box mt={2}>
        <Typography variant="h2" fontFamily={"freeman"}> KONTAKT JJ</Typography>
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={4}
        container
        alignItems={"center"}
        sx={{ background: "#dadada" }}
        pl={3}
        justifyContent={"center"}
      >
        
        <Box mt={2}>
        <Typography variant="h2" fontFamily={"freeman"}> KONTAKT JJ</Typography>
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={4}
        container
        alignItems={"center"}
        sx={{ background: "#dadada" }}
        pl={3}
        justifyContent={"center"}
      >
        <Box mt={2}>
        <Typography variant="h2" fontFamily={"freeman"}> KONTAKT JJ</Typography>
        </Box>
      </Grid>
    </Grid></>
  )
}
