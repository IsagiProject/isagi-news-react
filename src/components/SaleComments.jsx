import { useEffect, useState } from 'react'
import { Spinner } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { getComments } from '../services/sales'
import { CommentsList } from './CommentsList'
import { CommentInput } from './CommentInput'
import { AiOutlineComment } from 'react-icons/ai'

export function SaleComments() {
  const { id } = useParams()
  const [total, setTotal] = useState()
  const [data, setData] = useState()
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    getComments({ saleId: id }).then(({ data, total }) => {
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
    <div className='max-md:w-full max-md:mx-0 bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-12 min-h-[5rem] justify-start rounded-xl flex object-cover text-slate-800 dark:text-slate-300 text-xl flex-col'>
      <div className='flex justify-between align-middle pb-6'>
        <h2 className='font-bold'>Comentarios:</h2>
        <div className='flex items-center'>
          <AiOutlineComment />
          {total}
        </div>
      </div>

      <CommentInput addResponse={addResponse} data={data} id={id} visible />
      <div>
        {data && (
          <CommentsList updateComments={updateComments} comments={data} />
        )}
        {spinner && <Spinner aria-label='Default status example' />}
      </div>
    </div>
  )
}
