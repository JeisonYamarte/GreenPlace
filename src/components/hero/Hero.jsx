import HeroCarousel from './HeroCarousel'
import HeroAnimationsLayer from './HeroAnimationsLayer'
import Navbar from '../layout/Navbar'

export default function Hero() {
  return (
    <div className="relative h-[calc(100dvh)] bg-linear-to-b from-green-100 to-green-200">
      <Navbar />
      <HeroCarousel />
    </div>
  )
}
