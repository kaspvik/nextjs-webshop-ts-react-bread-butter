import GoBackButton from "@/app/components/go-back-button";
import { db } from "@/prisma/db";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import AddToCartButton from "../../../components/add-to-cart-button";

interface Props {
  params: { articleNumber: string; title: string };
}

export default async function ProductPage({ params }: Props) {
  const { articleNumber, title } = params;
  if (!articleNumber) {
    return <h1>Produkten hittades inte</h1>;
  }
  const decodedTitle = decodeURIComponent(title);

  // hitta produkt med articleNumber

  const product = await db.product.findUnique({
    where: { articleNumber: articleNumber },
  });

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Container
      sx={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "flexStart",
        position: "relative",
        overflow: "visible",
        marginY: 2,
      }}>
      <GoBackButton />
      <Box
        component="main"
        sx={{
          padding: 4,
          bgcolor: "",
          margin: "2rem 0",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: 4,
        }}>
        <Box
          sx={{
            width: { xs: "70%", sm: "70%", md: "70%" },
            maxWidth: "400px",
          }}>
          <Image
            src={product.image.replace("public/", "/")}
            alt={product.title}
            width={400}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}>
          <Typography
            variant="h2"
            sx={{ fontSize: { sx: 40, sm: 40, md: 50 } }}>
            {product.title}
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Price: {product.price} kr
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ py: 2, fontSize: "15px" }}>
            Genre: {product.weight} g
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
              mt: 2,
            }}>
            <AddToCartButton product={product} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
