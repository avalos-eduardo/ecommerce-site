import { FaShoppingCart, FaHome, FaMoon, FaSun, FaHeart } from "react-icons/fa";
import { useShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { state, dispatch } = useShopContext();

  const totalItems = state.shoppingCart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="py-5 px-6 flex justify-between h-[5rem]">
      <h1 className="font-[geist-mono] font-extrabold flex w-[50%] text-2xl sm:text-3xl">
        e-commerce.
      </h1>
      <nav className="flex w-[50%]">
        <ul className="flex justify-end w-[100%] [&>*]:pr-1 [&>*]:pl-1 md:[&>*]:pr-2 md:[&>*]:pl-2 text-2xl sm:text-3xl">
          <li>
            <Link to="/">
              <button className="hover:text-green-600 cursor-pointer">
                <FaHome />
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
              className="hover:text-blue-600 cursor-pointer"
            >
              {state.darkMode === true ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li>
            <Link to="/favorites">
              <button className="hover:text-red-600 cursor-pointer">
                <FaHeart />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <button className="hover:text-yellow-600 cursor-pointer flex items-start">
                <FaShoppingCart />

                <p className="mx-2 px-2 rounded-4xl bg-red-800 text-center text-lg sm:text-2xl text-white">
                  {totalItems}
                </p>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
