import * as React from "react";
import { Grid, Button, Typography, Link as MuiLink, Box } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        sx={{ background: "#dce4e7", color: "black", textAlign: "center", padding: 2 }}
      >
        {/* Left Side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: "center", marginBottom: 2 }}
        >
          <Typography variant="h2" sx={{ marginBottom: 2 }}>Info</Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.782218503106!2d14.918391078019868!3d50.40789617158405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709550aaf85e0fd%3A0x5117c0ab2edd692!2zUmVzdGF1cmFjZSDFoHTEm3DDoW5rYQ!5e0!3m2!1sen!2scz!4v1717926325924!5m2!1sen!2scz"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Grid>

        {/* Right Side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Vertically center the content
            alignItems: "center", // Center content horizontally
            textAlign: "center",
          }}
        >
          <Box sx={{ width: "100%", padding: 2 }}>
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
                <Link to={"/menu"}>
                  <Button
                    fullWidth
                    sx={{ color: "black", justifyContent: "center" }}
                  >
                    <Typography variant="body1" textTransform={"lowercase"}>
                      Menu
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={1}>
                <Link to={"/onas"}>
                  <Button
                    fullWidth
                    sx={{ color: "black", justifyContent: "center" }}
                  >
                    <Typography variant="body1" textTransform={"lowercase"}>
                      O nas
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={1}>
                <Link to={"/kontakt"}>
                  <Button
                    fullWidth
                    sx={{ color: "black", justifyContent: "center" }}
                  >
                    <Typography variant="body1" textTransform={"lowercase"}>
                      Kontakt
                    </Typography>
                  </Button>
                </Link>
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
          </Box>
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
        © ŠTĚPÁNKA RESTAURANT 2024. VŠECHNA PRÁVA VYHRAZENA.
      </Grid>
    </>
  );
}
