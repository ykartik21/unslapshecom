import React, { useContext } from "react";
import "./Cartitems.css";
import { Context } from "../../context/context";

const Cartitems = (props) => {
  const { cartItems, removeFromCart } = useContext(Context);
  const price = 100;

  return (
    <div className="cart-items-container">
      <img src={props.url} alt={props.item} className="cart-item-image" />
      <h1 className="cart-price">{price}</h1>
      <i
        className="fa-solid cart-item-icon fa-trash"
        onClick={() => {
          removeFromCart(props.id);
        }}
      ></i>
    </div>
  );
};

export default Cartitems;
