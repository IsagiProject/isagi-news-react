import { Table, TextInput } from 'flowbite-react'
import { useAppSelector } from '../../hooks/store'
import { useState } from 'react'
import { deleteSale, editSale } from '../../services/admin'

export default function SalesRow({ item }) {
  const token = useAppSelector((state) => state.token)
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState(item.title)
  const [titleBack, setTitleBack] = useState(item.title)
  const [deleted, setDeleted] = useState(false)
  const handleEdit = () => {
    editSale({
      id: item.sale_id,
      title,
      token
    })
      .then(() => setEdit(false))
      .catch((err) => console.log(err))
  }
  const handleDelete = () => {
    deleteSale({
      id: item.sale_id,
      token
    }).then(() => setDeleted(true))
  }
  const handleCancel = () => {
    setTitle(titleBack)
  }
  const handleEnterEdit = () => {
    setTitleBack(title)
  }
  const handleEditButton = () => {
    if (edit) {
      handleCancel()
    } else {
      handleEnterEdit()
    }
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
        {item.sale_id}
      </Table.Cell>
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
        {edit ? (
          <TextInput onInput={(e) => setTitle(e.target.value)} value={title} />
        ) : (
          title
        )}
      </Table.Cell>
      <Table.Cell>{item.username}</Table.Cell>
      <Table.Cell>{item.created_at.slice(0, 10)}</Table.Cell>
      <Table.Cell>{item.likes}</Table.Cell>
      <Table.Cell>{item.comments}</Table.Cell>
      <Table.Cell>
        <p
          onClick={handleEditButton}
          className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
        >
          {edit ? 'Cancel' : 'Edit'}
        </p>
        {edit && (
          <>
            <p
              onClick={handleEdit}
              className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
            >
              Save
            </p>
            <p
              onClick={handleDelete}
              className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
            >
              Delete
            </p>
          </>
        )}
      </Table.Cell>
    </Table.Row>
  )
}
