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
  z-index: 999;

  svg {
    position: absolute;
    bottom: 0;
    font-size: 3em;
    z-index: -1;
  }
`;

type FormAreaProps = {
  errors?: any;
};

export const FormArea = styled.div<FormAreaProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--normalBlue);
  min-width: 300px;
  min-height: 500px;
  padding: 0 25px;

  h2 {
    margin-bottom: 15px;
    font-size: 36px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;

    p {
      margin-top: -10px;
      color: red;
    }

    label {
      margin-bottom: -10px;
      font-weight: 500;
    }

    strong {
      cursor: pointer;
    }

    input {
      margin: 10px 0;
      min-height: 30px;
      width: 100%;
      background-color: #d1d1d1;
      border: none;
      padding: 0 10px;
      border-radius: 5px;
    }

    input[type="submit"] {
      height: 45px;
      background-color: var(--normalBlue);
      color: var(--white);
      cursor: pointer;
      font-weight: 700;
      font-size: 20px;
      transition: all ease 0.5s;
    }

    input[type="submit"]:hover {
      opacity: 0.7;
    }
  }
`;

type InputFieldProps = {
  errors?: any;
};

export const InputField = styled.input<InputFieldProps>`
  margin: 10px 0;
  min-height: 30px;
  width: 100%;
  background-color: #d1d1d1;
  border: none;
  padding: 0 10px;
  border-radius: 5px;

  &:focus {
    outline: ${(props) =>
      !props.errors ? "var(--normalBlue) 2px solid;" : "red 2px solid;"};
  }
`;

export const ContainerCadastro = styled.div`
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
  z-index: 999;

  div {
  }

  svg {
    position: absolute;
    bottom: 0;
    font-size: 3em;
    z-index: -1;
  }
`;
