import { Breadcrumb } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

export default function BreadcrumbItem({ link, text, icon }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
  }

  return (
    <Breadcrumb.Item
      onClick={handleClick}
      className='hover:scale-105'
      icon={icon}
    >
      {text}
    </Breadcrumb.Item>
  )
}
