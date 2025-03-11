"use client";

import AddIcon from "@mui/icons-material/Add";
import { Box, Container, Fab } from "@mui/material";

export default function AdminPage() {
  return (
    <Container sx={{
      bgcolor: "background.paper",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h2>Admin panel</h2>

      <h3>Hantera dina produkter på din sida</h3>

      <Box sx={{
        width: "90%",
        border: "solid 1px",
        margin: 5
      }}>
      </Box>

      <Box
        sx={{
          padding: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: 1,
          width: { xs: "80%", sm: "70%", md: "50%" }, 
          height: { xs: "100%", sm: "250px", md: "300px" },
          maxWidth: "800px",
          maxHeight: "200px" 
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>

        <p>Lägg till produkt</p>
      </Box>
      <Box sx={{
        width: "90%",
        border: "solid 1px",
        margin: 5
      }}>
      </Box>

      <Box sx={{
        display: "flex",
        
      }}>

      </Box>
    </Container>
  );
}
