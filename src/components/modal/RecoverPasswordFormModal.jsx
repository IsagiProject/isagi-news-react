import { Button, Label, Modal, TextInput } from 'flowbite-react'
import SuccessAlert from '../alerts/SuccessAlert.jsx'
import { useRef, useState } from 'react'
import ErrorAlert from '../alerts/ErrorAlert.jsx'

export default function FormModal({ show, onClose }) {
  const emailRef = useRef()
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const errorMessages = {
    400: 'El email introducido no es valido',
    404: 'No se ha encontrado ningun usuario con ese email'
  }
  const handleRecoverClick = async () => {
    setErrorMessage('')
    setShowErrorAlert(false)
    setShowSuccessAlert(false)

    if (emailRef.current.value === '') {
      setShowErrorAlert(true)
      setErrorMessage('El email no puede estar vacio')
      return
    }
    const isSuccessful = await fetch(
      'https://isagiapi.galder315.ga/auth/request-recover',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailRef.current.value })
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        if (response.status !== 200) {
          throw response.status
        }
        return true
      })
      .catch((error) => {
        setErrorMessage(errorMessages[error])
        setShowErrorAlert(true)
        return false
      })

    isSuccessful ? setShowSuccessAlert(true) : setShowErrorAlert(true)
  }

  const handleModalClose = () => {
    setShowSuccessAlert(false)
    setShowErrorAlert(false)
    onClose()
  }

  return (
    <Modal show={show} size='md' popup onClose={handleModalClose}>
      <Modal.Header />
      <Modal.Body>
        <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
          {showSuccessAlert && (
            <SuccessAlert
              bold='Recuperacion correcta!'
              text={`Se ha enviado un correo electronico a la direccion ${emailRef.current.value}`}
            />
          )}
          {showErrorAlert && (
            <ErrorAlert
              bold='Error al recuperar la contraseña.'
              text={errorMessage}
            />
          )}
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
            Recuperar contraseña
          </h3>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='email' value='Introduce tu email' />
            </div>
            <TextInput
              ref={emailRef}
              id='email'
              type='email'
              placeholder='ejemplo@ejemplo.com'
              required
            />
          </div>
          <div className='w-full'>
            <Button onClick={handleRecoverClick}>Recuperar contraseña</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
