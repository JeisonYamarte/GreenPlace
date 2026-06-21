import { useState } from 'react'
import { cn } from '../../lib/utils'

export default function LazyImage({ src, alt, className, ...props }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-[#e8f0dc] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23e8f0dc%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%2397A87A%22 font-size=%2216%22%3EGreenPlace%3C/text%3E%3C/svg%3E'
          setLoaded(true)
        }}
        {...props}
      />
    </div>
  )
}
