import { db } from "@/prisma/db";
import { Dialog } from "@mui/material";
import ProductForm from "../../product-form";

export default async function EditProductPage() {
  const products = await db.product.findUnique();

  return (
    <Dialog open>
      <ProductForm product={products} />
    </Dialog>
  );
}
