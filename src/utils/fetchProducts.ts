export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const res: Product[] = await response.json();

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
