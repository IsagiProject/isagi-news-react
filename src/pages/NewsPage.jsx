import { useEffect, useState } from 'react'
import { Category } from '../components/Category.jsx'
import { getNewsCategories } from '../services/news.js'

export function NewsPage() {
  const [data, setData] = useState()

  useEffect(() => {
    getNewsCategories().then((categories) => setData(categories))
  }, [])

  return (
    <div className='m-auto w-5/6 h-5/6 justify-center'>
      <h1 className='text-5xl text-slate-800 font-bold my-3 dark:text-slate-300 text-center'>
        Nuestras Noticias
      </h1>
      <div>
        <ul className='bg-slate-300 dark:bg-gray-700 w-11/12 h-5/6 p-4 flex-wrap flex justify-around rounded-lg ml-7 mb-6'>
          {data &&
            data.map((item) => <Category category={item} key={item.type_id} />)}
        </ul>
      </div>
    </div>
  )
}
