import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export function LoginPage() {
  return (
    <div className='justify-center w-6/12 m-auto'>
      <form
        className='bg-gray-700 p-12 my-8 justify-center rounded-lg'
        action=''
      >
        <img src={logo} className='h-3/6 w-3/6 m-auto mb-5' alt='' />
        <h1 className='text-2xl text-gray-400 text-center pb-3'>
          Inicio Sesión
        </h1>
        <div className='justify-items-center text-center'>
          <label for='Email' className='text-gray-400 text-xl my-1 text-right'>
            Email
          </label>
          <input
            type='email'
            name='Email'
            className='my-3 p-1 rounded-lg ml-4'
            placeholder='user@gmail.com'
            id='email'
          />
          <br />
          <label
            for='Password'
            className='text-gray-400 text-xl my-1 text-right'
          >
            Clave
          </label>
          <input
            type='password'
            name='Password'
            className='my-3 p-1 rounded-lg ml-4'
            id='password'
          />
        </div>
        <br />
        <div className='flex justify-between'>
          <button
            type='button'
            className='bg-gray-500 px-1 rounded-md hover:bg-slate-700 transition duration-200 mx-1 text-gray-300'
          >
            <Link className='block w-24 h-12 pt-3 text-center ' to='/register'>
              Registrarte
            </Link>
          </button>

          <button
            type='button'
            className='bg-gray-500 py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200 mx-1 text-gray-300'
          >
            <Link className='block w-24 h-12 pt-3 text-center ' to='/'>
              Iniciar Sesion
            </Link>
          </button>
        </div>
      </form>
    </div>
  )
}
