"use client";

import { Box, TextField } from "@mui/material";
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
        helperText={error ? "This field is required" : ""}
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          justifyContent: "space-between", // Ensure spacing
        }}
      >
        <TextField
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "0.5rem",
            flex: 1,
          }}
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "0.5rem",
            flex: 1,
          }}
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </Box>
    </Box>
  );
}
