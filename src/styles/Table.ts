import styled from "styled-components";

export const ContainerList = styled.div`
  position: relative;
  overflow-x: auto;

  p {
    text-align: center;
    font-weight: 700;
    opacity: 0.5;
  }
`;

export const Table = styled.table`
  margin-top: 15px;
  width: 100%;
  margin: 25px 0;

  /* @media screen and (min-width: 768px) {
    & {
      max-width: 100%;
    }
  } */
`;

export const TableHeader = styled.thead`
  height: 35px;
  width: 100%;
  background-color: var(--babyBlue);
  border-bottom: #c1c1c1 5px solid;
  color: var(--white);
  text-align: left;
`;

type TableHeaderItemProps = {
  width?: number;
};
export const TableHeaderItem = styled.th<TableHeaderItemProps>`
  padding: 0 15px;
  width: ${(props) => `${props.width}px`};
`;

export const TableBody = styled.tbody``;

export const TableContent = styled.tr`
  padding: 5px 15px;
  background-color: #f1f1f1;
  min-height: 35px;
  border-bottom: #c1c1c1 1px solid;
  cursor: pointer;
`;

type RowItemprops = {
  center?: boolean;
};
export const TableRowItem = styled.td<RowItemprops>`
  text-align: ${(props) => (props.center ? "center" : "left")};
  padding: 5px 15px;

  i: first-child {
    margin-right: 15px;
  }
`;

export const ButtonsArea = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 15px;
  z-index: 999;
  margin-top: -55px; */
  display: flex;
  width: 100%;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;

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

  button:nth-child(2) {
    background-color: red;
  }

  button:hover {
    opacity: 0.6;
  }
`;
