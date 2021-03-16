import { useEffect, useState } from "react";
import styled from "styled-components";
import TableRows from "./TableRows";
import Aside from "./Aside";
import ProductsHeaderList from "./ProductsHeaderList";

const Table = styled.table`
  border: 1px solid ${(p) => p.theme.borderColor};
  border-collapse: collapse;

  th,
  td,
  thead {
    border-collapse: collapse;
    border-bottom: 1px solid ${(p) => p.theme.borderColor};
    border-right: 1px solid ${(p) => p.theme.borderColor};
    padding: 0.5625rem 0.625rem;
    text-align: left;
    line-height: 1.125rem;
  }
`;

const CompareTable = (props) => {
  const { products } = props;

  const [checkedValues, setCheckedValues] = useState(() => setInitialValues());
  const [productsToCompare, setProductsToCompare] = useState(products);
  console.log({ productsToCompare });

  useEffect(() => {
    const initialCheckedValues = setInitialValues();
    setCheckedValues(initialCheckedValues);
  }, [products]);

  function setInitialValues() {
    const initialCheckedValues = {};
    products.ids.map((id) => (initialCheckedValues[id] = true));
    return initialCheckedValues;
  }

  function handleCheckChange(e) {
    //if box is checked
    if (e.target.checked) {
      setCheckedValues({ ...checkedValues, [e.target.value]: true });
    } else {
      //if box is unchecked
      setCheckedValues({ ...checkedValues, [e.target.value]: false });
    }
  }

  useEffect(() => {
    console.log("run useEffect");
    if (!checkedValues || !products) {
      return;
    }
    const notCheckedArray = Object.keys(checkedValues).filter(
      (item) => checkedValues[item] !== true
    );
    console.log({ notCheckedArray });

    let clone = { ...products };
    for (let key in clone) {
      if (notCheckedArray.includes(key)) {
        delete clone[key];
        clone.ids = clone.ids.filter((id) => id !== key);
      }
    }
    console.log({ clone });
    setProductsToCompare(clone);
  }, [checkedValues, products]);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>
              <Aside
                products={products}
                checked={checkedValues}
                onChange={handleCheckChange}
              />
            </th>
            <ProductsHeaderList products={productsToCompare} />
          </tr>
        </thead>
        <tbody>
          <TableRows products={productsToCompare} />
        </tbody>
      </Table>
    </>
  );
};

export default CompareTable;
