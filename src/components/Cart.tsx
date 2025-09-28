import { useShopContext } from "../context/shopContext";
import ProductCard from "./ProductCard";

export default function Cart() {
  const { state } = useShopContext();
  const totalItems = state.shoppingCart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const cartTotal = state.shoppingCart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <main>
      <h1 className="pt-5 px-10 open-sauce-one-font text-2xl md:text-3xl">
        Your Cart
      </h1>
      <p className="pt-5 px-10 open-sauce-one-font">
        Items in cart: ({totalItems})
      </p>
      <section className="flex flex-col md:flex-row px-10 pt-5 pb-20">
        {state.shoppingCart.length === 0 ? (
          <p className="text-center text-lg md:text-2xl">No items in cart...</p>
        ) : (
          <>
            <div className="flex flex-col gap-5 pt-2 md:w-[50%]">
              {state.shoppingCart.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <section className="flex flex-col items-center pt-10 md:pt-0 md:w-[50%] md:sticky md:top-10 md:self-start">
              <h1 className="py-5 px-10 open-sauce-one-font text-2xl md:text-3xl">
                Subtotal: ${cartTotal.toFixed(2)}
              </h1>
              <button className="bg-[#538db1] dark:bg-[#6c9469] w-[100%] md:w-[75%] py-3 rounded-3xl text-white text-xl cursor-pointer">
                Checkout
              </button>
            </section>
          </>
        )}
      </section>
    </main>
  );
}
