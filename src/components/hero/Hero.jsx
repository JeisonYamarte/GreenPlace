import HeroCarousel from './HeroCarousel'
import HeroAnimationsLayer from './HeroAnimationsLayer'

export default function Hero() {
  return (
    <div className="relative h-[calc(100dvh-3.5rem)] bg-linear-to-b from-green-100 to-green-200">
      <HeroCarousel />
      <HeroAnimationsLayer />
    </div>
  )
}
