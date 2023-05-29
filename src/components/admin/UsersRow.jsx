import { Button, Checkbox, Table, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { editUsers } from '../../services/admin'
import { useAppSelector } from '../../hooks/store'

export default function UsersRow({ item, handleReset }) {
  const token = useAppSelector((state) => state.token)
  const [edit, setEdit] = useState(false)
  const [username, setUsername] = useState(item.username)
  const [email, setEmail] = useState(item.email)
  const [emailVerified, setEmailVerified] = useState(
    Boolean(item.email_verified_at)
  )
  const [admin, setAdmin] = useState(item.admin)
  const [blocked, setBlocked] = useState(item.blocked)
  const [usernameBack, setUsernameBack] = useState(item.username)
  const [emailBack, setEmailBack] = useState(item.email)
  const [emailVerifiedBack, setEmailVerifiedBack] = useState(
    Boolean(item.email_verified_at)
  )
  const [adminBack, setAdminBack] = useState(item.admin)
  const [blockedBack, setBlockedBack] = useState(item.blocked)
  const handleEdit = () => {
    editUsers({
      id: item.user_id,
      username,
      email,
      admin,
      blocked,
      token
    })
      .then(() => setEdit(false))
      .catch((err) => console.log(err))
  }
  const handleCancel = () => {
    setUsername(usernameBack)
    setEmail(emailBack)
    setEmailVerified(emailVerifiedBack)
    setAdmin(adminBack)
    setBlocked(blockedBack)
  }
  const handleEnterEdit = () => {
    setUsernameBack(username)
    setEmailBack(email)
    setEmailVerifiedBack(emailVerified)
    setAdminBack(admin)
    setBlockedBack(blocked)
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
      className='bg-white dark:border-gray-700 dark:bg-gray-800'
    >
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
        {edit ? (
          <TextInput
            onInput={(e) => setUsername(e.target.value)}
            value={username}
          />
        ) : (
          username
        )}
      </Table.Cell>
      <Table.Cell>
        {edit ? (
          <TextInput onInput={(e) => setEmail(e.target.value)} value={email} />
        ) : (
          email
        )}
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          checked={emailVerified}
          readOnly={!edit}
          onClick={() => false}
        />
      </Table.Cell>
      <Table.Cell>
        <Button color='dark' onClick={() => handleReset(item.user_id)}>
          Reset
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          checked={admin}
          readOnly={!edit}
          onClick={() => edit && setAdmin((a) => (a === 0 ? 1 : 0))}
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          checked={blocked}
          readOnly={!edit}
          onClick={() => edit && setBlocked(!blocked)}
        />
      </Table.Cell>
      <Table.Cell>
        <p
          onClick={handleEditButton}
          className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
        >
          {edit ? 'Cancelar' : 'Editar'}
        </p>
        {edit && (
          <p
            onClick={handleEdit}
            className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
          >
            Guardar
          </p>
        )}
      </Table.Cell>
    </Table.Row>
  )
}
