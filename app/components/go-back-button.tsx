"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";

const GoBackButton = () => {
  return (
    <IconButton
      component={Link}
      href="/"
      sx={{
        position: "absolute",
        top: { xs: "-12px", sm: "-15px", md: "-15px", lg: "-12px" },
        left: { xs: "5px", sm: "15px", md: "15px", lg: "15px" },
        zIndex: 100,
      }}>
      {" "}
      <ArrowBackIcon
        sx={{
          color: "text.primary",
          fontSize: { xs: 30, sm: 30, md: 30 },
        }}
      />
      <Typography
        sx={{
          color: "text.primary",
          fontFamily: "var(--font-tomorrow)",
        }}>
        Go back
      </Typography>
    </IconButton>
  );
};

export default GoBackButton;
