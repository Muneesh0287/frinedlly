import React from 'react'
import api from '../../api/Api.js';
import Navbar from '../Navbar.jsx';
import { Link } from 'react-router-dom';


const Kids = () => {


  const filteredApi = api.filter((item) => item.brity === 'kids');
  return (
    <>
      <Navbar />
      <div>
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
      </div>
    </>
  )
}

export default Kids
