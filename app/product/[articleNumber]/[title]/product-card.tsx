import AddToCartButton from "@/app/components/add-to-cart-button";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "@prisma/client";

type ProductCardProps = {
  product: Product & {
    Category: {
      id: string;
      name: string;
      description: string;
    } | null;
  };
};

export default async function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 320,
        minHeight: 490,
        boxShadow: "none",
        display: "grid",
        position: "relative",
        ":hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
        },
      }}>
      <CardMedia
        component="img"
        sx={{
          height: 300,
          width: 300,
          mx: "auto",
          mt: "1rem",
          zIndex: 1,
        }}
        image={product.image}
        alt={product.album}
      />

      <CardContent
        sx={{
          border: "2px solid",
          borderColor: "text.secondary",
          borderRadius: "0.25rem",
          mx: "auto",
          mt: "1rem",
          mb: "1rem",
          zIndex: 1,
          maxWidth: "90%",
          minWidth: "312px",
          minHeight: "233px",
        }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.artist}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {product.album}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            height: "7.6em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}>
          {product.description}
        </Typography>

        <Typography variant="h5" sx={{ color: "text.primary", mt: "0.5rem" }}>
          {product.price} kr
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: "0.5rem" }}>
          {product.Category ? product.Category.name : "No Category"}
        </Typography>
        <CardActions>
          <Box sx={{ mx: "auto" }}>
            <AddToCartButton label="Buy" product={product} />
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}
