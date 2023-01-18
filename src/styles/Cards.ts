import styled from "styled-components";

export const CardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  height: 25%;
  width: 100%;
  padding: 25px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--normalBlue);
  height: 170px;
  width: 170px;
  transform: scale(0.9);
  transition: all ease 0.5s;
  cursor: pointer;
  text-align: left;

  &:hover {
    transform: scale(1);
    -webkit-box-shadow: 0px 7px 12px 0px rgba(148, 148, 148, 1);
    -moz-box-shadow: 0px 7px 12px 0px rgba(148, 148, 148, 1);
    box-shadow: 0px 7px 12px 0px rgba(148, 148, 148, 1);
  }

  h3 {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1.2rem;
    color: var(--white);
  }

  h2 {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 1.2rem;
    color: var(--white);
    font-size: 4rem;
  }
`;
