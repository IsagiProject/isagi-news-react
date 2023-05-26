export const changePasswordRecover = async ({ email, token, password }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/recover`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, token, password })
  })
  const json = await response.json()
  return json.status
}

export const isTokenValid = async (token) => {
  if (!token) return false
  console.log(`${import.meta.env.VITE_API_URL}`)
  return fetch(`${import.meta.env.VITE_API_URL}/auth/token/validate`, {
    method: 'POST',
    body: JSON.stringify({ token }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      return data.isTokenValid
    })
}
