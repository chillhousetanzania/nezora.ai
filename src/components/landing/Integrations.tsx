import { INTEGRATIONS } from '../../data/integrations'
import { Card } from '../ui'

export default function Integrations() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="stack">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-50 border border-secondary-100 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary-600">The Stack</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-neutral-900 mb-4 tracking-tight">
          Connected to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">everything</span>
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
          Your employees plug into the tools that run modern businesses — social media, payments, email, analytics, and more.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {INTEGRATIONS.map(intg => (
          <Card key={intg.name} variant="default" hoverable padding="sm" className="flex flex-col items-center justify-center gap-3 aspect-square group">
            <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:bg-primary-50 group-hover:border-primary-200 group-hover:text-primary-600 transition-all duration-300">
              {intg.icon}
            </div>
            <div className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors">{intg.name}</div>
          </Card>
        ))}
      </div>
    </section>
  )
}
