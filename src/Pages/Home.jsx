import React from 'react'
import { products } from '../Config/producs'
import ProductCard from '../Components/ProductCard'

const Home = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        {products.map((item)=><ProductCard product={item}/>)}
    </div>
  )
}

export default Home