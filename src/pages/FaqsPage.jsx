import Faqs from '../components/FAQs'
import { HiHome, HiCog } from 'react-icons/hi'
import { Breadcrumb } from 'flowbite-react'

export default function FaqsPage() {
  return (
    <div>
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-slate-100 py-3 px-36 text-slate-600 dark:text-slate-300 dark:bg-slate-500'
      >
        <Breadcrumb.Item href='/' className='hover:scale-105' icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href='/faq' className='hover:scale-105' icon={HiCog}>
          FAQs
        </Breadcrumb.Item>
      </Breadcrumb>
      <Faqs />
    </div>
  )
}
