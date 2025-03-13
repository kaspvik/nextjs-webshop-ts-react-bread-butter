import { products } from "@/data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import AddToCartButton from "../add-to-cart-button";

interface Props {
  params: Promise<{ slug: string }>;
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  if (!slug) {
    return <h1>Produkten hittades inte</h1>;
  }

  // Ta ut articleNumber
  const [articleNumber] = slug.split("-");

  // hitta produkt med articleNumber
  const product = products.find((p) => p.articleNumber === articleNumber);

  if (!product) {
    return <h1>Produkten hittades inte</h1>;
  }

  return (
    <Container
      sx={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "flexStart",
      }}
    >
      <Box
        component="main"
        sx={{
          padding: 4, //Mått vi förmodligen vill använda i hela appen. (1=8px)
          bgcolor: "background.paper", //Funktion för att hämta våra färger från theme.
          border: "2px solid #9C8173",
          borderRadius: "0.5rem",
          margin: "2rem 0",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: { xs: "60%", sm: "60%", md: "60%" },
            maxWidth: "400px",
          }}
        >
          <Image
            src={product.image.replace("public/", "/")}
            alt={product.title}
            width={400}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box sx={{ flex: 1, maxWidth: "500px" }}>
          <Typography variant="h1">{product.title}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Pris: {product.price} kr
          </Typography>
          <Typography variant="h6">Vikt: {product.weight} g</Typography>
          <AddToCartButton />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;
