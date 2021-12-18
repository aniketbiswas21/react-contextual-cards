import styled from "styled-components";

interface HC5CardProps {
  bgColor?: string;
}

export const HC5Card = styled.div<HC5CardProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};

  .bg-image {
    border-radius: 12px;
    width: 100%;
    object-fit: contain;
  }
`;
