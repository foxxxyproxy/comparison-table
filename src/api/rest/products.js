import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

export default function useGetProducts() {
  const [rawProducts, setRawProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL + "products/all")
      .then((response) => response.json())
      .then((data) => {
        setRawProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return { rawProducts, loading };
}
