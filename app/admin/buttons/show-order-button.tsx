"use client";

import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function ShowOrderButton() {
  return (
    <Link
      href="admin/orders"
      style={{ textDecoration: "none", color: "#3E291E" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "70%", md: "50%" },
          border: "1px solid",
          borderColor: "text.secondary",
          padding: 2,
          borderRadius: "4px",
          gap: 1,
          marginBottom: 2,
        }}>
        <Typography variant="h5">See orders</Typography>
      </Container>
    </Link>
  );
}
