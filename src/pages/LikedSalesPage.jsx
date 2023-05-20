import { useEffect, useState } from 'react'
import { Sale } from '../components/Sale'
import SaleSkeleton from '../components/skeletons/SaleSkeleton'
import { getLikedSales } from '../services/sales'
import { useAppSelector } from '../hooks/store'

export default function LikesSalesPage() {
  const [data, setData] = useState()
  const token = useAppSelector((state) => state.token)
  useEffect(() => {
    getLikedSales({ token }).then((sales) => setData(sales))
  }, [])
  return (
    <>
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
