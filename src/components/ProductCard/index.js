import styled from "styled-components";
//import { NavLink } from "react-router-dom";

const LinkWrapper = styled.a`
  max-width: 400px;
  min-width: 100px;
  display: none;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

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
  &:hover,
  &:focus {
    outline: none;
    opacity: 0.9;
  }
`;

const Price = styled.p`
  font-weight: 900;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;
const Uom = styled.p`
  text-transform: lowercase;
  font-weight: 300;
  font-size: 0.9rem;
  margin-top: 0.5em;
`;
const Img = styled.img`
  max-width: 100%;
  min-width: 100%;
`;

const ProductCard = (props) => {
  const { name, image, price, uom } = props;
  return (
    <div style={{ margin: "0 auto", width: "100%" }}>
      <LinkWrapper>
        <div>
          <Img src={image} alt={name} width="100" height="100" />
        </div>
        <Name>{name}</Name>
      </LinkWrapper>
      <Price>{price}</Price>
      <Uom>Per {uom}</Uom>
    </div>
  );
};

export default ProductCard;
