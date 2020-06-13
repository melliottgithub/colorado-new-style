import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./ui/Theme";
import Example from "./ui/Example";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./ui/Hero";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Example style={{ margin: 0 }} />
      <Router>
        <Hero />
        <Switch>
          <Route
            exact
            path="/categories"
            component={() => <div>categories</div>}
          />
          <Route
            exact
            path="/virtual"
            component={() => <div>Virtual School</div>}
          />
          <Route exact path="/about" component={() => <div>About Us</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
