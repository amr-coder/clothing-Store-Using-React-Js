import React from 'react';
import './CSS/shopCategorey.css';
import { useContext } from 'react';
import { ShopContext } from '../ShopContext';
import Item from '../../components/item/item';
const ShopCategorey = (props) => {
 const  {items_list}= useContext(ShopContext);
    return (
    <div  className='shopCategorey'>
       <img className='shopCtegory-banner' src={props.banner} alt="" />
       <div className="category-index">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="category-sort">
            Sort by <img className='category-dropDown' src={props.img} alt="" />
          </div>
       </div>
       <div className="category-products">
          {items_list.map((item,i)=>{
            if(props.category===item.category){
               return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
               return null;
            }
          })}
       </div>
       <div className="category-loadmore">
           Exploe more....
       </div>
    </div>

  )
}

export default ShopCategorey