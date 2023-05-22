import { useEffect, useState } from 'react'
import { Spinner } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { getComments } from '../services/sales'
import { CommentsList } from './CommentsList'
import { CommentInput } from './CommentInput'
import { AiOutlineComment } from 'react-icons/ai'

export function NewsComments() {
  const { id } = useParams()
  const [total, setTotal] = useState()
  const [data, setData] = useState()
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    getComments({ newsId: id }).then(({ data, total }) => {
      setData(data)
      setTotal(total)
      setSpinner(false)
    })
  }, [])

  const updateComments = () => {
    const newData = [...data]
    setTotal(total + 1)
    setData(newData)
  }
  const addResponse = (response) => {
    data.unshift(response)
    updateComments()
  }

  return (
    <div className='bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-12 min-h-[5rem] justify-start rounded-xl flex object-cover text-slate-800 dark:text-slate-300 text-xl flex-col'>
      <div className='flex justify-between align-middle pb-6'>
        <h2 className='font-bold'>Comentarios:</h2>
        <div className='flex items-center'>
          <AiOutlineComment />
          {total}
        </div>
      </div>

    </div>
  )
}
