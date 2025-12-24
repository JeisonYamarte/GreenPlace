import * as React from "react";
const Grass3 = (props) => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      {/* Patrón de textura tipo crochet - trama cruzada */}
      <pattern id="crochetTexture3" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
        {/* Puntos de la trama */}
        <circle cx="1.5" cy="1.5" r="0.6" fill="rgba(255,255,255,0.4)" />
        <circle cx="4.5" cy="4.5" r="0.6" fill="rgba(255,255,255,0.4)" />
        <circle cx="1.5" cy="4.5" r="0.5" fill="rgba(0,0,0,0.08)" />
        <circle cx="4.5" cy="1.5" r="0.5" fill="rgba(0,0,0,0.08)" />
        {/* Líneas de tejido */}
        <line x1="0" y1="3" x2="6" y2="3" stroke="rgba(0,0,0,0.06)" strokeWidth="0.4" />
        <line x1="3" y1="0" x2="3" y2="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />
      </pattern>

      {/* Patrón adicional para más textura */}
      <pattern id="yarnTexture3" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M0,6 Q3,4 6,6 T12,6" stroke="rgba(0,0,0,0.05)" fill="none" strokeWidth="1.5" />
        <path d="M6,0 Q4,3 6,6 T6,12" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="1.5" />
      </pattern>

      {/* Filtro para dar relieve suave sin ruido */}
      <filter id="crochetEffect3">
        {/* Sombra sutil para profundidad */}
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur"/>
        <feOffset in="blur" dx="1" dy="1" result="offsetBlur"/>
        
        {/* Iluminación especular suave */}
        <feSpecularLighting in="blur" surfaceScale="2" specularConstant="0.4" specularExponent="15" lighting-color="#ffffff" result="specOut">
          <fePointLight x="-100" y="-100" z="120"/>
        </feSpecularLighting>
        
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
      </filter>
    </defs>

    <title>{"grass"}</title>
    
    {/* Primera capa: forma base con color y filtro - con animación */}
    <path 
      d="M22.697 26.613c-0.814-1.546-1.678-3.115-2.604-4.673 1.58-5.622 4.047-12.050 9.778-19.961-5.708 3.798-9.955 9.525-12.87 15.198-3.632-5.087-8.11-9.597-13.867-12.091 4.515 5.099 8.899 11.303 11.741 16.769-0.642 1.612-1.172 3.172-1.594 4.629-0.723-5.318-4.674-10.701-8.725-10.857 4.268 4.285 7.064 11.032 4.683 14.669h3.134c-0.025 0.137-0.048 0.272-0.070 0.405h5.563c0.040-0.15 0.080-0.3 0.12-0.45 0.021 0.147 0.041 0.292 0.056 0.434h6.73c-0.060-0.122-0.121-0.244-0.182-0.366h2.794c-1.477-4.18-0.675-9.497 0.718-15.59-3.182 2.868-4.782 7.131-5.404 11.883zM2.631 20.772c3.101 4.734 3.61 7.309 2.395 9.51l3.948-0c-0.766-4.212-1.84-6.802-6.343-9.51z" 
      fill="#6B9E4D"
      filter="url(#crochetEffect3)"
      style={{
        transformOrigin: 'center bottom',
        animation: 'windSway3 4s ease-in-out infinite'
      }}
    />

    {/* Segunda capa: patrón de crochet con animación */}
    <path 
      d="M22.697 26.613c-0.814-1.546-1.678-3.115-2.604-4.673 1.58-5.622 4.047-12.050 9.778-19.961-5.708 3.798-9.955 9.525-12.87 15.198-3.632-5.087-8.11-9.597-13.867-12.091 4.515 5.099 8.899 11.303 11.741 16.769-0.642 1.612-1.172 3.172-1.594 4.629-0.723-5.318-4.674-10.701-8.725-10.857 4.268 4.285 7.064 11.032 4.683 14.669h3.134c-0.025 0.137-0.048 0.272-0.070 0.405h5.563c0.040-0.15 0.080-0.3 0.12-0.45 0.021 0.147 0.041 0.292 0.056 0.434h6.73c-0.060-0.122-0.121-0.244-0.182-0.366h2.794c-1.477-4.18-0.675-9.497 0.718-15.59-3.182 2.868-4.782 7.131-5.404 11.883zM2.631 20.772c3.101 4.734 3.61 7.309 2.395 9.51l3.948-0c-0.766-4.212-1.84-6.802-6.343-9.51z" 
      fill="url(#crochetTexture3)"
      opacity="0.9"
      style={{
        transformOrigin: 'center bottom',
        animation: 'windSway3 4s ease-in-out infinite 0.1s'
      }}
    />

    {/* Tercera capa: textura de hilo con animación */}
    <path 
      d="M22.697 26.613c-0.814-1.546-1.678-3.115-2.604-4.673 1.58-5.622 4.047-12.050 9.778-19.961-5.708 3.798-9.955 9.525-12.87 15.198-3.632-5.087-8.11-9.597-13.867-12.091 4.515 5.099 8.899 11.303 11.741 16.769-0.642 1.612-1.172 3.172-1.594 4.629-0.723-5.318-4.674-10.701-8.725-10.857 4.268 4.285 7.064 11.032 4.683 14.669h3.134c-0.025 0.137-0.048 0.272-0.070 0.405h5.563c0.040-0.15 0.080-0.3 0.12-0.45 0.021 0.147 0.041 0.292 0.056 0.434h6.73c-0.060-0.122-0.121-0.244-0.182-0.366h2.794c-1.477-4.18-0.675-9.497 0.718-15.59-3.182 2.868-4.782 7.131-5.404 11.883zM2.631 20.772c3.101 4.734 3.61 7.309 2.395 9.51l3.948-0c-0.766-4.212-1.84-6.802-6.343-9.51z" 
      fill="url(#yarnTexture3)"
      opacity="0.6"
      style={{
        transformOrigin: 'center bottom',
        animation: 'windSway3 4s ease-in-out infinite 0.2s'
      }}
    />

    {/* CSS para la animación */}
    <style>
      {`
        @keyframes windSway3 {
          0%, 100% {
            transform: skewX(0deg) translateX(0px);
          }
          25% {
            transform: skewX(2deg) translateX(3px);
          }
          50% {
            transform: skewX(0deg) translateX(0px);
          }
          75% {
            transform: skewX(-2deg) translateX(-3px);
          }
        }
      `}
    </style>
  </svg>
);
export default Grass3;
