import { db } from "@/prisma/db";
import { Dialog } from "@mui/material";
import ProductForm from "../../product-form";

interface Props {
  params: Promise<{ articleNumber: string }>;
}

export default async function EditProductPage({ params }: Props) {
  const { articleNumber } = await params;

  const product = await db.product.findUnique({
    where: { articleNumber },
  });

  if (!product) return <main>404</main>;
  return (
    <Dialog open>
      <ProductForm key={product.articleNumber} product={product} />
    </Dialog>
  );
}
