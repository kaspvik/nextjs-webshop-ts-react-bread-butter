"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { createOrder, saveAddress } from "../admin/action";
import { useCart } from "../provider";

const customerSchema = z.object({
  name: z.string().min(1, "You must fill in your name."),
  address: z.string().min(1, "You must fill in your address."),
  zipcode: z
    .string()
    .regex(/^\d{5}$/, "The postal code must be exactly 5 digits."),
  city: z.string().min(1, "You must fill in a city."),
  email: z.string().email("Invalid email address."),
  phone: z.string().regex(/^\+?\d{7,15}$/, "Invalid phone number."),
});

export default function CustomerForm() {
  const router = useRouter();
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);
  const { totalSum, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    zipcode: "",
    city: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [stockErrorOpen, setStockErrorOpen] = useState(false);
  const [stockErrorMessage, setStockErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // uppdatera värdet när användaren skriveer i fältet
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validerar hela schemat
    const result = customerSchema.safeParse({ ...formData, [name]: value });
    if (result.success) {
      setErrors({});
    } else {
      const newErrors: { [key: string]: string } = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        newErrors[field] = issue.message;
      });

      setErrors(newErrors);
    }
  };

  const generateOrderNumber = () => {
    return `${Date.now()}`;
  };
  const orderNr = generateOrderNumber();

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = customerSchema.safeParse(formData);

    if (!result.success) {
      // konvertera zod felen till objekt att lagra namnen på fälten
      const newErrors = result.error.flatten().fieldErrors;
      setErrors(
        Object.keys(newErrors).reduce((acc, key) => {
          const typedKey = key as keyof typeof newErrors;
          acc[typedKey] = newErrors[typedKey]?.[0] ?? ""; // första error meddelandet
          // acc (short for accumulator) is the object that collects and stores the formatted errors.
          return acc;
        }, {} as Record<keyof typeof formData, string>) // extra fluff för typescript
      );

      // om det fanns nåt fel

      console.log("Formuläret innehåller fel, avbryter!");
      return;
    }

    try {
      await saveAddress(formData);
      const order = await createOrder(cartItems);
      setOpen(true); // success snackbar
      setTimeout(() => {
        router.push(`/confirmation/${order.orderNr}`);
      }, 1000);
      clearCart();
      setFormData({
        name: "",
        address: "",
        zipcode: "",
        city: "",
        email: "",
        phone: "",
      });
    } catch (error: any) {
      if (error instanceof Error) {
        setStockErrorMessage(error.message);
        setStockErrorOpen(true); // show your stock error snackbar
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <Container sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "left", ml: { sx: 1, md: 2 } }}>
        Delivery & Payment
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "background.default",
            mt: 2,
            mx: "auto",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
                fontFamily: "var(--font-tomorrow)",
              }}
            >
              Name
            </FormLabel>

            <TextField
              size="small"
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
              }}
              fullWidth
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              error={Boolean(errors.name)}
              helperText={errors.name || null}
            />
          </FormControl>

          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
                fontFamily: "var(--font-tomorrow)",
              }}
            >
              Delivery address
            </FormLabel>
            <TextField
              size="small"
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
              }}
              fullWidth
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              autoComplete="street-address"
              error={Boolean(errors.address)}
              helperText={errors.address || null}
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <FormControl fullWidth>
              <FormLabel
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "text.primary",
                  fontFamily: "var(--font-tomorrow)",
                }}
              >
                Zipcode
              </FormLabel>

              <TextField
                size="small"
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: "0.5rem",
                }}
                fullWidth
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                autoComplete="postal-code"
                error={Boolean(errors.zipcode)}
                helperText={errors.zipcode || null}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "text.primary",
                  fontFamily: "var(--font-tomorrow)",
                }}
              >
                City
              </FormLabel>

              <TextField
                size="small"
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: "0.5rem",
                }}
                fullWidth
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                autoComplete="address-level2"
                error={Boolean(errors.city)}
                helperText={errors.city || null}
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              justifyContent: "space-between",
            }}
          ></Box>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
                fontFamily: "var(--font-tomorrow)",
              }}
            >
              Email
            </FormLabel>

            <TextField
              size="small"
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
              }}
              fullWidth
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              error={Boolean(errors.email)}
              helperText={errors.email || null}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
                fontFamily: "var(--font-tomorrow)",
              }}
            >
              Phonenumber
            </FormLabel>

            <TextField
              size="small"
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
              }}
              fullWidth
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              error={Boolean(errors.phone)}
              helperText={errors.phone || null}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: "primary.main",
              color: "text.primary",
              "&:hover": { bgcolor: "primary.dark", color: "background.paper" },
              mt: 3,
              width: 200,
              mx: "auto",
              py: 2,
              fontFamily: "var(--font-tomorrow)",
            }}
          >
            Proceed to payment
          </Button>
          <Snackbar
            open={open}
            message="Order placed!"
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
          />
          <Snackbar
            open={stockErrorOpen}
            onClose={() => setStockErrorOpen(false)}
            autoHideDuration={4000}
            message={stockErrorMessage || "A stock issue occurred."}
          />
        </Box>
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "background.default",
            mt: 2,
            mb: { xs: 2, sm: 0 },
            mx: "auto",
            p: 3,
            display: "flex",
            flexDirection: "column",

            gap: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Subtotal:</Typography>
            <Typography variant="h6">{totalSum.toFixed(2)}</Typography>
          </Box>
          <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 0.5)" }} />

          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Delivery:</Typography>
            <Typography variant="h6">{formData.address}</Typography>
          </Box>
          <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 0.5)" }} />

          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6" fontWeight={700}>
              {totalSum.toFixed(2)}
            </Typography>
          </Box>
          <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 0.5)" }} />
        </Box>
      </Box>
    </Container>
  );
}
