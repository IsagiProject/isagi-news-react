export function SaleDetail() {
  return (
    <div className='bg-gray-700 text-white p-8 mx-40 my-12 justify-start rounded-xl flex flex-col object-cover h-full'>
      <div className='flex'>
        <div className='w-4/12'>
          <img
            src='/assets/monitor.png'
            className='h-min-[4rem] w-auto justify-start'
            alt=''
          />
        </div>

        <div className='flex flex-col justify-between ml-6'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-2xl text-white text-left inline font-bold cursor-pointer'>
              LG 27UL500-W 27" LED IPS UltraHD 4K FreeSync
            </h1>
          </div>
          <div className='flex flex-row m-auto'>
            <p className='text-5xl text-white text-left font-bold'>179 €</p>
            <p className='text-3xl text-white text-left line-through'>229 €</p>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div className='flex flex-row justify-start'>
              <p className='text-sm text-white text-left m-auto pb-3'>
                Ofertas Carrefour
              </p>
            </div>
            <div className='bg-gray-500 p-6 rounded-md hover:bg-gray-800 transition duration-200 flex items-center mb-0 h-1/2 my-auto text-xl font-bold'>
              <button>Ir a la oferta</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-end'>
        <h2 className='py-6 text-xl font-bold'>Descripción:</h2>
        <p className='text-sm text-white text-left pb-6'>
          Es una oferta muy buena, nos permite tener un monitor muy completo por
          poco precio, es una oferta que no se te puede escapar.
        </p>
        <p className='text-lg text-white inline text-left self-end'>cosido</p>
      </div>
    </div>
  )
}
