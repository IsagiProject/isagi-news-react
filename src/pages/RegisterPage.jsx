import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export function RegisterPage() {
  return (
    <div className='justify-center w-5/12 m-auto'>
      <form
        className='bg-gray-700 p-10 my-8 justify-center rounded-lg'
        action=''
      >
        <img src={logo} className='h-3/6 w-3/6 m-auto' alt='' />
        <h1 className='text-2xl text-gray-400 text-center pb-3'>Registrarse</h1>
        <div className='justify-evenly px-5 my-2 '>
          <label for='name' className='text-gray-400 text-xl my-1 text-right'>
            Nombre
          </label>
          <input
            type='text'
            name='name'
            className='my-3 p-1 w-8/12 rounded-lg ml-3'
            id='name'
          />
          <br />
          <label
            for='last-name'
            className='text-gray-400 text-xl my-1 text-right'
          >
            Apellido
          </label>
          <input
            type='text'
            name='last-name'
            className='my-3 w-8/12 p-1 rounded-lg ml-2'
            id='last-name'
          />
          <br />
          <label
            for='user-name'
            className='text-gray-400 text-xl my-1 text-right'
          >
            Usuario
          </label>
          <input
            type='text'
            name='user-name'
            className='my-3 p-1 w-8/12 rounded-lg ml-3'
            id='user-name'
          />
          <br />
          <label
            for='Email'
            className='text-gray-400 text-xl my-1 ml-2 text-right'
          >
            Email
          </label>
          <input
            type='email'
            name='Email'
            className='my-3 p-1 w-8/12 rounded-lg ml-5'
            placeholder='user@gmail.com'
            id='email'
          />
          <br />
          <label for='Password' className='text-gray-400 text-xl my-1 ml-2'>
            Clave
          </label>
          <input
            type='password'
            name='Password'
            className='mx-5 my-3 w-8/12  p-1 rounded-lg'
            id='password'
          />
          <br />
          <label for='confirm' className='text-gray-400 text-xl my-1 ml-2'>
            Confirmar Clave
          </label>
          <br />
          <input
            type='text'
            name='confirm'
            className='ml-20 my-3 w-8/12  p-1 rounded-lg'
            id='confirm'
          />
        </div>

        <br />

        <div className='flex justify-between'>
          <button
            type='button'
            className='bg-gray-500 px-4 rounded-md hover:bg-slate-700 transition duration-200 text-gray-300'
          >
            <Link className='block w-24 h-12 pt-3 text-center ' to='/login'>
              Atrás
            </Link>
          </button>

          <button
            type='button'
            className='bg-gray-500 py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200 text-gray-300'
          >
            <a className='block w-24 h-12 pt-3 text-center ' routerLink='/'>
              Registrarte
            </a>
          </button>
        </div>
      </form>
    </div>
  )
}
