import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { getFaq } from '../../services/faq'
import FaqRow from './FaqRow'

export default function Faq() {
  const [data, setData] = useState()
  useEffect(() => {
    getFaq().then((faq) => setData(faq))
  }, [])
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Pregunta</Table.HeadCell>
        <Table.HeadCell>Respuesta</Table.HeadCell>
        <Table.HeadCell>
          <span className='sr-only'>Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        {data &&
          data.map((item) => <FaqRow item={item} key={item.question_id} />)}
      </Table.Body>
    </Table>
  )
}
