import { ProductCard } from "..";
import styled from "styled-components";
import { TableHeader } from "./TableStyles";

const ProductsHeader = styled(TableHeader)`
  border: 0;
  border-top: 1px solid ${(p) => p.theme.borderColor};
  :last-of-type {
    border-right: 1px solid ${(p) => p.theme.borderColor};
  }
`;

const ProductsHeaderList = (props) => {
  const { products, onRemove } = props;

  return (
    <>
      {products.ids.map((id) => (
        <ProductsHeader key={`head${id}`}>
          <ProductCard
            key={`card${id}`}
            id={id}
            name={products[id].name}
            image={products[id].productImage}
            price={products[id].salePrice}
            uom={products[id].uom}
            onRemove={onRemove}
          />
        </ProductsHeader>
      ))}
    </>
  );
};

export default ProductsHeaderList;
