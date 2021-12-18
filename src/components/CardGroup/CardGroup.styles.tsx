import styled from "styled-components";
import { CardGroupType } from "./CardGroup";

interface CardGroupProps {
  isScrollable: boolean;
}

interface CardGroupItemProps {
  isScrollable: boolean;
  cardType: CardGroupType;
}

const calculateWidth = (isScrollable: boolean, cardType: CardGroupType) => {
  if (isScrollable && cardType === CardGroupType.HC9) {
    return "fit-content";
  } else if (!isScrollable) {
    return "0";
  } else {
    return "100%";
  }
};

export const CardGroupContainer = styled.div<CardGroupProps>`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  width: 100%;
  height: fit-content;
  overflow-x: ${({ isScrollable }) => (isScrollable ? "auto" : "hidden")};
  -webkit-overflow-scrolling: touch;
  white-space: ${({ isScrollable }) => (isScrollable ? "normal" : "nowrap")};
  margin-bottom: 1rem;
  justify-content: space-between;
`;

export const CardGroupItem = styled.div<CardGroupItemProps>`
  flex: ${({ isScrollable }) => (isScrollable ? "0 0 25%" : "1 0 0")};
  width: ${({ cardType, isScrollable }) =>
    calculateWidth(isScrollable, cardType)};
  margin-right: ${({ cardType }) =>
    cardType === CardGroupType.HC9 ? "0.4rem" : "1rem"};
  min-width:${({ cardType, isScrollable }) =>
    calculateWidth(isScrollable, cardType)}};

  :last-child {
    margin-right: 0;
  }
`;

export const CardGroupHeader = styled.h3`
  margin: 0 0 1rem 0;
  font-style: bold;
`;
