import { matchPath, useLocation } from 'react-router-dom'
import BreadcrumbItem from './BreadcrumbItem.jsx'
import {
  HiCog,
  HiHome,
  HiNewspaper,
  HiShoppingBag,
  HiShoppingCart,
  HiStar,
  HiUser,
  HiUserAdd
} from 'react-icons/hi'
import { Breadcrumb } from 'flowbite-react'

export default function MenuBreadcrumb() {
  const location = useLocation()
  const path = location.pathname.split('/')

  return (
    <Breadcrumb className='max-md:px-0 bg-slate-100 py-3 px-36  text-slate-600 dark:text-slate-300 dark:bg-slate-500'>
      <BreadcrumbItem icon={HiHome} text='Home' link='/' />

      {/* News */}
      {matchPath(
        {
          path: '/news/*',
          exact: false
        },
        location.pathname
      ) && <BreadcrumbItem icon={HiNewspaper} text='Noticiero' link='/news' />}
      {matchPath(
        {
          path: '/news/:category/*'
        },
        location.pathname
      ) && <BreadcrumbItem icon={HiStar} text={path[path.length - 1]} />}

      {/* Sales */}
      {matchPath(
        {
          path: '/sales/*'
        },
        location.pathname
      ) && (
        <BreadcrumbItem icon={HiShoppingCart} text='Ofertas' link='/sales' />
      )}
      {matchPath(
        {
          path: '/sales/:id/*'
        },
        location.pathname
      ) && <BreadcrumbItem icon={HiShoppingBag} text='Oferta' />}

      {/* FAQ */}
      {matchPath(
        {
          path: '/faq/*'
        },
        location.pathname
      ) && <BreadcrumbItem icon={HiCog} text='FAQ' link='/faq' />}

      {/* Login */}
      {matchPath(
        {
          path: '/login/*'
        },
        location.pathname
      ) && <BreadcrumbItem icon={HiUser} text='Login' link='/login' />}

      {/* Register */}
      {matchPath(
        {
          path: '/register/*'
        },
        location.pathname
      ) && (
        <BreadcrumbItem icon={HiUserAdd} text='Registrarse' link='/register' />
      )}
    </Breadcrumb>
  )
}
