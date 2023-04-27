import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer.jsx'
import { Menu } from './components/Menu.jsx'
import { IndexPage } from './pages/IndexPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { NewsListPage } from './pages/NewsListPage.jsx'
import { NewsPage } from './pages/NewsPage.jsx'
import { RegisterPage } from './pages/RegisterPage.jsx'
import { SalesPage } from './pages/SalesPage.jsx'
import { SaleDetailPage } from './pages/SaleDetailPage.jsx'
import React from 'react'
import { Flowbite } from 'flowbite-react'
import { useAppSelector } from './hooks/store.js'
import FaqsPage from './pages/FaqsPage.jsx'
import MenuBreadcrumb from './components/breadcrumbs/MenuBreadcrumb.jsx'
import ResetPasswordPage from './pages/ResetPasswordPage.jsx'

export function App() {
  const dark = useAppSelector((state) => state.style.dark)

  return (
    <Flowbite theme={{ dark }}>
      <div className='flex flex-col min-h-[101vh]'>
        <Menu />
        <div className='w-5/6 m-auto mt-2 flex-1'>
          <MenuBreadcrumb />
          <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/news/:category' element={<NewsListPage />} />
            <Route path='/sales' element={<SalesPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/sales/:id' element={<SaleDetailPage />} />
            <Route path='/faq' element={<FaqsPage />} />
            <Route path='/reset-password' element={<ResetPasswordPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Flowbite>
  )
}
