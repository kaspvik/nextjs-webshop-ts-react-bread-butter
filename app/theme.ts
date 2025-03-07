"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BA9E8F",
    },
    background: {
      default: "#A0A596",
      paper: "#FAF2E9",
    },
    text: {
      primary: "#3E291E",
      secondary: "#9C8173",
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: { root: { color: "white" } },
    },
  },
});

export default theme;
