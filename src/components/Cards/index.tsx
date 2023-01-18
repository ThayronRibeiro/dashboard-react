import * as SC from "../../styles/Cards";

interface CardProps {
  children?: any;
  title?: string;
  qtde?: number;
}

export const Cards = ({ title, qtde }: CardProps) => {
  return (
    <>
      <SC.CardItem>
        <h3>{title}</h3>
        <h2>{qtde}</h2>
      </SC.CardItem>
    </>
  );
};

export default Cards;
