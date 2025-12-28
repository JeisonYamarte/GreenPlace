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
            className="max-w-3xl w-full mx-auto bg-bg rounded-lg text-center py-2"
        >
            <Icon className="w-16 h-16 mx-auto mb-4 text-[#FF6F61]" />
            <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600/60">{subtitle}</p>
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
    <div className="bg-bg py-16 grid grid-cols-2 justify-center gap-2 px-1">
        {info.map((item, index) => (
            <Card 
                key={index}
                Icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
            />
        ))}
    </div>
    )
}