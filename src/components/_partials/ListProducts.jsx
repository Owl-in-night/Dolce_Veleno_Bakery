import { useState, useEffect } from 'react'
import { products } from '../../database/products'
import { useNavigate } from 'react-router-dom'

const ListProducts = () => {
  const [prods, setProds] = useState([])

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/catalogo/${id}`)
  }

  useEffect(() => {
    setProds(products)
  }, [])

  return (
    <div className='w-full h-screen bg-gray-200 flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-4xl text-black font-bold'>Lista de productos</h1>
      </div>
      <div className='grid grid-cols-4 gap-2 w-3/4'>
        {prods.map((prod) => (
          <div
            className='card'
            key={prod.id}
            onClick={() => handleClick(prod.id)}
          >
            <div className='bg-slate-400 flex flex-col justify-center items-center rounded-lg p-2 cursor-pointer hover:bg-slate-500'>
              <img className='w-[150px]' src={prod.image} />
              <h5 className='text-2xl text-white font-bold'>Producto: {prod.name}</h5>
              <p className='card-text text-white'>Descripcion: {prod.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ListProducts
