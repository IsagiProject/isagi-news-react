import { Label, TextInput } from 'flowbite-react'
import { useSearchParams } from 'react-router-dom'

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const handleFormSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <h1>ResetPasswordPage</h1>
      <form
        className='flex flex-col gap-4 w-1/2 m-auto'
        onSubmit={handleFormSubmit}
      >
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password'>Contrasena</Label>
          </div>
          <TextInput
            type='password'
            name='password'
            label='Contraseña'
            required
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password1' value='Your password' />
          </div>
          <TextInput id='password1' type='password' required />
        </div>
      </form>
      <p>{searchParams.get('email')}</p>
      <p>{searchParams.get('token')}</p>
    </div>
  )
}
