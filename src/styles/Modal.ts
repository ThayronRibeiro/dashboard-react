import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(15, 15, 15, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 80vw;
  min-height: 45vh;
  padding: 20px 20px;
  border-radius: 5px;

  h2 {
    padding-bottom: 5px;
    border-bottom: #d1d1d1 1px solid;
    margin: 10px 0;
  }

  div:last-child {
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    gap: 10px;

    button {
      min-height: 35px;
      min-width: 80px;
      border: none;
      background-color: #008000;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
    button:nth-child(2) {
      background-color: red;
    }

    button:hover {
      opacity: 0.8;
    }
  }
`;

export const ButtonClose = styled.div`
  position: absolute;
  top: 35px;
  right: 35px;
  font-size: 10px;
  z-index: 999;
  color: red;
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    opacity: 0.2s;
  }
`;
