import { NewsSummary } from '../components/NewsSummary.jsx'
import { useEffect, useState } from 'react'
import { HiHome, HiNewspaper, HiStar } from 'react-icons/hi'
import { Breadcrumb } from 'flowbite-react'
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
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-slate-100 py-3 px-36  text-slate-600 dark:text-slate-300 dark:bg-slate-500'
      >
        <Breadcrumb.Item href='/' className='hover:scale-105' icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href='/news' className='hover:scale-105' icon={HiNewspaper}>
          Noticiero
        </Breadcrumb.Item>
        <Breadcrumb.Item href='' className='hover:scale-105' icon={HiStar}>
          Noticias
        </Breadcrumb.Item>
      </Breadcrumb>
      {data &&
        data.map((item) => <NewsSummary news={item} key={item.news_id} />)}
    </div>
  )
}
