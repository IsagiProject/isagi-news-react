import { Link } from 'react-router-dom'

export function Sale({ sale }) {
  return (
    <div className='bg-gray-700 p-8 mx-40 my-8 justify-start rounded-xl flex object-cover'>
      <div className='w-3/12'>
        <img src={sale.image} className='h-44 w-auto justify-start' alt='' />
      </div>
      <div className='flex flex-col w-9/12'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-2xl text-white text-center ml-6 inline font-bold'>
            <Link to='/sales/1'>{sale.title}</Link>
          </h1>
          <h1 className='text-lg text-white text-center inline'>
            {sale.username}
          </h1>
        </div>
        <div>
          <p className='text-sm text-white text-left ml-6 my-6'>
            {sale.description}
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-sm text-white text-left ml-6 mt-8'>
              {sale.shop}
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-xl text-white text-left ml-6 mt-8 font-bold'>
              {sale.new_price}€
            </p>
            <p className='text-lg text-white text-left ml-2 mt-8 line-through'>
              {sale.old_price}€
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
