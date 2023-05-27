import { Table } from 'flowbite-react'
import { useAppSelector } from '../../hooks/store'
import { useState } from 'react'
import { deleteNews } from '../../services/admin'

export default function NewsRow({ item }) {
  const token = useAppSelector((state) => state.token)
  const [edit, setEdit] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const handleDelete = () => {
    deleteNews({
      id: item.news_id,
      token
    }).then(() => setDeleted(true))
  }
  const handleEditButton = () => {
    setEdit(!edit)
  }
  return (
    <Table.Row
      key={item.user_id}
      className={`bg-white dark:border-gray-700 dark:bg-gray-800 ${
        deleted ? 'hidden' : ''
      }`}
    >
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
        {item.news_id}
      </Table.Cell>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.link}</Table.Cell>
      <Table.Cell>{item.publishedAt.slice(0, 10)}</Table.Cell>
      <Table.Cell>
        <p
          onClick={handleEditButton}
          className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
        >
          {edit ? 'Cancel' : 'Edit'}
        </p>
        {edit && (
          <p
            onClick={handleDelete}
            className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
          >
            Delete
          </p>
        )}
      </Table.Cell>
    </Table.Row>
  )
}
