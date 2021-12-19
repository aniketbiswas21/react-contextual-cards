import styled from "styled-components";
import { GradientEntity } from "../../types/types";
import { HC6Card } from "../HC6/HC6.styles";

interface HC1CardProps {
  backgroundColor?: string;
  backgroundGradient?: GradientEntity;
}

const determineBackground = (
  backgroundColor?: string,
  backgroundGradient?: GradientEntity
) => {
  if (backgroundGradient) {
    let gradientString = `linear-gradient(${
      backgroundGradient.angle ? `${backgroundGradient.angle}deg` : "0deg"
    }`;

    backgroundGradient.colors.forEach((color: string) => {
      gradientString += `, ${color}`;
    });

    gradientString += ")";
    return gradientString;
  } else if (backgroundColor) {
    return backgroundColor;
  } else {
    return "#fbaf03";
  }
};

export const HC1Card = styled(HC6Card)<HC1CardProps>`
  background: ${({ backgroundColor, backgroundGradient }) =>
    determineBackground(backgroundColor, backgroundGradient)};

  .card-img {
    height: 35px;
    width: 35px;
    object-fit: contain;
  }

  .heading {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    white-space: pre-wrap;
  }

  .sub-heading {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    color: rgba(27, 27, 30, 0.725524);
  }

  .title-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
