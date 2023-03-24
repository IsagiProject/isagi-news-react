import { Link } from 'react-router-dom'

export function Category({ category }) {
  return (
    <li
      className='h-20 my-3 px-8 pl-3 bg-slate-500 w-auto rounded-md hover:scale-110 transition duration-500 bg'
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      id='categoria'
    >
      <Link
        className='inline-block w-full h-full py-5 text-gray-300 text-3xl'
        to='/news/list'
      >
        {category.name}
      </Link>
    </li>
  )
}
