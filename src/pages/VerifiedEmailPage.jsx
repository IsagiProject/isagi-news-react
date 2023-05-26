import { useEffect, useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

export default function VerifiedEmailPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setVerified(true)
        } else {
          setError(true)
        }
      })
      .catch((error) => console.error(error))
  }, [token])
  return (
    <div>
      {verified && <Navigate to='/login' />}
      {error && <Navigate to='/register' />}
    </div>
  )
}
