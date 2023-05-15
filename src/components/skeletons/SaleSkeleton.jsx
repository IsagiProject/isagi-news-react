export default function SaleSkeleton() {
  return (
    <div
      role='status'
      className='animate-pulse bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-8 justify-start rounded-xl flex object-cover'
    >
      <div className='w-3/12'>
        <img src='' className='h-44 w-auto justify-start' alt='' />
      </div>
      <div className='flex flex-col w-9/12'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-2xl text-white text-center ml-6 inline font-bold'>
            <p />
          </h1>
          <h1 className='text-lg text-slate-800 dark:text-slate-300 text-center inline'>
            <p />
          </h1>
        </div>
        <div>
          <p className='text-sm text-slate-800 dark:text-slate-300 text-left ml-6 my-6'>
            <p />
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-sm  text-slate-800 dark:text-slate-300 text-left ml-6 mt-8'>
              <p />
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-xl text-slate-800 dark:text-slate-300 text-left ml-6 mt-8 font-bold'>
              <p />
            </p>
            <p className='text-lg text-slate-800 dark:text-slate-300 text-left ml-2 mt-8 line-through'>
              <p />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
