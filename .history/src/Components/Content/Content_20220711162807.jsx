import React from "react";
import "./Content.css";
import { BrowserRouter as Route,  Routes } from "react-router-dom";
import About from "../../Views/About";
import Home from "../../Views/Home";
const Content = (props) => (
  <main className="content">
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </SSwitch>
  </main>
);
export default Content;
