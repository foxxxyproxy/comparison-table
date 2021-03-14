import styled from "styled-components";
//import { NavLink } from "react-router-dom";

const LinkWrapper = styled.a`
  //max-width: 200px;
  //min-height: 200px;
  display: none;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  &:hover,
  &:focus {
    outline: none;
    opacity: 0.9;
  }
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div {
    margin: 0 auto;
    min-height: 100px;
  }
`;

const Name = styled.p`
  color: ${(p) => p.theme.titleColor};
`;

const Price = styled.p`
  font-weight: 900;
  font-size: 1.2rem;
`;
const Uom = styled.p`
  text-transform: lowercase;
  font-weight: 300;
`;
const Img = styled.img`
  max-width: 100%;
  min-width: 100%;
`;

const ProductCard = (props) => {
  const { name, image, price, uom } = props;
  return (
    <div style={{ margin: "0 auto" }}>
      <LinkWrapper>
        <div>
          <Img src={image} alt={name} width="100px" height="100px" />
        </div>
        <Name>{name}</Name>
      </LinkWrapper>
      <Price>{price}</Price>
      <Uom>Per {uom}</Uom>
    </div>
  );
};

export default ProductCard;
