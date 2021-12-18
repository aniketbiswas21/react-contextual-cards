import React from "react";

import { HC5Card } from "./HC5.styles";
import HC5Placeholder from "../../assets/images/HC5_Placeholder.svg";
import { CardData } from "../../types/types";

interface HC5Props {
  cardData: CardData;
}

const HC5: React.FC<HC5Props> = ({ cardData }) => {
  return (
    <HC5Card onClick={() => window.open(cardData.url)}>
      <img
        src={cardData.bg_image ? cardData.bg_image.image_url : HC5Placeholder}
        alt="placeholder"
        className="bg-image"
      />
    </HC5Card>
  );
};

export default HC5;
