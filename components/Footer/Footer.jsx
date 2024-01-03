import React from 'react'
import './Footer.css';
import footer_logo from '../assets/logo_big.png'
import insta_icon from '../assets/instagram_icon.png'
import pintrest_icon from  '../assets/pintester_icon.png'
import watsApp_icon from '../assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Clothing Store</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Contacts</li>
        </ul>
        <div className="social-icons">
                <div className="footer-icon">
                    <img src={insta_icon} alt="" />
                </div>
                <div className="footer-icon">
                    <img src={watsApp_icon} alt="" />
                </div>
                <div className="footer-icon">
                    <img src={pintrest_icon} alt="" />
                </div>         
        </div>
        <div className="copyright">
            <hr />
            <div>Copyrighr @amer-coder 2023 -All Right reserved.</div>
        </div>
    </div>
  )
}

export default Footer