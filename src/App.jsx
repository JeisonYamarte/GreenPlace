
import Home from './pages/Home'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { motion } from 'motion/react'

function WhatsAppFloat() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=584146109850&text=Hola%20GreenPlace!%20Me%20interesa%20un%20producto."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.93 }}
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  )
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'GreenPlace',
  description: 'Tienda especializada en productos de crochet hechos a mano, únicos y personalizados.',
  url: 'https://greenplace.life',
  logo: 'https://greenplace.life/favicon.png',
  image: 'https://res.cloudinary.com/dy8f3lczs/image/upload/w_1200,f_auto,q_auto/v1770946402/wallpaperbackgroud_aewomv.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Punto Fijo',
    addressRegion: 'Falcón',
    addressCountry: 'VE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+584146109850',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.instagram.com/greenplace_pf',
    'https://www.facebook.com/share/1FY5fUrF7q/',
  ],
}

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <title>GreenPlace | Productos de Crochet Hechos a Mano</title>
          <meta name="description" content="Bienvenido a GreenPlace, tu tienda especializada en productos de crochet, hechos a mano, únicos y personalizados." />
          <meta name="keywords" content="crochet, productos de crochet, hechos a mano, tienda online, regalos personalizados, artículos de crochet, venezuela, falcon, punto fijo, decoración, accesorios" />
          <link rel="canonical" href="https://greenplace.life" />
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="es_VE" />
          <meta property="og:site_name" content="GreenPlace" />
          <meta property="og:url" content="https://greenplace.life" />
          <meta property="og:title" content="GreenPlace | Productos de Crochet Hechos a Mano" />
          <meta property="og:description" content="Visita GreenPlace, tu tienda especializada en productos de crochet, hechos a mano, únicos y personalizados. Descubre nuestra amplia selección de artículos de crochet y encuentra el regalo perfecto para tus seres queridos." />
          <meta property="og:image" content="https://res.cloudinary.com/dy8f3lczs/image/upload/w_1200,f_auto,q_auto/v1770946402/wallpaperbackgroud_aewomv.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="GreenPlace - Productos de Crochet Hechos a Mano" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="GreenPlace | Productos de Crochet Hechos a Mano" />
          <meta name="twitter:description" content="Tienda especializada en productos de crochet hechos a mano, únicos y personalizados." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dy8f3lczs/image/upload/w_1200,f_auto,q_auto/v1770946402/wallpaperbackgroud_aewomv.jpg" />
          {/* JSON-LD */}
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
        <Home />
        <WhatsAppFloat />
      </div>
    </HelmetProvider>
  )
}

export default App
