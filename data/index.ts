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
    articleNumber: "Art nr: 1234",
    image: "/images/rustiktragbrod.png",
    title: "Rustikt rågbröd",
    description:
      "Ett rustikt rågbröd som påminner om det farmor brukade baka när du var liten",
    price: 50,
    weight: 700,
  },
  {
    id: "1356",
    articleNumber: "Art Nr: 1356",
    image: "/images/brytbrod.png",
    title: "Brytbröd",
    description:
      "Ett litet brytbröd med olivolja, passar perfekt till din krämiga soppa",
    price: 40,
    weight: 500,
  },
  {
    id: "2345",
    articleNumber: "Art Nr: 2345",
    image: "/images/levain.png",
    title: "Levain",
    description: "Klassisk surdegs-Levain, precis så som du vill ha det",
    price: 65,
    weight: 600,
  },
  {
    id: "2346",
    articleNumber: "Art Nr: 2346",
    image: "/images/litenlevain.png",
    title: "Liten Levain",
    description: "Klassisk surdegs-Levain, den lite mindre modellen",
    price: 40,
    weight: 400,
  },
  {
    id: "3456",
    articleNumber: "Art Nr: 3456",
    image: "/images/surdegslimpavete.png",
    title: "Surdegslimpa Vete",
    description:
      "Häll vete i en påse, hur gott är inte detta bröd!? Jättegott.",
    price: 60,
    weight: 620,
  },
  {
    id: "4567",
    articleNumber: "Art Nr: 4567",
    image:
      "https://images.pexels.com/photos/2067430/pexels-photo-2067430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Surdegsbaguette",
    description: "Oui oui, den är inte bara baguette, den är sur också!",
    price: 50,
    weight: 550,
  },
  {
    id: "5678",
    articleNumber: "Art Nr: 5678",
    image:
      "https://images.pexels.com/photos/7693917/pexels-photo-7693917.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Frukostkombo",
    description:
      "Den ena gillar ljust, den andra mörkt... Två goda fröbröd till frukost.",
    price: 100,
    weight: 1000,
  },
  {
    id: "6789",
    articleNumber: "Art Nr: 6789",
    image:
      "https://images.pexels.com/photos/7175448/pexels-photo-7175448.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Valnötsbröd",
    description: "Vårt prisvinnande valnötsbröd låter det vattnas i munnen!",
    price: 65,
    weight: 650,
  },
  {
    id: "1357",
    articleNumber: "Art Nr: 1357",
    image:
      "https://images.pexels.com/photos/31009555/pexels-photo-31009555/free-photo-of-rustikt-brod-med-keramiska-burkar-pa-traskiva.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Surdegsfralla",
    description:
      "En vanlig j*vla fralla, fast bättre, såklart. Ha smör på, det blir gott.",
    price: 45,
    weight: 450,
  },
];
