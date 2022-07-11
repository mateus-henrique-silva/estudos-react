import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom"

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
       <li>
       
        </li>

        <li>
        <Link to="/">Inicio</Link> 
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
