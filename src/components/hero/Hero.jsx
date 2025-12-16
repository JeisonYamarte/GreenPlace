import HeroCarousel from './HeroCarousel'
import HeroAnimationsLayer from './HeroAnimationsLayer'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <HeroAnimationsLayer />
      <div className="relative z-10">
        Hero
      </div>
      <HeroCarousel />
    </div>
  )
}
