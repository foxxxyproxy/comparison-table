import { useEffect, useState } from "react";
import styled from "styled-components";
import testProducts from "./data";
import { CompareTable } from "./components";
import { mapItemsToObjects } from "./data-helpers";

const Container = styled.main`
  width: 95%;
  margin: 0 auto;
`;

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(mapItemsToObjects(testProducts));
    console.log(Object.keys(testProducts[0]));
  }, []);

  return (
    <>
      <Container>{products && <CompareTable products={products} />}</Container>
    </>
  );
}

export default App;
