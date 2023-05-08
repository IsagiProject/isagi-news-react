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
