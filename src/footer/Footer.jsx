import React from 'react'
import './Footer.css'

import logo from '../components/images/logo.png'
import instgram from '../components/images/instagram_icon.png'
import pintester from '../components/images/pintester_icon.png'
import whatsapp from '../components/images/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="nothing" />
            <p>Apna Store</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instgram} alt="instagram" />
        </div>
        <div className="footer-icon-container">
            <img src={pintester} alt="Printresticon" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyrighr @ 2023 - All Rights Recived </p>
      </div>
    </div>
  )
}

export default Footer
