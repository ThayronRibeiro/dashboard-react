import styled from "styled-components";

export const ClienteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  border-bottom: #c1c1c1 1px solid;
  position: relative;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;

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

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 25px;
  }

  input[type="submit"] {
    background-color: var(--babyBlue);
    height: 35px;
    width: 90px;
    border: none;
    color: var(--white);
    cursor: pointer;
    margin: 15px 0;

    &:hover {
      opacity: 0.6;
    }
  }

  button {
    height: 35px;
    width: 90px;
    margin-left: 15px;
    background-color: #c1c1c1;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;
