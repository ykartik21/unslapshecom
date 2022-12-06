import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";

const Header = () => {
  const { cartItems } = useContext(Context);
  const cartClassname =
    cartItems.length > 0
      ? "fa-solid fa-cart-arrow-down"
      : "fa-solid fa-cart-shopping";

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">Unsplash.com</Link>
      </div>
      <Link to="/cart" className="cart-container">
        <i className={cartClassname}></i>

        {cartItems.length > 0 && (
          <div className="cartlength"> {cartItems.length}</div>
        )}
      </Link>
    </div>
  );
};
export default Header;
