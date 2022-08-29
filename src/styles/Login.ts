import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--normalBlue);
  min-width: 300px;
  min-height: 500px;
  padding: 0 25px;

  form {
    display: flex;
    flex-direction: column;

    input {
      min-height: 30px;
      width: 100%;
    }
  }
`;
