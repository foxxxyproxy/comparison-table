import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

//temporary fix broken API
import testDate from "../../utils/data";

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
      .catch((error) => {
        console.error(error);
        //temporary fix broken API
        setRawProducts(testDate);
        setLoading(false);
      });
  }, []);

  return { rawProducts, loading };
}
