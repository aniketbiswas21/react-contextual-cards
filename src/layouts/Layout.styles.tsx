import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  position: relative;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f6f3;
  min-height: 100vh;
  border-radius: 12px 12px 0px 0px;
  width: 100%;
  perspective: 1px;
  position: relative;
  padding: 1rem;
  overflow-x: hidden;
`;
