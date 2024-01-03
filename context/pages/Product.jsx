import React, { useContext } from 'react';
import './CSS/Products.css';
import { ShopContext } from '../ShopContext';
import { useParams } from 'react-router-dom';
import ProductVraiety from '../../components/ProductVraiety/ProductVraiety';
import AvailableVraiety from '../../components/AvailableVraiety/AvailableVraiety';
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {items_list} = useContext(ShopContext);
  const {productId} = useParams();
  const product = items_list.find((e)=> e.id === Number(productId));
  return (
    <div className='product'>
        <ProductVraiety product={product}/>
        <AvailableVraiety product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Product