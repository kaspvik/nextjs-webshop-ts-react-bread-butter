import { db } from "../db";
import { categories } from "./categories";
import { seedOrders } from "./orders";
import { products } from "./products";

async function main() {
  for (const category of categories) {
    await db.category.upsert({
      where: { id: category.id },
      update: {},
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

  await seedOrders();
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
