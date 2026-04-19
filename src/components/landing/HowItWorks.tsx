const STEPS = [
  {
    num: '01',
    title: 'Describe your idea',
    desc: 'Tell us what you\'re building in plain language. No business plan required — a sentence is enough to get started.',
    visual: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          background: 'var(--bg-3)', border: '1px solid var(--line-2)', borderRadius: 6,
          padding: '8px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
          color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span>An app for dog owners</span>
          <span style={{ display: 'inline-block', width: 2, height: '1em', background: 'var(--accent)', verticalAlign: 'text-bottom', animation: 'blink 0.9s step-end infinite' }} />
        </div>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Meet your team',
    desc: 'Your company assembles instantly — 12 specialised employees appear, each ready to take ownership of their domain.',
    visual: (
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {['AC', 'MW', 'DK', 'ZF', 'LP', 'RS'].map((init, i) => (
          <div key={init} style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'var(--bg-3)', border: '1px solid var(--line-2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9, fontWeight: 600,
            color: 'var(--accent)',
            animation: `logIn 0.4s ease ${i * 0.08}s both`,
          }}>{init}</div>
        ))}
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)' }}>+6</span>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Give orders, they execute',
    desc: 'Chat with any employee, assign missions, and watch work happen in real time — posts go live, code gets shipped, deals get closed.',
    visual: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[
          { from: 'You', msg: 'Launch our Instagram today', color: 'var(--text-2)' },
          { from: 'CMO', msg: 'On it — first 3 posts scheduled ✓', color: 'var(--accent)' },
        ].map(b => (
          <div key={b.from} style={{
            background: 'var(--bg-3)', border: '1px solid var(--line)', borderRadius: 6,
            padding: '6px 10px', display: 'flex', gap: 8, alignItems: 'baseline',
          }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: b.color, flexShrink: 0 }}>{b.from}</span>
            <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{b.msg}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="section-label">// how it works</div>
      <h2 className="section-title">Three steps to a <em>running company</em></h2>
      <p className="section-sub">No hiring. No onboarding. No management overhead. Just describe, meet, and lead.</p>

      <div className="how-grid">
        {STEPS.map(step => (
          <div key={step.num} className="how-step">
            <div className="how-num">// {step.num}</div>
            <div className="how-visual">{step.visual}</div>
            <div className="how-title">{step.title}</div>
            <div className="how-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
