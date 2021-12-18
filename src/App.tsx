import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./layouts/Layout";
import { GlobalStyles } from "./theme/global";
import { globalTheme } from "./theme/theme";
import CardGroup, { CardGroupType } from "./components/CardGroup/CardGroup";
import useAPIHandler from "./hooks/useAPIHandler";

const App = () => {
  const [data, error, status] = useAPIHandler();

  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Layout>
        {status === "idle" && <p>Loading...</p>}
        {status === "error" && <p>Error: {error}</p>}
        {status === "done" && (
          <>
            <CardGroup cardType={CardGroupType.HC3} isScrollable={true} />
            <CardGroup cardType={CardGroupType.HC1} isScrollable={false} />
            <CardGroup cardType={CardGroupType.HC5} isScrollable={true} />
            <CardGroup cardType={CardGroupType.HC6} isScrollable={true} />
            <CardGroup cardType={CardGroupType.HC9} isScrollable={true} />
          </>
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
