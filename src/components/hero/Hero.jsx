import HeroCarousel from './HeroCarousel'
import Navbar from '../layout/Navbar'

export default function Hero() {
  return (
    <div className="relative h-svh lg:h-150 bg-linear-to-b from-green-100 to-green-200">
      <Navbar />
      <HeroCarousel />
    </div>
  )
}
