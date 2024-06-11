import * as React from "react";
import { Grid, Typography, Link as MuiLink, Box } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ padding: 2, mt: 0 }}
        bgcolor={"#074f71"}
      >
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" color={"white"}>
            Odkazy
          </Typography>
        </Grid>

        {/* Links */}
        <Grid item xs={12} md={1}>
          <Typography align="center">
            <MuiLink
              component={Link}
              to="/kontakt"
              sx={{
                textDecoration: "none",
                color: "white",
                ":hover": { color: "#68a1bc" },
              }}
            >
              kontakt
            </MuiLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography align="center">
            <MuiLink
              component={Link}
              to="/galerie"
              sx={{
                textDecoration: "none",
                color: "white",
                ":hover": { color: "#68a1bc" },
              }}
            >
              galerie
            </MuiLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography align="center">
            <MuiLink
              component={Link}
              to="/menu"
              sx={{
                textDecoration: "none",
                color: "white",
                ":hover": { color: "#68a1bc" },
              }}
            >
              jídelní lístek
            </MuiLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography align="center">
            <MuiLink
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "white",
                ":hover": { color: "#68a1bc" },
              }}
            >
              domů
            </MuiLink>
          </Typography>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12}>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 0 }}
          >
            <MuiLink
              sx={{
                color: "white",
                ":hover": {
                  color: "violet",
                },
              }}
              href="https://www.instagram.com/restauracestepanka/"
            >
              <InstagramIcon fontSize={"large"} />
            </MuiLink>
            <MuiLink
              sx={{
                color: "white",
                ":hover": {
                  color: "blue",
                },
              }}
              href="https://www.facebook.com/people/Restaurace-%C5%A0t%C4%9Bp%C3%A1nka-klinika-Dr-P%C3%ADrka/100066763011342/"
            >
              <FacebookIcon fontSize={"large"} />
            </MuiLink>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography
            align="center"
            sx={{ mt: 0 }}
            color={"white"}
            className="footer-border"
            fontSize={"19px"}
          >
            © 2024 Restaurace Štěpánka. Všechna práva vyhrazena.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
