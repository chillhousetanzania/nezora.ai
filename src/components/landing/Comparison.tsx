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
    <section className="section">
      <div className="section-label">// the difference</div>
      <h2 className="section-title">Monday 9:00 AM</h2>

      <div className="compare-grid">
        <div className="compare-card">
          <div className="compare-label before">without nezora</div>
          {BEFORE.map(item => (
            <div key={item} className="compare-item">
              <span className="compare-icon" style={{ color: 'var(--warn)' }}>✕</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="compare-card">
          <div className="compare-label after">with nezora</div>
          {AFTER.map(item => (
            <div key={item} className="compare-item">
              <span className="compare-icon" style={{ color: 'var(--accent)' }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
