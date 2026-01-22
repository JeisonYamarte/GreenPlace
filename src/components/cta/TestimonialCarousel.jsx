import { Marquee } from "../ui/marquee"
import { SocialCard } from "./SocialCard"
import { reviews } from "./reviews"

export default function TestimonialCarousel() {
  const reviews1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviews2 = reviews.slice(Math.ceil(reviews.length / 2), reviews.length);

  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const isSmallScreen = windowWidth < 640; 


  return (
    <div className="relative w-full h-full max-h-[70svh] flex items-center justify-center overflow-hidden md:flex-col">
      
      <div className="absolute inset-0 min-h-screen h-full bg-gradient-to-b from-[#FCF9EA] to-[#97A87A] to-10% " />
      <Marquee pauseOnHover={true} vertical={isSmallScreen} className="max-h-[70svh] font-semibold text-lg [--duration:60s]" repeat={3}>
        {reviews1.map((review, index) => (
          <SocialCard key={index} body={review.text} name={review.author} img={review.img} />
        ))}
      </Marquee>
      <Marquee pauseOnHover={true} vertical={isSmallScreen} className="max-h-[70svh] font-semibold text-lg [--duration:60s]" repeat={3} reverse>
        {reviews2.map((review, index) => (
          <SocialCard key={index} body={review.text} name={review.author} img={review.img} />
        ))}
      </Marquee>
      {isSmallScreen ? null : (
        <Marquee pauseOnHover={true} className="max-h-[70svh] font-semibold text-lg [--duration:60s]" repeat={3} >
          {reviews2.map((review, index) => (
            <SocialCard key={index} body={review.text} name={review.author} img={review.img} />
          ))}
        </Marquee>
      )}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/40 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-950/10 w-68 flex items-center justify-center h-16 md:top-20 md:translate-y-0 md:w-80">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center  leading-tight"> 
          Lo que dicen nuestros clientes
        </h3>
      </div>
      {/* Sombras para fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FCF9EA] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#97A87A] to-transparent z-10" />
    </div>
  )
}
