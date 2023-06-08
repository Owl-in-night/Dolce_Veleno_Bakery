import { Link } from 'react-router-dom'
import IconLight from '../Icons/IconLight'
import ThemeSwitcher from './ThemeSwitcher'
import { Header, Menu, Nav } from './styles'
import { RiMenu3Fill } from 'react-icons/ri'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar () {
  const [open, setOpen] = React.useState(false)
  return (
    <Header className='bg-white rounded-lg shadow  dark:bg-slate-800 border-gray-200'>
      <Nav>
        <div>
          <Link className='flex items-center' to='/'>
            <IconLight fill='#000' />
          </Link>
        </div>
        <Menu open={open}>
          <li>
            <Link to='/' className=' dark:text-white'>Inicio</Link>
          </li>
          <li>
            <Link to='/catalogo' className=' dark:text-white'>Catálogo</Link>
          </li>
          <li>
            <Link to='/contacto' className=' dark:text-white'>Contacto</Link>
          </li>
          <li>
            <Link to='/sobre-nosotros' className=' dark:text-white'>Sobre Nosotros</Link>
          </li>
          <li>
            <Link to='/signin' className='dark:text-white'>Iniciar Sesión</Link>
          </li>
        </Menu>
        <div className='Theme'>
          <ThemeSwitcher />
        </div>
        <div className='icon-menu'>
          {
            open
              ? <AiOutlineClose
                  size={20}
                  onClick={() => setOpen(!open)}
                />
              : <RiMenu3Fill
                  onClick={() => setOpen(!open)}
                  color='black' size={20}
                />
          }
        </div>
      </Nav>
    </Header>
  )
}
