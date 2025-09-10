import { useState, useEffect } from "react";
import fetchProducts, { Product } from "../utils/fetchProducts";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="products" className="px-10 pt-15 pb-20">
      <h1 className="text-lg">Items: ({products.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center pt-2">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
