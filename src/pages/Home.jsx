import Hero from '../components/hero/Hero'
import WaveDivider from '../components/hero/WaveDivider'
import AboutUs from '../components/about/AboutUs'
import Products from '../components/products/Products'
import CTA from '../components/cta/CTA'
import { Purpose } from '../components/purpose/Purpose'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <WaveDivider />
      <Purpose />
      <Products />
      <AboutUs />
      <CTA />
    </div>
  )
}
