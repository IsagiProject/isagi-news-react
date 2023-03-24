import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export function Menu() {
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
        <li className=' h-full hover:bg-slate-500 hover:scale-105 transition duration-500 text-gray-300'>
          <Link className='block w-24 h-full py-5 text-center ' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}
