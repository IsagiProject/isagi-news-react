import { Navbar } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
export default function NavbarItem({ to, text }) {
  const navigate = useNavigate()
  //if path matches current path, add active

  const handleClick = () => {
    navigate(to)
  }
  return (
    <Navbar.Link className='md:my-4 cursor-pointer' onClick={handleClick}>
      {text}
    </Navbar.Link>
  )
}
