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

    case "ADD_TO_CART": {
      const existing = state.shoppingCart.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        return {
          ...state,
          shoppingCart: state.shoppingCart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          { ...action.payload, quantity: 1 },
        ],
      };
    }

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        shoppingCart: state.shoppingCart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        shoppingCart: state.shoppingCart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
}
