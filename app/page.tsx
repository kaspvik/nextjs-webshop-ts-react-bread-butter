import { db } from "@/prisma/db";
import { categories } from "@/prisma/seed/categories";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import CategorySection from "./components/category-section";
import Hero from "./components/hero";
import ProductCard from "./product/[articleNumber]/[title]/product-card";

type Props = {
  searchParams: {
    categoryId?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const { categoryId } = searchParams;

  const products = await db.product.findMany({
    where: categoryId
      ? {
          categoryId: categoryId,
        }
      : {},
    include: {
      Category: true,
    },
  });

  return (
    <>
      <Hero />
      <CategorySection categories={categories} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 4,
            bgcolor: "background.default",
            margin: "2rem 0",
            width: "100%",
          }}>
          <Grid
            container
            direction="row"
            sx={{ justifyContent: "center", alignItems: "center" }}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 6, md: 4 }}>
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.articleNumber}/${encodeURIComponent(
                  product.title
                )}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  justifyContent: "center",
                }}>
                <ProductCard product={product} />
              </Link>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
