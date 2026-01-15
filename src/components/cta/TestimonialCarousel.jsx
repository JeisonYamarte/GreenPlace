import { Marquee } from "../ui/marquee"
import { SocialCard } from "./SocialCard"
import { reviews } from "./reviews"

export default function TestimonialCarousel() {
  const reviews1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviews2 = reviews.slice(Math.ceil(reviews.length / 2), reviews.length);
  return (
    <div className="relative w-full h-full max-h-[70dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute  inset-0 min-h-screen bg-linear-to-b from-[#FCF9EA] to-[#97A87A] to-10%" />
      <Marquee pauseOnHover={true} vertical className=" font-semibold text-lg [--duration:60s]" repeat={3}>
        {reviews1.map((review, index) => (
          <SocialCard key={index} body={review.text} name={review.author} img={review.img} />
        ))}
      </Marquee>
      <Marquee pauseOnHover={true} vertical className=" font-semibold text-lg [--duration:60s]" repeat={3} reverse>
        {reviews2.map((review, index) => (
          <SocialCard key={index} body={review.text} name={review.author} img={review.img} />
        ))}
      </Marquee>
      {/* Sombras para fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#FCF9EA] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#97A87A] to-transparent z-10" />
    </div>
  )
}
