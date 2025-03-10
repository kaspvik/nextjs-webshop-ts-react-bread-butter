/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
export interface Product {
  id: string;
  articleNumber: string;
  image: string;
  title: string;
  description: string;
  price: number;
  weight: number;
}

export interface CartItem extends Product {
  quantity: number;
}

/* Lägg till era produkter här */
export const products: Product[] = [
  {
    id: "1234",
    articleNumber: "1234",
    image: "",
    title: "Rustikt rågbröd",
    description:
      "Ett rustikt rågbröd som påminner om det farmor brukade baka när du var liten",
    price: 50,
    weight: 700,
  },
];
