import { products } from '../../database/products'
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
        <img className='w-[150px]' src={image}/> 
        <h1>Product: {product.name}</h1>
        <h2>Description: {product.description}</h2>
      </div>
    </div>
  )
}

export default Product
