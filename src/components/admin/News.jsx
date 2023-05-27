import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/store'
import { Table } from 'flowbite-react'
import NewsRow from './NewsRow'
import { getNews } from '../../services/news'

export default function News() {
  const token = useAppSelector((state) => state.token)
  const [data, setData] = useState()
  useEffect(() => {
    console.log('token', token)
    getNews({ token }).then((news) => setData(news))
  }, [])
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Titulo</Table.HeadCell>
        <Table.HeadCell>Link</Table.HeadCell>
        <Table.HeadCell>Fecha</Table.HeadCell>
        <Table.HeadCell>
          <span className='sr-only'>Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data && data.map((item) => <NewsRow key={item.news_id} item={item} />)}
      </Table.Body>
    </Table>
  )
}
