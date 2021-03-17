import styled from "styled-components";
//import { NavLink } from "react-router-dom";
import TrashIcon from "../../assets/TrashIcon";

const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  appearance: none;
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 0.5em;
  z-index: 1;

  &:hover,
  &:focus {
    outline: none;
    svg {
      fill: red;
    }
  }
`;

const LinkWrapper = styled.a`
  min-width: 100px;
  min-height: 200px;
  display: none;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 900px) {
    min-height: 250px;
  }
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
  line-height: 1.5;
  margin-top: 1em;
  &:hover,
  &:focus {
    outline: none;
    opacity: 0.9;
  }
`;

const Price = styled.p`
  font-weight: 800;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  margin-top: auto;
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

const Separator = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
`;

const Container = styled.div`
  padding-top: 3em;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProductCard = (props) => {
  const { id, name, image, price, uom, onRemove } = props;
  return (
    <Container>
      <RemoveButton value={id} onClick={onRemove} aria-label={"remove item"}>
        <TrashIcon />
      </RemoveButton>
      <LinkWrapper>
        <div style={{ minHeight: "100px" }}>
          <Img src={image} alt={name} width="100" height="100" />
        </div>
        <Name>{name}</Name>
      </LinkWrapper>
      <Price>{price}</Price>
      <Uom>Per {uom} / excl. btw</Uom>
      <Separator />
    </Container>
  );
};

export default ProductCard;
