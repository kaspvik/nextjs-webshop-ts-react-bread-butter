import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        padding: 4,
        bgcolor: "background.default",
        zIndex: 1100,
      }}
    >
      <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 1 }} component={Link} href="/">
          Bread&Butter
        </Typography>
        <Button
          color="inherit"
          component={Link}
          href="/admin"
          data-cy="admin-link"
        >
          👤
        </Button>
        <Button
          color="inherit"
          component={Link}
          href="/cart"
          data-cy="cart-link"
        >
          🛒
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
