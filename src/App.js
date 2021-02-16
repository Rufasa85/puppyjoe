import React from "react";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/discover">
          <Discover />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
