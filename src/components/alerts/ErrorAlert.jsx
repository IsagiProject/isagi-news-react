import { Alert } from 'flowbite-react'

export default function ErrorAlert({ bold, text }) {
  return (
    <Alert color='failure'>
      <span>
        <span className='font-medium'>{bold}</span> {text}
      </span>
    </Alert>
  )
}
