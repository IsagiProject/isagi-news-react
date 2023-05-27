import { Carousel } from '@trendyol-js/react-carousel'
import { NewsCards } from './NewsCards.jsx'

export function Slider({ news }) {
  return (
    <Carousel show={3.5} slide={3} swiping>
      <NewsCards />
    </Carousel>
  )
}
