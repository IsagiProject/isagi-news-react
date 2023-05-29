import { Card } from 'flowbite-react'

export function SaleCard({ sale }) {
  return (
    <div className='w-1/5 max-lg:w-full'>
      <Card className='select-none m-3' imgSrc={sale.sale_id}>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {sale.title}
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          {sale.description}
        </p>
      </Card>
    </div>
  )
}
