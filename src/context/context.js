import React, { useEffect, useState } from "react";

//Importing Context
export const Context = React.createContext();

//Component which is providing context

export function ContextProvider(props) {
  //initialising state to retrieve data from api
  const [allPhotos, setAllPhotos] = useState([]);

  //cart
  const [cartItems, setCartItems] = useState([]);

  //Function for retrieveing data

  async function getPhotos() {
    const url =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    const data = await fetch(url);
    const response = await data.json();
    setAllPhotos(response);
  }

  //Using useEffect to retireve data when page is loading first time

  useEffect(() => {
    getPhotos();
  }, []);

  // Function for toogleFavorite

  function toogleFavorite(id) {
    const updatedallPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedallPhotos);
  }

  //Function add Item to cart

  function addToCart(newItem) {
    setCartItems((prevItem) => [...prevItem, newItem]);
  }
  //Function remove item from cart

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  // Empty carts function

  function emptyCarts() {
    setCartItems([]);
  }

  //   console.log(cartItems);
  //Returning the Context Provider

  return (
    <Context.Provider
      value={{
        allPhotos,
        toogleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCarts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
