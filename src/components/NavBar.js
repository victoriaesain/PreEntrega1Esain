import React from "react";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <header>
      <h3>MUSIC STORE</h3>
      <nav>
        <a href="#">Instrumentos de Percusion</a>
        <a href="#">Instrumentos de Cuerda</a>
        <a href="#">Instrumentos de Viento</a>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
