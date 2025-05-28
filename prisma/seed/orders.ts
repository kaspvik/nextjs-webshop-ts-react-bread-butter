import { db } from "../db";

export async function seedOrders() {
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
        create: [
          {
            artist: "Nirvana",
            image: "mdow",
            price: 123,
            quantity: 2,
          },
        ],
      },
    },
  });
  await db.order.upsert({
    where: { orderNr: "2" },
    update: {},
    create: {
      orderNr: "2",
      user: {
        create: {
          name: "jim",
          email: "jim.bothen@gmail.com",
          emailVerified: true,
        },
      },
      items: {
        create: [
          {
            artist: "Stone Temple Pilots",
            image: "mdow",
            price: 119,
            quantity: 1,
          },
        ],
      },
    },
  });
  await db.order.upsert({
    where: { orderNr: "3" },
    update: {},
    create: {
      orderNr: "3",
      user: {
        create: {
          name: "jim",
          email: "jim.bothen@gmail.com",
          emailVerified: true,
        },
      },
      items: {
        create: [{ artist: "Toto", image: "mdow", price: 109, quantity: 3 }],
      },
    },
  });
}
