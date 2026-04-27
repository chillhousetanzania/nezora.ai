import { Card } from '../ui'
import { XCircle, CheckCircle2 } from 'lucide-react'

const BEFORE = [
  'Months spent hiring the right people',
  'Coordination overhead across every team',
  'Ideas sit in backlogs for weeks',
  'Social channels go silent for days',
  'Miss growth windows while planning',
  'Pay salaries before you have revenue',
]

const AFTER = [
  'Full team operational in under 60 seconds',
  'Employees coordinate autonomously',
  'Ideas become action the same day',
  'Content published on schedule, 24/7',
  'Move fast — employees never sleep',
  'Pay only for what your company does',
]

export default function Comparison() {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-50 border border-secondary-100 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary-600">The Difference</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-neutral-900 tracking-tight">
          Launch day vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Everyday</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <Card variant="default" padding="lg" className="border-error-200/50 bg-gradient-to-b from-error-50/30 to-white relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-error-500" />
          <h3 className="text-lg font-semibold text-error-600 mb-8 flex items-center gap-2">
            Without Nezora
          </h3>
          <div className="space-y-6">
            {BEFORE.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <XCircle className="w-5 h-5 text-error-400 shrink-0 mt-0.5" />
                <span className="text-neutral-600 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="default" padding="lg" className="border-success-200/50 bg-gradient-to-b from-success-50/30 to-white relative overflow-hidden shadow-soft-lg">
          <div className="absolute top-0 inset-x-0 h-1 bg-success-500" />
          <h3 className="text-lg font-semibold text-success-600 mb-8 flex items-center gap-2">
            With Nezora
          </h3>
          <div className="space-y-6">
            {AFTER.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                <span className="text-neutral-800 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
