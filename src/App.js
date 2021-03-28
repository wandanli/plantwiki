import React from "react";
import SearchPage from "./components/search-page/SearchPage";
import Plant from "./components/detail-page/Plant";
import Error from "./components/Error";
import GlobalStyle from "./theme/globalStyle";
import Theme from "./theme/theme";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Theme>
        <GlobalStyle />
        <Switch>
          {/* <Route path="/"><SearchPage /></Route> */}
          <Route path="/" exact component={SearchPage} />
          <Route path="/plant/:name" component={Plant} />
          <Route component={Error} />
        </Switch>
      </Theme>
    </Router>
  );
}

export default App;
