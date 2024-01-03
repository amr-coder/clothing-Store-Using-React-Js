import React from 'react'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular/popular'
import Offers from '../../components/Offers/Offers'
import NewCollections from '../../components/NewCollections/NewCollections';
import NewsLatters from '../../components/NewsLatter/NewsLatters';

const Shop = () => {
  return (
    <div>
       <Hero/>
       <Popular/>
       <Offers/>
       <NewCollections/>
       <NewsLatters/>
      
    </div>
  )
}

export default Shop