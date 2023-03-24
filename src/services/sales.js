export const getSales = async () => {
  return fetch('http://isagiapi.galder315.ga/sales')
    .then((res) => res.json())
    .then(({ data }) => data)
}
