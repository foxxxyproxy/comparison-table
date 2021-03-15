import styled from "styled-components";
import { useEffect, useState } from "react";
import { features } from "../../data";
import { sortByLabels } from "../../data-helpers";

const TRow = styled.tr`
  background: ${(props) => (props.isDiff ? "#eaeaea" : "#fff")};
  display: ${(props) => (props.isEmpty ? "none" : "table-row")};
`;

const TableRow = (props) => {
  const { products, className } = props;
  const [rows, setRows] = useState(null);

  features.sort(sortByLabels);
  console.log({ features });

  useEffect(() => {
    const featuresList = features.map((item) => item.value);
    if (!featuresList) return;

    //create rows from data
    const rawRows = featuresList.map((item) => {
      let featureType = features.find((feature) => feature.value === item).type;

      return products.ids.map((id) => {
        //todo: row check
        if (featureType === "String") {
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
      {features.map((feature) => {
        return (
          <TRow
            key={feature.value}
            className={className || feature.value}
            isDiff={isDifferent(rows[feature.value], feature.value)}
            isEmpty={isEmpty(rows[feature.value])}
          >
            <th scope="row">{feature.label}</th>

            {rows[feature.value].map((row, index) => {
              return <td key={index}>{row}</td>;
            })}
          </TRow>
        );
      })}
    </>
  );
};

export default TableRow;
