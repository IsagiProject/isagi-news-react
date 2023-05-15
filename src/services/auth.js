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
