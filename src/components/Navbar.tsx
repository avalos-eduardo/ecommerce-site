import { FaShoppingCart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function Navbar() {
    return (
        <header className="p-5 flex justify-between h-[5rem] border border-b-gray-200">
            <h1 className="font-[geist-mono] font-extrabold flex w-[50%] text-2xl md:text-3xl lg:text-4xl">e-commerce.</h1>
            <nav className="flex w-[50%]">
                <ul className="flex justify-end w-[100%] [&>*]:pr-2 [&>*]:pl-2 text-2xl md:text-3xl lg:text-4xl">
                    <li><button className="hover:text-red-600 cursor-pointer"><FaHeart /></button></li>
                    <li><button className="hover:text-blue-600 cursor-pointer"><FaMoon /></button></li>
                    <li><button className="hover:text-yellow-600 cursor-pointer"><FaShoppingCart /></button></li>
                </ul>
            </nav>
        </header>
    )
}