import * as React from "react";
import { Grid, Button, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        sx={{ background: "#dce4e7", color: "black", textAlign: "center" }}
      >
        <Grid xl={6} md={12}>
          {/* Main Links */}
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            spacing={2}
            sx={{ padding: 2 }}
          >
            <Grid item xs={12} md={1}>
              <Link to={"/galerie"}>
                <Button
                  fullWidth
                  sx={{ color: "black", justifyContent: "center" }}
                >
                  <Typography variant="body1" textTransform={"lowercase"}>
                    Galerie
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={1}>
              <Button
                fullWidth
                sx={{ color: "black", justifyContent: "center" }}
              >
                <Typography variant="body1" textTransform={"lowercase"}>
                  dva
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={1}>
              <Button
                fullWidth
                sx={{ color: "black", justifyContent: "center" }}
              >
                <Typography variant="body1" textTransform={"lowercase"}>
                  wda
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={1}>
              <Button
                fullWidth
                sx={{ color: "black", justifyContent: "center" }}
              >
                <Typography variant="body1" textTransform={"lowercase"}>
                  dwa
                </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            spacing={2}
            sx={{ padding: 2 }}
          >
            <Grid item>
              <MuiLink
                sx={{
                  color: "black",
                  ":hover": {
                    color: "blue",
                  },
                }}
                href="https://www.facebook.com/people/Restaurace-%C5%A0t%C4%9Bp%C3%A1nka-klinika-Dr-P%C3%ADrka/100066763011342/"
              >
                <FacebookIcon fontSize={"large"} />
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink
                sx={{
                  color: "black",
                  ":hover": {
                    color: "violet",
                  },
                }}
                href="https://www.instagram.com/restauracestepanka/"
              >
                <InstagramIcon fontSize={"large"} />
              </MuiLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid xl={6} md={12}>
          {/* Main Links */}
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            spacing={2}
            sx={{ padding: 2 }}
          >
            <Grid item xs={12} md={1}>
              <Link to={"/galerie"}>
                <Button
                  fullWidth
                  sx={{ color: "black", justifyContent: "center" }}
                >
                  <Typography variant="body1" textTransform={"lowercase"}>
                    Galerie
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={1}>
              <Button
                fullWidth
                sx={{ color: "black", justifyContent: "center" }}
              >
                <Typography variant="body1" textTransform={"lowercase"}>
                  dva
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={1}>
              <Button
                fullWidth
                sx={{ color: "black", justifyContent: "center" }}
              >
                <Typography variant="body1" textTransform={"lowercase"}>
                  wda
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={1}>
              <Button
                fullWidth
                sx={{ color: "black", justifyContent: "center" }}
              >
                <Typography variant="body1" textTransform={"lowercase"}>
                  dwa
                </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            spacing={2}
            sx={{ padding: 2 }}
          >
            <Grid item>
              <MuiLink
                sx={{
                  color: "black",
                  ":hover": {
                    color: "blue",
                  },
                }}
                href="https://www.facebook.com/people/Restaurace-%C5%A0t%C4%9Bp%C3%A1nka-klinika-Dr-P%C3%ADrka/100066763011342/"
              >
                <FacebookIcon fontSize={"large"} />
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink
                sx={{
                  color: "black",
                  ":hover": {
                    color: "violet",
                  },
                }}
                href="https://www.instagram.com/restauracestepanka/"
              >
                <InstagramIcon fontSize={"large"} />
              </MuiLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          background: "rgb(30, 30, 30)",
          color: "white",
          textAlign: "center",
          height: "60px",
          fontSize: "17px",
        }}
      >
        © ŠTĚPÁNKA RESTAURANT 2024. VŠECHNA PRÁVA VYHRAZENA. pridej scrollbar na
        stranky ostatni kys spis
      </Grid>
    </>
  );
}
