import { createContext, Dispatch, useContext } from "react";
import { ShopActions, ShopState } from "./types";

export interface ShopContextValue {
  state: ShopState;
  dispatch: Dispatch<ShopActions>;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

export function useShopContext() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShopContext must be used inside a ShopProvider");
  }

  return context;
}
