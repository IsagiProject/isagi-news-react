import { Link } from 'react-router-dom'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import { useState } from 'react'
import { useAppSelector } from '../hooks/store.js'
import { likeSale } from '../services/sales.js'

export function Sale({ sale }) {
  const [likeVisible, setLikeVisible] = useState(false)
  const [like, setLike] = useState(Boolean(sale.user_liked))
  const token = useAppSelector((state) => state.token)
  const [likeCount, setLikeCount] = useState(sale.likes)

  const handleLike = async () => {
    if (!token) return
    setLikeVisible(true)
    setLike(!like)
    setLikeCount((prevCount) => (like ? prevCount - 1 : prevCount + 1))
    const likeChangedSuccessfully = await likeSale(
      { saleId: sale.sale_id, token },
      !like
    )
    if (!likeChangedSuccessfully) {
      setLike((prevLike) => !prevLike)
      setLikeCount((prevCount) => (like ? prevCount + 1 : prevCount - 1))
    }
    setTimeout(() => {
      setLikeVisible(false)
    }, 1000)
  }

  return (
    <div className='max-md:mx-0 max-md:flex-col bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-8 justify-start rounded-xl flex object-cover'>
      <div className='w-3/12 max-md:w-full relative' onClick={handleLike}>
        <img
          src={sale.image}
          className='h-44 max-md:mx-auto w-auto justify-start'
          alt=''
        />
        {likeVisible && (
          <div className='absolute top-0 left-0 bg-black bg-opacity-70 z-10 w-full h-44'>
            <div className='m-auto h-full flex flex-col justify-center items-center'>
              {like ? (
                <HiHeart className='h-3/5 text-7xl' />
              ) : (
                <HiOutlineHeart className='h-3/5 text-7xl' />
              )}
              <span className='text-2xl font-bold'>{likeCount}</span>
            </div>
          </div>
        )}
      </div>
      <div className='max-md:w-full flex flex-col w-9/12'>
        <div className='max-md:flex-col flex flex-row justify-between'>
          <h1 className='max-md:block max-md:ml-0 text-2xl text-slate-800 dark:text-slate-300 text-center ml-6 inline font-bold'>
            <Link to={`/sales/${sale.sale_id}`}>{sale.title}</Link>
          </h1>
          <h1 className='text-lg text-slate-800 dark:text-slate-300 text-center inline'>
            {sale.username}
          </h1>
        </div>
        <div>
          <p className='text-sm text-slate-800 dark:text-slate-300 text-left ml-6 my-6'>
            {sale.description}
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-sm  text-slate-800 dark:text-slate-300 text-left ml-6 mt-8'>
              {sale.shop}
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-xl text-slate-800 dark:text-slate-300 text-left ml-6 mt-8 font-bold'>
              {sale.new_price}€
            </p>
            <p className='text-lg text-slate-800 dark:text-slate-300 text-left ml-2 mt-8 line-through'>
              {sale.old_price}€
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
