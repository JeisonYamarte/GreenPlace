

export default function HeroCarousel() {


  return (
    <div className="relative w-full max-w-4xl mx-auto h-full overflow-hidden ">
      <figure 
        className="relative flex h-full"
      >
        <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1766407529/descarga_1_pfleki.jpg" alt="crochet" />
      </figure>
      <div className='absolute inset-0 bg-black opacity-30' />
      <div className="absolute w-[95%] flex flex-col items-center top-[25%] left-1/2 transform -translate-x-1/2 text-center text-white z-10">
        <img className="w-16 h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1766542433/ChatGPT_Image_23_dic_2025_23_13_18_wlqd4a.png" alt="Icono ranita" />
        <h1 className="text-4xl font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] w-full">We create what you love</h1>
        <p className="text-lg mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Handmade crochet products with love for nature</p>
        
        

      </div>
    </div>
  )
}
