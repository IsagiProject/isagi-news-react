import { SaleComments } from '../components/SaleComments'
import { SaleDetail } from '../components/SaleDetail'
import { HiHome, HiShoppingBag, HiShoppingCart } from 'react-icons/hi'
import { Breadcrumb } from 'flowbite-react'
export function SaleDetailPage() {
  return (
    <div>
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-slate-100 py-3 px-36 text-slate-600 dark:text-slate-300 dark:bg-slate-500'
      >
        <Breadcrumb.Item href='/' className='hover:scale-105' icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href='/sales' className='hover:scale-105' icon={HiShoppingCart}>
          Ofertas
        </Breadcrumb.Item>
        <Breadcrumb.Item href='' className='hover:scale-105' icon={HiShoppingBag}>
          Oferta
        </Breadcrumb.Item>
      </Breadcrumb>
      <SaleDetail />
      <SaleComments />
    </div>
  )
}
