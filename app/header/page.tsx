import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        padding: 4,
        bgcolor: "background.default",
      }}
    >
      <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 1 }} component={Link} href="/">
          Bread&Butter
        </Typography>
        <Button color="inherit" component={Link} href="/admin">
          👤
        </Button>
        <Button color="inherit" component={Link} href="/cart">
          🛒
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
