import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import IconLight from '../Icons/IconLight'

function Navbar () {
  return (
    <nav className='bg-white rounded-lg shadow m-1 my-0 dark:bg-slate-800 border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link className='flex items-center' to='/'>
          <IconLight fill='#000' />
        </Link>
        <ul className='flex list-none m-0 p-0'>
          <li>
            <Link className='block py-2 pl-3 pr-4 text-black rounded md:bg-transparent  md:p-0 dark:text-white focus:outline-none hover:bg-indigo-400 active:bg-indigo-600' to='/'>Inicio</Link>
          </li>
          <li>
            <Link className='block py-2 pl-3 pr-4 text-black rounded md:bg-transparent  md:p-0 dark:text-white focus:outline-none hover:bg-indigo-400 active:bg-indigo-600' to='/catalogo'>Catálogo</Link>
          </li>
          <li>
            <Link className='block py-2 pl-3 pr-4 text-black rounded md:bg-transparent  md:p-0 dark:text-white focus:outline-none hover:bg-indigo-400 active:bg-indigo-600' to='/contacto'>Contacto</Link>
          </li>
          <li>
            <Link className='block py-2 pl-3 pr-4 text-black rounded md:bg-transparent  md:p-0 dark:text-white focus:outline-none hover:bg-indigo-400 active:bg-indigo-600' to='/sobre-nosotros'>Sobre Nosotros</Link>
          </li>
          <li>
            <Link className='block py-2 pl-3 pr-4 text-black rounded md:bg-transparent  md:p-0 dark:text-white focus:outline-none hover:bg-indigo-400 active:bg-indigo-600' to='/signin'>Iniciar Sesión</Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  // <div>
  // <header>
  //     <nav>
  //       <ul>
  //       <BsFillMoonStarsFill classNameNameNameNameNameNameNameNameNameName="cursor-pointer" onClick={() => setDarkMode(!darkMode)}/>
  //         <li><Link to="/">Home</Link></li>
  //         <li><Link to="/search-page">Search Page</Link></li>
  //       </ul>
  //     </nav>
  //   </header>
  //   </div>
  )
}
export default Navbar
