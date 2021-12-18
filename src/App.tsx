import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./layouts/Layout";
import { GlobalStyles } from "./theme/global";
import { globalTheme } from "./theme/theme";
import HC3 from "./components/HC3/HC3";
import HC5 from "./components/HC5/HC5";
import HC6 from "./components/HC6/HC6";
import HC9 from "./components/HC9/HC9";
import HC1 from "./components/HC1/HC1";

const App = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Layout>
        <HC3 />
        <br />
        <HC6 />
        <br />
        <HC5 />
        <br />
        <HC9 />
        <br />
        <HC1 />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
