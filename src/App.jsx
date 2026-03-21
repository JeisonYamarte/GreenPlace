
import Home from './pages/Home'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'

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
      </div>
    </HelmetProvider>
  )
}

export default App
