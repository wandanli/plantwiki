import React from "react";
import SearchPage from "./components/search-page/SearchPage";
import GlobalStyle from "./theme/globalStyle";
import Theme from "./theme/theme";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <SearchPage />
    </Theme>
  );
}

export default App;
