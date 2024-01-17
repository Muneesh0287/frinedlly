import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import cart_icon from '../images/cart_icon.png'
const Navbar = () => {
  const [menu, setMenu] = useState('')
  // const [cartCount, setCartCount] = useState(0);
  // const addToCart = () => {
  //   setCartCount(cartCount + 1);
  // };

  const [summ, setSumm]=useState(0)

  const storedCart = JSON.parse(localStorage.getItem('CART')) || {};

 console.log(storedCart);
  
  const sumfun = useCallback(()=>{
    let sum = 0;
    for (const key in storedCart) {
      if (storedCart.hasOwnProperty(key)) {
          sum += storedCart[key];
      }
      setSumm(sum)
      console.log(sum);
  }
  },[storedCart])

  useEffect(()=>{
    sumfun()
  },[sumfun])

  return (

    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Apna Store</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to={'/home'}>shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: 'none' }} to={'/mens'}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("women")}><Link style={{ textDecoration: 'none' }} to={'/womens'}>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to={'/kids'}>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to={'/'} alt=''>  <button>Logout</button></Link>
          <Link to={'/cart'} >
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count"> {summ || 0}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
