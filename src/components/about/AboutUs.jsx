import { motion } from "motion/react"
import Flower from "../SVG/flower1"
export default function AboutUs() {
  return (
    <div className="bg-bg py-16 w-full">
      <h2 className="text-center text-2xl mb-4 text-[#97A87A] font-semibold">Mas de GreenPlace</h2>
        <div className="px-1 grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-1 h-auto">
          
          <div className="relative order-1 h-[70dvh] flex flex-col justify-center text-center gap-4">
            <h3 className="font-bold text-4xl mb-4 z-20 text-[#3A3A3A]">HAZLO TU MISMO</h3>
            <p className="text-[#6b6b6b] text-lg font-semibold z-20 mx-4">
              Hazlo tu mismo es una iniciativa que busca empoderar a las personas para que creen sus propios tejidos y manualidades. Ofrecemos talleres, kits de materiales y recursos en línea para que puedas aprender y desarrollar tus habilidades creativas desde la comodidad de tu hogar.
            </p>
            <Flower 
              className="absolute top-20 left-0 opacity-60 z-10 animate-spin-slow" 
              width={100} 
              height={100} 
              innerFill="#F2D57E"
              style={{ fill: "#97A87A" }}
            />
            <Flower 
              className="absolute bottom-10 right-10 opacity-60 z-10 " 
              width={150} 
              height={150} 
              innerFill="#97A87A"
              style={{ fill: "#F2D57E" }}
            ></Flower>
            
          </div>
          
          <figure className="order-2 h-[70dvh] object-cover overflow-hidden">
            <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1767926169/WhatsApp_Image_2025-12-17_at_8.53.48_AM_mparho.jpg" alt="gg" />
          </figure>

          <div className="relative sm:order-3 h-[70dvh] flex flex-col justify-center text-center gap-4 md:order-4 lg:order-3">
            <h3 className="font-bold text-4xl mb-4 z-20 text-[#3A3A3A]">
              Amo el crochet y amo crear todo tipo de prendas y accesorios.
            </h3>
            <p className="text-[#6b6b6b] text-lg font-semibold z-20 mx-4">
              "Entre mas ambiciosa es la idea, mas grande es la satisfaccion de lograrla"  
            </p>
            <Flower 
              className="absolute bottom-20 left-0 opacity-60 z-10 animate-spin-slow" 
              width={100} 
              height={100} 
              innerFill="#F2D57E"
              style={{ fill: "#97A87A" }}
            />
            <Flower 
              className="absolute top-10 right-10 opacity-60 z-10 " 
              width={150} 
              height={150} 
              innerFill="#97A87A"
              style={{ fill: "#F2D57E" }}
            ></Flower>
            
          </div>

          <figure className="sm:order-4 h-[70dvh] object-cover overflow-hidden md:order-3 lg:order-4">
            <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1765939145/551013155_17944705692062249_4090516100098057064_n_rhwnvm.webp" alt="gg" />
          </figure>

          <div className="relative order-5 h-[70dvh] flex flex-col justify-center text-left gap-2">
            <p className="text-[#6b6b6b] text-m font-semibold z-20 mx-4">
              Hola, mi nombre es Valeria. Comencé a hacer crochet en paralelo con mis estudios como fonoaudiologa, y en los descansos entre clases logré asistir a cursos de tejido. Dediqué dos años a estos cursos, después de los cuales recibí un certificado. Pero allí aprendí las cosas más simples: cómo sostener el ganchillo, los tipos de puntos y cómo leer los diagramas.
            </p>
            <p className="text-[#6b6b6b] text-lg font-semibold z-20 mx-4 mt-4">
              Para convertirse en un verdadero maestro del crochet o del tejido, no es en absoluto necesario graduarse de una universidad ni de cursos costosos. Todo lo que necesitas para comenzar es un ovillo de lana, un ganchillo o agujas de tejer, y tu deseo ilimitado de crear.
            </p>
            <Flower 
              className="absolute bottom-40 left-0 opacity-60 z-10 animate-spin-slow" 
              width={100} 
              height={100} 
              innerFill="#F2D57E"
              style={{ fill: "#97A87A" }}
            />
            <Flower 
              className="absolute top-40 right-10 opacity-60 z-10 " 
              width={150} 
              height={150} 
              innerFill="#97A87A"
              style={{ fill: "#F2D57E" }}
            ></Flower>
            
          </div>

          <figure className="order-6 h-[70dvh] object-cover overflow-hidden">
            <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1768223634/WhatsApp_Image_2025-12-17_at_8.53.47_AM_1_qckfdb.jpg" alt="gg" />
          </figure>

        </div>
        
    </div>
  )
}
