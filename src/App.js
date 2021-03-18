import { useEffect, useState } from "react";
import styled from "styled-components";
import { CompareTable } from "./components";
import { mapItemsToObjects } from "./utils/data-helpers";
import useGetProducts from "./api/rest/products";
import { MAX_PRODUCTS_TO_COMPARE } from "./utils/config";

const Container = styled.main`
  width: 95%;
  margin: 2em auto;
`;

const Title = styled.h1`
  color: ${(p) => p.theme.titleColor};
`;

function App() {
  const [products, setProducts] = useState(null);
  const { rawProducts, loading } = useGetProducts();

  useEffect(() => {
    if (!rawProducts) {
      return;
    }
    setProducts(mapItemsToObjects(rawProducts));
  }, [rawProducts]);

  if (loading) {
    return (
      <Container style={{ textAlign: "center" }}>
        <span>Loading...</span>
      </Container>
    );
  }

  if (products && products.ids.length > MAX_PRODUCTS_TO_COMPARE) {
    return (
      <Container style={{ textAlign: "center" }}>
        <span>
          Max {MAX_PRODUCTS_TO_COMPARE} products to compare. Please remove
          {` ${products.ids.length - MAX_PRODUCTS_TO_COMPARE}`}
        </span>
      </Container>
    );
  }

  if (products && products.ids.length <= 1) {
    return (
      <Container style={{ textAlign: "center" }}>
        <span>
          {`Only ${products.ids.length} product. Please, add more products to
          compare`}
        </span>
      </Container>
    );
  }

  return (
    <Container>
      {products && <Title>{products.ids.length} producten vergelijken</Title>}
      {products && <CompareTable products={products} />}
    </Container>
  );
}

export default App;
