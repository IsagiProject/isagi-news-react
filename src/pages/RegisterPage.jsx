import { Link, Navigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { useAppSelector } from '../hooks/store.js'
export function RegisterPage() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [registerSuccessful, setRegisterSuccessful] = useState(false)
  const token = useAppSelector((state) => state.token)

  const handleRegister = (event) => {
    event.preventDefault()
    fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        lastName,
        user,
        email,
        password,
        confirm
      })
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del servidor
        if (data.status === 200) {
          console.log(data)
          window.alert('Registro completado')
          setRegisterSuccessful(true)
          // Inicio de sesión exitoso
        } else {
          // Inicio de sesión fallido
          window.alert('Registro erroneo')
          document.getElementById('name').value = ''
          document.getElementById('lastName').value = ''
          document.getElementById('user').value = ''
          document.getElementById('email').value = ''
          document.getElementById('password').value = ''
          document.getElementById('confirm').value = ''
        }
      })
      .catch((error) => console.error(error))
  }
  return (
    <div className='justify-center'>
      {registerSuccessful && <Navigate to='/' />}
      {token && <Navigate to='/' />}

      <form
        onSubmit={handleRegister}
        className='bg-slate-400 dark:bg-slate-700 w-6/12 m-auto p-10 my-8 justify-center rounded-lg'
        action=''
      >
        <img src={logo} className='h-3/6 w-3/6 m-auto' alt='' />
        <h1 className='text-2xl text-slate-700 dark:text-slate-400 text-center pb-3'>
          Registrarse
        </h1>
        <div className='justify-evenly px-5 my-2 '>
          <label
            htmlFor='name'
            className='text-slate-700 dark:text-slate-400 text-xl my-1 text-right'
          >
            Nombre
          </label>
          <input
            type='text'
            name='Name'
            className='my-3 p-1 w-8/12 rounded-lg ml-3'
            id='name'
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label
            htmlFor='last-name'
            className='text-slate-700 dark:text-slate-400 text-xl my-1 text-right'
          >
            Apellido
          </label>
          <input
            type='text'
            name='Last-name'
            className='my-3 w-8/12 p-1 rounded-lg ml-2'
            id='last-name'
            onChange={(event) => setLastName(event.target.value)}
          />
          <br />
          <label
            htmlFor='user-name'
            className='text-slate-700 dark:text-slate-400 text-xl my-1 text-right'
          >
            Usuario
          </label>
          <input
            type='text'
            name='User'
            className='my-3 p-1 w-8/12 rounded-lg ml-3'
            id='user'
            onChange={(event) => setUser(event.target.value)}
          />
          <br />
          <label
            htmlFor='Email'
            className='text-slate-700 dark:text-slate-400 text-xl my-1 ml-2 text-right'
          >
            Email
          </label>
          <input
            type='email'
            name='Email'
            className='my-3 p-1 w-8/12 rounded-lg ml-5'
            placeholder='user@gmail.com'
            id='email'
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label
            htmlFor='Password'
            className='text-slate-700 dark:text-slate-400 text-xl my-1 ml-2'
          >
            Clave
          </label>
          <input
            type='password'
            name='Password'
            className='mx-5 my-3 w-8/12  p-1 rounded-lg'
            id='password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <label
            htmlFor='confirm'
            className='text-slate-700 dark:text-slate-400 text-xl my-1 ml-2'
          >
            Confirmar Clave
          </label>
          <br />
          <input
            type='password'
            name='Confirm'
            className='ml-20 my-3 w-8/12  p-1 rounded-lg'
            id='confirm'
            onChange={(event) => setConfirm(event.target.value)}
          />
        </div>

        <br />

        <div className='flex justify-between'>
          <button
            type='button'
            className='bg-gray-500 px-4 rounded-md hover:bg-slate-800 transition duration-200 text-gray-300'
          >
            <Link className='block w-24 h-12 pt-3 text-center ' to='/login'>
              Atrás
            </Link>
          </button>

          <button
            type='submit'
            className='bg-gray-500 py-2 px-4 rounded-md hover:bg-slate-800 transition duration-200 text-gray-300'
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
