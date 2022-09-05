import styled from "styled-components";

export const ContainerList = styled.div`
  position: relative;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 15px;
`;

export const TableHeader = styled.thead`
  height: 35px;
  width: 100%;
  background-color: var(--babyBlue);
  border-bottom: #c1c1c1 5px solid;
  color: var(--white);
  text-align: left;
`;

export const TableHeaderItem = styled.th`
  padding: 0 15px;
`;

export const TableBody = styled.tbody`
  //   padding: 5px 15px;
`;

export const TableContent = styled.tr`
  padding: 5px 15px;
  background-color: #f1f1f1;
  min-height: 35px;
  border-bottom: #c1c1c1 1px solid;
  cursor: pointer;
`;

export const TableRowItem = styled.td`
  padding: 5px 15px;
`;

export const ButtonsArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 15px;
  margin-top: -45px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    border: none;
    height: 35px;
    width: 90px;
    background-color: var(--babyBlue);
    color: var(--white);
    transition: all ease 0.5s;
  }

  button:last-child {
    background-color: red;
  }

  button:hover {
    opacity: 0.6;
  }
`;
