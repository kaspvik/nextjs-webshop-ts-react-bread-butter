"use client";

import { Box, TextField } from "@mui/material";
import { useState } from "react";

export default function CustomerForm() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setError(false); // Remove error once user types something
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      setError(true); // Show error if input is empty
    } else {
      setError(false); // No error if input is valid
      alert("Form submitted!");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        maxwidth: 500,
        backgroundColor: "background.default",
        marginTop: "2rem",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{
          margin: "1rem",
          backgroundColor: "background.paper",
          borderRadius: "0.5rem",
          width: "90%",
        }}
        id="name"
        name="name"
        placeholder="Ditt namn"
        value={inputValue}
        onChange={handleChange}
        error={error}
        helperText={error ? "This field is required" : ""}
      />
      <div>
        <TextField
          sx={{
            margin: "1rem",
            backgroundColor: "background.paper",
            borderRadius: "0.5rem",
          }}
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          sx={{
            margin: "1rem",
            backgroundColor: "background.paper",
            borderRadius: "0.5rem",
          }}
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
    </Box>
  );
}
