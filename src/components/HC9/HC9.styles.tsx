import styled from "styled-components";
import { ImageEntity } from "../../types/types";

interface HC9CardProps {
  height?: string;
  bgImage?: ImageEntity;
}

export const HC9Card = styled.div<HC9CardProps>`
  display: inline-block;
  width: fit-content;
  border-radius: 11px;

  .bg-image {
    object-fit: contain;
    height: ${({ height }) => (height ? height + "px" : "195px")};
  }
`;
