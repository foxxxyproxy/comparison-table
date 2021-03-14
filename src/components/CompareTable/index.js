import styled from "styled-components";
import { features } from "../../data";
import { ProductCard } from "../";

const CompareTable = (props) => {
  const { products } = props;

  const Table = styled.table`
    //border: 1px solid ${(p) => p.theme.textColor};
    border-collapse: collapse;

    th,
    td,
    thead {
      border-collapse: collapse;
      border-bottom: 1px solid ${(p) => p.theme.textColor};
      border-right: 1px solid ${(p) => p.theme.textColor};
      padding: 0.75rem;
      text-align: left;
    }
    tr:last-child,
    tr:last-child td,
    tr:last-child th {
      border-bottom: 0;
    }
    tr:last-child,
    th:last-child,
    td:last-child,
    thead:last-of-type {
      border-right: 0;
    }
  `;

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th />
            {products.ids.map((id) => (
              <th key={id}>
                <ProductCard
                  name={products[id].name}
                  image={products[id].productImage}
                  price={products[id].salePrice}
                  uom={products[id].uom}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(features).map((feature) => {
            return (
              <tr key={feature} className={feature}>
                <th scope="row">{features[feature]}</th>
                {products.ids.map((id) => {
                  return <td key={id}>{products[id][`${feature}`]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CompareTable;
