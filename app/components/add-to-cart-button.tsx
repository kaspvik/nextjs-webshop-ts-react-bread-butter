"use client";

import { Button } from "@mui/material";
import { Product } from "@prisma/client";
import { useCart } from "../provider";

interface AddToCartButtonProps {
  label?: string;
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  label = "Add to cart",
  product,
}) => {
  const { addToCart, showToast } = useCart();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    addToCart(product);
    showToast("The product has been added to the shopping cart!");
  };

  return (
    <Button
      onClick={handleAddToCart}
      size="large"
      sx={{
        mt: 3,
        bgcolor: "#4ECDC4",
        color: "#ffffff",
        fontFamily: "var(--font-tomorrow)",
        "&:hover": { bgcolor: "primary.dark", color: "background.paper" },
      }}>
      {label}
    </Button>
  );
};

export default AddToCartButton;
