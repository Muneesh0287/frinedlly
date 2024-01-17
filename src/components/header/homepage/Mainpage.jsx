import React from 'react';
import './Mainpage.css';
import logoos from '../../images/logoos.webp';
import hand_icon from '../../images/hand_icon.png'
import arrow_icon from '../../images/arrow.png'
import hero_img from '../../images/hero_image.png'
import Navbar from '../Navbar';

const Hero = () => {
  return (
    
    <>
    <Navbar />
    <div className="hero">
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero_hand_icon">
            <p>new</p>
            <img src={hand_icon} alt='' />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero_latest_btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero_right">
    <img src={hero_img} alt="" />
      </div>
    </div>

<div className='new'>
  <h1>New colection</h1>
  <hr />
</div>
    </>
  );
}

export default Hero;

