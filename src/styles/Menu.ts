import styled from "styled-components";

export const Menu = styled.div`
  background-color: var(--normalBlue);
  padding: 10px 10px;
  color: var(--white);
  display: flex;
  align-items: center;
  z-index: 998;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  div {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: all ease 0.5s;

    h2 {
      cursor: pointer;
    }

    h2:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      border: #fff 3px solid;
      border-radius: 50%;
    }

    a {
      color: var(--white);
    }
  }
`;

export const MenuOpen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  height: 100vh;
  width: 70vw;
  z-index: 999;
  color: var(--white);
  padding: 15px;

  div {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 15px;
    font-size: 25px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
  }

  a {
    padding: 0px 10px;
    display: flex;
    align-items: center;
    color: var(--white);
    text-decoration: none;
    gap: 10px;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    & {
      width: 20vw;
    }
  }
`;

export const MenuConfigContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  padding-left: 50vw; //posicionar na tela
  z-index: 999;

  h2 {
    position: absolute;
    top: 11px;
    right: 25px;
    color: var(--white);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #fff 3px solid;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    & {
      padding-left: 86vw;
    }
  }
`;

export const MenuConfig = styled.div`
  position: relative;
  margin-top: 35px;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  width: 150px;
  border-radius: 5px;
  transition: all ease 0.5s;
  -webkit-box-shadow: 1px 6px 10px -3px rgba(0, 0, 0, 0.47);
  box-shadow: 1px 6px 10px -3px rgba(0, 0, 0, 0.47);

  span {
    padding: 5px 15px;
    width: 100%;
    border-bottom: #d1d1d1 1px solid;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: #000;
  }
`;

export const MenuImgUser = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;
