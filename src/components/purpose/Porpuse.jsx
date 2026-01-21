import { motion } from "motion/react"
import { 
    Heart, 
    Gift, 
    Brain, 
    Plane,
    ThumbsUp,
    ClockCheck
    } from "lucide-react"


const Card = ({Icon, title, subtitle}) => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full bg-bg rounded-lg text-center py-4 px-3 md:py-6 md:px-4"
        >
            <Icon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-[#FF6F61]" />
            <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{title}</h2>
            <p className="text-sm md:text-base text-gray-600/60">{subtitle}</p>
        </motion.div>
    )
}

export function Porpuse() {
    const info = [
        {icon: Heart, title: 'encuentra lo que amas', subtitle: 'Descubre productos, nuestra tienda esta repleta de maravillas.'},
        {icon: Gift, title: 'Si buscas algo para regalar', subtitle: 'Los mejores regalos son los hechos a mano.'},
        {icon: Brain, title: 'creamos lo que imagines', subtitle: 'modelos personalizados para ti.'},
        {icon: Plane, title: 'envios a todo el pais', subtitle: 'Llevamos nuestras creaciones hasta donde estes.'},
        {icon: ThumbsUp, title: 'calidad garantizada', subtitle: 'Cada producto es elaborado con los mejores materiales y técnicas.'},
        {icon: ClockCheck, title: 'comprometidos con tu tiempo', subtitle: 'Nos esforzamos por cumplir con los plazos acordados.'},
    ]
    return (
    <div id="aboutUs" className="bg-bg sm:py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
        <div className=" max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
            {info.map((item, index) => (
                <Card 
                    key={index}
                    Icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            ))}
        </div>
    </div>
    )
}