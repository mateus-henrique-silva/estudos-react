import React from "react";
import "./Content.css";
import {Routes,  Route } from "react-router-dom";
import About from "../../Views/About";
import Home from "../../Views/Home";
const Content = (props) => {
return( <main className="content">
    {/* <Routes>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes> */}
  </main>)
};
export default Content;
