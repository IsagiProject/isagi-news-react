export const getUsers = async ({ token }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const editUsers = async ({
  token,
  id,
  username,
  email,
  blocked,
  admin
}) => {
  console.log('editUsers', token, id, username, email, blocked, admin)
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
export const editFaq = async ({ token, id, question, answer }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/faq/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question, answer })
  })
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const editSale = async ({ token, id, title }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/sales/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const deleteSale = async ({ token, id }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/sales/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
export const deleteFaq = async ({ token, id }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/faq/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
export const deleteNews = async ({ token, id }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/admin/news/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
