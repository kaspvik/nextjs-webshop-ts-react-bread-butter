"use client";

import StyledButton from "@/app/components/styled-button";
import { Container } from "@mui/material";
import Link from "next/link";

export default function ShowOrderButton() {
  return (
    <Link
      href="admin/orders"
      style={{ textDecoration: "none", color: "#3E291E" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <StyledButton>See orders</StyledButton>
      </Container>
    </Link>
  );
}
