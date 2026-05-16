import hoodie from "@/assets/product-hoodie.jpg";
import tshirt from "@/assets/product-tshirt.jpg";
import tees from "@/assets/product-tees.jpg";
import joggers from "@/assets/product-joggers.jpg";
import shorts from "@/assets/product-shorts.jpg";
import tank from "@/assets/product-tank.jpg";
import cap from "@/assets/trend-cap.jpg";
import trendJoggers from "@/assets/trend-joggers.jpg";
import trendTees from "@/assets/trend-tees.jpg";
import camoTank from "@/assets/product-camo-tank.jpg";
import combatTrack from "@/assets/product-combat-track.jpg";
import alphaShirt from "@/assets/product-alpha-shirt.jpg";
import htShort from "@/assets/product-ht-short.jpg";
import tankWhite from "@/assets/product-tank-white.jpg";
import htPremiumShorts from "@/assets/product-ht-premium-shorts.jpg";

export type ColorOption =
  | "Black"
  | "White"
  | "Beige"
  | "Blue"
  | "Green"
  | "Orange"
  | "Brown"
  | "Ash"
  | "Red"
  | "Cream";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "Tops" | "Bottoms" | "Wear";
  colors: ColorOption[];
};

export const products: Product[] = [
  // New arrivals — featured first
  { id: "camo-tank-top", name: "Camo Tank Top", price: 30000, image: camoTank, category: "Tops", colors: ["Green", "Blue", "Orange"] },
  { id: "alpha-shirt", name: "Alpha Shirt", price: 55000, image: alphaShirt, category: "Tops", colors: ["White", "Black", "Red", "Cream"] },
  { id: "tank-top", name: "Tank Top", price: 30000, image: tankWhite, category: "Tops", colors: ["Red", "Cream", "White", "Black", "Orange"] },
  { id: "combat-track", name: "Combat Track", price: 75000, image: combatTrack, category: "Bottoms", colors: ["Black", "Brown", "Ash", "Red"] },
  { id: "ht-short", name: "Holy Travis Short", price: 35000, image: htShort, category: "Bottoms", colors: ["Green", "Red", "Black", "Orange", "White"] },
  { id: "ht-premium-shorts", name: "HT Premium Shorts", price: 35000, image: htPremiumShorts, category: "Bottoms", colors: ["White", "Black", "Red"] },

  // Existing catalog
  { id: "hoodie", name: "Hoodie", price: 80000, image: hoodie, category: "Tops", colors: ["Black", "White", "Beige"] },
  { id: "tshirt", name: "T Shirt", price: 55000, image: tshirt, category: "Tops", colors: ["Black", "White", "Beige"] },
  { id: "tees", name: "Plain Tees", price: 50000, image: tees, category: "Tops", colors: ["Black", "White", "Beige"] },
  { id: "joggers", name: "Joggers Old School", price: 75000, image: joggers, category: "Bottoms", colors: ["Black", "White"] },
  { id: "shorts", name: "Shorts", price: 30000, image: shorts, category: "Bottoms", colors: ["Black", "White"] },
  { id: "tank", name: "Singlet", price: 25000, image: tank, category: "Tops", colors: ["Black", "White"] },
  { id: "cap", name: "Simple Face Cap", price: 15000, image: cap, category: "Wear", colors: ["Black", "White", "Beige"] },
  { id: "joggers-normal", name: "Polo", price: 50000, image: trendJoggers, category: "Tops", colors: ["Black", "White"] },
  { id: "tees-white", name: "Tees", price: 50000, image: trendTees, category: "Tops", colors: ["Blue", "White", "Black", "Beige"] },
];

export const formatNaira = (n: number) => "₦" + n.toLocaleString("en-NG");

export const colorSwatch: Record<ColorOption, string> = {
  Black: "#0B0B0B",
  White: "#F5F5F5",
  Beige: "#C6A47E",
  Blue: "#1E5BB8",
  Green: "#2E7D32",
  Orange: "#E8722C",
  Brown: "#5C3A21",
  Ash: "#9AA0A6",
  Red: "#C0392B",
  Cream: "#F1E8D2",
};
