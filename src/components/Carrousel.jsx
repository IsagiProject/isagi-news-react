import { Carousel } from 'flowbite-react'
import '../styles/carrousel.css'
import { useEffect, useState } from 'react'
import { getNewsSummary } from '../services/news.js'

export function Carrousel() {
  const [news, setNews] = useState()
  useEffect(() => {
    getNewsSummary().then((data) => {
      setNews(data)
    })
  }, [])

  return (
    <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel slideInterval={5000}>
        {news &&
          news.map((item) => <img key={item.news_id} src={item.image} />)}
      </Carousel>
    </div>
  )
}
