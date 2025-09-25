import { Product } from "../utils/fetchProducts";

export interface ShopState {
  darkMode: boolean;
  shoppingCart: Product[];
  favorites: Product[];
}

export type ShopActions =
  | { type: "TOGGLE_THEME" }
  | { type: "ADD_TO_FAVORITES"; payload: Product }
  | { type: "REMOVE_FROM_FAVORITES"; payload: number };
