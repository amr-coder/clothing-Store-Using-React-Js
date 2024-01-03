import React, { useState , createContext } from 'react';

import items_list  from '../components/assets/items_list';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
   let cart = {};
   for(let i=0; i< items_list.length+1; i++){
        // const element = array[i];
          cart[i] = 0;
  
     }    
     return cart;
 }

const ShopContextProvider = (props) => {
   const [cartItem  , setCartItem] = useState(getDefaultCart()); 
    
    
   //  console.log(cartItem);
   const addToCart = (itemId) =>{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      //console.log(cartItem);
   }

   const removeFromCart = (itemId) =>{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
// total off all cart items
   const getTotalCartAmount = () => {
      let totalAmount = 0;
      for(const item in cartItem ){
         if(cartItem[item] > 0){
            let itemInfo = items_list.find((product)=>product.id===Number(item))
            totalAmount += itemInfo.new_price*cartItem[Number(item)];
         }
         // return totalAmount ; wrong 
      }
      return totalAmount ;
   }
//value of cart items
   const getTotalCartItem = () =>{
      let totalItem = 0;
      for(const item in cartItem){
          totalItem += cartItem[item];
      }
      return totalItem;
   }


   const contextValue = {getTotalCartItem, getTotalCartAmount , items_list ,cartItem , addToCart , removeFromCart };
    return(
       <ShopContext.Provider value={contextValue}>
          {props.children}
       </ShopContext.Provider> 
    )
}

export default ShopContextProvider