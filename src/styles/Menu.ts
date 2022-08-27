import styled from "styled-components";

export const Menu = styled.div`
  background-color: var(--normalBlue);
  padding: 10px 10px;
  color: var(--white);
  display: flex;
  align-items: center;

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
`;
