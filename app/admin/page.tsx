import { db } from "@/prisma/db";
import { Container } from "@mui/material";
import AddProductButton from "./AddProductButton";
import AdminItem from "./AdminItem";

export default async function AdminPage(){
  const products = await db.product.findMany();
    return (
      <Container sx={{ display: "flex", flexDirection: "column", gap: 2, bgcolor: "background.paper", marginTop: 2 }}>
        <AddProductButton/>
        {products.map((product) => (
        <AdminItem key={product.id} product={product} />
      ))}
        </Container>
    )
}