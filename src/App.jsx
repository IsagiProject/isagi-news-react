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

export function App() {
  return (
    <div className='flex flex-col min-h-[101vh]'>
      <Menu />
      <div className='w-5/6 m-auto mt-2 flex-1'>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/news/:category' element={<NewsListPage />} />
          <Route path='/sales' element={<SalesPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/sales/:id' element={<SaleDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
