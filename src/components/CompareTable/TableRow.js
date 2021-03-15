import styled from "styled-components";
import { useEffect, useState } from "react";
import { features } from "../../data";
import { sortByLabels } from "../../data-helpers";

const TableRow = (props) => {
  const { products, className } = props;
  const [rows, setRows] = useState(null);

  features.sort(sortByLabels);
  console.log({ features });

  useEffect(() => {
    const featuresList = features.map((item) => item.value).sort();
    if (!featuresList) return;

    //create rows from data
    const rawRows = featuresList.map((item) => {
      let futureType = features.find((feature) => feature.value === item).type;

      return products.ids.map((id) => {
        //todo: row check
        if (futureType === "String") {
          return products[id][`${item}`].toString();
        } else {
          //we can parse numbers values later
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
    console.log({ rowsWithFeatures });
  }, [setRows, products]);

  if (!features || !rows) return null;

  return (
    <>
      {features.map((feature) => {
        return (
          <tr key={feature.value} className={className || feature.value}>
            <th scope="row">{feature.label}</th>
            {rows[feature.value].map((row, index) => {
              return <td key={index}>{row}</td>;
            })}
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
