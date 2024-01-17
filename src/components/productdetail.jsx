import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../contexts/CartContext';
import api from './api/Api';
import star_icon from '../components/images/star_icon.png'
import star_dull_icon from '../components/images/star_dull_icon.png'
import './productdetailpage.css';
import Navbar from './header/Navbar';

const Productdetail = () => {
    const { id } = useParams();
    const product = api.find((item) => item.id === Number(id));
    const { addToCart } = useContext(ShopContext);
  
    return (
        <>
<Navbar />

            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                         <img src={product.image} alt='productimage' />
                        <img src={product.image} alt='productimage' />
                        <img src={product.image} alt='productimage' />
                        <img src={product.image} alt='productimage' />
                    </div>
                    <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt='productimage' />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>name</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} alt="" />
                        <img src={star_icon}  alt="" />
                        <img src={star_icon}  alt="" />
                        <img src={star_icon}  alt="" />
                        <img src={star_dull_icon}  alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">${"old price"}</div>
                        <div className="productdisplay-right-price-new">${'new'}</div>
                    </div>
                    <div className="productdisplay-right-discription">
                        A lightweight ususll hhnb jbjb bccbcbs csbccj,sbc nc sj, c jbcchbcjh jbhjjmjk hggfd 
                        bhkjlwjdwqjdlhdwljijwlidjwdjwkdbw,jdkjw,
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                           <div>S</div> 
                           <div>M</div> 
                           <div>L</div> 
                           <div>XL</div> 
                           <div>XXL</div> 
                        </div>
                    </div>
                    <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                        {/* <h6 className='productdisplay-right-category'><span>Category:</span>women,T-Shirt, crop Top</h6>
                        <h5 className='productdisplay-right-category'><span>Tags:</span>Modern, Latest, </h5> */}
                </div>
            </div>



        </>
    )
}

export default Productdetail










