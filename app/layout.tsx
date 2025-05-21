import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Monoton, Tomorrow } from "next/font/google";
import type { Metadata } from "next/types";
import { PropsWithChildren } from "react";
import Footer from "./footer/page";
import Header from "./header/page";
import CartProvider from "./provider";
import theme from "./theme";

const tomorrow = Tomorrow({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tomorrow",
});
const monoton = Monoton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-monoton",
});

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Surf&Sound",
  description:
    "Welcome to Surf & Sound! Music for the ears - prices for the wallet",
  keywords: "CD, music, surf, 1992, sounds, nice price, hits",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${tomorrow.variable} ${monoton.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <CartProvider>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh", // Makes sure page fills screen height
                }}>
                <Header />

                <Box component="main" sx={{ flex: "1" }}>
                  {children}
                </Box>

                <Footer />
              </Box>
            </CartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
