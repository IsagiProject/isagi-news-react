import { Link, Navigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { useAuthActions } from '../hooks/useAuthActions.js'

export function LoginPage() {
  const [loginSuccessful, setLoginSuccessful] = useState(false)
  const { addToken } = useAuthActions()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const email = formData.get('email')
    const password = formData.get('password')

    // Aquí puedes enviar los datos al servidor para su validación
    fetch('https://isagiapi.galder315.ga/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del servidor
        if (data.status === 200) {
          console.log(data)
          addToken(data.token)
          setLoginSuccessful(true)

          // Inicio de sesión exitoso
        } else {
          form.reset()
          // Inicio de sesión fallido
          // window.alert('Usuario o contraseña incorrectos')
        }
      })
  }

  return (
    <div className='justify-center w-6/12 m-auto'>
      {loginSuccessful && <Navigate to='/' />}
      <form
        onSubmit={handleSubmit}
        className='bg-gray-700 p-12 my-8 justify-center rounded-lg'
        action=''
      >
        <img src={logo} className='h-3/6 w-3/6 m-auto mb-5' alt='' />
        <h1 className='text-2xl text-gray-400 text-center pb-3'>
          Inicio Sesión
        </h1>
        <div className='justify-items-center text-center'>
          <label
            htmlFor='email'
            className='text-gray-400 text-xl my-1 text-right'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            className='my-3 p-1 rounded-lg ml-4'
            placeholder='user@gmail.com'
            id='email'
          />
          <br />
          <label
            htmlFor='password'
            className='text-gray-400 text-xl my-1 text-right'
          >
            Clave
          </label>
          <input
            type='password'
            name='password'
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
            type='submit'
            className='bg-gray-500 py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200 mx-1 text-gray-300'
          >
            Iniciar Sesion
          </button>
        </div>
      </form>
    </div>
  )
}
