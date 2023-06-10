/* eslint-disable react-hooks/exhaustive-deps */
import { products } from '../database/products'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const Product = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const product = products.find((prod) => prod.id === parseInt(id))

    setProduct(product)
  }, [])

  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-200'>
      <div className='bg-white rounded-lg p-10'>
        <center><img className='w-[150px]' src={product.image} /></center>
        <center><h5 className='text-2xl text-black font-bold'>{product.name}</h5></center>
        <p className='card-text text-black'> {product.description}</p>
        <p className='card-text text-black'> {product.price}</p>
        <div className='right-3'>
          <CiShoppingCart size={30} />
        </div>
      </div>
    </div>
  )
}

export default Product
