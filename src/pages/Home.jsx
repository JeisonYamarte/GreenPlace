import Hero from '../components/hero/Hero'
import AboutUs from '../components/about/AboutUs'
import Products from '../components/products/Products'
import HowWeDoIt from '../components/process/HowWeDoIt'
import CTA from '../components/cta/CTA'
import { Porpuse } from '../components/purpose/Porpuse'

export default function Home() {
  return (
    <div className='flex flex-col gap-1'>
      <Hero />
      <div class="divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
                fill="#f5f5f5"/>
        </svg>
      </div>
      <Porpuse />
      <Products />
      <AboutUs />
      <HowWeDoIt />
      <CTA />
    </div>
  )
}
