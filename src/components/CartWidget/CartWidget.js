import { NavLink } from "react-router-dom";
import cart from "./assets/cart.png";

const CartWidget = () => {
  return (
    <NavLink>
      <img src={cart} alt="cart-widget" />0
    </NavLink>
  );
};

export default CartWidget;
