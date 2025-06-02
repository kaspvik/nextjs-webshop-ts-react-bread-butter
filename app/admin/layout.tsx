import { db } from "@/prisma/db";
import { Box, Container } from "@mui/material";
import AdminItem from "./admin-item-card";
import AddProductButton from "./buttons/add-product-button";
import ShowOrderButton from "./buttons/show-order-button";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await db.product.findMany();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "background.paper",
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 0,
        padding: 4,
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}>
        <AddProductButton />
        <ShowOrderButton />
      </Box>
      {products.map((product) => (
        <AdminItem key={product.id} product={product} />
      ))}
      {children}

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
          backgroundImage: "url('/images/crt-noise.gif')",
          opacity: 9,
          mixBlendMode: "screen",
        }}
      />
    </Container>
  );
}
