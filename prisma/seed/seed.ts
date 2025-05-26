import { db } from "../db";
import { categories } from "./categories";
import { products } from "./products";

async function main() {
  for (const { id, ...category } of categories) {
    await db.category.upsert({
      where: { name: category.name },
      update: category,
      create: category,
    });
  }

  for (const { id, ...product } of products) {
    await db.product.upsert({
      where: { articleNumber: product.articleNumber },
      update: product,
      create: product,
    });
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
