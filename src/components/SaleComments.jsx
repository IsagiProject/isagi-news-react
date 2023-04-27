import { useEffect, useState } from 'react'
import { Spinner } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { getComments } from '../services/sales'
import { CommentsList } from './CommentsList'
import { CommentInput } from './CommentInput'

export function SaleComments() {
  const { id } = useParams()
  const [data, setData] = useState()
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    getComments({ saleId: id }).then((comments) => {
      setData(comments)
      setSpinner(false)
    })
  }, [])

  const updateComments = () => {
    const newData = [...data]
    setData(newData)
  }
  const addResponse = (response) => {
    data.unshift(response)
    updateComments()
  }

  return (
    <div className='bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-12 min-h-[5rem] justify-start rounded-xl flex object-cover text-slate-800 dark:text-slate-300 text-xl flex-col'>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
      />
      <h2 className='pb-6 font-bold'>Comentarios:</h2>

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
