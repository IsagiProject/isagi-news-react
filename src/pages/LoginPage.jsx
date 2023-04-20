import { Link, Navigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { useAuthActions } from '../hooks/useAuthActions.js'
import Popup from '../components/modal/Popup.jsx'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { Button } from 'flowbite-react'

export function LoginPage() {
  const [loginSuccessful, setLoginSuccessful] = useState(false)
  const { addToken } = useAuthActions()
  const [showPopup, setShowPopup] = useState(false)

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
          addToken(data.token)
          setLoginSuccessful(true)

          // Inicio de sesión exitoso
        } else {
          form.reset()
          setShowPopup(true)
          // Inicio de sesión fallido
          // window.alert('Usuario o contraseña incorrectos')
        }
      })
  }

  const handleModalClick = () => {
    setShowPopup(false)
  }
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  return (
    <div className='justify-center '>
      <Popup
        show={showPopup}
        onClick={handleModalClick}
        onClose={handleModalClick}
        text='Usuario o contraseña incorrectos'
        buttonText='Aceptar'
      />
      {loginSuccessful && <Navigate to='/' />}
      <form
        onSubmit={handleSubmit}
        className=' bg-slate-400 w-6/12 m-auto dark:bg-slate-700 my-8 pb-10 justify-center rounded-lg'
        action=''
      >
        <img src={logo} className='h-3/6 w-3/6 m-auto mb-5' alt='' />
        <h1 className='text-2xl text-slate-700 dark:text-slate-400 text-center pb-3'>
          Inicio Sesión
        </h1>
        <div className='justify-items-center text-center'>
          <label
            htmlFor='email'
            className='text-slate-700 dark:text-slate-400 text-xl my-1 text-left'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            className='my-3 p-1 rounded-lg ml-2'
            placeholder='user@gmail.com'
            id='email'
          />
          <br />{' '}
          <div className='flex mx-40'>
            <label
              htmlFor='password'
              className='text-slate-700 dark:text-slate-400 text-xl ml-4 my-auto text-right'
            >
              Clave
            </label>
            <input
              type={passwordShown ? 'text' : 'password'}
              name='password'
              className='my-3 p-1 rounded-lg text-gray-500 ml-4'
              id='password'
            />{' '}
            <Button
              className='w-1/12 mx-1 my-auto bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-800  transition duration-200 dark:bg-gray-500'
              onClick={togglePassword}
            >
              {passwordShown ? <HiEye /> : <HiEyeOff />}
            </Button>
          </div>
        </div>
        <br />
        <div className='flex justify-between w-2/3 m-auto'>
          <button
            type='button'
            className='bg-gray-500 px-1 rounded-md hover:bg-slate-800 transition duration-200 mx-1 text-gray-300'
          >
            <Link className='block w-24 h-12 pt-3 text-center ' to='/register'>
              Registrarte
            </Link>
          </button>

          <button
            type='submit'
            className='bg-gray-500 py-2 px-4 rounded-md hover:bg-slate-800 transition duration-200 mx-1 text-gray-300'
          >
            Iniciar Sesion
          </button>
        </div>
      </form>
    </div>
  )
}
