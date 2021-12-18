import React from "react";

import { HC9Card } from "./HC9.styles";
import HC5Placeholder from "../../assets/images/HC5_Placeholder.svg";

interface HC9Props {
  cardData: any;
  height?: string;
}

const HC9: React.FC<HC9Props> = ({ cardData, height }) => {
  return (
    <HC9Card
      height={height}
      bgImage={cardData.bg_image}
      onClick={() => window.open(cardData.url)}
    >
      <img
        src={
          cardData.bg_image.image_url
            ? cardData.bg_image.image_url
            : HC5Placeholder
        }
        alt="placeholder"
        className="bg-image"
      />
    </HC9Card>
  );
};

export default HC9;
