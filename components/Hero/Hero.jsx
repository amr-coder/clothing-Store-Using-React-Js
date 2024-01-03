import React from 'react'
import './Hero.css';
import hero_image from '../assets/hero_image.png'
// import hero_icon from '../assets/hero_icons'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
const hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
         <h2>New Arrivals Only</h2>
         <div>
           <div className="hand-icon">
             <p>New</p>
             <img src={hand_icon} alt="" />
           </div>
             <p>Collection</p>
             <p>for everyone</p>
         </div>
         <div className="hero-latest-btn">
          <div>Latest Arrival</div>
          <img src={arrow_icon} alt="" />
         </div>
      </div>
      <div className="hero-right">
         <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default hero