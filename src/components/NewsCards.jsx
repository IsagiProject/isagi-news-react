import { Card } from 'flowbite-react'

export function NewsCards({ news }) {
  return (
    <div className='w-1/3 max-lg:w-full'>
      <Card className='select-none m-3' imgSrc={news.news_id}>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {news.title}
        </h5>
        <p
          className='font-normal text-gray-700 dark:text-gray-400'
          dangerouslySetInnerHTML={{ __html: news.text }}
        />
      </Card>
    </div>
  )
}
