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
    image: "public/images/rustiktragbrod.png",
    title: "Rustikt rågbröd",
    description:
      "Ett rustikt rågbröd som påminner om det farmor brukade baka när du var liten",
    price: 50,
    weight: 700,
  },
  {
    id: "1356",
    articleNumber: "1356",
    image: "public/images/brytbrod.png",
    title: "Brytbröd",
    description:
      "Ett litet brytbröd med olivolja, passar perfekt till din krämiga soppa",
    price: 40,
    weight: 500,
  },
  {
    id: "2345",
    articleNumber: "2345",
    image: "public/images/levain.png",
    title: "Levain",
    description: "Klassisk surdegs-Levain, precis så som du vill ha det",
    price: 65,
    weight: 600,
  },
  {
    id: "2346",
    articleNumber: "2346",
    image: "public/images/litenlevain.png",
    title: "Liten Levain",
    description: "Klassisk surdegs-Levain, den lite mindre modellen",
    price: 40,
    weight: 400,
  },
  {
    id: "3456",
    articleNumber: "3456",
    image: "public/images/surdegslimpavete.png",
    title: "Surdegslimpa Vete",
    description: "Häll vete i en påse, hur gott är inte detta bröd!?",
    price: 60,
    weight: 620,
  },
];
