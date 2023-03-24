import { useState } from 'react'

export function NewsSummary() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className='m-auto w-5/6 h-5/6 p-6 my-6 bg-slate-800 rounded-md'>
      <div
        id='post'
        className={`text-gray-300 rounded-lg ${
          show ? 'overflow-visible h-max' : 'overflow-hidden h-28'
        }`}
      >
        <h1 className='text-4xl text-gray-300 font-bold my-3'>Noticia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius!
          Rerum, minus nostrum quisquam ipsum cumque dolorum, veritatis vero
          maxime accusamus nihil sapiente veniam laudantium temporibus! Earum
          pariatur eaque quae?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          tempore delectus obcaecati mollitia voluptate laudantium, commodi
          perspiciatis enim itaque accusantium, iste atque sequi vitae veniam?
          <br /> Doloribus dolore iste modi enim. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic, ab soluta? Ex tempora earum eum
          vitae praesentium beatae dicta aperiam incidunt inventore, enim ullam
          reprehenderit unde voluptatum eligendi nisi natus? <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          voluptatibus laborum ducimus distinctio nesciunt molestias nam
          corporis enim odio officia, ipsum cum adipisci. Suscipit libero qui
          iste. Earum, nulla non.
        </p>
        <br />
      </div>
      <button
        className='mt-5 relative text-gray-300 font-bold'
        onClick={handleClick}
      >
        Read More...
      </button>
    </div>
  )
}
