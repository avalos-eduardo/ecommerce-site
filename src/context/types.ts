import { Product } from "../utils/fetchProducts";

export interface ShopState {
  darkMode: boolean;
  shoppingCart: Product[];
  favorites: Product[];
}

export type ShopActions = { type: "TOGGLE_THEME" };
