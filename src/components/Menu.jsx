import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAppSelector } from '../hooks/store'
import { useAuthActions } from '../hooks/useAuthActions'
import { useUserData } from '../hooks/useUserData'
import { DarkThemeToggle, Navbar, useThemeMode } from 'flowbite-react'
import { useStyleActions } from '../hooks/useStyleActions.js'
import NavbarItem from './navbar/NavbarItem.jsx'

export function Menu() {
  const token = useAppSelector((state) => state.token)
  const { removeToken } = useAuthActions()
  const { email } = useUserData(token)
  const { switchDarkMode } = useStyleActions()
  const [, , toggleMode] = useThemeMode()

  const handleLogout = () => {
    removeToken()
  }

  const changeTheme = () => {
    switchDarkMode()
    toggleMode()
  }

  /* <nav className='flex py-2 px-4 bg-slate-200 dark:bg-gray-800 h-max'>
      <img className='w-20 h-18' src={logo} alt='' />
      <ul className='flex justify-around w-full items-center'>
        <li className=' h-full hover:bg-slate-300 hover:scale-105 transition duration-500 text-slate-800 dark:text-slate-300 dark:hover:bg-slate-600'>
          <Link className='block w-24 h-full py-5 text-center ' to='/'>
            Home
          </Link>
        </li>
        <li className=' h-full hover:bg-slate-300 hover:scale-105 transition duration-500 text-slate-800 dark:text-slate-300 dark:hover:bg-slate-600'>
          <Link className='block w-24 h-full py-5 text-center ' to='/news'>
            Noticias
          </Link>
        </li>
        <li className=' h-full hover:bg-slate-300 hover:scale-105 transition duration-500 text-slate-800 dark:text-slate-300 dark:hover:bg-slate-600'>
          <Link className='block w-24 h-full py-5 text-center ' to='/sales'>
            Ofertas
          </Link>
        </li>
        <li className=' h-full hover:bg-slate-300 hover:scale-105 transition duration-500 text-slate-800 dark:text-slate-300 dark:hover:bg-slate-600'>
          <Link className='block w-24 h-full py-5 text-center ' to='/faq'>
            FAQ´s
          </Link>
        </li>
        {token ? (
          <li className=' h-full hover:bg-slate-300 hover:scale-105 transition duration-500 text-slate-800 dark:text-slate-300 dark:hover:bg-slate-600'>
            <button
              className='block w-24 h-full py-5 text-center '
              onClick={handleLogout}
            >
              Cerrar sesion {email}
            </button>
          </li>
        ) : (
          <li className=' h-full hover:bg-slate-300 hover:scale-105 transition duration-500 text-slate-800 dark:text-slate-300 dark:hover:bg-slate-600'>
            <Link className='block w-24 h-full py-5 text-center ' to='/login'>
              Login
            </Link>
          </li>
        )}
        <li>
          <DarkThemeToggle onClick={changeTheme} />
        </li>
      </ul>
    </nav> */

  return (
    <Navbar>
      <Navbar.Brand href='/'>
        <img src={logo} className='mr-3 h-6 sm:h-9' alt='Isagi News Logo' />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Isagi News
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <NavbarItem to='/' text='Home' />
        <NavbarItem to='/news' text='Noticias' />
        <NavbarItem to='/sales' text='Ofertas' />
        <NavbarItem to='/faq' text='FAQ' />
        {token ? (
          <NavbarItem
            to=''
            text={`Cerrar sesion ${email}`}
            onClick={handleLogout}
          />
        ) : (
          <NavbarItem to='/login' text='Login' />
        )}
        <DarkThemeToggle onClick={changeTheme} />
      </Navbar.Collapse>
      <Navbar.Toggle />
    </Navbar>
  )
}
