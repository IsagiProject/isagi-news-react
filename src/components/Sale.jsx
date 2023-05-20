import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export function Sale({ sale }) {
  useEffect(() => {
    const date = new Date(sale.created_at.replace('Z', ''))
    setDate(date.toLocaleDateString())
  }, [])
  const [date, setDate] = useState()

  return (
    <div className='max-lg:mx-30 max-lg:mx-0 max-lg:flex-col bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-8 justify-start rounded-xl flex object-cover'>
      <div className='w-3/12 max-lg:w-full'>
        <img
          src={sale.image}
          className='h-44 max-lg:mx-auto w-auto justify-start'
          alt=''
        />
      </div>
      <div className='max-lg:w-full flex flex-col w-9/12'>
        <div className='max-lg:flex-col flex flex-row justify-between'>
          <h1 className='max-lg:block max-lg:ml-0 text-2xl text-slate-800 dark:text-slate-300 text-center ml-6 inline font-bold'>
            <Link to={`/sales/${sale.sale_id}`}>
              {sale.title} <span className='ml-4 text-sm'>{date}</span>
            </Link>
          </h1>
          <h1 className='text-lg text-slate-800 dark:text-slate-300 text-center inline'>
            {sale.username}
          </h1>
        </div>
        <div>
          <p className='text-sm text-slate-800 dark:text-slate-300 text-left ml-6 my-6'>
            {sale.description}
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-sm  text-slate-800 dark:text-slate-300 text-left ml-6 mt-8'>
              {sale.shop}
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-xl text-slate-800 dark:text-slate-300 text-left ml-6 mt-8 font-bold'>
              {sale.new_price}€
            </p>
            <p className='text-lg text-slate-800 dark:text-slate-300 text-left ml-2 mt-8 line-through'>
              {sale.old_price}€
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
