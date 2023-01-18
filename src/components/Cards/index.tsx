import * as SC from "../../styles/Cards";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { RefObject } from "react";
import CountUp from "react-countup";

interface CardProps {
  children?: any;
  title?: string;
  qtde?: number;
}

export const Cards = ({ title, qtde }: CardProps) => {
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <>
      <SC.CardItem>
        <h3>{title}</h3>
        <h2 ref={parent as RefObject<HTMLHeadingElement>}>
          <CountUp end={qtde as number} duration={0.5} />
        </h2>
      </SC.CardItem>
    </>
  );
};

export default Cards;
