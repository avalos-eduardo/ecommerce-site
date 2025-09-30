import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { ShopContextProvider } from "./context/ShopProvider";
import { useShopContext } from "./context/shopContext";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";

function AppContent() {
  const { state } = useShopContext();

  return (
    <div className={state.darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-[#242b36] text-black dark:text-[#cdcdcf] min-h-screen transition-colors">
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: state.darkMode ? "#1f2937" : "#fff",
              color: state.darkMode ? "#f3f4f6" : "#111",
              border: `1px solid ${state.darkMode ? "#374151" : "#e5e7eb"}`,
            },
            success: {
              style: {
                background: state.darkMode ? "#538db1" : "#6B9469",
                color: "#fff",
              },
            },
            error: {
              style: {
                background: state.darkMode ? "#b15353" : "#e74c3c",
                color: "#fff",
              },
            },
          }}
        />
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
