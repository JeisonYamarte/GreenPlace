export function SocialCard({ body, name, img }) {
  return (
    <figure className="relative flex flex-col gap-3 bg-white/85 backdrop-blur-sm w-44 md:w-64 p-5 rounded-2xl border border-[#97A87A]/20 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden shrink-0">

      {/* Comilla decorativa */}
      <span className="absolute top-3 right-4 text-6xl leading-none text-[#97A87A]/12 font-serif select-none pointer-events-none">
        "
      </span>

      {/* Autor */}
      <div className="flex items-center gap-2.5">
        <img
          className="rounded-full ring-2 ring-[#97A87A]/30 w-9 h-9 md:w-10 md:h-10 shrink-0 object-cover"
          alt={`Avatar de ${name}`}
          src={img}
        />
        <figcaption className="text-xs md:text-sm font-semibold text-gray-800 leading-tight">
          {name}
        </figcaption>
      </div>

      {/* Cita */}
      <blockquote className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-4 text-left">
        {body}
      </blockquote>

      {/* Acento de color en la esquina inferior */}
      <div className="absolute bottom-0 left-0 w-1 h-10 rounded-tr-full bg-[#97A87A]/40" />
    </figure>
  )
}
