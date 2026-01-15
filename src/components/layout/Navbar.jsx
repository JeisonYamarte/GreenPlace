export default function Navbar() {
  return (
    <div className="absolute flex flex-col items-center justify-center p-4 bg-bg rounded-b-lg text-white h-auto z-10 w-full top-0">
      <div className="flex flex-col items-center">
        <figure className="w-12 h-12 rounded-full overflow-hidden border-coral-500">
          <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dy8f3lczs/image/upload/v1765939145/497957171_17930717010062249_363873050315841911_n_qiflyq.webp" alt="logo-green-place" />
        </figure>
        <h2 className="font-extrabold text-3xl bg-linear-to-r from-[#97A87A] via-[#B5C99A] to-[#97A87A] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">GreenPlace</h2>
        <h4 className="text-xs text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Ideas hechas a mano</h4>
      </div>
      <nav className="w-full mt-2">
          <hr className="border-[rgb(var(--color-secondary))] mb-2 mt-2" />
        <ul className="flex gap-2 justify-between text-sm font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <li>sobre nosotros</li>
          <li>Productos</li>
          <li>Cursos</li>
          <li>Contacto</li>
        </ul>
      </nav>

    </div>
  )
}
