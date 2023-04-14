import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAppSelector } from '../hooks/store'
import { useAuthActions } from '../hooks/useAuthActions'
import { useUserData } from '../hooks/useUserData'
import { useStyleActions } from '../hooks/useStyleActions.js'

export function Menu() {
  const token = useAppSelector((state) => state.token)
  const { removeToken } = useAuthActions()
  const { switchDarkMode } = useStyleActions()
  const { email } = useUserData(token)
  const dark = useAppSelector((state) => state.style.dark)

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
          <button
            type='button'
            className='text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500'
            onClick={switchDarkMode}
          >
            {dark ? (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                strokeWidth={1.5}
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                />
              </svg>
            ) : (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                strokeWidth={1.5}
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                />
              </svg>
            )}

            <span className='sr-only'>Icon description</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
