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
        padding: 4, //Mått vi förmodligen vill använda i hela appen. (1=8px)
        bgcolor: "background.paper", //Funktion för att hämta våra färger från theme.
      }}
    >
      <Grid container spacing={2}>
        {products.map((product: Product) => (
          <Link href="/product/page" key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </Grid>
      <Button color="primary" sx={{ color: "white" }} variant="contained">
        Hello World
      </Button>
    </Box>
  );
}
