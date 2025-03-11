"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: 32,
      fontFamily: "var(--font-lobster)",
    },
  },
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
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
        },
      },
    },
  },
});

export default theme;
