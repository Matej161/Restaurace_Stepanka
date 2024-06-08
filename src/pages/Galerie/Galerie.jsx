import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { Grid, Typography, Box } from '@mui/material';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Footer from "../../components/Footer/Footer";
import "./Galerie.css"

export default function Galerie() {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Array of images
  const images = [
    { src: "./src/images/toast.jpeg" },
    { src: "./src/images/rizek.jpg" },
    { src: "./src/images/coffee.jpg" },
    { src: "./src/images/moderni_jidlo.jpg" },
    { src: "./src/images/home-menu-img.jpg" },
    { src: "./src/images/Fotka3.png" },
    { src: "./src/images/FotkaJ4.png" },
    { src: "./src/images/Fotka2.png" },
    { src: "./src/images/FotkaJ5.png" },
    { src: "./src/images/FotkaJ6.png" },
    { src: "./src/images/FotkaJ7.png" },
    { src: "./src/images/FotkaJ8.png" },
    { src: "./src/images/FotkaJ9.png" },
    { src: "./src/images/toast.jpeg" },
    { src: "./src/images/toast.jpeg" },
    { src: "./src/images/toast.jpeg" },
    { src: "./src/images/toast.jpeg" },
    { src: "./src/images/toast.jpeg" },
    { src: "./src/images/toast.jpeg" },
    { src: "./src/images/toast.jpeg" },
  ];

  const gridItemStyles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px", // Set a fixed height for grid items
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
    ":hover": {
      opacity: 1,
      transform: "scale(1.05)", // Slightly enlarge the item on hover
    },
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  };

  const textStyles = {
    zIndex: 2,
    color: "white",
    position: "relative",
    textAlign: "center",
    padding: "0 10px",
  };

  return (
    <>
      <Navbar />
      <Grid container justifyContent={'center'} sx={{ marginTop: 10, marginBottom: 3 }}>
        <Grid container
          md={12}
          spacing={3}
          sx={{
            padding: 2,
            background: "white",
            borderRadius: 2,
            justifyContent: 'center'
          }}>
          <Grid item xs={12}>
            <Typography className='galerie-nadpis' /*variant='h2' fontFamily={"freeman"} color={'black'}*/>Galerie</Typography>
          </Grid>
          {images.map((image, index) => (
            <Grid
              item
              xs={11.9} sm={5.9} lg={2.9}
              key={index}
              sx={{
                ...gridItemStyles,
                backgroundImage: `url(${image.src})`,
                backgroundColor: index % 2 === 0 ? "#e3f2fd" : "#fce4ec",
                margin: 1
              }}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <Box sx={overlayStyles}></Box>
              <Typography variant="h6" sx={textStyles}>
                {image.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={images.map((image) => ({ src: image.src }))}
      />
      <Footer />
    </>
  );
}
