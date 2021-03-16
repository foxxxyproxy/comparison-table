import { useEffect, useState } from "react";
import styled from "styled-components";

const Aside = (props) => {
  const { products, onChange, checked } = props;

  return (
    <>
      {products.ids.map((id, index) => {
        return (
          <div key={`check${index}`}>
            <input
              type="checkbox"
              name={products[id].name}
              id={id}
              value={id}
              onChange={onChange}
              checked={checked[id]}
            />
            <label htmlFor={products[id].name}>{id}</label>
          </div>
        );
      })}
    </>
  );
};

export default Aside;
