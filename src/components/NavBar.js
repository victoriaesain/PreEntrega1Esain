import React from "react";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <nav>
        <h3>MUSIC STORE</h3>
        <ul>
          <li>
            <button>Instrumentos de Percusion</button>
          </li>
          <li>
            <button>Instrumentos de Cuerda</button>
          </li>
          <li>
            <button>Instrumentos de Viento</button>
          </li>
        </ul>

        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;
