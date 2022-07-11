import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom"

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
       L <li>
          <a href="#">Inicio</a>
        </li>

        <li>
          <a href="#">Sobre</a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
