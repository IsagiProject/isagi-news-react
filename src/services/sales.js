export const getSales = async () => {
  return fetch('http://isagiapi.galder315.ga/sales')
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const sendComment = async ({ token, comment, saleId }) => {
  fetch(`https://isagiapi.galder315.ga/sales/${saleId}/comments`, {
    cors: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ comment })
  })
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const getComments = async ({ saleId }) => {
  return fetch(`http://isagiapi.galder315.ga/sales/${saleId}/comments`)
    .then((res) => res.json())
    .then(({ data }) => data)
}
