"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 32,
      fontFamily: "var(--font-monoton)",
    },
    h2: {
      fontFamily: "var(--font-tomorrow)",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-tomorrow)",
    },
    h4: {
      fontFamily: "var(--font-tomorrow)",
    },
    h5: {
      fontFamily: "var(--font-tomorrow)",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "var(--font-tomorrow)",
      fontSize: 16,
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#f2f2f2",
      dark: "#AEAEAE",
    },
    background: {
      default: "#C8C8C8",
      paper: "#9E9E9E",
    },
    text: {
      primary: "#1A535C",
      secondary: "#000000",
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
