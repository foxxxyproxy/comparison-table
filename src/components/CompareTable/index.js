import { useEffect, useState, useCallback } from "react";
import TableRows from "./TableRows";
import Aside from "./Aside";
import ProductsHeaderList from "./ProductsHeaderList";
import { Table, AsideHeader } from "./TableStyles";

const CompareTable = (props) => {
  const { products } = props;

  /**
   * set checkboxes "checked" by default
   * @return {object} of checked values
   */
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

  /**
   * OnChange: if box was checked - set as true
   * if box was unchecked - set as false
   * @param {event}
   * @return {object} of checked values
   */
  function handleCheckChange(e) {
    if (e.target.checked) {
      setCheckedValues({ ...checkedValues, [e.target.value]: true });
    } else {
      setCheckedValues({ ...checkedValues, [e.target.value]: false });
    }
  }

  /**
   * On button click: remove product from checkedValues
   * @param {event}
   * @return {object} of checked values
   */
  function handleButtonClick(e) {
    setCheckedValues({ ...checkedValues, [e.currentTarget.value]: false });
  }

  /**
   * On change checked values or remove product: update product list to show
   * @return {object} productsToCompare
   */
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
    <div style={{ width: "100%" }}>
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
            <ProductsHeaderList
              products={productsToCompare}
              onRemove={handleButtonClick}
            />
          </tr>
        </thead>
        <tbody>
          <TableRows products={productsToCompare} />
        </tbody>
      </Table>
    </div>
  );
};

export default CompareTable;
