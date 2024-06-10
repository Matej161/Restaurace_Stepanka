import * as React from "react";
import { Grid, Typography, Link as MuiLink, Box } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        spacing={2} 
        sx={{ padding: 2 }}
      >
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Odkazy
          </Typography>
        </Grid>

        {/* Links */}
        <Grid item xs={12} md={1}>
          <Typography align="center">
            <MuiLink component={Link} to="/kontakt" sx={{ textDecoration: 'none', color: 'inherit' }}>
              kontakt
            </MuiLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography align="center">
            <MuiLink component={Link} to="/galerie" sx={{ textDecoration: 'none', color: 'inherit' }}>
              galerie
            </MuiLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography align="center">
            <MuiLink component={Link} to="/menu" sx={{ textDecoration: 'none', color: 'inherit' }}>
              jídelní lístek
            </MuiLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography align="center">
            <MuiLink component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              domů
            </MuiLink>
          </Typography>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
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
          </Box>
        </Grid>

        
        <Grid item xs={12}>
          <Typography align="center" sx={{ mt: 2 }}>
            © 2024 Restaurace Štěpánka. Všechna práva vyhrazena.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
