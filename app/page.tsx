import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { products } from "@/data";
import { Product } from "@/data";
import Link from "next/link";
import ProductCard from "./product/product-card";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: 4, //Mått vi förmodligen vill använda i hela appen. (1=8px)
        bgcolor: "background.paper", //Funktion för att hämta våra färger från theme.
        maxWidth: "70%",
      }}
    >
      <Grid
        container
        direction="row"
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product: Product) => (
          <Link href="/product/page" key={product.id}>
            <Grid key={product.id} size={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
              <ProductCard key={product.id} product={product} />
            </Grid>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
