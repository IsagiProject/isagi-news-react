import { Carousel } from '@trendyol-js/react-carousel'
import { NewsCards } from './NewsCards'

export function Slider({ news }) {
  return (
    <Carousel show={3.5} slide={5} className='h-60 py-10'>
      <NewsCards className='w-4 h-6' />
    </Carousel>
  )
}
