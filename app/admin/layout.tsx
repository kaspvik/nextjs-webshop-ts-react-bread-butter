import { db } from "@/prisma/db";
import { Container } from "@mui/material";
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
        borderRadius: 2,
        padding: 4,
        border: "2px solid #9C8173",
      }}
    >
      <AddProductButton />
            <ShowOrderButton />
      {products.map((product) => (
        <AdminItem key={product.id} product={product} />
      ))}
      {children}

    </Container>
  );
}
