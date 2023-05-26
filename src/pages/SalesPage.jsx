import { useEffect, useState } from 'react'
import { Sale } from '../components/Sale.jsx'
import { getSales } from '../services/sales.js'
import { Button, Dropdown, TextInput } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/store.js'
import SaleSkeleton from '../components/skeletons/SaleSkeleton.jsx'
import { HiSearch } from 'react-icons/hi'

export function SalesPage() {
  const [data, setData] = useState()
  const token = useAppSelector((state) => state.token)
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const [order, setOrder] = useState('')
  useEffect(() => {
    getSales({ token, q, order }).then((sales) => setData(sales))
  }, [])
  const goNewSale = () => {
    navigate('/sales/new')
  }
  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const q = formData.get('search')
    setQ(q)
    getSales({ order, token, q }).then((sales) => setData(sales))
  }
  const handleSelectChange = (order) => {
    setOrder(order)
    getSales({ token, order, q }).then((sales) => setData(sales))
  }
  return (
    <>
      <div className='flex justify-between ml-40 max-lg:ml-0 max-md:flex-col '>
        <form
          onSubmit={handleSearch}
          className='flex w-2/5 max-lg:w-full max-lg:mb-2'
        >
          <TextInput
            className='w-4/5 mr-1'
            name='search'
            type='text'
            placeholder='Busca tu producto'
          />
          <Button type='submit' color='dark' className='py-1 px-2'>
            <HiSearch />
          </Button>
        </form>
        <div className='flex max-lg:mr-0 ml-auto mr-40'>
          <Dropdown label='Ordenar Por' color='dark'>
            <Dropdown.Item onClick={() => handleSelectChange('price_asc')}>
              Precio Ascendente
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectChange('price_desc')}>
              Precio Descendente
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectChange('discount_asc')}>
              Descuento Ascendente
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectChange('discount_desc')}>
              Descuento Descendente
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectChange('date')}>
              Fecha Descendente
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectChange('title')}>
              Titulo A-Z
            </Dropdown.Item>
          </Dropdown>
          {token && (
            <Button color='dark' onClick={goNewSale}>
              Añadir Oferta
            </Button>
          )}
        </div>
      </div>

      <div>
        {data ? (
          data.map((item) => <Sale sale={item} key={item.sale_id} />)
        ) : (
          <>
            <SaleSkeleton />
            <SaleSkeleton />
            <SaleSkeleton />
            <span className='sr-only'>Loading...</span>
          </>
        )}
      </div>
    </>
  )
}
