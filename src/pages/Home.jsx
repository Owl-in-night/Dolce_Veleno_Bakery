// import ListProducts from '../components/_partials/ListProducts'
import { Link } from 'react-router-dom'
import '../../src/App.css'
function Home () {
  return (
    <div className='dark:bg-slate-800 border-gray-200'>
      {/* putting video */}
      <div className='video-responsive'>
        <video className='w-full' autoPlay loop muted>
          <source src='/video/video.mp4' type='video/mp4' />
        </video>
      </div>
      <br />
      {/* Buttons */}
      <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
        <ul className='flex list-none m-0 p-0 space-x-72'>
          <li>
            <Link to='/contacto' className='inline-flex rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]space py-2 pl-3 pr-4 md:bg-transparent  md:p-0 dark:text-white'>Contacto</Link>
          </li>
          <li>
            <Link to='/catalogo' className='inline-flex rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]space py-2 pl-3 pr-4 md:bg-transparent  md:p-0 dark:text-white'>
              Catálogo
            </Link>
          </li>
          <li>
            <Link to='/sobre-nosotros' className='inline-flex rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]space py-2 pl-3 pr-4 md:bg-transparent  md:p-0 dark:text-white'>Sobre nosotros</Link>
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
      <div className='video-responsive'>
        <video className='w-full' autoPlay loop muted>
          <source src='/video/video_2.mp4' type='video/mp4' />
        </video>
      </div>
      {/* Spaces for margin manualy */}
      <br />
      <br />
    </div>
  )
}
export default Home
