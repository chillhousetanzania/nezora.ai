import { useLanding } from '../../context/LandingContext'

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
    <section className="section" id="plans">
      <div className="section-label">// pricing</div>
      <h2 className="section-title">One team. <em>Transparent pricing.</em></h2>
      <p className="section-sub">
        No per-seat madness. No hidden fees. Pay for your company's output, not headcount.
      </p>

      <div className="pricing-grid">
        {TIERS.map(tier => (
          <div key={tier.tier} className={`pricing-card${tier.featured ? ' featured' : ''}`}>
            {tier.featured && <div className="pricing-badge">most popular</div>}
            <div className="pricing-tier">{tier.tier}</div>
            <div className="pricing-price">
              <sup>$</sup>{tier.price}
            </div>
            <div className="pricing-per">{tier.per}</div>
            <div className="pricing-desc">{tier.desc}</div>
            <ul className="pricing-features">
              {tier.features.map(f => (
                <li key={f} className="pricing-feature">
                  <span className="pricing-feature-plus">+</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`pricing-cta ${tier.featured ? 'primary' : 'outline'}`}
              onClick={openOnboarding}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
