"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import Link from "next/link";
import CartIconButton from "./cart-icon-button";

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        bgcolor: "background.default",
        zIndex: 1100,
      }}
    >
      <Toolbar>
        <Typography
          variant="h1"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            textShadow: "3px 3px 6px rgba(255, 245, 203, 0.5)",
            color: "text.primary",
            fontSize: { sx: 30, sm: 45, md: 60 },
          }}
          component={Link}
          href="/"
        >
          Bread&Butter
        </Typography>
        <Box>
          <IconButton color="inherit" component={Link} href="/admin">
            <AccountCircleIcon
              sx={{
                fontSize: { sx: 20, md: 40 },
                mx: { xs: 1, sm: 2, md: 4 },
                color: "text.primary",
              }}
            />
          </IconButton>
          <CartIconButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
