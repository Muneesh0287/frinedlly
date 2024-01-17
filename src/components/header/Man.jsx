import React from 'react';
import api from '../api/Api.js';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';

const Man = () => {
  const filteredApi = api.filter((item) => item.brity === 'men');

  return (
    <>
  <Navbar />
    <div className='container'>
      {filteredApi.map((item, i) => (
        <div key={i} className="card-container">
          <div className="card">
          <Link to={`/products/${item.id}`}>
            <img src={item.image} alt={item.name} />
            </Link>
            <div className="card-content">
              <h3>{item.name}</h3>
              <a href='/home' className='btn'>₹{item.price} <del>₹{item.old}</del> </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Man;
