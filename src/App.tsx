import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./layouts/Layout";
import { GlobalStyles } from "./theme/global";
import { globalTheme } from "./theme/theme";
import CardGroup from "./components/CardGroup/CardGroup";
import useAPIHandler from "./hooks/useAPIHandler";

const App = () => {
  const [data, error, status] = useAPIHandler();

  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Layout>
        {status === "idle" && <p>Loading...</p>}
        {status === "error" && <p>Error: {error}</p>}
        {status === "done" && data && (
          <>
            {data.card_groups.map((item: any) => (
              <CardGroup
                key={item.id}
                cardType={item.design_type}
                isScrollable={item.is_scrollable}
                cards={item.cards}
                sectionHeader={item.name}
                height={item.height ? item.height : null}
              />
            ))}
          </>
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
