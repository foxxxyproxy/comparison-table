import styled from "styled-components";

export const TableHeader = styled.th`
  border: 1px solid ${(p) => p.theme.borderColor};
  border-top: 0;
  padding: 0.5rem 1.2rem;
  max-width: 400px;

  :first-of-type {
    width: 20em;
    min-width: 11em;
    font-weight: 400;
  }
`;

export const TableData = styled.td`
  border: 1px solid ${(p) => p.theme.borderColor};
  padding: 0.5625rem 1.2rem;
  max-width: 400px;
  font-weight: 600;
`;
