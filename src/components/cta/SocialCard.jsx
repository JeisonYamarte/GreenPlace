export function SocialCard({ body, name, img }) {
  return (
    <figure className="relative flex flex-col gap-3 bg-[#F2D57E] min-h-48 w-44 p-4 cursor-pointer overflow-hidden rounded-2xl border border-gray-950/10 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 md:w-72 lg:w-80">
      <span className="absolute top-2 right-3 text-4xl text-amber-700/20 font-serif">"</span>

      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full ring-2 ring-amber-700/20 w-9 h-9 md:w-12 md:h-12"  alt={`Avatar de ${name}`} src={img} />
        <figcaption className="text-sm font-semibold text-gray-800 md:text-lg ">{name}</figcaption>
      </div>

      <div className="flex-1 flex items-center">
        <blockquote className="w-full bg-white/30 backdrop-blur-sm rounded-lg p-3 text-sm text-gray-700 line-clamp-4 text-left md:text-base">
          {body}
        </blockquote>
      </div>
    </figure>
  )
}
