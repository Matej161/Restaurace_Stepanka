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
        position="sticky"
        sx={{
          background: "#074f71",
          height: 100,
          justifyContent: "center",
        }}
      >
        {/*nadpis+hamburgr*/}
        <Toolbar>
          <Box flexGrow={0.48}>
            <IconButton
              sx={{
                ":hover": {
                  backgroundColor: "inherit",
                },
                color: "white"
              }}
              
              onClick={onOpenHandler}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            {/*<RestaurantIcon sx={{ color: "black" }} fontSize="large" />*/}
            <Box textAlign={"center"}>
              <Typography variant="h5" color={"white"} fontFamily={"freeman"}>
                RESTAURACE
              </Typography>
              <Typography variant="h3" color={"white"} fontFamily={"freeman"}>
                ŠTĚPÁNKA
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/*to sracka co vyjede*/}
      <Drawer
        TransitionComponent={Transition}
        open={open}
        PaperProps={{ sx: { width: 300 } }}
        onClick={onCloseHandler}
      >
        <AppBar
          position="static"
          sx={{ background: "#074f71", color: "black" }}
        >
          <Toolbar>
            <Box flexGrow={1}>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                {/* krizek */}
                <IconButton
                 
                  onClick={onCloseHandler}
                  fontSize="large"
                  color="inherit"
                  sx={{
                    color: "white",
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
        <Box height={1} sx={{ background: "#074f71" }}>
          <Link to={"/"}>
            <Button
              fullWidth
              
              onClick={onCloseHandler}
              style={{
                justifyContent: "flex-start",
              }}
              sx={{
                color: "white",
                ":active": {
                  
                },
              }}
            >
              <Typography
                sx={{ color: "white" }}
                pl={3}
                fontFamily={"freeman"}
                fontSize={"xx-large"}
              >
                <div className="Navbar-menu-links">Domů</div>
              </Typography>
            </Button>
          </Link>
          <Link to={"/menu"}>
          <Button
            fullWidth
            sx={{color: "white"}}
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{ color: "white" }}
              pl={3}
              fontFamily={"freeman"}
              fontSize={"xx-large"}
            >
              
                <div className="Navbar-menu-links">Jídelní lístek</div>
              
            </Typography>
          </Button>
          </Link>

          <Button
            fullWidth
            sx={{color: "white"}}
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
            sx={{color: "white"}}
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
            sx={{color: "white"}}
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
