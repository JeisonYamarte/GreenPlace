import TestimonialCarousel from './TestimonialCarousel'
import SocialCard from './SocialCard'

export default function CTA() {
  return (
    <div className="py-16 bg-gradient-to-b from-green-100 to-green-200">
      <div className="text-center mb-8">CTA</div>
      <TestimonialCarousel />
      <SocialCard />
    </div>
  )
}
