import logo from '../assets/logo.png'
import { useAppSelector } from '../hooks/store'
import { useAuthActions } from '../hooks/useAuthActions'
import { useUserData } from '../hooks/useUserData'
import { Dropdown, Navbar, useThemeMode } from 'flowbite-react'
import { useStyleActions } from '../hooks/useStyleActions.js'
import NavbarItem from './navbar/NavbarItem.jsx'
import { HiUserCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export function Menu() {
  const token = useAppSelector((state) => state.token)
  const { removeToken } = useAuthActions()
  const { username, email } = useUserData(token)
  const { switchDarkMode } = useStyleActions()
  const [, , toggleMode] = useThemeMode()
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('logout')
    removeToken()
  }

  const handleLogin = () => {
    navigate('/login')
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

      <div className='flex md:order-2 h-4/5'>
        <Dropdown
          inline
          arrowIcon={false}
          label={<HiUserCircle className='text-4xl' />}
        >
          {token ? (
            <>
              <Dropdown.Header>
                <span className='block text-sm'>{username}</span>
                <span className='block truncate text-sm font-medium'>
                  {email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Ofertas favoritas</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={changeTheme}>Cambiar modo</Dropdown.Item>

              <Dropdown.Item onClick={handleLogout}>
                Cerrar sesion
              </Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Item onClick={changeTheme}>Cambiar modo</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogin}>Login</Dropdown.Item>
            </>
          )}
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavbarItem to='/' text='Home' />
        <NavbarItem to='/news' text='Noticias' />
        <NavbarItem to='/sales' text='Ofertas' />
        <NavbarItem to='/faq' text='FAQ' />
      </Navbar.Collapse>
    </Navbar>
  )
}
