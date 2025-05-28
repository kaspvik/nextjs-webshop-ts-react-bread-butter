"use client";

import StyledButton from "@/app/components/styled-button";
import { Container } from "@mui/material";
import Link from "next/link";

export default function ShowOrderButton() {
  return (
    <Link href="admin/orders" style={{ textDecoration: "none" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <StyledButton color="secondary">See orders</StyledButton>
      </Container>
    </Link>
  );
}
