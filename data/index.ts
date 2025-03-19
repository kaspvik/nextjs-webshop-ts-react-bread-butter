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
    image: "/images/rustiktragbrod.png",
    title: "Rustikt rågbröd",
    description:
      "Ett rustikt rågbröd som påminner om det farmor brukade baka när du var liten. Bakat med surdeg och en lång jästid för en djupare smak och en härligt seg och knaprig skorpa.",
    price: 50,
    weight: 700,
  },
  {
    id: "1356",
    articleNumber: "1356",
    image: "/images/brytbrod.png",
    title: "Brytbröd",
    description:
      "Ett litet brytbröd med olivolja, perfekt att dela vid middagsbordet. Den luftiga inkråmet och den gyllene skorpan gör det till en favorit till soppor och sallader.",
    price: 40,
    weight: 500,
  },
  {
    id: "2345",
    articleNumber: "2345",
    image: "/images/levain.png",
    title: "Levain",
    description:
      "Klassisk surdegs-Levain, precis så som du vill ha det – segt, saftigt och smakrikt. Perfekt till både frukost och som bas för en rustik smörgås med pålägg.",
    price: 65,
    weight: 600,
  },
  {
    id: "2346",
    articleNumber: "2346",
    image: "/images/litenlevain.png",
    title: "Liten Levain",
    description:
      "Klassisk surdegs-Levain, den lite mindre modellen som passar perfekt för en eller två personer. Samma fantastiska smak och textur, men i ett mer behändigt format.",
    price: 40,
    weight: 400,
  },
  {
    id: "3456",
    articleNumber: "3456",
    image: "/images/surdegslimpavete.png",
    title: "Surdegslimpa Vete",
    description:
      "En saftig surdegslimpa bakad på vetemjöl, med en knaprig yta och en mild, nötig smak. Perfekt att skiva tunt och rosta eller att njuta av som det är med smör och ost.",
    price: 60,
    weight: 620,
  },
  {
    id: "4567",
    articleNumber: "4567",
    image:
      "https://images.pexels.com/photos/2067430/pexels-photo-2067430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Surdegsbaguette",
    description:
      "Oui oui, den är inte bara baguette, den är sur också! En krispig och luftig baguette med lång jästid som ger en djup och balanserad smak.",
    price: 50,
    weight: 550,
  },
  {
    id: "5678",
    articleNumber: "5678",
    image:
      "https://images.pexels.com/photos/7693917/pexels-photo-7693917.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Frukostkombo",
    description:
      "Den ena gillar ljust, den andra mörkt... Här får du två goda fröbröd som passar perfekt till frukostbordet. Ett balanserat val för den som vill ha variation på morgonen.",
    price: 100,
    weight: 1000,
  },
  {
    id: "6789",
    articleNumber: "6789",
    image:
      "https://images.pexels.com/photos/7175448/pexels-photo-7175448.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Valnötsbröd",
    description:
      "Vårt prisvinnande valnötsbröd låter det vattnas i munnen! Fullproppat med rostade valnötter som ger en nötig, fyllig smak och en härligt krispig skorpa.",
    price: 65,
    weight: 650,
  },
  {
    id: "1357",
    articleNumber: "1357",
    image:
      "https://images.pexels.com/photos/31009555/pexels-photo-31009555/free-photo-of-rustikt-brod-med-keramiska-burkar-pa-traskiva.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Surdegsfralla",
    description:
      "En vanlig j*vla fralla, fast bättre, såklart. Luftig, krispig och med precis lagom tuggmotstånd – perfekt med smör och ost eller som bas till en matig macka.",
    price: 45,
    weight: 450,
  },
];
