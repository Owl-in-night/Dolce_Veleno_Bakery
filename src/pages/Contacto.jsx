import { useState, useEffect } from 'react'
import { contact } from '../database/contact'

function Contacto () {
  const [prods, setProds] = useState([])
  useEffect(() => {
    setProds(contact)
  }, [])

  return (
    <div className='video-responsive'>
      <video className='w-full' autoPlay loop muted>
        <source src='/video/video contacto.mp4' type='video/mp4' />
      </video>
      <br />
      <br />
      <div className='w-45 h-50 bg--200 flex flex-col justify-center items-center'>
        <br />
        <div className='lg:grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 text-center xl:grid-cols-4 xl:gap-x-8 '>
          {prods.map((prod) => (
            <div
              className=''
              key={prod.id}
            >
              <div className='bg-inherit flex flex-col justify-center items-center rounded-lg p-2 cursor-pointer hover:bg-inherit '>
                <img className='w-[150px]' src={prod.image} />
                <h1 className='text-2xl text-black font-bold dark:text-white'>{prod.name}</h1>
                <p className='card-text text-black dark:text-white'> {prod.description}</p>
                <p className='card-text text-black dark:text-white'>{prod.price}</p>
              </div>
              <br />
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
export default Contacto
