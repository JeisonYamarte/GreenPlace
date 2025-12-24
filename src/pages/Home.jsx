import Hero from '../components/hero/Hero'
import AboutUs from '../components/about/AboutUs'
import Products from '../components/products/Products'
import HowWeDoIt from '../components/process/HowWeDoIt'
import CTA from '../components/cta/CTA'

export default function Home() {
  return (
    <div className='flex flex-col gap-1'>
      <Hero />
      <AboutUs />
      <Products />
      <HowWeDoIt />
      <CTA />
    </div>
  )
}
