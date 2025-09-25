import { useShopContext } from "../context/shopContext";
import ProductCard from "./ProductCard";

export default function Favorites() {
  const { state } = useShopContext();

  return (
    <main>
      <h1 className="pt-5 px-10 open-sauce-one-font text-2xl md:text-3xl">
        Your Favorites
      </h1>
      <section className="flex flex-col px-10 pt-15 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center pt-2">
          {state.favorites.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
