import React from "react";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <header>
      <h3>MUSIC STORE</h3>
      <nav>
        <button>Instrumentos de Percusion</button>
        <button>Instrumentos de Cuerda</button>
        <button>Instrumentos de Viento</button>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
