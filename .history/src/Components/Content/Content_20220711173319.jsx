import React from "react";
import "./Content.css";
import { Routes, Route } from "react-router-dom";
import About from "../../Views/About";
import Home from "../../Views/Home";
const Content = (props) => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </main>
  );
};
export default Content;
