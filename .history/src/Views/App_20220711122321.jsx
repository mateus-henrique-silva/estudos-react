import React from "react"
import Content from "../Components/Content/Content";
import Menu from "../Components/Menu/Menu";
import "../Views/App.css"
import {BrowserRouter as Router} from 

function App() {
  return (
    <div className="App">
        <Menu/>
        <Content/>
    </div>
  );
}

export default App;