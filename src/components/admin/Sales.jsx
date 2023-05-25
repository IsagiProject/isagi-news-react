import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/store'
import { getSales } from '../../services/sales'
import SalesRow from './SalesRow'

export default function Sales() {
  const token = useAppSelector((state) => state.token)
  const [data, setData] = useState()
  useEffect(() => {
    console.log('token', token)
    getSales({ token }).then((sales) => setData(sales))
  }, [])
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Titulo</Table.HeadCell>
        <Table.HeadCell>Creador</Table.HeadCell>
        <Table.HeadCell>Fecha</Table.HeadCell>
        <Table.HeadCell>Likes</Table.HeadCell>
        <Table.HeadCell>Comentarios</Table.HeadCell>
        <Table.HeadCell>
          <span className='sr-only'>Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data &&
          data.map((item) => <SalesRow key={item.sale_id} item={item} />)}
      </Table.Body>
    </Table>
  )
}
