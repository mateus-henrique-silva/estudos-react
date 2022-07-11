import React from "react";
import "./Content.css";
import { Switch, Route } from "react-router-dom";
import About from "../../Views/About";
import Home from "../../Views/Home";
const Content = (props) => (
  <main className="content">
    <Switch>
      <Route path="/about">
        <About />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </main>
);
export default Content;
