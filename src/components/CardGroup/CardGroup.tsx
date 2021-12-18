import React from "react";
import HC1 from "../HC1/HC1";

import HC3 from "../HC3/HC3";
import HC5 from "../HC5/HC5";
import HC6 from "../HC6/HC6";
import HC9 from "../HC9/HC9";
import { CardGroupContainer, CardGroupItem } from "./CardGroup.styles";

export enum CardGroupType {
  HC1 = "HC1",
  HC3 = "HC3",
  HC5 = "HC5",
  HC6 = "HC6",
  HC9 = "HC9",
}

interface CardGroupProps {
  cardType: CardGroupType;
  isScrollable: boolean;
}

// renders a card based on the type passed
const renderCard = (cardType: CardGroupType) => {
  switch (cardType) {
    case CardGroupType.HC3:
      return <HC3 />;
    case CardGroupType.HC5:
      return <HC5 />;
    case CardGroupType.HC6:
      return <HC6 />;
    case CardGroupType.HC9:
      return <HC9 />;
    case CardGroupType.HC1:
      return <HC1 />;
    default:
      return null;
  }
};

const demoArray = [0, 0];

const CardGroup: React.FC<CardGroupProps> = ({ cardType, isScrollable }) => {
  return (
    <CardGroupContainer isScrollable={isScrollable}>
      {demoArray.map((_, index) => (
        <CardGroupItem key={index} isScrollable={isScrollable}>
          {renderCard(cardType)}
        </CardGroupItem>
      ))}
    </CardGroupContainer>
  );
};

export default CardGroup;
