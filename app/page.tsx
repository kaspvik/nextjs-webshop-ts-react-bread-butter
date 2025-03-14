import { Product } from "@/data";
import { db } from "@/prisma/db";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import ProductCard from "./product/product-card";

export default async function Home() {
  const products = await db.product.findMany();

  const id = "test";
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
        id={id}
        component="main"
        sx={{
          flexGrow: 1,
          padding: 4, //Mått vi förmodligen vill använda i hela appen. (1=8px)
          bgcolor: "background.paper", //Funktion för att hämta våra färger från theme.
          margin: "2rem 0",
          width: "100%",
        }}
      >
        <Grid
          container
          direction="row"
          sx={{ justifyContent: "center", alignItems: "center" }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 6, md: 4 }}
        >
          {products.map((product: Product) => (
            <Link
              key={product.id}
              href={`/product/${product.articleNumber}-${product.title}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
