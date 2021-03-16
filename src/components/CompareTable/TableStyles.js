import styled from "styled-components";

export const TableHeader = styled.th`
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
  border-right: 1px solid ${(p) => p.theme.borderColor};
  padding: 0.5625rem 0.625rem;
  max-width: 400px;

  :first-of-type {
    width: 20em;
  }
`;

export const TableData = styled.td`
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
  border-right: 1px solid ${(p) => p.theme.borderColor};
  padding: 0.5625rem 0.625rem;
  max-width: 400px;
`;
