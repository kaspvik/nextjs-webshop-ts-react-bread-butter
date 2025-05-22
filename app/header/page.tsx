"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import Link from "next/link";
import CartIconButton from "./cart-icon-button";
import Nav from "./nav";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        bgcolor: "background.default",
        zIndex: 1100,
      }}>
      <Toolbar>
        <Typography
          variant="h1"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            textShadow: "3px 3px 6px rgba(255, 245, 203, 0.5)",
            color: "text.primary",
            fontSize: { sx: 30, sm: 40, md: 60 },
          }}
          component={Link}
          href="/">
          SURF & SOUND
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
          }}>
          <IconButton
            data-cy="admin-link"
            color="inherit"
            component={Link}
            href="/admin">
            <AccountCircleIcon
              sx={{
                fontSize: { sx: 20, md: 40 },
                color: "text.primary",
              }}
            />
          </IconButton>
          <CartIconButton />
          <Nav />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
