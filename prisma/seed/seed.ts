import { db } from "../db";
import { categories } from "./categories";
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
  await db.order.upsert({
    where: { orderNr: "1" },
    update: {},
    create: {
      orderNr: "1",
      user: {
        create: {
          name: "jim",
          email: "jim.bothen@gmail.com",
          emailVerified: true,
        },
      },
      items: {
        create: [{ title: "abc", image: "mdow", price: 123, quantity: 4 }],
      },
    },
  });
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
