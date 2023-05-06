import { useEffect, useState } from 'react'
import { Sale } from '../components/Sale.jsx'
import { getSales } from '../services/sales.js'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/store.js'

export function SalesPage() {
  const [data, setData] = useState()
  const token = useAppSelector((state) => state.token)
  const navigate = useNavigate()
  useEffect(() => {
    getSales().then((sales) => setData(sales))
  }, [])
  const goNewSale = () => {
    navigate('/sales/new')
  }
  return (
    <>
      {token && (
        <Button color='dark' className='ml-auto mr-40' onClick={goNewSale}>
          Añadir Oferta
        </Button>
      )}
      <div>
        {data && data.map((item) => <Sale sale={item} key={item.sale_id} />)}
      </div>
    </>
  )
}
