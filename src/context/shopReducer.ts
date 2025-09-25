import { ShopActions, ShopState } from "./types";

export const initialShopState: ShopState = {
  darkMode: false,
  shoppingCart: [],
  favorites: [],
};

export default function shopReducer(
  state: ShopState,
  action: ShopActions
): ShopState {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        darkMode: state.darkMode === false ? true : false,
      };

    case "ADD_TO_FAVORITES":
      if (state.favorites.some((p) => p.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((p) => p.id !== action.payload),
      };

    default:
      return state;
  }
}
