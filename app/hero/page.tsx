import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh", // Justera höjden på hero-sektionen
        overflow: "hidden",
      }}
    >
      {/* Hero background image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          animation: "zoomIn 3s ease-out forwards", // Animationen appliceras direkt här
          "@keyframes zoomIn": {
            "0%": {
              transform: "scale(1)", // Startar utan zoom
            },
            "100%": {
              transform: "scale(1.1)", // Zoomar in till 1.1
            },
          },
          "& img": {
            objectFit: "cover", // Gör så att bilden inte blir förvrängd
            objectPosition: "center", // Behåller bildens centrering
          },
        }}
      >
        <Image
          src="/images/hero3.jpg" // Bilden finns i public/images/hero1.jpg
          alt="Hero image"
          layout="fill" // Bilden täcker hela hero-sektionen
        />
      </Box>

      {/* Innehåll ovanpå hero-bilden */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "60px", fontWeight: "bold", color: "text.primary" }}
        >
          Välkommen till vårt bageri
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginTop: "1rem", color: "text.primary", fontFamily: "" }}
        >
          Ekologiskt och hantverksmässigt bröd direkt till din dörr
        </Typography>
        {/* <Button
          variant="contained"
          sx={{ marginTop: "2rem", backgroundColor: "primary.main" }}
        >
          Upptäck våra produkter
        </Button> */}
      </Box>
    </Box>
  );
};

export default Hero;
