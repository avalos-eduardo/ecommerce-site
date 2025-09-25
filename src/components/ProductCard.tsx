import { useShopContext } from "../context/shopContext";
import { Product } from "../utils/fetchProducts";
import { FaHeart } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { state, dispatch } = useShopContext();
  const isFavorite = state.favorites.some((p) => p.id === product.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: product.id });
    } else {
      dispatch({ type: "ADD_TO_FAVORITES", payload: product });
    }
  };

  return (
    <div className="relative bg-white dark:bg-[#4c5665] rounded-2xl text-black shadow-lg flex flex-col h-[22rem] md:h-[25rem] p-4 transition-transform hover:scale-105 hover:shadow-xl">
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors z-10 cursor-pointer"
      >
        <FaHeart
          className={
            isFavorite ? "text-red-600" : "text-gray-400 hover:text-red-600"
          }
        />
      </button>

      <div className="flex items-center justify-center h-32 md:h-36 mb-4 bg-gray-50 dark:bg-gray-500 rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px] object-contain"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-sm md:text-base font-medium text-gray-800 dark:text-[#e9e9e9] line-clamp-2 h-10 md:h-12 mb-2">
          {product.title}
        </h3>

        <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-[#cdcdcf] mb-4">
          $
          {typeof product.price === "number"
            ? product.price.toFixed(2)
            : product.price}
        </p>

        <button className="mt-auto bg-[#6c9469] dark:bg-[#538db1] dark:hover:bg-[#3e7394] hover:bg-[#5a7d57] text-white rounded-xl py-2.5 px-4 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#6c9469] dark:focus:ring-[#538db1] focus:ring-opacity-50 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
