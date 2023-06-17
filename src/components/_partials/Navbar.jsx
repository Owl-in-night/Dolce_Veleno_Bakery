import { Link, useLocation } from 'react-router-dom'
import IconSwitcher from './IconSwitcher'
// import ThemeSwitcher from './ThemeSwitcher'
import { Header, Menu, Nav } from './styles'
import { RiMenu3Fill } from 'react-icons/ri'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
export default function Navbar () {
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()
  console.log(pathname)
  // you can check a more conditions here
  if (pathname === '/dashboard') return null
  return (
    <div data-testid='navbar'>
      <Header className='bg-white rounded-lg shadow  dark:bg-slate-800 border-gray-200'>
        <Nav>
          <div>
            <Link className='flex items-center' to='/'>
              {/* Put the IconChanger */}
              <IconSwitcher />
            </Link>
          </div>
          <Menu open={open} className='dark:bg-slate-800'>
            <li>
              <Link to='/' className='text-neutral-500 hover:text-neutral-700 focus:text-neutral-950 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-50 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400'>Inicio</Link>
            </li>
            <li>
              <Link to='/catalogo' className='text-neutral-500 hover:text-neutral-700 focus:text-neutral-950 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-50 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400'>Catálogo</Link>
            </li>
            <li>
              <Link to='/contacto' className='text-neutral-500 hover:text-neutral-700 focus:text-neutral-950 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-50 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400'>Contacto</Link>
            </li>
            <li>
              <Link to='/sobre-nosotros' className='text-neutral-500 hover:text-neutral-700 focus:text-neutral-950 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-50 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400'>Sobre Nosotros</Link>
            </li>
            <li>
              <Link to='/signin' className='text-neutral-500 hover:text-neutral-700 focus:text-neutral-950 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-50 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400'>Iniciar Sesión</Link>
            </li>
          </Menu>
          {/* <div className='Theme'>
            <ThemeSwitcher />
          </div> */}
          <div className='dark:text-white'>
            {
            open
              ? <AiOutlineClose
                  size={20}
                  onClick={() => setOpen(!open)}

                />
              : <RiMenu3Fill
                  onClick={() => setOpen(!open)}
                  size={20}

                />
          }
          </div>
        </Nav>
      </Header>
    </div>
  )
}
