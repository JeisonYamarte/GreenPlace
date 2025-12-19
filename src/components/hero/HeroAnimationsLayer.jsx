import { Bee1SVG } from "../SVG/bee1"
import { GrassSVG } from "../SVG/grass"

export default function HeroAnimationsLayer() {
  return (
    <div className="absolute h-full inset-0 pointer-events-none">

        <Bee1SVG width={30} height={30}   />
        
        <GrassSVG className="absolute -bottom-20 left-0 w-full h-auto " />
    </div>
  )
}
