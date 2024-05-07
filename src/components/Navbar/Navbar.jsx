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

import "@fontsource/freeman/400.css";
import "./Navbar.css";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import InfoIcon from "@mui/icons-material/Info";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CollectionsIcon from "@mui/icons-material/Collections";

import { Link } from "react-router-dom";

import Menu from "../../pages/Menu/Menu";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);
  const drawerWidth = 240;
  const Appbar = document.getElementsByClassName("ahoj");

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "#EBE9E6",
          height: 100,

          justifyContent: "center",
        }}
      >
        {/*nadpis+hamburgr*/}
        <Toolbar>
          <Box flexGrow={0.5}>
            <IconButton
              sx={{
                ":hover": {
                  backgroundColor: "inherit",
                },
              }}
              color="black"
              onClick={onOpenHandler}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            {/*<RestaurantIcon sx={{ color: "black" }} fontSize="large" />*/}
            <Typography variant="h3" color={"black"} fontFamily={"freeman"}>
              ŠTĚPÁNKA
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/*to sracka co vyjede*/}
      <Drawer
        TransitionComponent={Transition}
        open={open}
        PaperProps={{ sx: { width: 300 } }}
      >
        <AppBar
          position="static"
          sx={{ background: "#EBE9E6", color: "black" }}
        >
          <Toolbar>
            <Box flexGrow={1}>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                {/* krizek */}
                <IconButton
                  ccolor="inherit"
                  onClick={onCloseHandler}
                  fontSize="large"
                  sx={{
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                    height: 100,
                  }}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box height={1} sx={{ background: "#EBE9E6" }}>
          <Button
            fullWidth
            color="inherit"
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{ color: "black" }}
              pl={3}
              fontFamily={"freeman"}
              fontSize={"xx-large"}
            >
              <Link to={"/menu"}>
                <div className="Navbar-menu-links">Jídelní lístek</div>
              </Link>
            </Typography>
          </Button>

          <Button
            fullWidth
            color="inherit"
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
            }}
          >
            <Typography pl={3} fontFamily={"freeman"} fontSize={"xx-large"}>
              <div className="Navbar-menu-links">O nás</div>
            </Typography>
          </Button>
          <Button
            fullWidth
            color="inherit"
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
            }}
          >
            <Typography pl={3} fontFamily={"freeman"} fontSize={"xx-large"}>
              <div className="Navbar-menu-links">Aktuality</div>
            </Typography>
          </Button>
          <Button
            fullWidth
            color="inherit"
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
            }}
          >
            <Typography pl={3} fontFamily={"freeman"} fontSize={"xx-large"}>
              <div className="Navbar-menu-links">Galerie</div>
            </Typography>
          </Button>
        </Box>
      </Drawer>
    </>
  );
}