import styled from "styled-components";

export const ClienteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  border-bottom: #c1c1c1 1px solid;
  position: relative;
`;

export const ButtonGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -45px;
  display: flex;
  gap: 15px;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: none;
    height: 35px;
    width: 90px;
    background-color: var(--babyBlue);
    color: var(--white);
    transition: all ease 0.5s;
  }

  button:hover {
    opacity: 0.6;
  }

  button:last-child {
    background-color: red;
  }
`;

export const ClienteTitle = styled.div`
  display: flex;
  align-items: center;
  min-height: 55px;
  background-color: var(--babyBlue);
  color: var(--white);
  padding: 0 15px;
`;

export const ClienteContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 10px 20px;
`;
