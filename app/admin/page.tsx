"use client";

import AddIcon from "@mui/icons-material/Add";
import { Box, Container, Fab } from "@mui/material";

export default function AdminPage() {
  return (
    <Container sx={{}}>
      <h2>AdminPage</h2>

      <h3>Hantera dina produkter på din sida</h3>

      <Box
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: 1,
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>

        <p>Lägg till produkt</p>
      </Box>
    </Container>
  );
}
