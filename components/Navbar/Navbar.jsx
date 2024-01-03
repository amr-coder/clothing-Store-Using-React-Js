import React, { useContext, useState } from "react";
// import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const Navbar = ()=> {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItem} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="navlogo">
         <img src={logo} alt="logo" className="logo"/>
         <p>Clothing <span>Store</span></p>
      </div>
      <ul className="navmenu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens'style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>} </li>
      </ul>
      <div className="cartlogin">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="cartcount">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar