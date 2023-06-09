import { Link } from 'react-router-dom'

function Footer () {
  return (

    <footer className='bg-white rounded-lg shadow m-4 my-0 dark:bg-slate-800 border-gray-2001 '>
      <div className='w-full mx-auto max-w-screen-xl p-4'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2023 <a href='https://dolcevelenobakery.netlify.app/' className='hover:underline'>Dolce Veleno Bakery™</a>. All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link className='mr-4 hover:underline md:mr-6' to='/sobre-nosotros'>About </Link>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>Privacy Policy</a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>Licensing</a>
          </li>
          <li>
            <a href='#' className='hover:underline'>Contact</a>
          </li>
        </ul>
      </div>
    </footer>

  )
}
export default Footer
