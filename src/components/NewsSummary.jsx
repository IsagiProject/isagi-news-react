import { useState } from 'react'
import { NewsComments } from './NewsComments'

export function NewsSummary({ news }) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div>
      <div className='m-auto w-5/6 h-5/6 p-6 my-6 bg-slate-300  dark:bg-slate-800  rounded-md'>
        <div
          id='post'
          className={`text-gray-300 rounded-lg ${
            show ? 'overflow-visible h-max' : 'overflow-hidden h-32'
          }`}
        >
          <div className='rounded-lg'>
            <h1
              style={{
                opacity: 1,
                zIndex: 2
              }}
              className='text-2xl max-h-20 text-slate-800 dark:text-slate-300 align-middle font-bold pb-11 pt-5 '
            >
              {news.title}
            </h1>
          </div>
          <div className='flex'>
            <p
              dangerouslySetInnerHTML={{ __html: news.text }}
              className='min-w-[70%] text-slate-800 dark:text-slate-300 '
            >
              {/* {news.text} */}
            </p>
            {news.image && (
              <img
                className='min-h-[30%] min-w-[30%] '
                src={news.image}
                alt='news.title'
                style={{ zIndex: 0, opacity: 1 }}
              />
            )}
            <br />
          </div>
        </div>
        <button
          className='mt-5 relative text-slate-800 dark:text-slate-300  font-bold'
          onClick={handleClick}
        >
          Read More...
        </button>
      </div>
    </div>
  )
}
