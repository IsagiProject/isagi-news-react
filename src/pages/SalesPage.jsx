import { useEffect, useState } from 'react'
import { Sale } from '../components/Sale.jsx'
import { getSales } from '../services/sales.js'

export function SalesPage() {
  const [data, setData] = useState()

  useEffect(() => {
    getSales().then((sales) => setData(sales))
  }, [])

  return (
    <div>
      {data && data.map((item) => <Sale sale={item} key={item.sale_id} />)}
    </div>
  )
}
