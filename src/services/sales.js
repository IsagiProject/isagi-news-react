export const getSales = async () => {
  return fetch(`${import.meta.env.VITE_API_URL}/sales`)
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const sendComment = async ({ token, comment, saleId, parentId }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/sales/${saleId}/comments`, {
    cors: 'no-cors',
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ comment, parentId })
  })
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const getComments = async ({ saleId }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/sales/${saleId}/comments`)
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const getSaleDetail = async ({ saleId }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/sales/${saleId}`)
    .then((res) => res.json())
    .then(({ data }) => data)
}
