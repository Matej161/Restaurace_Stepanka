import * as React from "react";
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

import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import InfoIcon from "@mui/icons-material/Info";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CollectionsIcon from "@mui/icons-material/Collections";

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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*nadpis+hamburgr*/}
        <Toolbar>
          <Box>
            <IconButton
              sx={{
                ":hover": {
                  backgroundColor: "#cdc8c1",
                },
              }}
              color="black"
              onClick={onOpenHandler}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <RestaurantIcon sx={{ color: "black" }} />
            <Typography variant="h3" color={"black"} fontFamily={"cardo"}>
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
                <IconButton
                  color="inherit"
                  onClick={onCloseHandler}
                  sx={{
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                    height: 100,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box py={3}>
          <Button
            fullWidth
            color="inherit"
            sx={{
              ":hover": { backgroundColor: "transparent" },
            }}
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
              paddingTop: "20px",
            }}
          >
            <RestaurantMenuIcon />
            <Typography fontFamily={"cardo"}>Jídelní lístek</Typography>
          </Button>

          <Button
            fullWidth
            color="inherit"
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
              paddingTop: "20px",
            }}
          >
            <InfoIcon />
            <Typography fontFamily={"cardo"}>O nás</Typography>
          </Button>
          <Button
            fullWidth
            color="inherit"
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
              paddingTop: "20px",
            }}
          >
            <NewspaperIcon />
            <Typography fontFamily={"cardo"}>Aktuality</Typography>
          </Button>
          <Button
            fullWidth
            color="inherit"
            onClick={onCloseHandler}
            style={{
              justifyContent: "flex-start",
              paddingTop: "20px",
            }}
          >
            <CollectionsIcon />
            <Typography fontFamily={"cardo"}>Galerie</Typography>
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
