"use client";

import { getOrderByOrderNr } from "@/app/admin/action";
import Receipt from "@/app/components/receipt";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ConfirmationPage({
  params,
}: {
  params: { orderNr: string };
}) {
  const { orderNr } = params;
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getOrderByOrderNr(orderNr)
      .then(setOrder)
      .catch(() => setError("Kunde inte hämta beställningen."));
  }, [orderNr]);

  if (error) return <h1>{error}</h1>;
  if (!order) return <h1>Laddar beställning...</h1>;

  const { customer, items } = order;
  const totalSum = items.reduce(
    (sum: number, item: any) => sum + item.quantity * item.price,
    0
  );

  return (
    <Container
      sx={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "flexStart",
      }}
    >
      <Box
        component="main"
        sx={{
          padding: 4,
          bgcolor: "background.paper",
          border: "2px solid #9C8173",
          borderRadius: "0.5rem",
          margin: "2rem 0",
          width: "100%",
        }}
      >
        <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
          Tack för din beställning!
        </Typography>
        <Typography
          variant="h1"
          component="p"
          sx={{ textAlign: "center", fontSize: "1.25rem", padding: "1.5rem" }}
        >
          Ditt ordernummer: {orderNr}
        </Typography>

        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1.5rem",
            marginBottom: "2rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "1.5rem", fontWeight: "600" }}
          >
            Kundinformation
          </Typography>
          <Typography>Namn: {customer.name}</Typography>
          <Typography>E-post: {customer.email}</Typography>
          <Typography>
            Adress: {customer.address}, {customer.zipcode} {customer.city}
          </Typography>
          <Typography>Telefon: {customer.phone}</Typography>
        </Box>

        <Receipt items={items} totalSum={totalSum} />

        <Typography sx={{ marginTop: "2rem" }}>
          Separat kvitto kommer skickas till din e-mail. Tack för att du har
          handlat på Bread & Butter!
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", mt: 3 }}
          component={Link}
          href="/"
        >
          <Button>Till startsidan</Button>
        </Box>
      </Box>
    </Container>
  );
}
