export const getNewsCategories = async () => {
  return fetch('http://isagiapi.galder315.ga/news/types')
    .then((res) => res.json())
    .then(({ data }) => data)
}
