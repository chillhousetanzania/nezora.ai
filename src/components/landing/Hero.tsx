import { useState } from 'react'
import { EMPLOYEES } from '../../data/employees'
import { useLanding } from '../../context/LandingContext'

const HEADLINES = [
  <>Your company.<br /><em>Fully staffed.</em><br />In 60 seconds.</>,
  <>One idea.<br /><em>Twelve experts.</em><br />Zero hiring.</>,
  <>Launch faster.<br />Scale <em>smarter.</em><br />Lead better.</>,
]

const FLOOR_SIGS = [
  [6, 10, 14, 8, 12],
  [12, 8, 14, 6, 10],
  [8, 14, 6, 12, 10],
  [10, 6, 12, 14, 8],
  [14, 10, 8, 6, 12],
  [6, 12, 10, 14, 8],
  [10, 8, 14, 6, 12],
  [12, 14, 6, 10, 8],
  [8, 6, 12, 14, 10],
  [14, 8, 10, 6, 12],
  [6, 14, 8, 12, 10],
  [10, 12, 6, 8, 14],
]

export default function Hero() {
  const { headline, openOnboarding } = useLanding()
  const [activeFloor, setActiveFloor] = useState<number | null>(null)

  const activeEmployee = activeFloor !== null ? EMPLOYEES[activeFloor] : null

  return (
    <section className="hero-section" id="hero">
      {/* Left: copy */}
      <div>
        <div className="hero-label">
          <div className="hero-dot" />
          <span>now in early access · 12 employees · always on</span>
        </div>

        <h1 className="hero-headline">
          {HEADLINES[headline]}
        </h1>

        <p className="hero-lead">
          Register your idea. In seconds, your company comes to life — complete with a fully operational team of AI-powered employees who execute, collaborate, and grow your business 24/7.
        </p>

        <div className="hero-ctas">
          <button className="btn-hero" onClick={openOnboarding}>
            Launch your company
            <span style={{ fontSize: 16 }}>→</span>
          </button>
          <a href="#how" className="btn-hero-ghost" onClick={e => { e.preventDefault(); document.querySelector('#how')?.scrollIntoView({ behavior: 'smooth' }) }}>
            See how it works
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-stat">
            <div className="hero-stat-val">12</div>
            <div className="hero-stat-key">employees</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">&lt;60s</div>
            <div className="hero-stat-key">to launch</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">24/7</div>
            <div className="hero-stat-key">operations</div>
          </div>
        </div>
      </div>

      {/* Right: Tower */}
      <div className="tower-frame">
        <div className="tower-grid-bg" />
        <div className="tower-corner tl" />
        <div className="tower-corner tr" />
        <div className="tower-corner bl" />
        <div className="tower-corner br" />

        <div className="tower-header">
          <span className="tower-title">// nezora hq</span>
          <span className="tower-online">
            <span className="tower-online-dot" />
            all systems on
          </span>
        </div>

        <div className="tower-floors" style={{ position: 'relative' }}>
          {EMPLOYEES.map((emp, i) => (
            <div
              key={emp.floorNum}
              className={`tower-floor${activeFloor === i ? ' active' : ''}`}
              onMouseEnter={() => setActiveFloor(i)}
              onMouseLeave={() => setActiveFloor(null)}
            >
              <span className="floor-num">{emp.floorNum}</span>
              <span className="floor-name">{emp.floorLabel}</span>
              <div className="floor-sig">
                {FLOOR_SIGS[i].map((h, j) => (
                  <div key={j} className="floor-sig-bar" style={{ height: h }} />
                ))}
              </div>

              {activeFloor === i && (
                <div className="tower-detail">
                  <div className="tower-detail-role">{emp.role}</div>
                  <div className="tower-detail-title">{emp.title}</div>
                  <div className="tower-detail-tools">
                    {emp.tools.map(t => (
                      <span key={t} className="tower-detail-tool">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
