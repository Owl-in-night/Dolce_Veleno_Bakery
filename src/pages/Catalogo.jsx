import { useState, useEffect } from 'react'
import { products } from '../database/products'
import { useNavigate } from 'react-router-dom'

const Catalogo = () => {
  const [prods, setProds] = useState([])

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/catalogo/${id}`)
  }

  useEffect(() => {
    setProds(products)
  }, [])

  return (
    <div className='w-45 h-50 bg--200 flex flex-col justify-center items-center'>
      <br />
      <div className='grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {prods.map((prod) => (
          <div
            className=''
            key={prod.id}
            onClick={() => handleClick(prod.id)}
          >
            <div className='bg-inherit flex flex-col justify-center items-center rounded-lg p-2 cursor-pointer hover:bg-inherit'>
              <img className='w-[150px]' src={prod.image} />
              <h1 className='text-2xl text-black font-bold dark:text-white'>{prod.name}</h1>
              <p className='card-text text-black dark:text-white'> {prod.description}</p>
              <p className='card-text text-black dark:text-white'>{prod.price}</p>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Catalogo
