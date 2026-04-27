import { useLanding } from '../../context/LandingContext'
import { Card } from '../ui'
import { CheckCircle2 } from 'lucide-react'

const TIERS = [
  {
    tier: 'Solo',
    price: '49',
    per: '/month',
    desc: 'Perfect for solo founders running lean. Full team, core integrations, and unlimited missions.',
    features: [
      '12 AI employees, all roles',
      'Core integrations (Instagram, Gmail, Stripe)',
      'Unlimited missions & tasks',
      '5 social channels connected',
      'Email & chat support',
    ],
    cta: 'Start free trial',
    featured: false,
  },
  {
    tier: 'Duo',
    price: '149',
    per: '/month',
    desc: 'Built for founding pairs who move fast. Priority execution, full integrations, and advanced analytics.',
    features: [
      'Everything in Solo',
      'All 12+ integrations unlocked',
      'Priority employee response',
      'Advanced analytics dashboard',
      'Two founder seats',
      'Dedicated success manager',
    ],
    cta: 'Get started',
    featured: true,
  },
  {
    tier: 'Scaling',
    price: '499',
    per: '/month',
    desc: 'For companies growing fast. Custom workflows, white-glove setup, and enterprise-grade reliability.',
    features: [
      'Everything in Duo',
      'Custom employee workflows',
      'White-glove onboarding',
      'SLA guarantees',
      'API access',
      'Priority engineering support',
    ],
    cta: 'Talk to us',
    featured: false,
  },
]

export default function Pricing() {
  const { openOnboarding } = useLanding()

  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-12 bg-neutral-50" id="plans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-neutral-900 mb-4 tracking-tight">
            One team. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Transparent pricing.</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            No per-seat madness. No hidden fees. Pay for your company's output, not headcount.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TIERS.map(tier => (
            <Card 
              key={tier.tier} 
              variant={tier.featured ? 'elevated' : 'default'} 
              padding="lg" 
              className={`relative flex flex-col ${tier.featured ? 'border-primary-200/60 shadow-glow-primary/10' : ''}`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-soft-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{tier.tier}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-neutral-900">$</span>
                  <span className="text-5xl font-heading font-bold text-neutral-900 tracking-tight">{tier.price}</span>
                  <span className="text-neutral-500 font-medium">{tier.per}</span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed min-h-[60px]">
                  {tier.desc}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex gap-3 text-sm text-neutral-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full h-12 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  tier.featured 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-glow-primary active:scale-[0.98]' 
                    : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 active:scale-[0.98]'
                }`}
                onClick={openOnboarding}
              >
                {tier.cta}
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
