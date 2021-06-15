import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Exercises from "./components/Exercises";
import Home from "./components/Home";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router>
      <div>
        <h1>App</h1>
        <Switch>
          <Route path="/exercises/:id">
            <Exercises />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <GlobalStyle />
      </div>
    </Router>
  );
}

export default App;
