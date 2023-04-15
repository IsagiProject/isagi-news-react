import { Accordion } from 'flowbite-react'

export default function Faqlist() {
  return (
    <>
      <h1 className=' text-slate-200 text-center font-bold my-5 text-4xl'>
        Lista de Preguntas
      </h1>
      <Accordion className='w-8/12 mx-auto bg-gray-800' alwaysOpen>
        <Accordion.Panel>
          <Accordion.Title>¿A qué nos dedicamos?</Accordion.Title>
          <Accordion.Content>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis excepturi eveniet ducimus facilis sapiente dolore harum
              illo aperiam, quae laborum impedit totam tenetur molestias
              deserunt ex corporis, quam nihil architecto.
            </p>
            <p className='text-gray-500 dark:text-gray-400'>
              Disfruta de nuestro contenido en nuestra
              <a
                href='/'
                className='text-blue-600 mx-1 hover:underline dark:text-blue-500'
              >
                pagina de inicio
              </a>
              y disfruta de las mejores noticias y ofertas relacionadas cn el
              mundo de las tecnologias y videojuegos
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>¿Cual es nuestro proposito?</Accordion.Title>
          <Accordion.Content>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              tempora quos quae obcaecati, nesciunt, non corporis sapiente ullam
              alias numquam nisi suscipit accusamus delectus ex minus, ut
              maiores placeat amet.
            </p>
            {/* <p className='text-gray-500 dark:text-gray-400'>
              Check out the
              <a
                href='https://flowbite.com/figma/'
                className='text-blue-600 hover:underline dark:text-blue-500'
              >
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
             </p> */}
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            ¿De dónde sacamos nuestras noticias?
          </Accordion.Title>
          <Accordion.Content>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi et voluptatibus velit, incidunt adipisci blanditiis illum obcaecati, sed ullam sequi, explicabo praesentium aspernatur dolore aliquid ducimus voluptas reiciendis. Ea, ipsum!
            </p>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptates sed expedita doloremque voluptate necessitatibus rerum ad officiis voluptatibus deserunt blanditiis commodi aliquid harum repellat veniam modi vero sint dolores?
            </p>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              descubre mas acerca de nuestras noticias y ofertas:
            </p>
            <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
              <li>
                <a
                  href='/news'
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  Noticias
                </a>
              </li>
              <li>
                <a
                  href='/sales'
                  rel='nofollow'
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  Ofertas
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  )
}
