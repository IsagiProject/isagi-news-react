import { NewsCards } from './NewsCards.jsx'
import { useEffect, useState } from 'react'
import { getNewsByCategories, getNewsCategories } from '../services/news.js'

export function Slider() {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    getNewsCategories().then((data) => {
      const types = data.map((item) => item.name)
      for (const type of types) {
        getNewsByCategories(type).then((data) => {
          setNewsList((prev) => {
            return [...prev, ...data]
          })
        })
      }
    })
  }, [])
  return (
    <div className='flex '>
      {newsList &&
        newsList.map((item) => <NewsCards news={item} key={item.news_id} />)}
    </div>
  )
}
