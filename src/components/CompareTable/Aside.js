import styled from "styled-components";

const CheckboxWrapper = styled.aside`
  display: flex;
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.2;
  input {
    margin-right: 1em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${(p) => p.theme.titleColor};
`;

const Aside = (props) => {
  const { products, onChange, checked } = props;

  return (
    <Container>
      <Title>Je selectie</Title>
      {products.ids.map((id, index) => {
        return (
          <CheckboxWrapper key={`check${index}`}>
            <input
              type="checkbox"
              name={products[id].name}
              id={id}
              value={id}
              onChange={onChange}
              checked={checked[id]}
            />
            <label htmlFor={id}>{products[id].name}</label>
          </CheckboxWrapper>
        );
      })}
    </Container>
  );
};

export default Aside;
