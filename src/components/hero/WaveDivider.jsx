export default function WaveDivider() {
  return (
    <div className="relative w-full h-24 -mt-24 z-10" aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
      >
        {/* Capa de fondo - más clara */}
        <path
          d="M0,40 C240,100 480,20 720,60 C960,100 1200,40 1440,80 L1440,120 L0,120 Z"
          fill="#FCF9EA"
        />
        {/* Capa media - verde suave */}
        <path
          d="M0,60 C180,20 360,90 540,50 C720,10 900,80 1080,40 C1260,0 1380,60 1440,50 L1440,120 L0,120 Z"
          fill="#e8f0dc"
          opacity="0.8"
        />
        {/* Capa frontal - forma orgánica principal */}
        <path
          d="M0,80 C120,60 240,100 400,70 C560,40 720,90 880,60 C1040,30 1200,70 1440,50 L1440,120 L0,120 Z"
          fill="#FCF9EA"
        />
      </svg>
    </div>
  )
}
