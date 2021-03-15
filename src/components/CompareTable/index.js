import styled from "styled-components";
import { ProductCard } from "../";
import TableRow from "./TableRow";

const CompareTable = (props) => {
  const { products } = props;

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
    tr:last-child,
    tr:last-child td,
    tr:last-child th {
      //border-bottom: 0;
    }
    tr:last-child,
    th:last-child,
    td:last-child,
    thead:last-of-type {
      //border-right: 0;
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
          <TableRow products={products} />
        </tbody>
      </Table>
    </>
  );
};

export default CompareTable;
