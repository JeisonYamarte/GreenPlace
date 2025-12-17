import HeroCarousel from './HeroCarousel'
import HeroAnimationsLayer from './HeroAnimationsLayer'

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] bg-gradient-to-b from-green-100 to-green-200">
      {/* <HeroAnimationsLayer /> */}
      <HeroCarousel />
    </div>
  )
}
