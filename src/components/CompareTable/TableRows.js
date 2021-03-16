import styled from "styled-components";
import { useEffect, useState } from "react";
import { features } from "../../data";
import { sortByLabels } from "../../data-helpers";
import Badges from "./Badges";
import { TableHeader, TableData } from "./TableStyles";

const TableRow = styled.tr`
  background: ${(props) =>
    props.isDiff ? props.theme.hightlightRow : props.theme.pageBackground};
  display: ${(props) => (props.isEmpty ? "none" : "table-row")};
`;

const TableRows = (props) => {
  const { products, className } = props;
  const [rows, setRows] = useState(null);

  useEffect(() => {
    features.sort(sortByLabels);
  }, []);

  useEffect(() => {
    const featuresList = features.map((item) => item.value);
    if (!featuresList) return;

    //create rows from data
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
      <TableRow>
        <TableHeader scope="row">Keurmerk</TableHeader>
        {products.ids.map((id) => {
          return (
            <TableData style={{ borderRight: 0 }} key={`Keurmerk${id}`}>
              <Badges linksList={products[id]["badges"]} />
            </TableData>
          );
        })}
      </TableRow>
      {features.map((feature) => {
        return (
          <TableRow
            key={feature.value}
            className={className || feature.value}
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
