import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import InstrumentosPercusion from "./Tablets";
import InstrumentosCuerda from "./Notebooks";
import InstrumentosViento from "./Celulares";


function NavBar() {
  return (
    <header>
      <h3>MUSIC STORE</h3>
      <nav>
        <Link to="/src/components/InstrumentosPercusion.js"> <InstrumentosPercusion /></Link>
        <Link to="/src/components/InstrumentosCuerda.js"> <InstrumentosCuerda /></Link>
        <Link to="/src/components/InstrumentosViento.js"> <InstrumentosViento /></Link>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
