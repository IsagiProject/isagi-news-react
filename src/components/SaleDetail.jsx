import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSaleDetail } from '../services/sales'

export function SaleDetail() {
  const { id } = useParams()
  const [data, setData] = useState()
  useEffect(() => {
    getSaleDetail({ saleId: id }).then((sale) => setData(sale))
  }, [])
  return data ? (
    <div className='bg-slate-300  dark:bg-slate-700  text-slate-800 dark:text-slate-300 p-8 mx-40 my-12 justify-start rounded-xl flex flex-col object-cover h-full'>
      <div className='flex'>
        <div className='w-4/12'>
          <img
            src={data.image}
            className='h-min-[4rem] w-auto justify-start'
            alt=''
          />
        </div>

        <div className='flex flex-col justify-between ml-6 w-2/3'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-2xl text-slate-800 dark:text-slate-300 text-left inline font-bold cursor-pointer'>
              {data.title}
            </h1>
          </div>
          <div className='flex flex-row m-auto'>
            <p className='text-5xl text-slate-800 dark:text-slate-300 text-left font-bold'>
              {data.old_price} €
            </p>
            <p className='text-3xl text-slate-800 dark:text-slate-300 line-through'>
              {data.new_price} €
            </p>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div className='flex flex-row justify-start'>
              <p className='text-sm text-slate-800 dark:text-slate-300 text-left m-auto pb-3'>
                {data.shop}
              </p>
            </div>
            <div className='bg-slate-700 text-slate-900 dark:text-slate-300 dark:bg-slate-400 p-6 rounded-md hover:bg-slate-400 dark:hover:bg-slate-800 transition duration-200 flex items-center mb-0 h-1/2 my-auto text-xl font-bold'>
              <button>
                <a href={data.link}>Ir a la oferta</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-end'>
        <h2 className='py-6 text-xl font-bold'>Descripción:</h2>
        <p className='text-sm text-slate-800 dark:text-slate-300 text-left pb-6'>
          {data.description}
        </p>
        <p className='text-lg text-slate-800 dark:text-slate-300 dark:text-slate-300inline text-left self-end'>
          {data.username}
        </p>
      </div>
    </div>
  ) : null
}
