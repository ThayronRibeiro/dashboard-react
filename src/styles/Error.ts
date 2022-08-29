import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: var(--normalBlue);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
`;

export const ErrorContainerContent = styled.div`
  display: flex;
  padding: 10px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 16px;
    font-weight: 800;
    text-align: center;
  }

  div {
    margin: 25px 0;
    background-color: var(--normalBlue);
    width: 250px;
    height: 250px;
    border-radius: 50%;
    display: flex;
  }
  img {
    width: 100%;
    transform: scale(0.6);
    // margin: 35px 0;
  }
`;

export const Button = styled.button`
  margin: 25px 0;
  width: 100%;
  height: 35px;
  background-color: var(--normalBlue);
  color: var(--white);
  border: none;
  font-size: 20px;
  font-weight: 700;
  transition: all ease 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
