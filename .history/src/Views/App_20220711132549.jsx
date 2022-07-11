import React from "react";
import Content from "../Components/Content/Content";
import Menu from "../Components/Menu/Menu";

import "../Views/App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
