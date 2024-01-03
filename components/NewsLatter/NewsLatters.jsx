import React from 'react'
import './NewsLatters.css';
const NewsLatters = () => {
  return (
    <div className='newsLatters'>
       <h1>Get Exclusive Offers on Your Email</h1>
       <p>Subscribe to our NewsLatter and Stay Updated</p>
       <input type="email" placeholder='Your Email Id' />
       <button>Subscribe</button> 
    </div>
  )
}

export default NewsLatters