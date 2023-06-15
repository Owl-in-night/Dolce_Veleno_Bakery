// import ListProducts from '../components/_partials/ListProducts'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../src/App.css'
import { products } from '../database/products'
import { Helmet } from 'react-helmet'
function Home () {
  const [prods, setProds] = useState([])

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/catalogo/${id}`)
  }

  useEffect(() => {
    setProds(products)
  }, [])
  return (
    <div className='m-0 dark:bg-slate-800 border-gray-200'>
      {/* putting video */}
      <div className='video-responsive'>
        <video className='w-full' autoPlay loop muted>
          <source src='/video/video.mp4' type='video/mp4' />
        </video>
      </div>
      <br />
      {/* Buttons */}
      <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
        <ul className='flex list-none m-0 p-0 space-x-0 xl:space-x-72 md:space-x-52'>
          <li>
            <Link to='/contacto' className='inline-flex rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]space py-2 pl-3 pr-4 md:bg-transparent dark:text-white'>Contacto</Link>
          </li>
          <li>
            <Link to='/catalogo' className='inline-flex rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]space py-2 pl-3 pr-4 md:bg-transparent dark:text-white'>
              Catálogo
            </Link>
          </li>
          <li>
            <Link to='/sobre-nosotros' className='inline-flex rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]space py-2 pl-3 pr-4 md:bg-transparent dark:text-white'>Sobre nosotros</Link>
          </li>
        </ul>
      </div>
      <br />
      {/* Mansory and choose select ONe */}
      <h1 className='text-center text-lg dark:text-white'>Descubre la magia y el sabor de nuestros postres</h1>
      <br />
      {/* Principal div of products */}
      <div className='lg:ml-[300px] sm:grid-cols-2'>
        <div className='bg-inherit flex flex-col rounded-lg p-2 cursor-pointer hover:bg-inherit lg:grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8' data-testid='products_1'>
          {prods.slice(0, 3).map((prod) => (
            <div
              className='grid-container' key={prod.id}
              onClick={() => handleClick(prod.id)}
            >
              <img className='grid-item' src={prod.image} />
            </div>
          ))}
        </div>
        <div className='bg-inherit flex flex-col justify-center rounded-lg p-2 cursor-pointer hover:bg-inherit lg:grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8' data-testid='products_2'>
          {prods.slice(3, 6).map((prod) => (
            <div
              className='grid-container' key={prod.id}
              onClick={() => handleClick(prod.id)}
            >
              <img className='grid-item' src={prod.image} />
            </div>
          ))}
        </div>
      </div>
      <div
        className='text-center lg:text-center dark:text-white'
      >
        <p
          data-te-animation-init
          data-te-animation-start='onHover'
          data-te-animation-reset='true'
          data-te-animation='[fade-in_1s_ease-in-out]'
        >Nosotros somos Dolce Veleno Bakery un emprendimiento que promueve la producción de postres para toda ocasión y realmente estamos agradecidos por tu presencia en nuestra página ¡Disfrútalo!
        </p>
      </div>
      <Helmet>
        <script
          type='text/javascript'
          src='../node_modules/tw-elements/dist/js/tw-elements.umd.min.js'
        />
      </Helmet>
      {/* Spaces for margin manualy */}
      <br />
      <br />
    </div>
  )
}
export default Home
