import { useEffect, useState } from "react";

export interface ProdTypes {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock?: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
}

function usefetch() {
  const [data, setData] = useState<ProdTypes[]>([]);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function dataFetch() {
    try {
      const data = await (await fetch("https://dummyjson.com/products")).json();
      setData(data.products);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    dataFetch();
  }, []);

  return { data, isLoading, error };
}

export default usefetch;
