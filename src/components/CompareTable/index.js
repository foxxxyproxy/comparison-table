import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import TableRows from "./TableRows";
import Aside from "./Aside";
import ProductsHeaderList from "./ProductsHeaderList";
import { TableHeader } from "./TableStyles";

const Table = styled.table`
  //width: 100%;
  border: 1px solid ${(p) => p.theme.borderColor};
  border-collapse: collapse;
  text-align: left;
  line-height: 1.125rem;
`;

const AsideHeader = styled(TableHeader)`
  border-bottom: 0;
`;

const CompareTable = (props) => {
  const { products } = props;

  const setInitialValues = useCallback(() => {
    const initialCheckedValues = {};
    products.ids.map((id) => (initialCheckedValues[id] = true));
    return initialCheckedValues;
  }, [products]);

  const [checkedValues, setCheckedValues] = useState(() => setInitialValues());
  const [productsToCompare, setProductsToCompare] = useState(products);

  useEffect(() => {
    const initialCheckedValues = setInitialValues();
    setCheckedValues(initialCheckedValues);
  }, [products, setInitialValues]);

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
    if (!checkedValues || !products) {
      return;
    }

    const notCheckedArray = Object.keys(checkedValues).filter(
      (item) => checkedValues[item] !== true
    );

    let clone = { ...products };
    for (let key in clone) {
      if (notCheckedArray.includes(key)) {
        delete clone[key];
        clone.ids = clone.ids.filter((id) => id !== key);
      }
    }
    setProductsToCompare(clone);
  }, [checkedValues, products]);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <AsideHeader>
              <Aside
                products={products}
                checked={checkedValues}
                onChange={handleCheckChange}
              />
            </AsideHeader>
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
