import React from "react";
import { ThemeProvider } from "styled-components";
import HC3 from "./components/HC3/HC3";

import Layout from "./layouts/Layout";
import { GlobalStyles } from "./theme/global";
import { globalTheme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Layout>
        <HC3 />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
