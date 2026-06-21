import { Marquee } from "../ui/marquee"
import { SocialCard } from "./SocialCard"
import { reviews } from "./reviews"
import { useScreenSize } from "../../hooks/useScreenSize"

export default function TestimonialCarousel() {
  const { width } = useScreenSize()

  const reviews1 = reviews.slice(0, Math.ceil(reviews.length / 2))
  const reviews2 = reviews.slice(Math.ceil(reviews.length / 2), reviews.length)

  const isSmallScreen = width < 640

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden md:flex-col py-8 min-h-[60svh] max-h-[80svh]">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9EA] via-[#e8f0dc] to-[#97A87A]" />

      {/* Título flotante */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-white/50 backdrop-blur-md px-7 py-3 rounded-full shadow-md border border-[#97A87A]/20 flex items-center justify-center">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 text-center leading-tight whitespace-nowrap">
          Lo que dicen nuestros clientes
        </h3>
      </div>

      {/* Filas de testimoniales */}
      <Marquee
        pauseOnHover={true}
        vertical={isSmallScreen}
        className="max-h-[80svh] [--gap:1.25rem] [--duration:120s] pt-16 md:pt-20"
        repeat={3}
      >
        {reviews1.map((review, index) => (
          <SocialCard key={index} body={review.text} name={review.author} img={review.img} />
        ))}
      </Marquee>

      <Marquee
        pauseOnHover={true}
        vertical={isSmallScreen}
        className="max-h-[80svh] [--gap:1.25rem] [--duration:120s]"
        repeat={3}
        reverse
      >
        {reviews2.map((review, index) => (
          <SocialCard key={index} body={review.text} name={review.author} img={review.img} />
        ))}
      </Marquee>

      {/* Fades superior e inferior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FCF9EA] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#97A87A] to-transparent z-10" />
    </div>
  )
}
