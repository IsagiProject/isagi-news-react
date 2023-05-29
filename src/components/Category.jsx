import { Link } from 'react-router-dom'

export function Category({ category }) {
  return (
    <li
      className='h-11/12 w-2/5 my-4 pb-4 px-8 mx-2  bg-slate-500 min-w-[20%] rounded-md hover:scale-110 transition duration-500 bg'
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      id='categoria'
    >
      <Link
        className='inline-block w-full h-full pt-3 pb-5 text-gray-300 font-bold text-center text-3xl'
        to={`/news/${category.name}`}
      >
        {category.name}
      </Link>
    </li>
  )
}
