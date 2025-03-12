"use client";

import {
  Box,
  Container,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function CustomerForm() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setError(false); // Ta bort fel om användaren skriver i fältet
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      setError(true); // om fältet är tomt visas error
    } else {
      setError(false); // inget fel om det finns en input
      alert("Skickat!");
    }
  };

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Leverans & Betalning
      </Typography>
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
        noValidate
        autoComplete="off"
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
            placeholder="Ditt namn"
            value={inputValue}
            onChange={handleChange}
            error={error}
            helperText={error ? "Du måste fylla i ditt namn" : ""}
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
            value={inputValue}
            onChange={handleChange}
            error={error}
            helperText={error ? "Du måste fylla i en adress" : ""}
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
            />
          </FormControl>
        </Box>
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
              Leveransdatum
            </FormLabel>
            <TextField
              size="small"
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
                flex: 1,
              }}
              id="date"
              placeholder="Datum"
            />{" "}
          </FormControl>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              Tid
            </FormLabel>
            <TextField
              size="small"
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "0.5rem",
                flex: 1,
              }}
              id="time"
              placeholder="Tid"
            />
          </FormControl>
        </Box>
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
            value={inputValue}
            onChange={handleChange}
            error={error}
            helperText={error ? "Du måste fylla i en e-post adress" : ""}
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
            value={inputValue}
            onChange={handleChange}
            error={error}
            helperText={error ? "Du måste fylla i ett telefonnummer" : ""}
          />
        </FormControl>
      </Box>
    </Container>
  );
}
