"use client";

import { Facebook } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function FacebookButton() {
  return (
    <Button
      variant="contained"
      startIcon={<Facebook />}
      size="large"
      sx={{
        textTransform: "none",
        bgcolor: "#005de0",
        color: "white",
        "&:hover": {
          bgcolor: "#1877F2",
        },
      }}
    >
      Sign in with Facebook
    </Button>
  );
}
