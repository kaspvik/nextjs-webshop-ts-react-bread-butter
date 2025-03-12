"use client";

import {
  Box,
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
    <Box
      component="form"
      sx={{
        width: "100%",
        maxWidth: "700px",
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
        <FormLabel sx={{ textAlign: "left", fontWeight: "bold" }}>
          Namn
        </FormLabel>
        <TextField
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "background.paper",
            borderRadius: "0.5rem",
          }}
          fullWidth
          margin="normal"
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
        <FormLabel sx={{ textAlign: "left", fontWeight: "bold" }}>
          Namn
        </FormLabel>
        <TextField
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "background.paper",
            borderRadius: "0.5rem",
          }}
          fullWidth
          margin="normal"
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
          <FormLabel sx={{ textAlign: "left", fontWeight: "bold" }}>
            Namn
          </FormLabel>
          <TextField
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "0.5rem",
              flex: 1,
            }}
            error
            id="zipcode"
            name="zipcode"
            placeholder="Postkod"
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel sx={{ textAlign: "left", fontWeight: "bold" }}>
            Namn
          </FormLabel>
          <TextField
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "0.5rem",
              flex: 1,
            }}
            error
            id="city"
            name="city"
            placeholder="Stad"
            helperText="Incorrect entry."
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
          <FormLabel sx={{ textAlign: "left", fontWeight: "bold" }}>
            Namn
          </FormLabel>
          <TextField
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "0.5rem",
              flex: 1,
            }}
            error
            id="date"
            placeholder="Datum"
          />{" "}
        </FormControl>
        <FormControl fullWidth>
          <FormLabel sx={{ textAlign: "left", fontWeight: "bold" }}>
            Namn
          </FormLabel>
          <TextField
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "0.5rem",
              flex: 1,
            }}
            error
            id="time"
            placeholder="Tid"
            helperText="Incorrect entry."
          />
        </FormControl>
      </Box>
      <FormControl fullWidth>
        <FormLabel sx={{ textAlign: "left", fontWeight: "bold" }}>
          Namn
        </FormLabel>
        <TextField
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "background.paper",
            borderRadius: "0.5rem",
          }}
          fullWidth
          margin="normal"
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
        <FormLabel sx={{ textAlign: "left", fontWeight: "bold" }}>
          Namn
        </FormLabel>
        <TextField
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "background.paper",
            borderRadius: "0.5rem",
          }}
          fullWidth
          margin="normal"
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
  );
}
