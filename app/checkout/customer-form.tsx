"use client";

import {
  Box,
  Container,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Button,
  Divider,
  Snackbar,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { useCart } from "../provider";
import { useRouter } from "next/navigation";

export default function CustomerForm() {
  const router = useRouter();
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

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // skapa ett tomt error-objekt att lagra errors per fält i
    const newErrors: { [key: string]: boolean } = {};
    // hämtar varje inputfältsnamn och loopar igenom
    Object.keys(formData).forEach((key) => {
      // kollar om något fält är tomt (tom sträng)
      if (formData[key as keyof typeof formData].trim() === "") {
        //skapar i så fall ett error i det fältet
        newErrors[key] = true;
      }
    });

    // om det fanns nåt fel
    if (Object.keys(newErrors).length > 0) {
      // uppdatera error statet så vi kan visa felmeddelanden
      setErrors(newErrors);
      console.log("Formuläret innehåller fel, avbryter!");

      return;
    } else {
      console.log("Formuläret är korrekt! Visar bekräftelse... ");

      // visar en bekräftelse och omdirigerar användaren till nästa sida efter 2 sek

      setOpen(true);
      setTimeout(() => {
        console.log("Navigerar till /confirmation...");

        router.push("/confirmation");
      }, 2000);
      clearCart();
      //tömma formuläret
      setFormData({
        name: "",
        address: "",
        zipcode: "",
        city: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <Container sx={{ mb: 3 }}>
      <Typography variant="h1" sx={{ textAlign: "left", ml: { sx: 1, md: 2 } }}>
        Leverans & Betalning
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Box
          component="form"
          data-cy="customer-form"
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
          noValidate
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              Namn
            </FormLabel>
            <TextField
              size="small"
              slotProps={{ htmlInput: { "data-cy": "customer-name" } }}
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
                  <FormHelperText data-cy="customer-name-error">
                    {"Du måste fylla i ditt namn"}
                  </FormHelperText>
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
              }}
            >
              Adress
            </FormLabel>
            <TextField
              size="small"
              slotProps={{ htmlInput: { "data-cy": "customer-address" } }}
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
              }}
              fullWidth
              id="address"
              name="address"
              placeholder="Leveransadress"
              value={formData.address}
              onChange={handleChange}
              autoComplete="street-address"
              error={errors.address}
              helperText={
                errors.address ? (
                  <FormHelperText data-cy="customer-address-error">
                    {"Du måste fylla i en adress"}
                  </FormHelperText>
                ) : null
              }
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              justifyContent: "space-between", // Ensure spacing
            }}
          >
            <FormControl fullWidth>
              <FormLabel
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
                Postkod
              </FormLabel>
              <TextField
                size="small"
                slotProps={{ htmlInput: { "data-cy": "customer-zipcode" } }}
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: "0.5rem",
                  flex: 1,
                }}
                id="zipcode"
                name="zipcode"
                placeholder="Postkod"
                value={formData.zipcode}
                onChange={handleChange}
                autoComplete="postal-code"
                error={errors.zipcode}
                helperText={
                  errors.zipcode ? (
                    <FormHelperText data-cy="customer-zipcode-error">
                      {"Du måste fylla i en postkod"}
                    </FormHelperText>
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
                }}
              >
                Stad
              </FormLabel>
              <TextField
                size="small"
                slotProps={{ htmlInput: { "data-cy": "customer-city" } }}
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: "0.5rem",
                  flex: 1,
                }}
                id="city"
                name="city"
                placeholder="Stad"
                value={formData.city}
                onChange={handleChange}
                autoComplete="address-level2"
                error={errors.city}
                helperText={
                  errors.city ? (
                    <FormHelperText data-cy="customer-city-error">
                      {"Du måste fylla i en stad"}
                    </FormHelperText>
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
            }}
          ></Box>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              E-post
            </FormLabel>
            <TextField
              size="small"
              slotProps={{ htmlInput: { "data-cy": "customer-email" } }}
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
              }}
              fullWidth
              id="email"
              name="email"
              placeholder="E-post"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              error={errors.email}
              helperText={
                errors.email ? (
                  <FormHelperText data-cy="customer-email-error">
                    {"Du måste fylla i en e-post adress"}
                  </FormHelperText>
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
              }}
            >
              Telefonnummer
            </FormLabel>
            <TextField
              size="small"
              slotProps={{ htmlInput: { "data-cy": "customer-phone" } }}
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
              }}
              fullWidth
              id="phone"
              name="phone"
              placeholder="Telefonnummer"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              error={errors.phone}
              helperText={
                errors.phone ? (
                  <FormHelperText data-cy="customer-phone-error">
                    {"Du måste fylla i ett telefonnummer"}
                  </FormHelperText>
                ) : null
              }
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{ color: "text.primary", mt: 3, width: 200, mx: "auto", py: 2 }}
          >
            Fortsätt till betalning
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
            mx: "auto",
            p: 3,
            display: "flex",
            flexDirection: "column",

            gap: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">Delsumma:</Typography>
            <Typography variant="body1">{totalSum.toFixed(2)}</Typography>
          </Box>
          <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 0.5)" }} />

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">Leverans:</Typography>
            <Typography variant="body1">{formData.address}</Typography>
          </Box>
          <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 0.5)" }} />

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1">Totalt:</Typography>
            <Typography variant="body1" fontWeight={700}>
              {totalSum.toFixed(2)}
            </Typography>
          </Box>
          <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 0.5)" }} />
        </Box>
      </Box>
    </Container>
  );
}
