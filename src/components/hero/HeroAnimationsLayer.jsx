import { Bee1SVG } from "../SVG/bee1"
import { Flower } from "../SVG/flower1"
import { GrassSVG } from "../SVG/grass"
import Grass3 from "../SVG/SCG"
import FlowerSVG from "../SVG/SCG"

export default function HeroAnimationsLayer() {
  return (
    <div className="absolute h-full inset-0 pointer-events-none overflow-hidden">

        <Bee1SVG width={30} height={30}   />
        <Grass3 className="absolute -bottom-20 left-0 right-0 w-20 object-cover z-10"  />
        
        
        <GrassSVG className="absolute -bottom-36 left-0 right-0 w-full object-cover z-10"  />
        <Flower className="absolute bottom-0 left-0 w-20 h-auto z-0"  />
    </div>
  )
}
