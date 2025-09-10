import { Product } from "../utils/fetchProducts";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-2xl text-black shadow-lg flex flex-col items-center justify-around h-[20rem] md:h-[23rem] py-5 px-5">
      <img
        src={product.image}
        alt={product.title}
        className="w-[75px] md:w-[100px]"
      />
      <div className="text-sm mt-3 md:text-lg">
        <h3>{product.title}</h3>
        <p className="mt-1">${product.price}</p>
        <button className="bg-[#6c9469] text-white rounded-xl py-1 px-5 mt-3 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
