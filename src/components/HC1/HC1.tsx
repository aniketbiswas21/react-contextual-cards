import React from "react";

import { HC1Card } from "./HC1.styles";
import profile from "../../assets/images/HC1_Placeholder.svg";
import { CardData } from "../../types/types";
import useStyleGenerator from "../../hooks/useStyleGenerator";

interface HC1Props {
  cardData: CardData;
}

const HC1: React.FC<HC1Props> = ({ cardData }) => {
  const [generateStyles, createMarkup] = useStyleGenerator();

  return (
    <HC1Card backgroundColor={cardData.bg_color}>
      <div className="content-block">
        <img
          src={cardData.icon ? cardData.icon.image_url : profile}
          className="card-img"
          alt="card-img"
        />
        <div className="title-block">
          <p
            className="heading"
            dangerouslySetInnerHTML={createMarkup(
              cardData.formatted_title
                ? generateStyles(cardData.formatted_title)
                : cardData.title
            )}
          />
          <p
            className="sub-heading"
            dangerouslySetInnerHTML={createMarkup(
              cardData.formatted_description
                ? generateStyles(cardData.formatted_description)
                : cardData.name
            )}
          />
        </div>
      </div>
    </HC1Card>
  );
};

export default HC1;
