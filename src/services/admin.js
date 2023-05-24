export const getUsers = async ({ token }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const editUsers = async ({ token, id, username, email, blocked, admin }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/users/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, blocked, admin })
  })
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const deleteUser = async ({ token, id }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/users/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .then(({ data }) => data)
}
