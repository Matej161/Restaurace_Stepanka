import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  Slide,
} from "@mui/material";
import "@fontsource/freeman/400.css";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

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
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              sx={{
                ":hover": {
                  backgroundColor: "inherit",
                },
                color: "white",
              }}
              onClick={onOpenHandler}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Link to={"/"}>
              <Box textAlign={"center"}>
                <Typography variant="h5" color={"white"} fontFamily={"freeman"}>
                  RESTAURACE
                </Typography>
                <Typography variant="h3" color={"white"} fontFamily={"freeman"}>
                  ŠTĚPÁNKA
                </Typography>
              </Box>
            </Link>
            <Box sx={{ width: 48 }} /> {/* Empty box to balance the space */}
          </Box>
        </Toolbar>
      </AppBar>

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
                ":hover": {},
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
              sx={{ color: "white" }}
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
          <Link to={"/onas"}>
            <Button
              fullWidth
              sx={{ color: "white" }}
              onClick={onCloseHandler}
              style={{
                justifyContent: "flex-start",
              }}
            >
              <Typography pl={3} fontFamily={"freeman"} fontSize={"xx-large"}>
                <div className="Navbar-menu-links">O nás</div>
              </Typography>
            </Button>
          </Link>

          <Link to={"/galerie"}>
            <Button
              fullWidth
              sx={{ color: "white" }}
              onClick={onCloseHandler}
              style={{
                justifyContent: "flex-start",
              }}
            >
              <Typography pl={3} fontFamily={"freeman"} fontSize={"xx-large"}>
                <div className="Navbar-menu-links">Galerie</div>
              </Typography>
            </Button>
          </Link>

          <Link to={"/kontakt"}>
            <Button
              fullWidth
              sx={{ color: "white" }}
              onClick={onCloseHandler}
              style={{
                justifyContent: "flex-start",
              }}
            >
              <Typography pl={3} fontFamily={"freeman"} fontSize={"xx-large"}>
                <div className="Navbar-menu-links">Kontakt</div>
              </Typography>
            </Button>
          </Link>

        </Box>
      </Drawer>
    </>
  );
}
