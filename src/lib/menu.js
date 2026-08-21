export const categories = [
  { id: "kaffeespezialitaeten", name: "Kaffeespezialitäten", column: 1 },
  { id: "kalte-kaffeespezialitaeten", name: "Kalte Kaffeespezialitäten", column: 1 },
  { id: "tee-heissgetraenke", name: "Tee & Heißgetränke", column: 1 },
  { id: "gebaeck-suesses", name: "Gebäck & Süßes", column: 2 },
  { id: "spezial", name: "Espresso House Spezial", column: 2 },
  { id: "extras", name: "Extras", column: 2 },
  { id: "frische-saefte", name: "Frische Säfte", column: 2 },
];

export const products = [
  // Kaffeespezialitäten
  { id: "espresso", number: 1, name: "Espresso", price: 3.5, category: "kaffeespezialitaeten", description: "einfach, intensiv, mit feiner Crema" },
  { id: "espresso-macchiato", number: 2, name: "Espresso Macchiato", price: 3.8, category: "kaffeespezialitaeten", description: "mit einem Hauch aufgeschäumter Milch" },
  { id: "americano", number: 3, name: "Americano", price: 4.4, category: "kaffeespezialitaeten", description: "Espresso, verlängert mit heißem Wasser" },
  { id: "filterkaffee", number: 4, name: "Filterkaffee", price: 3.9, category: "kaffeespezialitaeten", description: "langsam gebrüht, mild im Geschmack" },
  { id: "cortado", number: 5, name: "Cortado", price: 4.2, category: "kaffeespezialitaeten", description: "Espresso mit warmer, samtiger Milch" },
  { id: "cappuccino", number: 6, name: "Cappuccino", price: 4.8, category: "kaffeespezialitaeten", description: "Espresso, Milch, feiner Milchschaum" },
  { id: "flat-white", number: 7, name: "Flat White", price: 5.1, category: "kaffeespezialitaeten", description: "doppelter Espresso, seidiger Milchschaum" },
  { id: "caffe-latte", number: 8, name: "Caffè Latte", price: 5.3, category: "kaffeespezialitaeten", description: "viel warme Milch, leichte Schaumhaube" },
  { id: "latte-macchiato", number: 9, name: "Latte Macchiato", price: 5.2, category: "kaffeespezialitaeten", description: "Milch, Espresso, luftiger Schaum, im Glas" },
  { id: "mokka", number: 10, name: "Mokka", price: 4.5, category: "kaffeespezialitaeten", description: "Espresso, heiße Schokolade, Sahnehaube" },

  // Kalte Kaffeespezialitäten
  { id: "eiskaffee-classic", number: 11, name: "Eiskaffee Classic", price: 5.4, category: "kalte-kaffeespezialitaeten", description: "Kaffee, Milch, Vanilleeis" },
  { id: "iced-latte", number: 12, name: "Iced Latte", price: 5.1, category: "kalte-kaffeespezialitaeten", description: "Espresso, kalte Milch, viel Eis" },
  { id: "cold-brew", number: 13, name: "Cold Brew", price: 4.9, category: "kalte-kaffeespezialitaeten", description: "18 Std. kalt extrahiert, pur" },
  { id: "caramel-frappe", number: 14, name: "Caramel Frappe", price: 5.6, category: "kalte-kaffeespezialitaeten", description: "gemixt, Karamell, Schlagsahne" },

  // Tee & Heißgetränke
  { id: "schwarzer-tee", number: 15, name: "Schwarzer Tee", price: 3.6, category: "tee-heissgetraenke" },
  { id: "gruener-tee", number: 16, name: "Grüner Tee", price: 3.6, category: "tee-heissgetraenke" },
  { id: "kraeutertee", number: 17, name: "Kräutertee / Kamille", price: 3.6, category: "tee-heissgetraenke" },
  { id: "fruechtetee", number: 18, name: "Früchtetee", price: 3.6, category: "tee-heissgetraenke" },
  { id: "chai-latte", number: 19, name: "Chai Latte", price: 4.9, category: "tee-heissgetraenke" },
  { id: "heisse-schokolade", number: 20, name: "Heiße Schokolade", price: 4.6, category: "tee-heissgetraenke" },
  { id: "kinder-kakao", number: 21, name: "Kinder-Kakao", price: 3.2, category: "tee-heissgetraenke" },

  // Gebäck & Süßes
  { id: "croissant", number: 22, name: "Croissant", price: 3.4, category: "gebaeck-suesses", description: "Buttergebäck, klassisch französisch" },
  { id: "pain-au-chocolat", number: 23, name: "Pain au Chocolat", price: 3.6, category: "gebaeck-suesses", description: "Blätterteig, Zartbitter-Schokolade" },
  { id: "donut", number: 24, name: "Donut", price: 3.8, category: "gebaeck-suesses", description: "glasiert, verschiedene Sorten" },
  { id: "zimtschnecke", number: 25, name: "Zimtschnecke", price: 4.2, category: "gebaeck-suesses", description: "warm, mit Frischkäse-Glasur" },
  { id: "muffin", number: 26, name: "Muffin", price: 3.5, category: "gebaeck-suesses", description: "Schoko oder Blaubeere" },
  { id: "bagel", number: 27, name: "Bagel", price: 4.6, category: "gebaeck-suesses", description: "herzhaft, mit Frischkäse" },
  { id: "cookie", number: 28, name: "Cookie", price: 3.2, category: "gebaeck-suesses", description: "Schokostückchen, außen knusprig" },
  { id: "brownie", number: 29, name: "Brownie", price: 3.9, category: "gebaeck-suesses", description: "warm, dunkle Schokolade, Walnuss" },
  { id: "cheesecake", number: 30, name: "Cheesecake (Stück)", price: 4.8, category: "gebaeck-suesses", description: "New-York-Style, Beerensauce" },
  { id: "vollkorn-scone", number: 31, name: "Vollkorn-Scone", price: 3.7, category: "gebaeck-suesses", description: "mit Butter & Marmelade" },

  // Espresso House Spezial (Kombi)
  {
    id: "espresso-house-spezial",
    name: "Espresso House Spezial",
    price: 7.9,
    category: "spezial",
    description: "Latte Macchiato nach Wahl mit Karamell-, Vanille- oder Haselnusssirup, dazu ein Stück Kuchen des Tages.",
  },

  // Extras
  { id: "hafermilch", name: "Hafermilch", price: 0.6, category: "extras" },
  { id: "vanillesirup", name: "Vanillesirup", price: 0.5, category: "extras" },
  { id: "mandelmilch", name: "Mandelmilch", price: 0.6, category: "extras" },
  { id: "karamellsirup", name: "Karamellsirup", price: 0.5, category: "extras" },
  { id: "sojamilch", name: "Sojamilch", price: 0.6, category: "extras" },
  { id: "extra-shot", name: "Extra Shot", price: 0.9, category: "extras" },

  // Frische Säfte
  { id: "orangensaft", number: 32, name: "Orangensaft, frisch gepresst", price: 4.2, category: "frische-saefte" },
  { id: "apfel-ingwer-saft", number: 33, name: "Apfel-Ingwer-Saft", price: 4.4, category: "frische-saefte" },
  { id: "gruener-smoothie", number: 34, name: "Grüner Smoothie", price: 5.2, category: "frische-saefte" },
];

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}