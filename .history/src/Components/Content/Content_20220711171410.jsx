import React from "react";
import "./Content.css";
import { BrowserRouter as Switch,  Route } from "react-router-dom";
import About from "../../Views/About";
import Home from "../../Views/Home";
const Content = (props) => {
    return(

    )
  <main className="content">
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </main>
);
export default Content;
