import { useEffect, useState } from "react";
import styled from "styled-components";
import testProducts from "./data";
import { CompareTable } from "./components";
import { mapItemsToObjects } from "./data-helpers";

const Container = styled.main`
  width: 95%;
  margin: 2em auto;
`;

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(mapItemsToObjects(testProducts));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Container>{products && <CompareTable products={products} />}</Container>
    </div>
  );
}

export default App;
