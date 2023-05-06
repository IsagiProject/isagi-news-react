export const getFaq = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/faq`)
    .then((res) => res.json())
    .then(({ data }) => data)
}
