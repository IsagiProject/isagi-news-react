export function SaleDetail() {
  return (
    <div className='bg-slate-300  dark:bg-slate-700  text-slate-800 dark:text-slate-300 p-8 mx-40 my-12 justify-start rounded-xl flex flex-col object-cover h-full'>
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
            <h1 className='text-2xl text-slate-800 dark:text-slate-300 text-left inline font-bold cursor-pointer'>
              LG 27UL500-W 27" LED IPS UltraHD 4K FreeSync
            </h1>
          </div>
          <div className='flex flex-row m-auto'>
            <p className='text-5xl text-slate-800 dark:text-slate-300 text-left font-bold'>179 €</p>
            <p className='text-3xl text-slate-800 dark:text-slate-300 line-through'>229 €</p>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div className='flex flex-row justify-start'>
              <p className='text-sm text-slate-800 dark:text-slate-300 text-left m-auto pb-3'>
                Ofertas Carrefour
              </p>
            </div>
            <div className='bg-slate-700 text-slate-900 dark:text-slate-300 dark:bg-slate-400 p-6 rounded-md hover:bg-slate-400 dark:hover:bg-slate-800 transition duration-200 flex items-center mb-0 h-1/2 my-auto text-xl font-bold'>
              <button>Ir a la oferta</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-end'>
        <h2 className='py-6 text-xl font-bold'>Descripción:</h2>
        <p className='text-sm text-slate-800 dark:text-slate-300 text-left pb-6'>
          Es una oferta muy buena, nos permite tener un monitor muy completo por
          poco precio, es una oferta que no se te puede escapar.
        </p>
        <p className='text-lg text-slate-800 dark:text-slate-300 dark:text-slate-300inline text-left self-end'>cosido</p>
      </div>
    </div>
  )
}
