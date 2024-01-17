import React, { useContext, useState } from 'react';
import '../components/Cart.css';
import { ShopContext } from '../contexts/CartContext';
import remove_icon from '../components/images/cart_cross_icon.png';
import {toast} from 'react-toastify';
import Navbar from './header/Navbar';


const Cartpage = () => {
  const { removeFromCart,all_product } = useContext(ShopContext);

  // Retrieve cart items from localStorage
  const storedCart = JSON.parse(localStorage.getItem('CART')) || {};
  const cartItems = Object.entries(storedCart);

  // Filter products that have a quantity greater than 0
  const cartProducts = cartItems.filter(([itemId, quantity]) => quantity > 0);

  let cartTotal = 0;

  

  return (
    <>
    <Navbar />
      <div className="cartitems">
        <div className="cartitem-from-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {cartProducts.map(([itemId, quantity], index) => {
         const product = all_product.find((product) => product.id === Number(itemId));
         const productTotal = product.price * quantity;

          // Accumulate the individual product totals
          cartTotal += productTotal;
          return (
            <div key={index}>
              <div className="cartitem-format cartitem-from-main">
                <img src={product.image} alt="none" className='carticon-product-icon' />
                <p>${product.name}</p>
                <p>${product.price}</p>
                <button className='cartiten-quantity'>{quantity}</button>
                <p>{product.price * quantity}</p>
                <img
                  className='carticon-remove-icon'
                  src={remove_icon}
                  onClick={() => removeFromCart(itemId)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        })}
        <div className="cartitem-down">
          <div className="cartitem-total">
          <h1>cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr/>
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${cartTotal}</h3>
            </div>
          </div>
          <button onClick={()=> toast.success('Oder placed:')}>PROCEED TO CHECKOUT</button>
        </div>
          <div className="cartitems-promocode">
            <p>If you have a promocode ,enter it here </p>
            <div className="cartitems-promobox">
              <input type='text' placeholder='Promo code' />
              <button onClick={()=> toast.error('please Enter Valid username')}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartpage;
