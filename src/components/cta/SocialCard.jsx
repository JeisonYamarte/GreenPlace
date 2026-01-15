export function SocialCard({ body, name, img }) {
  return (
    <figure className="relative flex flex-col gap-3 bg-[#F2D57E] min-h-48 w-44 p-4 cursor-pointer overflow-hidden rounded-2xl border border-gray-950/10 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      {/* Icono decorativo de comillas */}
      <span className="absolute top-2 right-3 text-4xl text-amber-700/20 font-serif">"</span>

      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full ring-2 ring-amber-700/20" width="36" height="36" alt={`Avatar de ${name}`} src={img} />
        <figcaption className="text-sm font-semibold text-gray-800">{name}</figcaption>
      </div>

      <div className="flex-1 flex items-center">
        <blockquote className="w-full bg-white/30 backdrop-blur-sm rounded-lg p-3 text-sm text-gray-700 line-clamp-4 text-left">
          {body}
        </blockquote>
      </div>
    </figure>
  )
}
