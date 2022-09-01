import styled from "styled-components";

import cadastroBg from "../assets/images/cadastroBg.jpg";

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
  type?: string;
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
      -webkit-appearance: none;
      -moz-appearance: none;
    }

    input[type="submit"]:hover {
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 768px) {
    & {
      min-width: ${(props) => (props.type = "Cadastro" ? "40vw" : "300px")};
      justify-content: ${(props) =>
        (props.type = "Cadastro" ? "flex-start" : "center")};
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

  svg {
    position: absolute;
    bottom: 0;
    font-size: 3em;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    & {
      flex-direction: row;
      justify-content: space-between;

      div:nth-child(1) {
        width: 60vw;
        height: 100vh;
        background-image: url(${cadastroBg});
        background-size: cover;
        //background-color: var(--normalBlue);
        border-right: var(--babyBlue) 15px solid;
      }
    }

    svg {
      display: none;
    }
  }
`;
