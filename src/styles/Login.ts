import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--darkBlue);
  color: var(--white);
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  color: var(--normalBlue);
  min-width: 200px;
  min-height: 200px;
  padding: 0 25px;
`;
