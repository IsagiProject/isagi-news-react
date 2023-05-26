import { Navigate, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { HiEye, HiEyeOff, HiLockClosed, HiMail, HiUser } from 'react-icons/hi'
import { Button, Label, TextInput } from 'flowbite-react'
import { useAppSelector } from '../hooks/store.js'
import Popup from '../components/modal/Popup.jsx'
import SuccessAlert from '../components/alerts/SuccessAlert.jsx'

export function RegisterPage() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [registerSuccessful, setRegisterSuccessful] = useState(false)
  const [popupData, setPopupData] = useState({
    text: '',
    buttonText: ''
  })
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false)
  const token = useAppSelector((state) => state.token)

  const handleRegister = (event) => {
    event.preventDefault()
    if (password.length < 8) {
      setPopupData({
        text: 'La contraseña debe tener al menos 8 caracteres',
        buttonText: 'Aceptar'
      })
    }

    if (password !== confirm) {
      setPopupData({
        text: 'Las contraseñas no coinciden',
        buttonText: 'Aceptar'
      })
      setShowPopup(true)
      setPassword('')
      setConfirm('')
      return
    }

    fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user,
        email,
        password,
        confirm
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setRegisterSuccessful(true)
          setEmail('')
          setPassword('')
          setConfirm('')
          return
        }

        if (data.status === 400) {
          setPopupData({
            text: 'Los datos no son validos',
            buttonText: 'Aceptar'
          })
          setShowPopup(true)
          setUser('')
          setEmail('')
          setPassword('')
          setConfirm('')
          return
        }

        if (data.status === 422) {
          setPopupData({
            text: 'El email ya existe',
            buttonText: 'Aceptar'
          })
          setShowPopup(true)
          setEmail('')
        }
      })
      .catch((error) => console.error(error))
  }

  const handleGoToLogin = () => {
    navigate('/login')
  }
  const [passwordShown, setPasswordShown] = useState(false)
  const [confirmShown, setConfirmShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  const toggleConfirm = () => {
    setConfirmShown(!confirmShown)
  }
  const handleModalClick = () => {
    setShowPopup(false)
  }
  return (
    <div className='justify-center'>
      {token && <Navigate to='/' />}
      <Popup
        show={showPopup}
        onClick={handleModalClick}
        onClose={handleModalClick}
        text={popupData.text}
        buttonText={popupData.buttonText}
      />
      <form
        onSubmit={handleRegister}
        className=' bg-slate-400 w-3/4 m-auto dark:bg-slate-700 p-12 my-8 justify-center rounded-lg max-md:w-full'
        action=''
      >
        {registerSuccessful && (
          <SuccessAlert text='El registro se ha completado. Por favor, verifica tu correo electronico' />
        )}
        <img
          src={logo}
          className='h-1/3 w-1/3 m-auto mb-5 max-md:h-1/2 max-md:w-1/2'
          alt=''
        />
        <h1 className='text-2xl text-slate-700 dark:text-slate-400 text-center pb-3'>
          Registrarse
        </h1>

        <div className='justify-items-center text-center'>
          <div className='mb-2 block'>
            <Label htmlFor='username' value='Usuario' />
          </div>
          <TextInput
            id='username'
            type='text'
            name='username'
            icon={HiUser}
            onChange={(event) => setUser(event.target.value)}
            required
          />
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Email' />
          </div>
          <TextInput
            id='email'
            type='email'
            name='email'
            icon={HiMail}
            placeholder='ejemplo@email.com'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
          <div className='my-2 block'>
            <Label htmlFor='password' value='Contraseña' />
          </div>
          <div className='flex'>
            <TextInput
              id='password'
              className='w-11/12 max-md:w-10/12'
              type={passwordShown ? 'text' : 'password'}
              name='password'
              icon={HiLockClosed}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <Button
              className='w-1/12 max-md:w-2/12 mx-1 my-auto bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-800  transition duration-200 dark:bg-gray-500'
              onClick={togglePassword}
            >
              {passwordShown ? <HiEye /> : <HiEyeOff />}
            </Button>
          </div>
          <div className='my-2 block'>
            <Label htmlFor='password' value='Repetir contraseña' />
          </div>
          <div className='flex'>
            <TextInput
              id='confirm'
              className='w-11/12 max:md-w-10/12'
              type={confirmShown ? 'text' : 'password'}
              name='confirm'
              icon={HiLockClosed}
              onChange={(event) => setConfirm(event.target.value)}
              required
            />
            <Button
              className='w-1/12 max-md:w-2/12 mx-1 my-auto bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-800  transition duration-200 dark:bg-gray-500'
              onClick={toggleConfirm}
            >
              {confirmShown ? <HiEye /> : <HiEyeOff />}
            </Button>
          </div>
        </div>
        <br />

        <div className='flex justify-between max-md:flex-col gap-3 mt-4'>
          <Button color='light' onClick={handleGoToLogin}>
            Login
          </Button>

          <Button type='submit' color='dark'>
            Registrarse
          </Button>
        </div>
      </form>
    </div>
  )
}
