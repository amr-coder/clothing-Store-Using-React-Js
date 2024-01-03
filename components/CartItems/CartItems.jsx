import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../assets/cart_cross_icon.png';
import { ShopContext } from '../../context/ShopContext';
const CartItems = () => {
  const {getTotalCartAmount , items_list, cartItem , removeFromCart} = useContext(ShopContext); 
    return (
    <div className='cartItems'>
       <div className="cart-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantitiy</p>
        <p>Remove</p>
       </div>
       <hr />
       {items_list.map((e) => {
          if(cartItem[e.id]>0){
           return <div>
               <div className="cartItems-formate cart-main">
               <img src={e.image} alt="" className="cart-prod-icon" />
               <p>{e.name}</p>
               <p>${e.new_price}</p>
               <button className='cart-quantity'>{cartItem[e.id]}</button>
               <p>${e.new_price*cartItem[e.id]}</p>              
               <img className='remove-icon' src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
               </div>
               <hr />
            </div>
          }
        return null;
       })}
       <div className="cart-items-total">
           <div className="total">
                <h1>Cart Totals</h1>
           <div>
           <div className="total-item">
             <p>Subtotals</p>
             <p>${getTotalCartAmount()}</p>
           </div>
           <hr />
           <div className="total-item">
            <p>Shipping Free</p>
            <p>Free</p>
           </div>
           <hr />
           <div className="total-item">
             <h3>Total</h3>
             <h3>${getTotalCartAmount()}</h3>
           </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
           <div className="promocode">
                <p>if you have have a coupon code , Enter it here</p>
                <div className="promo-box">
                  <input type="text"  placeholder='CouponCode'/>
                  <button>Submit</button>
                </div>
            </div>
      </div>
    </div>
    
  )
}

export default CartItems