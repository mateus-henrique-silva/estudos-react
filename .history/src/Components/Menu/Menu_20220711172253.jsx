import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom"

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
       <li>
       <Link to="/about">Inicio</Link> 
        </li>

        <li>
          <a to="/about">Sobre</a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
