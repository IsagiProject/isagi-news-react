import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAppSelector } from '../hooks/store'
import { useAuthActions } from '../hooks/useAuthActions'
import { useUserData } from '../hooks/useUserData'
import { DarkThemeToggle } from 'flowbite-react'

export function Menu() {
  const token = useAppSelector((state) => state.token)
  const { removeToken } = useAuthActions()
  const { email } = useUserData(token)

  const handleLogout = () => {
    removeToken()
  }

  return (
    <nav className='flex py-2 px-4 bg-gray-800 h-max'>
      <img className='w-20 h-18' src={logo} alt='' />
      <ul className='flex justify-around w-full items-center'>
        <li className=' h-full hover:bg-slate-500 hover:scale-105 transition duration-500 text-gray-300'>
          <Link className='block w-24 h-full py-5 text-center ' to='/'>
            Home
          </Link>
        </li>
        <li className=' h-full hover:bg-slate-500 hover:scale-105 transition duration-500 text-gray-300'>
          <Link className='block w-24 h-full py-5 text-center ' to='/news'>
            Noticias
          </Link>
        </li>
        <li className=' h-full hover:bg-slate-500 hover:scale-105 transition duration-500 text-gray-300'>
          <Link className='block w-24 h-full py-5 text-center ' to='/sales'>
            Ofertas
          </Link>
        </li>
        <li className=' h-full hover:bg-slate-500 hover:scale-105 transition duration-500 text-gray-300'>
          <Link className='block w-24 h-full py-5 text-center ' to='/faq'>
            FAQ
          </Link>
        </li>
        {token ? (
          <li className=' h-full hover:bg-slate-500 hover:scale-105 transition duration-500 text-gray-300'>
            <button
              className='block w-24 h-full py-5 text-center '
              onClick={handleLogout}
            >
              Cerrar sesion {email}
            </button>
          </li>
        ) : (
          <li className=' h-full hover:bg-slate-500 hover:scale-105 transition duration-500 text-gray-300'>
            <Link className='block w-24 h-full py-5 text-center ' to='/login'>
              Login
            </Link>
          </li>
        )}
        <li>
          <DarkThemeToggle />
        </li>
      </ul>
    </nav>
  )
}
