import React, { useCallback } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";

import Nav from "../components/Nav/Nav";
import {
  ContentContainer,
  LayoutContainer,
  NavContainer,
} from "./Layout.styles";

interface IProps {
  children: React.ReactNode;
  refetchData: () => void;
}

const Layout: React.FC<IProps> = ({ children, refetchData }) => {
  const onRefresh = useCallback(async () => {
    refetchData();
  }, [refetchData]);

  return (
    <LayoutContainer>
      <NavContainer>
        <Nav />
      </NavContainer>
      <PullToRefresh onRefresh={onRefresh}>
        <ContentContainer>{children}</ContentContainer>
      </PullToRefresh>
    </LayoutContainer>
  );
};

export default Layout;
