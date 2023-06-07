/* eslint-disable react-hooks/exhaustive-deps */
import { products } from '../database/products'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Product = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const product = products.find((prod) => prod.id === parseInt(id))

    setProduct(product)
  }, [])

  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-200'>
      <div className='bg-white rounded-lg p-3'>
        <img className='w-[150px]' src={product.image} />
        <h5 className='text-2xl text-black font-bold'>Producto: {product.name}</h5>
        <p className='card-text text-black'>Descripcion: {product.description}</p>
      </div>
    </div>
  )
}

export default Product
