import styled from "styled-components";
/* common table styles */

export const Table = styled.table`
  display: block;
  border-collapse: collapse;
  text-align: left;
  line-height: 1.125rem;

  @media (max-width: 650px) {
    overflow: auto;
  }
`;

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

export const TableRow = styled.tr`
  background: ${(props) =>
    props.isDiff ? props.theme.hightlightRow : props.theme.pageBackground};
  display: ${(props) => (props.isEmpty ? "none" : "table-row")};
`;

export const AsideHeader = styled(TableHeader)`
  border-bottom: 0;
  border-top: 1px solid ${(p) => p.theme.borderColor};
`;

export const BadgesTableData = styled(TableData)`
  border: 0;
  padding-top: 0;
  vertical-align: top;
  :last-of-type {
    border-right: 1px solid ${(p) => p.theme.borderColor};
  }
`;
