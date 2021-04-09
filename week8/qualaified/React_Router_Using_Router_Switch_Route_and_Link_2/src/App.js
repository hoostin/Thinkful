import React from "react";
import "./style.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/about">
          <About />
        </Route>
        <Route exact={true} path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
