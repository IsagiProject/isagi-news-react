import { Button, Label, TextInput } from 'flowbite-react'
import { useRef, useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { changePasswordRecover } from '../services/auth.js'
import SuccessAlert from '../components/alerts/SuccessAlert.jsx'
import ErrorAlert from '../components/alerts/ErrorAlert.jsx'

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const [passwordShow, setPasswordShow] = useState(false)
  const [colorPassword, setColorPassword] = useState(null)
  const [successfulChange, setSuccessfulChange] = useState(null)
  const [alertMessage, setAlertMessage] = useState('')
  const passwordInputRef = useRef()
  const passwordInputRepeatRef = useRef()
  const navigate = useNavigate()

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (
      passwordInputRef.current.value !== passwordInputRepeatRef.current.value
    ) {
      return
    }

    const formData = new FormData(event.target)
    const email = formData.get('email')
    const token = formData.get('token')
    const password = formData.get('password')

    const statusCode = await changePasswordRecover({ email, token, password })
    if (statusCode === 200) {
      setSuccessfulChange(true)
      setAlertMessage(
        'Se te redirigira automaticamente a la pagina de inicio de sesion. Recuerda utilizar la contraseña nueva para iniciar sesion.'
      )
      setTimeout(() => {
        navigate('/login')
      }, 10000)
      return
    }

    if (statusCode >= 400) {
      setSuccessfulChange(false)
      setAlertMessage(
        'Este enlace no es valido. Por favor, solicita uno nuevo a traves de la pagina "He olvidado mi contraseña".'
      )
    }
  }

  const handlePasswordType = () => {
    if (
      passwordInputRef.current.value === '' ||
      passwordInputRepeatRef.current.value === '' ||
      passwordInputRef.current.value === passwordInputRepeatRef.current.value
    ) {
      setColorPassword(null)
    } else {
      setColorPassword('failure')
    }
  }

  return (
    <div className='flex flex-col gap-4 bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-8 justify-start rounded-xl object-cover max-md:mx-10'>
      <h1>Restablecer contraseña</h1>
      {successfulChange === true && (
        <SuccessAlert
          bold='Cambio realizado correctamente.'
          text={alertMessage}
        />
      )}
      {successfulChange === false && (
        <ErrorAlert bold='Ha ocurrido un error.' text={alertMessage} />
      )}
      <form className='' onSubmit={handleFormSubmit}>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Nueva contraseña' />
          </div>
          <div className='flex align-middle'>
            <TextInput
              {...(colorPassword !== null && { color: colorPassword })}
              ref={passwordInputRef}
              onChange={handlePasswordType}
              className='w-full transition'
              type={passwordShow ? 'text' : 'password'}
              name='password'
              required
            />
            <Button
              className='ml-2 self-center'
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <HiEyeOff /> : <HiEye />}
            </Button>
          </div>
          <Label
            value='Las contraseñas no coinciden'
            color='failure'
            className={colorPassword === 'failure' ? 'visible' : 'invisible'}
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password_repeat' value='Repetir contraseña' />
          </div>
          <div className='flex align-middle'>
            <TextInput
              {...(colorPassword !== null && { color: colorPassword })}
              ref={passwordInputRepeatRef}
              onChange={handlePasswordType}
              className='w-full'
              name='password_repeat'
              type={passwordShow ? 'text' : 'password'}
              required
            />
          </div>
        </div>
        <Button
          color='dark'
          type='submit'
          className='w-full mt-4'
          label='Cambiar contraseña'
        >
          Cambiar contraseña
        </Button>
        <input type='hidden' name='email' value={searchParams.get('email')} />
        <input type='hidden' name='token' value={searchParams.get('token')} />
      </form>
    </div>
  )
}
