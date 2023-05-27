import { Tabs } from 'flowbite-react'
import Users from '../components/admin/Users'
import Sales from '../components/admin/Sales'
import Faq from '../components/admin/Faq'
import News from '../components/admin/News'

export default function AdminPage() {
  return (
    <div className='bg-slate-400 w-5/6 m-auto dark:bg-slate-700 p-12 my-8 justify-center rounded-lg max-md:w-full'>
      <div className='m-auto'>
        <Tabs.Group aria-label='Tabs with underline' style='underline'>
          <Tabs.Item active title='Usuarios'>
            <h2 className='text-1xl font-bold text-center mb-4'>
              Ver perfiles
            </h2>
            <Users />
          </Tabs.Item>
          <Tabs.Item title='Ofertas'>
            <h2 className='text-1xl font-bold text-center mb-4'>
              Ver estadisticas
            </h2>
            <Sales />
          </Tabs.Item>
          <Tabs.Item title='Noticias'>
            <h2 className='text-1xl font-bold text-center mb-4'>
              Añadir / Quitar noticias
            </h2>
            <News />
          </Tabs.Item>
          <Tabs.Item title='FAQ'>
            <h2 className='text-1xl font-bold text-center mb-4'>
              Añadir / Quitar preguntas
            </h2>
            <Faq />
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  )
}
