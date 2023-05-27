import { Alert } from 'flowbite-react'

export default function SuccessAlert({ bold, text }) {
  return (
    <Alert color='success'>
      <span>
        <span className='font-medium'>{bold}</span> {text}
      </span>
    </Alert>
  )
}
