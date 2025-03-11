"use client";
import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import type {} from "@mui/x-data-grid-premium/themeAugmentation";

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: "var(--font-roboto)",
    },
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
  MuiDataGrid: {
    styleOverrides: {
      root: {
        backgroundColor: "red",
      },
    },
  },
});

export default theme;
