import { NumberField } from "@base-ui-components/react/number-field";
import { Box, Typography } from "@mui/material";

import { useCart } from "../provider";

export default function PublicNumberField({
  id,
  price,
}: {
  id: string;
  price: number;
}) {
  const { cartItems, updateQuantity } = useCart();
  const cartItem = cartItems.find((cartItem) => cartItem.id === id); // find product in cart

  const quantity = cartItem?.quantity || 0; // default to 1 if not found

  // const quantity = cartItem?.quantity;

  // const { removeFromCart } = useCart();

  // useEffect(() => {
  //   if (quantity === 0) {
  //     removeFromCart(cartItem.id);
  //   }
  // }, [quantity, cartItem?.id, removeFromCart]);

  return (
    <Box sx={{ pt: 1, pb: 0.5, pl: 0.5, pr: 0.5, border: "1px solid white" }}>
      <NumberField.Root
        id={id}
        value={quantity}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.25rem",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography
            variant="h6"
            sx={{ align: "center" }}
            data-cy="product-price">
            {price * quantity} kr
          </Typography>
          <NumberField.Group style={{ display: "flex" }}>
            <NumberField.Decrement
              onClick={() => updateQuantity(id, -1)}
              data-cy="decrease-quantity-button"
              style={{
                display: "flex",
                width: "2rem",
                height: "1.25rem",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: "0.375rem",
                borderBottomLeftRadius: "0.375rem",
                border: "1px solid #000000",
                backgroundColor: "transparent",
                backgroundClip: "padding-box",
                color: "#111827",
                userSelect: "none",
                boxShadow: "4px 4px 5px -2px grey",
              }}>
              <MinusIcon />
            </NumberField.Decrement>
            <div
              data-cy="product-quantity"
              style={{
                height: "1.25rem",
                width: "3rem",
                border: "1px solid #000000",
                textAlign: "center",
                lineHeight: "1.25rem",
                fontSize: "1rem",
                backgroundColor: "#FFFFFF",
                color: "#111827",
                fontVariantNumeric: "tabular-nums",
                boxShadow: "0 4px 5px -2px grey",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {quantity}
            </div>

            <NumberField.Increment
              onClick={() => updateQuantity(id, 1)}
              data-cy="increase-quantity-button"
              style={{
                display: "flex",
                width: "2rem",
                height: "1.25rem",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: "0.375rem",
                borderBottomRightRadius: "0.375rem",
                border: "1px solid #000000",
                backgroundColor: "transparent",
                color: "#111827",
                userSelect: "none",
                boxShadow: "0px 4px 5px -2px grey",
              }}>
              <PlusIcon />
            </NumberField.Increment>
          </NumberField.Group>
        </Box>
      </NumberField.Root>
    </Box>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
    </svg>
  );
}

function MinusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M0 5H10" />
    </svg>
  );
}
