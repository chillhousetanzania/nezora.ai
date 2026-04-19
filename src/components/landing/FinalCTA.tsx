import { useLanding } from '../../context/LandingContext'

export default function FinalCTA() {
  const { openOnboarding } = useLanding()

  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label" style={{ marginBottom: 20 }}>// launch</div>
        <h2 className="cta-title">
          Your company is waiting.<br />
          <em>Launch it today.</em>
        </h2>
        <p className="cta-sub">
          Register your idea. Meet your team. Start building — in under 60 seconds.
        </p>
        <div className="cta-actions">
          <button className="btn-hero" onClick={openOnboarding}>
            Launch your company
            <span style={{ fontSize: 16 }}>→</span>
          </button>
          <a
            href="#team"
            className="btn-hero-ghost"
            onClick={e => { e.preventDefault(); document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Meet the team first
          </a>
        </div>
      </div>
    </section>
  )
}
