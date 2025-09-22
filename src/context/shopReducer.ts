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
    default:
      return state;
  }
}
