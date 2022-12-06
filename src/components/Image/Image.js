import "./Image.css";
import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import PropTypes, { func } from "prop-types";

const Image = (props) => {
  //Tracking Image Hovering State

  const [hover, setHover] = useState(false);

  //Tracking favorite context

  const { toogleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);

  //Showing Fav

  const favorite = props.isFavorite
    ? "fa-solid image-icon fa-heart"
    : "fa-regular image-icon fa-heart";

  // Added cart items

  function cartIcon() {
    const alreadyincart = cartItems.some((item) => item.id === props.img.id);
    if (alreadyincart) {
      return (
        <i
          className="fa-solid image-icon fa-cart-plus"
          onClick={() => {
            removeFromCart(props.img.id);
          }}
        ></i>
      );
    } else {
      return (
        <i
          className="fa-solid image-icon fa-cart-shopping"
          onClick={() => {
            addToCart(props.img);
          }}
        ></i>
      );
    }
  }

  //Showing Icons on hover

  const icons = hover && (
    <div>
      {cartIcon()}
      <i
        className={favorite}
        onClick={() => {
          toogleFavorite(props.id);
        }}
      ></i>
    </div>
  );

  return (
    <div
      className="image-container"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <img src={props.src} alt={`Image ${props.alt}`} className="image" />
      <div className="image-icon-container">{icons}</div>
    </div>
  );
};

export default Image;
