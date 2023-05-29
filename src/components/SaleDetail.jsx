import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSaleDetail } from '../services/sales'

export function SaleDetail() {
  const { id } = useParams()
  const [data, setData] = useState()
  useEffect(() => {
    getSaleDetail({ saleId: id }).then((sale) => {
      sale.created_at = new Date(
        sale.created_at.replace('Z', '')
      ).toLocaleDateString()
      setData(sale)
    })
  }, [])

  return data ? (
    <div className='max-md:mx-0 max-md:flex-col bg-slate-300  dark:bg-slate-700  text-slate-800 dark:text-slate-300 p-8 mx-40 my-12 justify-start rounded-xl flex flex-col object-cover h-full'>
      <div className='flex max-md:flex-col '>
        <div className='w-4/12 max-md:w-full'>
          <img
            src={data.image}
            className='h-min-[4rem] w-auto justify-start max-md:mx-auto'
            alt=''
          />
        </div>

        <div className='flex flex-col justify-between max-md:ml-0 ml-6 w-2/3 max-md:w-full'>
          <div className='flex max-md:flex-col justify-between'>
            <h1 className=' max-md:block max-md:ml-0 text-2xl text-slate-800 dark:text-slate-300 text-left max-md:text-center inline font-bold cursor-pointer'>
              {data.title}
            </h1>
            <span className='ml-4 text-sm'>{data.created_at}</span>
          </div>
          <div className='flex flex-row m-auto'>
            <p className='m-2 mb-4 text-5xl text-slate-800 dark:text-slate-300 text-left font-bold'>
              {data.new_price} €
            </p>
            <p className='m-2 mb-4 text-3xl text-slate-800 dark:text-slate-300 line-through'>
              {data.old_price} €
            </p>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div className='flex flex-row justify-start'>
              <p className='text-sm text-slate-800 dark:text-slate-300 text-left m-auto pb-3'>
                {data.shop}
              </p>
            </div>
            <div className='bg-slate-700 text-slate-900 dark:text-slate-300 dark:bg-slate-400 p-6 rounded-md hover:bg-slate-400 dark:hover:bg-slate-800 transition duration-200 flex items-center mb-0 h-1/2 max-md:p-3 my-auto text-xl font-bold'>
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
