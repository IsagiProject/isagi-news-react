import { Carrousel } from '../components/Carrousel.jsx'
import { Slider } from '../components/Slider.jsx'

export function IndexPage() {
  return (
    <div>
      <div className='flex flex-col justify-center'>
        <Carrousel className='w-auto pb-4 h-auto' />
        <Slider className='my-10' />
      </div>
    </div>
  )
}
