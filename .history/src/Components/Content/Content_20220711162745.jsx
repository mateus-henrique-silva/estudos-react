import React from "react";
import "./Content.css";
import { BRoute,  Routes } from "react-router-dom";
import About from "../../Views/About";
import Home from "../../Views/Home";
const Content = (props) => (
  <main className="content">
    <Routes>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Routes>
  </main>
);
export default Content;
