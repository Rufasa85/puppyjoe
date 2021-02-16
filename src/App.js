import React from "react";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
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
