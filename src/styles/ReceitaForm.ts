import styled from "styled-components";

export const FormContainerArea = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 4rem;
  padding-top: 10px;
  color: black;

  label {
    font-size: 1rem;
  }

  input[type="checkbox"] {
    width: 30px;
    cursor: pointer;
    padding-top: 10px;
  }

  button {
    margin: 10px 0;
    min-height: 30px;
    width: 100%;
    background-color: #d1d1d1;
    border: none;
    padding: 0 10px;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    background-color: var(--normalBlue);
    color: var(--white);
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    transition: all ease 0.5s;
    -webkit-appearance: none;
    -moz-appearance: none;

    :hover {
      opacity: 0.7;
    }
  }
`;
