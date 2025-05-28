"use client";

import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
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
import { useSession } from "../auth-client";

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
  const { data: session } = useSession();
  const [authError, setAuthError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    zipcode: "",
    city: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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
  
    console.log("Session data:", session);
    console.log("Session user:", session?.user);
  
    if (!session?.user) {
      setAuthError(true);
      setTimeout(() => setAuthError(false), 5000);
      return;
    }

    const result = customerSchema.safeParse(formData);

    if (!result.success) {
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

      setOpen(true);
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
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <Container sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "left", ml: { sx: 1, md: 2 } }}>
        Delivery & Payment
      </Typography>
   
      {authError && (
        <Alert 
          severity="error" 
          sx={{ mt: 2, mb: 2 }}
          onClose={() => setAuthError(false)}
        >
          You must be a logged-in customer to complete an order.
          Please log in to continue
        </Alert>
      )}

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
          }}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
                fontFamily: "var(--font-tomorrow)",
              }}>
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
              error={Boolean(errors.name)}
              autoComplete="name"
              helperText={
                errors.name ? (
                  <FormHelperText>{errors.name}</FormHelperText>
                ) : null
              }
            />
          </FormControl>

          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
                fontFamily: "var(--font-tomorrow)",
              }}>
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
              helperText={
                errors.address ? (
                  <FormHelperText>{errors.address}</FormHelperText>
                ) : null
              }
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              justifyContent: "space-between",
            }}>
            <FormControl fullWidth>
              <FormLabel
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "text.primary",
                  fontFamily: "var(--font-tomorrow)",
                }}>
                Zipcode
              </FormLabel>
              <TextField
                size="small"
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: "0.5rem",
                  flex: 1,
                }}
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                autoComplete="postal-code"
                error={Boolean(errors.zipcode)}
                helperText={
                  errors.zipcode ? (
                    <FormHelperText>{errors.zipcode}</FormHelperText>
                  ) : null
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "text.primary",
                  fontFamily: "var(--font-tomorrow)",
                }}>
                City
              </FormLabel>
              <TextField
                size="small"
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: "0.5rem",
                  flex: 1,
                }}
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                autoComplete="address-level2"
                error={Boolean(errors.city)}
                helperText={
                  errors.city ? (
                    <FormHelperText>{errors.city}</FormHelperText>
                  ) : null
                }
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              justifyContent: "space-between",
            }}></Box>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
                fontFamily: "var(--font-tomorrow)",
              }}>
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
              helperText={
                errors.email ? (
                  <FormHelperText>{errors.email}</FormHelperText>
                ) : null
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
                fontFamily: "var(--font-tomorrow)",
              }}>
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
              helperText={
                errors.phone ? (
                  <FormHelperText>{errors.phone}</FormHelperText>
                ) : null
              }
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
            }}>
            Proceed to payment
          </Button>
          <Snackbar
            open={open}
            message="Beställning genomförd!"
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
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
          }}>
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