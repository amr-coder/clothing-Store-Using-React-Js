import React, { useContext } from 'react'
import './AvailableVraiety.css'
import star_icon from '../assets/star_icon.png'
import dull_star_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const AvailableVraiety = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
    <div className='availableVraiety'>
        <div className="display-left">
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="full-image">
            <img className='main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="display-right-data">
             <h1>{product.name}</h1>
             <div className="prod-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={dull_star_icon} alt="" />
                <p>(122)</p>
             </div>
             <div className="prod-prices">
                <div className="prod-old-price">${product.old_price}</div>
                <div className="prod-new-price">${product.new_price}</div>
             </div>
             <div className="prod-discript">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto qui nihil adipisci ratione facere cumque at quis ipsa blanditiis tempore! Vero repudiandae earum totam facere ea quo vel beatae quaerat?
             </div>
             <div className="right-prod-size">
                <h1>Select Size</h1>
                <div className="prod-righr-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
             </div>
             <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             <p className="prod-right-category"><span>Category :</span> Women , T-Shirt , Crop Top</p>
             <p className="prod-right-category"><span>Tags :</span>Moderen Latest </p>
        </div>
    </div>
  )
}

export default AvailableVraiety