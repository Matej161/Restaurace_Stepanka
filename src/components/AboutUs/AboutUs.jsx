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
          <Box mr={20} ml={20}>
            <Typography variant="h2" fontFamily={"freeman"}>
              Menu
            </Typography>
            <Typography sx={{ fontSize: "x-large", color: "gray" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              nesciunt, possimus quas accusamus saepe neque laudantium error
              numquam cum repudiandae perspiciatis molestias aspernatur natus
              doloremque sequi nemo quibusdam vero veniam.
            </Typography>
            <Box mt={2}>
              {" "}
              <Button
                sx={{
                  ":hover": {
                    bgcolor: "#074f71",
                    color: "white",
                    border: "#074f71",
                    border: 2,
                  },
                  ":active": {
                    bgcolor: "black",
                    color: "white",
                  },
                  bgcolor: "white",
                  fontSize: "xx-large",
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
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ background: "black" }}>
        <Grid
          xs={12}
          md={6}
          container
          alignItems={"center"}
          sx={{ background: "white" }}
          pl={3}
          justifyContent={"center"}
        >
          <Box mr={20} ml={20}>
            <Typography variant="h1" fontFamily={"freeman"}>
              O nás
            </Typography>
            <Typography sx={{ fontSize: "x-large", color: "gray" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              nesciunt, possimus quas accusamus saepe neque laudantium error
              numquam cum repudiandae perspiciatis molestias aspernatur natus
              doloremque sequi nemo quibusdam vero veniam.
            </Typography>
            <Box mt={2}>
              {" "}
              <Button
                sx={{
                  ":hover": {
                    bgcolor: "black",
                    color: "white",
                    border: "black",
                    border: 2,
                  },
                  ":active": {
                    bgcolor: "black",
                    color: "white",
                  },
                  bgcolor: "white",
                  fontSize: "xx-large",
                  color: "black",
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 0.2,
                  paddingBottom: 0.2,
                  border: 2,
                  marginBottom: 2,
                }}
              >
                Více
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid bgcolor={"#dadada"} xs={12} md={6}>
          <Box>
            <img width={"100%"} src={"./src/images/moderni_jidlo.jpg"} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
