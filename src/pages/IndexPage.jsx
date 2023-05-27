import { Carrousel } from '../components/Carrousel.jsx'
import { OpinionList } from '../components/OpinionList.jsx'
import { Slider } from '../components/Slider.jsx'

export function IndexPage() {
  return (
    <div>
      <div className='flex flex-col justify-center'>
        <Carrousel className='w-auto pb-4 h-auto' />
        <OpinionList className='w-3/12' />
      </div>
      <div className='h-60 py-10'>
        <Slider className='h-60 py-10' />
      </div>
      <div />
    </div>
  )
}
