import hoodie from "@/assets/product-hoodie.jpg";
import tshirt from "@/assets/product-tshirt.jpg";
import tees from "@/assets/product-tees.jpg";
import joggers from "@/assets/product-joggers.jpg";
import shorts from "@/assets/product-shorts.jpg";
import tank from "@/assets/product-tank.jpg";
import cap from "@/assets/trend-cap.jpg";
import trendJoggers from "@/assets/trend-joggers.jpg";
import trendTees from "@/assets/trend-tees.jpg";

export type ColorOption = "Black" | "White" | "Beige" | "Blue";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "Tops" | "Bottoms" | "Wear";
  colors: ColorOption[];
};

export const products: Product[] = [
  { id: "hoodie", name: "Hoodie", price: 80000, image: hoodie, category: "Tops", colors: ["Black", "White", "Beige"] },
  { id: "tshirt", name: "T Shirt", price: 55000, image: tshirt, category: "Tops", colors: ["Black", "White", "Beige"] },
  { id: "tees", name: "Tees", price: 50000, image: tees, category: "Tops", colors: ["Black", "White", "Beige"] },
  { id: "joggers", name: "Joggers Old School", price: 75000, image: joggers, category: "Bottoms", colors: ["Black", "White"] },
  { id: "shorts", name: "Shorts", price: 30000, image: shorts, category: "Bottoms", colors: ["Black", "White"] },
  { id: "tank", name: "Tank Top", price: 25000, image: tank, category: "Tops", colors: ["Black", "White"] },
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
};
