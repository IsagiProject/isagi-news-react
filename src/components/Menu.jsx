import logo from '../assets/logo.png'
import { useAppSelector } from '../hooks/store'
import { useAuthActions } from '../hooks/useAuthActions'
import { useUserData } from '../hooks/useUserData'
import { DarkThemeToggle, Navbar, useThemeMode } from 'flowbite-react'
import { useStyleActions } from '../hooks/useStyleActions.js'
import NavbarItem from './navbar/NavbarItem.jsx'

export function Menu() {
  const token = useAppSelector((state) => state.token)
  const { removeToken } = useAuthActions()
  const { username } = useUserData(token)
  const { switchDarkMode } = useStyleActions()
  const [, , toggleMode] = useThemeMode()

  const handleLogout = () => {
    console.log('logout')
    removeToken()
  }

  const changeTheme = () => {
    switchDarkMode()
    toggleMode()
  }

  return (
    <Navbar>
      <Navbar.Brand href='/'>
        <img src={logo} className='mr-3 h-6 sm:h-9' alt='Isagi News Logo' />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Isagi News
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavbarItem to='/' text='Home' />
        <NavbarItem to='/news' text='Noticias' />
        <NavbarItem to='/sales' text='Ofertas' />
        <NavbarItem to='/faq' text='FAQ' />
        {token ? (
          <NavbarItem
            to=''
            text={`Cerrar sesion ${username}`}
            onClick={handleLogout}
          />
        ) : (
          <NavbarItem to='/login' text='Login' />
        )}
        <DarkThemeToggle onClick={changeTheme} />
      </Navbar.Collapse>
    </Navbar>
  )
}
