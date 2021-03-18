import styled from "styled-components";

const CheckboxWrapper = styled.aside`
  display: flex;
  margin-bottom: 1em;
  line-height: 1.5;
  input {
    margin-right: 1em;
  }
  font-weight: 600;
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
              style={{ lineHeight: 1.5, marginTop: "3px" }}
              type="checkbox"
              name={products[id].name}
              id={id}
              value={id}
              onChange={onChange}
              checked={checked[id]}
              data-testid="aside__checkbox"
            />
            <label htmlFor={id} data-testid="aside__label">
              {products[id].name}
            </label>
          </CheckboxWrapper>
        );
      })}
    </Container>
  );
};

export default Aside;
