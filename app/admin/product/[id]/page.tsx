import { db } from "@/prisma/db";
import { Dialog } from "@mui/material";
import AddProductForm from "../../product-form";

export default async function NewProductPage() {
    const products = await db.product.findUnique();
  
  return (
    <Dialog open>
      <AddProductForm product={} />
    </Dialog>
  );
}
