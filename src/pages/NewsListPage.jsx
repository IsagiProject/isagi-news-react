import { NewsSummary } from '../components/NewsSummary.jsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNewsByCategories } from '../services/news.js'
export function NewsListPage() {
  const { category } = useParams()
  const [data, setData] = useState()

  useEffect(() => {
    getNewsByCategories(category).then((news) => setData(news))
  }, [])
  return (
    <div>
      {data &&
        data.map((item) => <NewsSummary news={item} key={item.news_id} />)}
    </div>
  )
}
