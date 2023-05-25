import { Table } from 'flowbite-react'
import { getUsers } from '../../services/admin'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/store'
import UsersRow from './UsersRow'
import ResetUser from '../modal/ResetUser'

export default function Users() {
  const token = useAppSelector((state) => state.token)
  const [data, setData] = useState()
  const [showReset, setShowReset] = useState(false)
  const [userId, setUserId] = useState()
  useEffect(() => {
    getUsers({ token }).then((users) => setData(users))
  }, [])
  const handleReset = (userId) => {
    setUserId(userId)
    setShowReset(true)
  }
  const handleResetClose = () => {
    setShowReset(false)
  }

  return (
    <>
      <ResetUser show={showReset} userId={userId} onClose={handleResetClose} />
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Usuario</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Verificado</Table.HeadCell>
          <Table.HeadCell>Reset</Table.HeadCell>
          <Table.HeadCell>Permisos</Table.HeadCell>
          <Table.HeadCell>Bloqueado</Table.HeadCell>
          <Table.HeadCell>
            <span className='sr-only'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {data &&
            data.map((item) => (
              <UsersRow
                handleReset={handleReset}
                item={item}
                key={item.user_id}
              />
            ))}
        </Table.Body>
      </Table>
    </>
  )
}
