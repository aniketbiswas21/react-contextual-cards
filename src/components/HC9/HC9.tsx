import React from "react";

import { HC9Card } from "./HC9.styles";
import HC5Placeholder from "../../assets/images/HC5_Placeholder.svg";
import { CardData, ImageEntity } from "../../types/types";

interface HC9Props {
  cardData: CardData;
  height?: string;
}

const determineImageSource = (image?: ImageEntity) => {
  if (!image) {
    return HC5Placeholder;
  } else if (image.image_type === "ext") {
    return image.image_url;
  } else if (image.image_type === "asset") {
    return `../../assets/images/${image.asset_type}`;
  }
};

const HC9: React.FC<HC9Props> = ({ cardData, height }) => {
  return (
    <HC9Card
      height={height}
      bgImage={cardData.bg_image}
      onClick={() => window.open(cardData.url)}
    >
      <img
        src={determineImageSource(cardData.bg_image)}
        alt="placeholder"
        className="bg-image"
      />
    </HC9Card>
  );
};

export default HC9;
