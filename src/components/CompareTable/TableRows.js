import { useEffect, useState } from "react";
import { features } from "../../utils/config";
import { sortByLabels } from "../../utils/data-helpers";
import Badges from "./Badges";
import {
  TableHeader,
  TableData,
  TableRow,
  BadgesTableData,
} from "./TableStyles";

const TableRows = (props) => {
  const { products } = props;
  const [rows, setRows] = useState(null);

  useEffect(() => {
    features.sort(sortByLabels);
  }, []);

  /**
   * create rows from data
   * @return {object} of rows where key = features
   */
  useEffect(() => {
    const featuresList = features.map((item) => item.value);
    if (!featuresList) return;

    const rawRows = featuresList.map((item) => {
      let featureType = features.find((feature) => feature.value === item).type;

      return products.ids.map((id) => {
        if (featureType === "String") {
          return products[id][`${item}`].toString();
        } else {
          //we can parse numbers values later if we need filtration
          return products[id][`${item}`];
        }
      });
    });

    //create object where keys are features names
    const rowsWithFeatures = {};
    for (let i = 0; i < featuresList.length; i++) {
      rowsWithFeatures[featuresList[i]] = rawRows[i];
    }
    setRows(rowsWithFeatures);
  }, [setRows, products]);

  /**
   * check if the feature of row is for compare and if row has different values
   * @param {row}
   * @param {featureName}
   * @return {boolean} true - if values are different
   */
  function isDifferent(row, featureName) {
    let currentFeature = features.find(
      (feature) => feature.value === featureName
    );

    if (currentFeature.toCompare === "true") {
      if (new Set(row).size > 1) {
        return true;
      }
    }
    return false;
  }

  /**
   * if the row is empty - don't show
   * @param {row}
   * @return {boolean} true - empty
   */
  function isEmpty(row) {
    let set = new Set(row);
    if (set.size === 1 && set.has("")) {
      return true;
    }
    return false;
  }

  if (!features || !rows) return null;
  return (
    <>
      <TableRow>
        <TableHeader scope="row">Keurmerk</TableHeader>
        {products.ids.map((id) => {
          return (
            <BadgesTableData key={`Keurmerk${id}`}>
              <Badges linksList={products[id]["badges"]} />
            </BadgesTableData>
          );
        })}
      </TableRow>
      {features.map((feature) => {
        return (
          <TableRow
            key={feature.value}
            isDiff={isDifferent(rows[feature.value], feature.value)}
            isEmpty={isEmpty(rows[feature.value])}
          >
            <TableHeader scope="row">{feature.label}</TableHeader>

            {rows[feature.value].map((row, index) => {
              return (
                <TableData key={feature.value + products.ids[index]}>
                  {row}
                </TableData>
              );
            })}
          </TableRow>
        );
      })}
    </>
  );
};

export default TableRows;
