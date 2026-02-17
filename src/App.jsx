
import Home from './pages/Home'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <title>GreenPlace - Productos de Crochet Hechos a Mano</title>
          <meta name="description" content="Bienvenido a GreenPlace, tu tienda especializada en productos de crochet, hechos a mano, únicos y personalizados." />
          <meta name="keywords" content="crochet, productos de crochet, hechos a mano, tienda online, regalos personalizados, artículos de crochet, venezuela, falcon, punto fijo, decoración, accesorios" />
          <link rel="canonical" href="https://greenplace.life" />
          <meta property="og:image" content="https://greenplace.life/og-image.png" />
          <meta property="og:title" content="GreenPlace - Productos de Crochet Hechos a Mano" />
          <meta property="og:description" content="Visita GreenPlace, tu tienda especializada en productos de crochet, hechos a mano, únicos y personalizados. Descubre nuestra amplia selección de artículos de crochet y encuentra el regalo perfecto para tus seres queridos." />
          <meta property="og:url" content="https://greenplace.life" />
        </Helmet>
        <Home />
      </div>
    </HelmetProvider>
  )
}

export default App
