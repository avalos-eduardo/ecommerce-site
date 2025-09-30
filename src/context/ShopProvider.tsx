import { ReactNode, useEffect, useReducer } from "react";
import { ShopContext } from "./shopContext";
import shopReducer, { initialShopState } from "./shopReducer";

interface ShopProviderProps {
  children: ReactNode;
}

export function ShopContextProvider({ children }: ShopProviderProps) {
  const persistedState = (() => {
    const stored = localStorage.getItem("shopState");
    return stored ? JSON.parse(stored) : initialShopState;
  })();

  const [state, dispatch] = useReducer(shopReducer, persistedState);

  useEffect(() => {
    localStorage.setItem("shopState", JSON.stringify(state));
  }, [state]);

  return <ShopContext value={{ state, dispatch }}>{children}</ShopContext>;
}
