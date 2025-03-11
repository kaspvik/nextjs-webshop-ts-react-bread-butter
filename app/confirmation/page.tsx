import { Box, Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { products } from "@/data";
import { Product } from "@/data";

export default function ConfirmationPage() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        minHeight: "100vh",
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 4, //Mått vi förmodligen vill använda i hela appen. (1=8px)
          bgcolor: "background.paper", //Funktion för att hämta våra färger från theme.
          border: "2px solid #9C8173",
          borderRadius: "0.5rem",
          margin: "2rem 0",
          width: "100%",
        }}
      >
        <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
          Tack för din beställning!
        </Typography>
        <Typography
          variant="h1"
          component="p"
          sx={{ textAlign: "center", fontSize: "1.25rem", padding: "1.5rem" }}
        >
          Ditt ordernummer: 157462400
        </Typography>

        <Typography
          variant="h2"
          component="p"
          sx={{ fontSize: "2rem", fontWeight: "400", mb: "1.5rem" }}
        >
          Din beställning:{" "}
        </Typography>
        <Grid
          container
          direction={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          columns={{ xs: 12, sm: 6, md: 4 }}
        >
          <Grid>
            <Typography
              variant="h2"
              sx={{ fontSize: "1.5rem", fontWeight: "400" }}
            >
              Produkt
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h2"
              sx={{ fontSize: "1.5rem", fontWeight: "400" }}
            >
              Antal
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h2"
              sx={{ fontSize: "1.5rem", fontWeight: "400" }}
            >
              Pris
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h2"
              sx={{ fontSize: "1.5rem", fontWeight: "400" }}
            >
              Summa
            </Typography>
          </Grid>
          {products.map((product: Product) => (
            <Grid key={product.id}>
              <p>{product.title}</p>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
