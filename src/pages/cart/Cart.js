import React, { useContext, useState } from "react";
import "./Cart.css";
import { Context } from "../../context/context";
import Cartitems from "../../components/Cartitems/Cartitems";

const Cart = () => {
  const [btntext, setbtntext] = useState("Place Order");
  const { cartItems, emptyCarts } = useContext(Context);

  //Place order

  function placeOrder() {
    setbtntext("Ordering....");
    setTimeout(() => {
      alert("Order has been Placed");
      emptyCarts();
    }, 3000);
  }

  //Price calculator
  const price = 600;
  function calculatePrice() {
    const total = cartItems.length * price;
    return total;
  }

  // Mapping data
  const cartItemElements = cartItems.map((item, index) => (
    <Cartitems key={item.id} item={item.id} url={item.url} id={item.id} />
  ));
  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        <>
          {cartItemElements}
          <div className="cart-total">
            <p>Total</p>
            <h1 className="cart-price">{calculatePrice()}</h1>
          </div>
          <button
            onClick={() => {
              placeOrder();
            }}
          >
            {btntext}
          </button>
        </>
      ) : (
        "Your cart is empty there is no item in the cart"
      )}
    </div>
  );
};

export default Cart;
