import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { Grid, Box, Typography, Drawer, Button } from "@mui/material";
import "./Menu.css";
import { useRef } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);
  const pondeliRef = useRef(null);
  const uteryRef = useRef(null);
  const stredaRef = useRef(null);
  const gridItemStyles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.5,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    ":hover": {
      opacity: 1,
      transition: "0.3s ease",
    },
    cursor: "pointer",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const textStyles = {
    zIndex: 1,
    color: "white",
  };
  const handleScrollToPondeli = () => {
    pondeliRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleScrollToUtery = () => {
    uteryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleScrollToStreda = () => {
    stredaRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <Grid container bgcolor={"black"}>
        <Grid
          container
          xs={12}
          md={6}
          lg={6}
          xl={4}
          sx={{
            ...gridItemStyles,
            backgroundImage: "url('./src/images/rizek.jpg')",
          }}
          onClick={handleScrollToPondeli}
        >
          <Box sx={overlayStyles}></Box>
          <Typography variant="h3" sx={textStyles}>
            TÝDENNÍ NABÍDKA
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={6}
          lg={6}
          xl={4}
          sx={{
            ...gridItemStyles,
            backgroundImage: "url('./src/images/toast.jpeg')",
          }}
          onClick={handleScrollToUtery}
        >
          <Box sx={overlayStyles}></Box>

          <Typography variant="h3" sx={textStyles}>
            STÁLÁ NABÍDKA
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          md={12}
          lg={12}
          xl={4}
          sx={{
            ...gridItemStyles,
            backgroundImage: "url('./src/images/coffee.jpg')",
          }}
          onClick={handleScrollToStreda}
        >
          <Box sx={overlayStyles}></Box>
          <Typography ref={pondeliRef} variant="h3" sx={textStyles}>
            NÁPOJE
          </Typography>
        </Grid>
      </Grid>
      <Grid
      /*sx={{
          borderRight: 1,
          borderColor: "white",
          mr: "200px",
          borderLeft: 1,
          borderColor: "white",
          ml: "200px",
        }}*/
      >
        <Typography
          pt={"5px"}
          variant="h3"
          color={"#074f71"}
          fontFamily={"roboto"}
          textAlign={"center"}
          className="menu-jezdec"
        >
          TÝDENNÍ NABÍDKA
        </Typography>
        <Typography
          pt={"15px"}
          variant="h4"
          color={"#074f71"}
          fontFamily={"roboto"}
          textAlign={"center"}
          className="menu-border"
        >
          PONDĚLÍ
        </Typography>
        <Typography
          color={"#074f71"}
          textAlign={"center"}
          fontFamily={"roboto"}
          variant="h6"
        >
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Polévka
          </Typography>
          Česneková krémová se šunkovými nudličkami a chlebovými krutony <br />{" "}
          45,- <br />
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Hlavní chody
          </Typography>
          Vepřová panenka, smetanová omáčka s houbami, máslové špecie s pažítkou{" "}
          <br /> 185,- <br />
          Kachní stehenní špaličky v sous vide úpravě, krupoto s jarní cibulkou{" "}
          <br /> 185,- <br />
          <Typography
            pt={"15px"}
            variant="h4"
            color={"#074f71"}
            fontFamily={"roboto"}
            textAlign={"center"}
            className="menu-border"
          >
            ÚTERÝ
          </Typography>
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Polévka
          </Typography>
          Slepiči vývar s masem, zeleninou a domácími fličky <br /> 45,- <br />
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Hlavní chody
          </Typography>
          Smažené kuřecí fizečky naložené v bylinkách, louchaný brambor s
          cibuli, variace listových salátů <br /> 179,- <br />
          Sunkofleky těstoviny s uzeným masem zapečené vejci, nakládaná zelenina
          na kyselo <br /> 179,- <br />
          <Typography
            pt={"15px"}
            variant="h4"
            color={"#074f71"}
            fontFamily={"roboto"}
            textAlign={"center"}
            className="menu-border"
          >
            STŘEDA
          </Typography>
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Polévka
          </Typography>
          Chřestová z bílého chřestu s kousky tresky <br /> 55,- <br />
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Hlavní chody
          </Typography>
          Fish & Chips. Smažená treska v těstíčku, Kouchaný hrášek, bramborové
          chipsy, sriracha majonéza <br /> 215,- <br />
          Vepřové ledvinky dušené na cibuli, rýží <br /> 179,- <br />
          <Typography
            pt={"15px"}
            variant="h4"
            color={"#074f71"}
            fontFamily={"roboto"}
            textAlign={"center"}
            className="menu-border"
          >
            ČTVRTEK
          </Typography>
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Polévka
          </Typography>
          Zelná s bramborem a klobásou <br /> 45,- <br />
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Hlavní chody
          </Typography>
          Vepřová variace (pečený bok, uzené, klobása), bramborová kaše s
          křenem, kyselé okurky <br /> 179,- <br />
          Hamburger s hovězím masem, karamelizovanou cibulí, čedarem, rukolou a
          slaninou, hranolky <br /> 189,- <br />
          <Typography
            pt={"15px"}
            variant="h4"
            color={"#074f71"}
            fontFamily={"roboto"}
            textAlign={"center"}
            className="menu-border"
          >
            PÁTEK
          </Typography>
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Polévka
          </Typography>
          Hráškový krém, máslové krutonky <br /> 45,- <br />
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Hlavní chody
          </Typography>
          Roastbeef, grilovaný chřest, sýrová omáčka, pečené brambory Udon nudle
          s kuřecím masem, zeleninou a praženým sezamem <br /> 215,-{" "}
          <br ref={uteryRef} />
          Kachní stehenní špaličky v sous vide úpravě, krupoto s jarní cibulkou{" "}
          <br /> 185,- <br />
        </Typography>
        <Typography
          pt={"5px"}
          variant="h3"
          color={"#074f71"}
          fontFamily={"roboto"}
          textAlign={"center"}
          className="menu-jezdec"
        >
          STÁLÁ NABÍDKA
        </Typography>
        <Typography
          pt={"5px"}
          variant="h4"
          color={"#074f71"}
          fontFamily={"roboto"}
          textAlign={"center"}
          className="menu-border"
        >
          08:00 - 11:00
        </Typography>
        <Typography
          color={"#074f71"}
          textAlign={"center"}
          fontFamily={"roboto"}
          variant="h6"
        >
          <Typography
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Toasty, bagety, sendviče, lívance
          </Typography>
          Vejce se šunkou, salátek, pečivo, máslo <br /> 119,- <br />
          Studený toast s avokádovou guacamole salsou, microgreens <br /> 59,-{" "}
          <br />
          Studený toast se sýrovou pomazánkou a uzeným lososem <br /> 79,-{" "}
          <br />
          Teplý toast ala štrůdl-zapečený s jablkem a skořicovým cukrem <br />{" "}
          59,- <br />
          Teplý nebo studený toast klasik šunka od kosti, gouda, máslo, salátek{" "}
          <br /> 65,- <br />
          Studený sendvič s kozím sýrem, rukolou a červenou řepou <br /> 79,-{" "}
          <br />
          Teplý ruben sendvič s rostrifem, ementalem, zelím a majonézou <br />{" "}
          155,- <br />
          Studený sendvič s kuřecím masem, sýrová pomazánka, rukola <br /> 120,-{" "}
          <br />
          Teplá bageta zapečená sýrem mozzarella a rajčaty, s česnekem a
          olivovým olejem <br /> 119,- <br />
          Teplá bageta s grilovanou vepřovou panenkou, americkou hořčicí,
          karamelizovanou cibulí a jalapenos papričkami <br /> 139,- <br />
          Lívance (4ks) dle denní nabídky (domácí marmeláda, skořicový cukr,
          nutella, šlehačka) <br /> 109,- <br />
          <Typography
            pt={"5px"}
            variant="h4"
            color={"#074f71"}
            fontFamily={"roboto"}
            textAlign={"center"}
            className="menu-border"
          >
            08:00 - 15:00
          </Typography>
          <Typography
            pt={"5px"}
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Tortilly
          </Typography>
          Tortila s trhaným vepřovým masem, zapečená sýrem čedar <br /> 155,-{" "}
          <br />
          Wrap s kuřecím masem, ledový salát, sýr ricotta s pažitkou, čerstvé
          rajče <br /> 155,- <br />
          <Typography
            pt={"5px"}
            fontSize={"25px"}
            color={"#074f71"}
            fontFamily={"freeman"}
            textAlign={"center"}
          >
            Saláty
          </Typography>
          Variace listových salátů s rajčátky, s vinagretém, hovězím rostbífem a
          opečenou bagetkou <br ref={stredaRef} /> 155,- <br />
          Salát caesar-kuřecí maso, slanina, dresink, bagetka <br /> 169,-{" "}
          <br />
        </Typography>

        {/* napoje */}
        <Typography
          pt={"5px"}
          variant="h3"
          color={"#074f71"}
          fontFamily={"roboto"}
          textAlign={"center"}
        >
          NÁPOJE
        </Typography>
        <Typography
          color={"#074f71"}
          textAlign={"center"}
          fontFamily={"roboto"}
          variant="h6"
        >
          <Typography
            pt={"5px"}
            variant="h4"
            color={"#074f71"}
            fontFamily={"roboto"}
            textAlign={"center"}
            className="menu-border"
          >
            KÁVA
          </Typography>
          Ristretto <br /> 50,-Kč <br />
          Espresso <br /> 50,-Kč <br />
          Lungo <br /> 55,-Kč <br />
          Cappuccino <br /> 55,-Kč <br />
          Latté macchiato <br /> 60,-Kč <br />
          Flat white <br /> 70,-Kč <br />
          Alžírská káva svaječným koňakem a šlehačkou <br /> 70,-Kč <br />
          Vídeňská káva <br /> 60,-Kč <br />
          KAKAO <br /> 60,-Kč <br />
          <Typography
            pt={"5px"}
            variant="h4"
            color={"#074f71"}
            fontFamily={"roboto"}
            textAlign={"center"}
            className="menu-border"
          >
            ALKOHOL
          </Typography>
          Bílé víno <br /> 1dl 30,-Kč <br />
          
          Červené víno <br /> 1dl 30,-Kč <br />
          Sekt <br /> 250,-Kč
          <br />
          JÄgermeister <br /> 0,021 30,-Kč <br />
          Pilsner Urquel <br /> 45,-Kč <br />
          <Typography
            pt={"5px"}
            variant="h4"
            color={"#074f71"}
            fontFamily={"roboto"}
            textAlign={"center"}
            className="menu-border"
          >
            OSTATNÍ NÁPOJE
          </Typography>
          Minerální Voda <br /> 1dl 30,-Kč <br />
          Birrel Světlý
          <br /> 1dl 30,-Kč <br />
          Coca Cola (ZERO)
          <br /> 45,-Kč 35,-Kč <br />
          Čaj zelený, černý, ovocný <br /> 35,-Kč <br />
          Čaj-Zázvor, Máta <br /> 35,-Kč <br />
          Džus dle nabídky <br /> 45,-Kč <br />
         
        </Typography>
      </Grid>

      <Footer />
    </>
  );
}
