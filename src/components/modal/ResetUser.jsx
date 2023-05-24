import { Button, Modal } from 'flowbite-react'
import SuccessAlert from '../alerts/SuccessAlert.jsx'
import { useState } from 'react'
import ErrorAlert from '../alerts/ErrorAlert.jsx'
import { useAppSelector } from '../../hooks/store.js'

export default function ResetUser({ show, onClose, userId }) {
  const token = useAppSelector((state) => state.token)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [password, setPassword] = useState('')

  const errorMessages = {
    401: 'No tienes permisos para realizar esta accion',
    404: 'No se ha encontrado ningun usuario con ese id',
    500: 'Error interno del servidor'
  }
  const handleRecoverClick = async () => {
    setErrorMessage('')
    setShowErrorAlert(false)
    setShowSuccessAlert(false)

    const isSuccessful = await fetch(
      `${import.meta.env.VITE_API_URL}/admin/users/${userId}/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        if (response.status !== 200) {
          throw response.status
        }
        setPassword(response.data.password)
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
              bold='Constraseña restablecida correctamente!'
              text={`La nueva contraseña es... ${password}`}
            />
          )}
          {showErrorAlert && (
            <ErrorAlert
              bold='Error al restablecer la contraseña.'
              text={errorMessage}
            />
          )}
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
            Estas seguro de que quieres restablecer la contraseña?
          </h3>
          <div className='flex justify-between'>
            <Button onClick={handleRecoverClick}>Si</Button>
            <Button onClick={handleModalClose}>No</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
