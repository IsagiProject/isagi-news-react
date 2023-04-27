/* eslint-disable react/jsx-boolean-value */
import { Button, Modal } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

export default function Popup({ show, onClick, onClose, text, buttonText }) {
  return (
    <>
      <Modal show={show} size='md' popup={true} onClose={onClose} dismissible>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              {text}
            </h3>
            <div className='flex justify-center gap-4'>
              <Button onClick={onClick}>{buttonText}</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
