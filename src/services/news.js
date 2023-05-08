export const getNewsCategories = async () => {
  return fetch(`${import.meta.env.VITE_API_URL}/news/types`)
    .then((res) => res.json())
    .then(({ data }) => data)
}
export const getNewsByCategories = async (type) => {
  return fetch(`${import.meta.env.VITE_API_URL}/news/types/${type}`)
    .then((res) => res.json())
    .then(({ data }) => data)
}
