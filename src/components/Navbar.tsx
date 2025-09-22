import { FaShoppingCart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useShopContext } from "../context/shopContext";

export default function Navbar() {
  const { dispatch } = useShopContext();

  return (
    <header className="py-5 px-6 flex justify-between h-[5rem]">
      <h1 className="font-[geist-mono] font-extrabold flex w-[50%] text-2xl sm:text-3xl">
        e-commerce.
      </h1>
      <nav className="flex w-[50%]">
        <ul className="flex justify-end w-[100%] [&>*]:pr-2 [&>*]:pl-2 text-2xl sm:text-3xl">
          <li>
            <button className="hover:text-red-600 cursor-pointer">
              <FaHeart />
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
              className="hover:text-blue-600 cursor-pointer"
            >
              <FaMoon />
            </button>
          </li>
          <li>
            <button className="hover:text-yellow-600 cursor-pointer">
              <FaShoppingCart />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
