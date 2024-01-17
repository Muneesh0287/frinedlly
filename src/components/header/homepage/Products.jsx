import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/Api';
// import Navbar from '../Navbar';

const Products = () => {
 
  return (
    <>
          {/* <Navbar /> */}
      
    <div className='container'>
      {api.map((item, i) => (
        <div key={i} className="card-container">
          
          <div className="card">
          <Link to={`/products/${item.id}`}>
            <img src={item.image} alt='product'/>
            </Link>
            <div className="card-content">
              <h3>{item.name}</h3>
              {/* <p>hey iam muneesh iam from palampur himachal
                my qualiyficatin in ba arts in tourism.
              </p> */}
              <Link to={`/products/${item.id}`} className='btn'>₹{item.price} <del>₹{item.old}</del></Link>

            </div>
          </div>

        </div>
      ))}
    </div>
    </>
  );
};

export default Products;




