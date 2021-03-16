import { ProductCard } from "..";

const ProductsHeaderList = (props) => {
  const { products } = props;

  return (
    <>
      {products.ids.map((id) => (
        <th key={`head${id}`}>
          <ProductCard
            key={`card${id}`}
            name={products[id].name}
            image={products[id].productImage}
            price={products[id].salePrice}
            uom={products[id].uom}
          />
        </th>
      ))}
    </>
  );
};

export default ProductsHeaderList;
