import { HiHome } from 'react-icons/hi'
import { Breadcrumb } from 'flowbite-react'
import Faqlist from './faqlits'
export default function Faqs() {
  return (
    <>
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-gray-50 py-3 px-5 dark:bg-gray-900'
      >
        <Breadcrumb.Item href='/' icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>FAQs</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <Faqlist />
      </div>
    </>
  )
}
