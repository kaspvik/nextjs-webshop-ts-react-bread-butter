import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        padding: 4, //Mått vi förmodligen vill använda i hela appen. (1=8px)
        bgcolor: "background.paper", //Funktion för att hämta våra färger från theme.
      }}
    >
      <p>Det här är startsidan. Här ska alla produkterna visas.</p>
      <Button color="primary" sx={{ color: "white" }} variant="contained">
        Hello World
      </Button>
    </Box>
  );
}
