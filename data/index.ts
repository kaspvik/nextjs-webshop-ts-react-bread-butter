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
  stock?: number; 
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
    title: "Rustic rye bread.",
    description:
      "A rustic rye bread reminiscent of the kind grandma used to bake. Made with sourdough and a long fermentation time for a deeper flavor and a wonderfully chewy and crunchy crust.",
    price: 50,
  },
  {
    id: "1356",
    articleNumber: "1356",
    image: "/images/brytbrod.png",
    title: "Tear-and-share bread",
    description:
      "A small pull-apart bread with olive oil, perfect for sharing at the dinner table. Its airy crumb and golden crust make it a favorite alongside soups and salads.",
    price: 40,
  },
  {
    id: "2345",
    articleNumber: "2345",
    image: "/images/levain.png",
    title: "Levain",
    description:
      "Classic sourdough Levain, just the way you like it — chewy, moist, and full of flavor. Perfect for breakfast or as a base for a rustic sandwich with your favorite toppings.",
    price: 65,
  },
  {
    id: "2346",
    articleNumber: "2346",
    image: "/images/litenlevain.png",
    title: "Small Levain",
    description:
      "Classic sourdough Levain, the slightly smaller version perfect for one or two people. Same fantastic flavor and texture, but in a more convenient size.",
    price: 40,
  },
  {
    id: "3456",
    articleNumber: "3456",
    image: "/images/surdegslimpavete.png",
    title: "Sourdough Wheat Loaf",
    description:
      "A moist sourdough loaf made with wheat flour, featuring a crispy crust and a mild, nutty flavor. Perfect for slicing thin and toasting or enjoying as is with butter and cheese.",
    price: 60,
  },
  {
    id: "4567",
    articleNumber: "4567",
    image:
      "https://images.pexels.com/photos/2067430/pexels-photo-2067430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sourdough Baguette",
    description:
      "Oui oui, it’s not just a baguette — it’s sour too! A crispy and airy baguette with a long fermentation time that delivers a deep and balanced flavor.",
    price: 50,
  },
  {
    id: "5678",
    articleNumber: "5678",
    image:
      "https://images.pexels.com/photos/7693917/pexels-photo-7693917.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Breakfast combo",
    description:
      "One prefers light, the other dark... Here you get two tasty seed breads that are perfect for the breakfast table. A balanced choice for those who want variety in the morning.",
    price: 100,
  },
  {
    id: "6789",
    articleNumber: "6789",
    image:
      "https://images.pexels.com/photos/7175448/pexels-photo-7175448.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Walnut Bread",
    description:
      "Our award-winning walnut bread will make your mouth water! Packed with roasted walnuts that give a nutty, rich flavor and a wonderfully crispy crust.",
    price: 65,
  },
  {
    id: "1357",
    articleNumber: "1357",
    image:
      "https://images.pexels.com/photos/31009555/pexels-photo-31009555/free-photo-of-rustikt-brod-med-keramiska-burkar-pa-traskiva.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Sourdough roll",
    description:
      "Just a regular damn roll, but better, of course. Airy, crispy, and with just the right chew — perfect with butter and cheese or as the base for a hearty sandwich.",
    price: 45,
  },
]; 