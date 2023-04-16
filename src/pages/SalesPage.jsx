import { useEffect, useState } from 'react'
import { Sale } from '../components/Sale.jsx'
import { HiHome, HiShoppingCart } from 'react-icons/hi'
import { Breadcrumb } from 'flowbite-react'
import { getSales } from '../services/sales.js'

export function SalesPage() {
  const [data, setData] = useState()

  useEffect(() => {
    getSales().then((sales) => setData(sales))
  }, [])

  return (
    <div>
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-slate-100 py-3 px-36 text-slate-600 dark:text-slate-300 dark:bg-slate-500'
      >
        <Breadcrumb.Item href='/' icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href='/sales' icon={HiShoppingCart}>
          Ofertas
        </Breadcrumb.Item>
      </Breadcrumb>
      {data && data.map((item) => <Sale sale={item} key={item.sale_id} />)}
    </div>
  )
}
