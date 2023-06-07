// import ListProducts from '../components/_partials/ListProducts'
import { Link } from 'react-router-dom'
import '../../src/App.css'
import { Helmet } from 'react-helmet'
function Home () {
  return (
    <div className='dark:bg-slate-800 border-gray-200'>
      {/* putting video */}
      <div className='video-responsive'>
        <video className='w-full' autoPlay loop muted>
          <source src='/public/video/video.mp4' type='video/mp4' />
        </video>
      </div>
      <br />
      {/* Button 1 */}
      <div className='container py-10 px-10 mx-0 min-w-full flex flex-col items-center'>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'><Link to='/catalogo'>Catálogo</Link></button>
      </div>
      {/* Imgs style pinteres */}
      <div className='grid-container'>
        <img className='grid-item' src='/public/img/img1.jfif' width={230} height={260} />
        <img className='grid-item' src='/public/img/img2.jfif' width={230} height={260} />
        <img className='grid-item' src='/public/img/img3.jfif' width={230} height={260} />
        <img className='grid-item' src='/public/img/img4.jfif' width={230} height={260} />
        <img className='grid-item' src='/public/img/img5.jfif' width={230} height={260} />
        <img className='grid-item' src='/public/img/img6.jfif' width={230} height={260} />
        <img className='grid-item' src='/public/img/img7.jfif' width={230} height={260} />
        <img className='grid-item' src='/public/img/img8.png' width={230} height={260} />
        <img className='grid-item' src='/public/img/img9.jfif' width={230} height={260} />
      </div>
      {/* Spaces for margin manualy */}
      <br />
      <br />
      {/* Use helmet for enter tags for HTML normaly */}
      <Helmet>
        <script src='https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js' />
        <script src='/src/components/_partials/masonry.js' />
      </Helmet>
    </div>
  )
}
export default Home
