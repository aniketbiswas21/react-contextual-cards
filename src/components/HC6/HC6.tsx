import React from "react";

import { HC6Card } from "./HC6.styles";
import profile from "../../assets/images/profile.svg";
import chevronRight from "../../assets/images/chevron-right.svg";
import { CardData } from "../../types/types";
import useStyleGenerator from "../../hooks/useStyleGenerator";

interface HC6Props {
  cardData: CardData;
}

const HC6: React.FC<HC6Props> = ({ cardData }) => {
  const [generateStyles, createMarkup] = useStyleGenerator();

  return (
    <HC6Card onClick={() => window.open(cardData.url)}>
      <div className="content-block">
        <img
          src={cardData.icon.image_url ? cardData.icon.image_url : profile}
          className="card-img"
          alt="card-img"
        />
        <p
          className="content"
          dangerouslySetInnerHTML={createMarkup(
            cardData.formatted_title
              ? generateStyles(cardData.formatted_title)
              : cardData.title
          )}
        />
      </div>
      <div className="arrow-block">
        <img src={chevronRight} className="arrow" alt="arrow" />
      </div>
    </HC6Card>
  );
};

export default HC6;
