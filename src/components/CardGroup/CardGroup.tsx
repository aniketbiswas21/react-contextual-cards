import React, { useState } from "react";
import useActionHandler from "../../hooks/useActionHandler";

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
  cards: any[];
  height?: string;
}

// renders a card based on the type passed
const renderCard = (
  cardType: CardGroupType,
  data: any,
  onRemind: (
    name: string,
    setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
  ) => void,
  onDismiss: (
    name: string,
    setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
  ) => void,
  cardHeight?: string
) => {
  switch (cardType) {
    case CardGroupType.HC3:
      return <HC3 cardData={data} onRemind={onRemind} onDismiss={onDismiss} />;
    case CardGroupType.HC5:
      return <HC5 cardData={data} />;
    case CardGroupType.HC6:
      return <HC6 cardData={data} />;
    case CardGroupType.HC9:
      return <HC9 cardData={data} height={cardHeight} />;
    case CardGroupType.HC1:
      return <HC1 cardData={data} />;
    default:
      return null;
  }
};

const CardGroup: React.FC<CardGroupProps> = ({
  cardType,
  isScrollable,
  cards,
  height,
}) => {
  const [cardsData, setCardsData] = useState(cards);
  const [onRemindLater, onDismiss] = useActionHandler(cardsData, setCardsData);

  return (
    <>
      <CardGroupContainer isScrollable={isScrollable}>
        {cardsData.map((cardData, index) => (
          <CardGroupItem
            key={index}
            isScrollable={isScrollable}
            cardType={cardType}
          >
            {renderCard(cardType, cardData, onRemindLater, onDismiss, height)}
          </CardGroupItem>
        ))}
      </CardGroupContainer>
    </>
  );
};

export default CardGroup;
