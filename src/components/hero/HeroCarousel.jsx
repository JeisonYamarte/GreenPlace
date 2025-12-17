import { useState, useEffect } from 'react'

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    'https://res.cloudinary.com/dy8f3lczs/image/upload/v1765939145/551013155_17944705692062249_4090516100098057064_n_rhwnvm.webp',
    'https://res.cloudinary.com/dy8f3lczs/image/upload/v1765940183/551895304_17944843452062249_2541752703833370924_n_hcunu6.webp',
    'https://res.cloudinary.com/dy8f3lczs/image/upload/v1765939145/564804369_17947830195062249_2479620022253867395_n_ylvlar.webp',
    'https://res.cloudinary.com/dy8f3lczs/image/upload/v1765940103/469368289_4082145285350688_3880930728043354828_n_wuijuu.jpg',
    'https://res.cloudinary.com/dy8f3lczs/image/upload/v1765940103/447094708_2617418478417534_5410491132292662247_n_x3tehb.jpg'
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen w-full max-w-4xl mx-auto h-96 overflow-hidden rounded-lg">
      <div 
        className="relative flex transition-transform duration-1500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </div>
      <div className='absolute inset-0 bg-black opacity-50' />
      <h1 className="absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-6xl md:text-7xl font-bold text-white z-10">
        <span className="bg-linear-to-r from-[#97A87A] via-[#B5C99A] to-[#97A87A] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          GreenPlace
        </span>
      </h1>
    </div>
  )
}
