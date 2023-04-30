import { Navigate, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { useAuthActions } from '../hooks/useAuthActions.js'
import Popup from '../components/modal/Popup.jsx'
import { Button, Label, TextInput } from 'flowbite-react'
import { HiLockClosed, HiMail } from 'react-icons/hi'

export function LoginPage() {
  const [loginSuccessful, setLoginSuccessful] = useState(false)
  const { addToken } = useAuthActions()
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

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

  const handleGoToRegister = () => {
    navigate('/register')
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
        className=' bg-slate-400 w-3/4 m-auto dark:bg-slate-700 p-12 my-8 justify-center rounded-lg max-md:w-full'
        action=''
      >
        <img
          src={logo}
          className='h-1/3 w-1/3 m-auto mb-5 max-md:h-1/2 max-md:w-1/2'
          alt=''
        />
        <h1 className='text-2xl font-bold text-slate-700 dark:text-slate-400 text-center pb-3'>
          Inicio Sesión
        </h1>
        <div className='justify-items-center text-center'>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Email' />
          </div>
          <TextInput
            id='email'
            type='email'
            icon={HiMail}
            placeholder='ejemplo@email.com'
            required
          />
          <div className='my-2 block'>
            <Label htmlFor='password' value='Contraseña' />
          </div>
          <TextInput
            id='password'
            type='password'
            icon={HiLockClosed}
            required
          />
        </div>
        <br />
        <div className='flex justify-between max-md:flex-col gap-3'>
          <Button color='light' onClick={handleGoToRegister}>
            Registrarse
          </Button>
          <Button type='submit'>Iniciar Sesion</Button>
        </div>
      </form>
    </div>
  )
}
