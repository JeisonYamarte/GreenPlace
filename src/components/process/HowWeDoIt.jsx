import ProcessCard from './ProcessCard'

export default function HowWeDoIt() {
  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-8">HowWeDoIt</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
      </div>
    </div>
  )
}
