import styled from "styled-components";

interface HC9CardProps {
  height?: string;
  bgImage?: Record<string, string>;
}

export const HC9Card = styled.div<HC9CardProps>`
  display: inline-block;
  width: fit-content;
  /* height: ${({ height }) => (height ? height + "px" : "195px")}; */
  /* min-height: ${({ height }) => (height ? height + "px" : "195px")}; */
  border-radius: 11px;
  /* background-image: ${({ bgImage }) =>
    bgImage
      ? `url(${bgImage.image_url})`
      : "linear-gradient(335.97deg, #fbaf03 3.44%, #ffd428 86.36%)"};
  background-size: contain;
  background-repeat: no-repeat; */

  .bg-image {
    object-fit: contain;
    height: ${({ height }) => (height ? height + "px" : "195px")};
  }
`;
