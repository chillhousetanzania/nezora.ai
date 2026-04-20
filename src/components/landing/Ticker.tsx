import { Card } from '../ui'

const ITEMS = [
  'CEO · Strategy & Vision',
  'CMO · Brand & Growth',
  'CTO · Engineering & Scale',
  'Design Lead · Pixel-Perfect UI',
  'Product Manager · Roadmaps & Specs',
  'Social Lead · Reels & Posts',
  'Sales Head · Pipeline & Close',
  'Support Lead · Always On',
  'CFO · Runway & P&L',
  'Data Head · Insights & Analytics',
  'Legal Counsel · Compliance',
  'HR Ops · Talent & Process',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="py-6 border-y border-neutral-200/50 bg-white shadow-soft-xs overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex gap-12 whitespace-nowrap animate-scroll items-center">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 flex-shrink-0">
            <span className="text-[13px] font-semibold tracking-wide uppercase text-neutral-500">{item}</span>
            <span className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
