import {Link} from 'react-router-dom'
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({darkMode, setDarkMode}) {
 
  return (  
<nav className="bg-white rounded-lg shadow m-1  dark:bg-zinc-950 border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a className="flex items-center">
      <img src="/icon2.svg" className="h-8 mr-3 dark:" alt="Flowbite Logo" />
    </a>
       <ul className="flex list-none m-0 p-0">
        <li>
        <Link className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' to="/">Home</Link>
        </li>
        <li>
        <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/search-page">Search Page</Link>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
        </li>
        <li>
        <BsFillMoonStarsFill className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}/>
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
  );
}
export default Navbar;