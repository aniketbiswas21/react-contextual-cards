import styled from "styled-components";

interface CardGroupProps {
  isScrollable: boolean;
}

interface CardGroupItemProps {
  isScrollable: boolean;
}

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
`;

export const CardGroupItem = styled.div<CardGroupItemProps>`
  flex: ${({ isScrollable }) => (isScrollable ? "0 0 25%" : "1 0 0")};
  width: ${({ isScrollable }) => (isScrollable ? "100%" : "0")};
  margin-right: 1rem;
  min-width: ${({ isScrollable }) => (isScrollable ? "100%" : "0")};
`;
