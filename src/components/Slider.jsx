import { NewsCards } from './NewsCards.jsx'
import { useEffect, useState } from 'react'
import { getNewsSummary } from '../services/news.js'
import { getSalesSummary } from '../services/sales.js'
import { SaleCard } from './SaleCard.jsx'

export function Slider() {
  const [newsList, setNewsList] = useState([])
  const [salesList, setSalesList] = useState([])
  useEffect(() => {
    getSalesSummary().then((data) => {
      setSalesList(data)
    })
    getNewsSummary().then((data) => {
      setNewsList(data)
    })
  }, [])
  return (
    <>
      <h2 className='text-3xl font-bold mx-auto my-8'>Ultimas noticias</h2>
      <div className='flex max-lg:flex-col'>
        {newsList &&
          newsList.map((item) => <NewsCards news={item} key={item.news_id} />)}
      </div>
      <h2 className='text-3xl font-bold mx-auto my-8'>Ultimas ofertas</h2>
      <div className='flex max-lg:flex-col'>
        {salesList &&
          salesList.map((item) => <SaleCard sale={item} key={item.sale_id} />)}
      </div>
    </>
  )
}
