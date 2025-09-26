import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { ShopContextProvider } from "./context/ShopProvider";
import { useShopContext } from "./context/shopContext";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";

function AppContent() {
  const { state } = useShopContext();

  return (
    <div className={state.darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-[#242b36] text-black dark:text-[#cdcdcf] min-h-screen transition-colors">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ShopContextProvider>
      <Router>
        <AppContent />
      </Router>
    </ShopContextProvider>
  );
}
