import { useState, useEffect } from "react";
import fetchProducts, { Product } from "../utils/fetchProducts";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchInput, setSearchInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("default");

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

  const filteredProducts: Product[] = products
    .filter((p) => p.title.toLowerCase().includes(searchInput.toLowerCase()))
    .filter((p) => categoryFilter === "all" || p.category === categoryFilter)
    .sort((a, b) => {
      switch (sortOption) {
        case "name":
          return a.title.localeCompare(b.title);
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="products" className="flex flex-col px-10 pt-15 pb-20">
      <input
        placeholder="Search Products"
        id="search-input"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="bg-gray-300 dark:bg-gray-400 rounded-lg px-2 h-8 placeholder:text-center placeholder:text-gray-950 text-center mb-5 lg:h-10"
      />

      <div className="flex justify-between pb-5">
        <select
          className="rounded-lg w-[49%] text-center h-7 md:h-9 bg-gray-700 dark:bg-[#6c9469] text-white cursor-pointer"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          id="select-category"
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>

        <select
          className="rounded-lg w-[49%] text-center h-7 md:h-9 bg-gray-700 dark:bg-[#6c9469] text-white cursor-pointer"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          id="sort-items"
        >
          <option value="default">Sort</option>
          <option value="name">Sort by Name</option>
          <option value="priceLowHigh">Sort by Price (Low to High)</option>
          <option value="priceHighLow">Sort by Price (High to Low)</option>
        </select>
      </div>

      <h1 className="text-lg">Items: ({filteredProducts.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </section>
  );
}
