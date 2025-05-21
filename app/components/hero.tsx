import { Box } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "90vh",
        overflow: "hidden",
        boxShadow: 4,
      }}>
      {/* Bakgrundsbild */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",

          "& img": {
            objectFit: "cover",
            objectPosition: "center",
          },
        }}>
        <Image
          src="/images/hero.png"
          alt="Hero image"
          priority
          quality={90}
          layout="fill"
        />
      </Box>

      {/* Snurrande CD + text */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
        }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "spin 20s linear infinite",
            position: "relative",
            "@keyframes spin": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}>
          <Image
            src="/images/logo.png"
            alt="CD"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
