"use client";

import { Button } from "@mui/material";

interface AddToCartButtonProps {
  label?: string; // Gör så att label är valfri (default-text används om ingen skickas in)
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  label = "Lägg i kundvagn",
}) => {
  return (
    <Button
      size="large"
      sx={{
        mt: 3,
        bgcolor: "primary.main",
        color: "text.primary",
        "&:hover": { bgcolor: "primary.dark", color: "background.paper" },
      }}
      data-cy="product-buy-button"
    >
      {label} {/* Använd den dynamiska texten här */}
    </Button>
  );
};

export default AddToCartButton;
