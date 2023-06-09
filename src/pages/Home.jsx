// import ListProducts from '../components/_partials/ListProducts'
import { Link } from 'react-router-dom'
import '../../src/App.css'
import { Helmet } from 'react-helmet'
function Home () {
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
      {/* Mansory */}
      <div className='grid-container'>
        <img className='grid-item' src='/img/img1.jfif' width={230} height={260} />
        <img className='grid-item' src='/img/img2.jfif' width={230} height={260} />
        <img className='grid-item' src='/img/img3.jfif' width={230} height={260} />
        <img className='grid-item' src='/img/img4.jfif' width={230} height={260} />
        <img className='grid-item' src='/img/img5.jfif' width={230} height={260} />
        <img className='grid-item' src='/img/img6.jfif' width={230} height={260} />
      </div>
      <div
        className='text-center lg:text-center'
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
