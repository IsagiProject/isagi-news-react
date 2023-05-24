import { Checkbox, Table } from 'flowbite-react'

export default function Faq() {
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell className='!p-4'>
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>Pregunta</Table.HeadCell>
        <Table.HeadCell>Respuesta</Table.HeadCell>
        <Table.HeadCell>
          <span className='sr-only'>Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
            Apple MacBook Pro 17"
          </Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>
            <a
              href='/tables'
              className='font-medium text-blue-600 hover:underline dark:text-blue-500'
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
            Microsoft Surface Pro
          </Table.Cell>
          <Table.Cell>White</Table.Cell>
          <Table.Cell>
            <a
              href='/tables'
              className='font-medium text-blue-600 hover:underline dark:text-blue-500'
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>Black</Table.Cell>
          <Table.Cell>
            <a
              href='/tables'
              className='font-medium text-blue-600 hover:underline dark:text-blue-500'
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
