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
import React, { useEffect } from 'react'
import { Flowbite } from 'flowbite-react'
import { useAppSelector } from './hooks/store.js'
import FaqsPage from './pages/FaqsPage.jsx'
import MenuBreadcrumb from './components/breadcrumbs/MenuBreadcrumb.jsx'
import ResetPasswordPage from './pages/ResetPasswordPage.jsx'
import { isTokenValid } from './services/auth.js'
import { useAuthActions } from './hooks/useAuthActions.js'
import NewSalePage from './pages/NewSalePage.jsx'
import LikedSalesPage from './pages/LikedSalesPage.jsx'

export function App() {
  const { removeToken } = useAuthActions()
  const dark = useAppSelector((state) => state.style.dark)
  const token = useAppSelector((state) => state.token)
  useEffect(() => {
    console.log(token)
    const validateToken = async () => {
      const valid = await isTokenValid(token)
      if (!valid) {
        console.log('token invalido')
        removeToken()
      }
    }

    validateToken()
  }, [])

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
            <Route path='/sales/new' element={<NewSalePage />} />
            <Route path='/faq' element={<FaqsPage />} />
            <Route path='/sales/liked' element={<LikedSalesPage />} />
            <Route path='/reset-password' element={<ResetPasswordPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Flowbite>
  )
}
