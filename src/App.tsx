import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./layouts/Layout";
import { GlobalStyles } from "./theme/global";
import { globalTheme } from "./theme/theme";
import CardGroup, { CardGroupType } from "./components/CardGroup/CardGroup";

const App = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Layout>
        <CardGroup cardType={CardGroupType.HC3} isScrollable={true} />
        <CardGroup cardType={CardGroupType.HC1} isScrollable={false} />
        <CardGroup cardType={CardGroupType.HC5} isScrollable={true} />
        <CardGroup cardType={CardGroupType.HC6} isScrollable={true} />
        <CardGroup cardType={CardGroupType.HC9} isScrollable={true} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
