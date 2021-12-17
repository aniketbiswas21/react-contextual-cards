import React from "react";

import Nav from "../components/Nav/Nav";
import {
  ContentContainer,
  LayoutContainer,
  NavContainer,
} from "./Layout.styles";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <NavContainer>
        <Nav />
      </NavContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
