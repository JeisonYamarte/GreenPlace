
import Flower from "../SVG/flower1"
export default function AboutUs() {
  return (
    <section id="courses" className="bg-bg w-full mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-xl sm:text-2xl mb-4 text-[#97A87A] font-semibold">Mas de GreenPlace</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          
          <div className="relative order-1 min-h-[50vh] sm:min-h-[55vh] md:min-h-[45vh] lg:min-h-[50vh] max-h-[500px] flex flex-col justify-center text-center gap-3 sm:gap-4 py-8 px-4">
            <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 z-20 text-[#3A3A3A]">HAZLO TU MISMO</h3>
            <p className="text-[#6b6b6b] text-sm sm:text-base lg:text-lg font-semibold z-20">
              Hazlo tú mismo nace desde mi propia experiencia aprendiendo a tejer. Con el tiempo entendí que crear con las manos es algo que se puede aprender sin apuros ni tecnicismos, y hoy quiero compartirlo con otros a través de talleres, materiales y guías para aprender desde casa.</p>
            <Flower 
              className="absolute top-10 sm:top-20 left-0 opacity-60 z-10 animate-spin-slow" 
              width={70} 
              height={70} 
              innerFill="#F2D57E"
              style={{ fill: "#97A87A" }}
            />
            <Flower 
              className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 opacity-60 z-10" 
              width={100} 
              height={100} 
              innerFill="#97A87A"
              style={{ fill: "#F2D57E" }}
            />
          </div>
          
          <figure className="order-2 min-h-[50vh] sm:min-h-[55vh] md:min-h-[45vh] lg:min-h-[50vh] max-h-[500px] overflow-hidden">
            <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1767926169/WhatsApp_Image_2025-12-17_at_8.53.48_AM_mparho.jpg" alt="Imagen de crochet" />
          </figure>

          <div className="relative order-3 md:order-4 lg:order-3 min-h-[50vh] sm:min-h-[55vh] md:min-h-[45vh] lg:min-h-[50vh] max-h-[500px] flex flex-col justify-center text-center gap-3 sm:gap-4 py-8 px-4">
            <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 z-20 text-[#3A3A3A]">
              Amo el crochet y amo inspirar a otros a crear.
            </h3>
            <p className="text-[#6b6b6b] text-sm sm:text-base lg:text-lg font-semibold z-20">
              "Entre mas ambiciosa es la idea, mas grande es la satisfaccion de lograrla"  
            </p>
            <Flower 
              className="absolute bottom-10 sm:bottom-20 left-0 opacity-60 z-10 animate-spin-slow" 
              width={70} 
              height={70} 
              innerFill="#F2D57E"
              style={{ fill: "#97A87A" }}
            />
            <Flower 
              className="absolute top-6 sm:top-10 right-4 sm:right-10 opacity-60 z-10" 
              width={100} 
              height={100} 
              innerFill="#97A87A"
              style={{ fill: "#F2D57E" }}
            />
          </div>

          <figure className="order-4 md:order-3 lg:order-4 min-h-[50vh] sm:min-h-[55vh] md:min-h-[45vh] lg:min-h-[50vh] max-h-[500px] overflow-hidden">
            <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1765939145/551013155_17944705692062249_4090516100098057064_n_rhwnvm.webp" alt="Imagen de crochet" />
          </figure>

          <div className="relative order-5 min-h-[50vh] sm:min-h-[55vh] md:min-h-[45vh] lg:min-h-[50vh] max-h-[500px] flex flex-col justify-center text-left gap-2 py-8 px-4">
            <p className="text-[#6b6b6b] text-sm sm:text-base font-semibold z-20">
              Hola, mi nombre es Valeria. Comencé a hacer crochet en paralelo con mis estudios como fonoaudiologa, y en los descansos entre clases logré asistir a cursos de tejido. Dediqué dos años a estos cursos, después de los cuales recibí un certificado. Pero allí aprendí las cosas más simples: cómo sostener el ganchillo, los tipos de puntos y cómo leer los diagramas.
            </p>
            <p className="text-[#6b6b6b] text-sm sm:text-base lg:text-lg font-semibold z-20 mt-2 sm:mt-4">
              Para convertirse en un verdadero maestro del crochet o del tejido, no es en absoluto necesario graduarse de una universidad ni de cursos costosos. Todo lo que necesitas para comenzar es un ovillo de lana, un ganchillo o agujas de tejer, y tu deseo ilimitado de crear.
            </p>
            <Flower 
              className="absolute bottom-20 sm:bottom-40 left-0 opacity-60 z-10 animate-spin-slow" 
              width={70} 
              height={70} 
              innerFill="#F2D57E"
              style={{ fill: "#97A87A" }}
            />
            <Flower 
              className="absolute top-20 sm:top-40 right-4 sm:right-10 opacity-60 z-10" 
              width={100} 
              height={100} 
              innerFill="#97A87A"
              style={{ fill: "#F2D57E" }}
            />
          </div>

          <figure className="order-6 min-h-[50vh] sm:min-h-[55vh] md:min-h-[45vh] lg:min-h-[50vh] max-h-[500px] overflow-hidden">
            <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1768223634/WhatsApp_Image_2025-12-17_at_8.53.47_AM_1_qckfdb.jpg" alt="Imagen de crochet" />
          </figure>

        </div>
    </section>
  )
}
