import CartWidget from "./CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";



function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h3>ELECTRONIC STORE</h3>
      </Link>
      <div>
        <NavLink to={`/category/celular`}>Celulares</NavLink>
        <NavLink to={`/category/notebook`}>Notebook</NavLink>
        <NavLink to={`/category/tablet`}>Tablets</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
