export interface Product {
  id: string;
  articleNumber: string;
  image: string;
  title: string;
  description: string;
  price: number;
  stock?: number;
  categoryId: string; // Genre
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: "cd001",
    articleNumber: "cd001",
    image: "/images/nevermind.jpg",
    title: "Nirvana - Nevermind",
    description:
      "One of the most iconic grunge albums of the 90s, featuring hits like 'Smells Like Teen Spirit' and 'Come As You Are'.",
    price: 129,
    categoryId: "1",
  },

  {
    id: "cd002",
    articleNumber: "cd002",
    image: "/images/the_pogues.jpg",
    title: "The Pogues - If I should fall from grace with God",
    description: "",
    price: 119,
    categoryId: "Celtic, Punkfolk, PunkCeltic, Rockfolk, Rock",
  },
  {
    id: "cd003",
    articleNumber: "cd003",
    image: "/images/Toto_Toto_IV.jpg",
    title: "Toto - Toto IV",
    description: "",
    price: 109,
    categoryId: "",
  },
  {
    id: "cd006",
    articleNumber: "cd006",
    image: "/images/automatic.jpg",
    title: "R.E.M. - Automatic for the People",
    description:
      "A melancholic and beautiful album with songs like 'Everybody Hurts' and 'Man on the Moon'. A 1992 essential.",
    price: 119,
    categoryId: "Alternative Rock",
  },
  {
    id: "cd007",
    articleNumber: "cd007",
    image: "/images/the_chronic.jpg",
    title: "Dr. Dre - The Chronic",
    description:
      "The debut album that defined G-funk. A groundbreaking record featuring Snoop Dogg and the classic 'Nuthin' but a 'G' Thang'.",
    price: 139,
    categoryId: "Hip-Hop",
  },
  {
    id: "cd008",
    articleNumber: "cd008",
    image: "/images/ten.jpg",
    title: "Pearl Jam - Ten",
    description:
      "Pearl Jam’s breakthrough album with tracks like 'Alive' and 'Jeremy'. One of the most influential rock albums of the 90s.",
    price: 125,
    categoryId: "Grunge",
  },
  {
    id: "cd009",
    articleNumber: "cd009",
    image: "/images/dangerous.jpg",
    title: "Michael Jackson - Dangerous",
    description:
      "Pop perfection from the King of Pop, featuring hits like 'Black or White' and 'Remember the Time'.",
    price: 149,
    categoryId: "Pop",
  },
  {
    id: "cd0010",
    articleNumber: "cd0010",
    image: "/images/metallica_black.jpg",
    title: "Metallica - Metallica (The Black Album)",
    description:
      "Metallica’s most commercially successful album with heavy classics like 'Enter Sandman' and 'Nothing Else Matters'.",
    price: 129,
    categoryId: "Heavy Metal",
  },
  {
    id: "cd0011",
    articleNumber: "cd0011",
    image: "/images/oooh_on_the_tlc_tip.jpg",
    title: "TLC - Ooooooohhh... On the TLC Tip",
    description:
      "Debut album from the energetic R&B group TLC. Features the hit 'Ain't 2 Proud 2 Beg'.",
    price: 109,
    categoryId: "R&B",
  },
  {
    id: "cd0012",
    articleNumber: "cd0012",
    image: "/images/core.jpg",
    title: "Stone Temple Pilots - Core",
    description:
      "Grunge meets alt rock in this strong debut, with songs like 'Plush' and 'Sex Type Thing'.",
    price: 119,
    categoryId: "Alternative Rock",
  },
  {
    id: "cd0013",
    articleNumber: "cd0013",
    image: "/images/whitney_bodyguard.jpg",
    title: "Whitney Houston - The Bodyguard (Soundtrack)",
    description:
      "One of the best-selling soundtracks of all time, led by the powerful ballad 'I Will Always Love You'.",
    price: 139,
    categoryId: "Pop",
  },
];
