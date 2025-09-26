import { Product } from "../utils/fetchProducts";

export interface CartItem extends Product {
  quantity: number;
}

export interface ShopState {
  darkMode: boolean;
  shoppingCart: CartItem[];
  favorites: Product[];
}

export type ShopActions =
  | { type: "TOGGLE_THEME" }
  | { type: "ADD_TO_FAVORITES"; payload: Product }
  | { type: "REMOVE_FROM_FAVORITES"; payload: number }
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "INCREMENT_QUANTITY"; payload: number }
  | { type: "DECREMENT_QUANTITY"; payload: number };
