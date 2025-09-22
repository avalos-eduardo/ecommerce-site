import { ReactNode, useReducer } from "react";
import { ShopContext } from "./shopContext";
import shopReducer, { initialShopState } from "./shopReducer";

interface ShopProviderProps {
  children: ReactNode;
}

export function ShopContextProvider({ children }: ShopProviderProps) {
  const [state, dispatch] = useReducer(shopReducer, initialShopState);

  return <ShopContext value={{ state, dispatch }}>{children}</ShopContext>;
}
