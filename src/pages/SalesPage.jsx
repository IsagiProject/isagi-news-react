import { useEffect, useState } from 'react'
import { Sale } from '../components/Sale.jsx'
import { getSales } from '../services/sales.js'
import SaleSkeleton from '../components/skeletons/SaleSkeleton.jsx'

export function SalesPage() {
  const [data, setData] = useState()

  useEffect(() => {
    getSales().then((sales) => setData(sales))
  }, [])

  return (
    <div>
      {data ? (
        data.map((item) => <Sale sale={item} key={item.sale_id} />)
      ) : (
        <>
          <SaleSkeleton />
          <SaleSkeleton />
          <SaleSkeleton />
          <span class='sr-only'>Loading...</span>
        </>
      )}
    </div>
  )
}
