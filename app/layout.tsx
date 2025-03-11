import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto, Lobster_Two } from "next/font/google";
import type { Metadata } from "next/types";
import { PropsWithChildren } from "react";

import Header from "./header/page";

import Footer from "./footer/page";

import theme from "./theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
const lobster = Lobster_Two({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lobster",
});

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshoppen",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={[roboto.variable, lobster.className].join(" ")}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />

            <main>{children}</main>

            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
