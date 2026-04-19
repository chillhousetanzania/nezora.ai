import { INTEGRATIONS } from '../../data/integrations'

export default function Integrations() {
  return (
    <section className="section" id="stack">
      <div className="section-label">// the stack</div>
      <h2 className="section-title">Connected to <em>everything</em></h2>
      <p className="section-sub">
        Your employees plug into the tools that run modern businesses — social media, payments, email, analytics, and more.
      </p>

      <div className="integrations-grid">
        {INTEGRATIONS.map(intg => (
          <div key={intg.name} className="integration-card">
            <div className="integration-icon">{intg.icon}</div>
            <div className="integration-name">{intg.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
