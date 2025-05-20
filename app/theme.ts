"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: "var(--font-tomorrow)",
    },
    h1: {
      fontSize: 32,
      fontFamily: "var(--font-monoton)",
    },
  },
  palette: {
    primary: {
      main: "#f2f2f2",
    },
    background: {
      default: "#C8C8C8",
      paper: "#FAF2E9",
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
