
import React, { createContext, useEffect, useState } from 'react';
import all_product from '../components/api/Api';

export const ShopContext = createContext(null);

const ShopProvider = (props) => {
  const getInitialCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('CART')) || {};
    return Object.keys(storedCart).length > 0 ? storedCart : initializeEmptyCart();
  };

  const initializeEmptyCart = () => {
    let cart = {};
    all_product.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState(getInitialCart());

  const addToCart = (itemId) => {
    setCartItems((prevObj) => ({
      ...prevObj,
      [itemId]: prevObj[itemId] + 1,
    }));

    const storedCart = JSON.parse(localStorage.getItem('CART')) || {};
    storedCart[itemId] = (storedCart[itemId] || 0) + 1;
    localStorage.setItem('CART', JSON.stringify(storedCart));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(0, prev[itemId] - 1) }));
  };

// const getTotalCartaitem=()=>{
//   let totalItem=0;
//   for(const item in cartItem){

//   }
// }


  useEffect(() => {
    localStorage.setItem('CART', JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = { all_product, cartItems, addToCart, removeFromCart };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopProvider;
