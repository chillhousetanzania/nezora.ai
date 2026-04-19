import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EMPLOYEES, type Employee } from '../data/employees'

type View = 'chart' | 'teams' | 'roster'

const DEPARTMENTS = [
  { name: 'Leadership', empIndices: [0] },
  { name: 'Growth', empIndices: [1, 5, 6] },
  { name: 'Product & Eng', empIndices: [2, 3, 4] },
  { name: 'Business Ops', empIndices: [7, 8, 10, 11] },
  { name: 'Intelligence', empIndices: [9] },
]

const ORG_STRUCTURE = [
  { level: 'founder', label: 'You', sub: 'Founder & Owner', idx: null },
  { level: 'ceo', label: 'CEO', sub: 'Ava Chen', idx: 0 },
  { level: 'heads', indices: [1, 2, 3, 4, 5] },
  { level: 'reports', indices: [6, 7, 8, 9, 10, 11] },
]

function ProfileModal({ emp, onClose }: { emp: Employee; onClose: () => void }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.2s ease' }} onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line-2)', borderRadius: 14, width: 480, maxWidth: 'calc(100vw - 32px)', padding: 32, animation: 'slideUp 0.3s ease-out' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--bg-3)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 16, fontWeight: 600, color: 'var(--accent)', flexShrink: 0 }}>
            {emp.initials}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 2 }}>{emp.role}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.06em', marginBottom: 4 }}>{emp.title}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--muted)' }}>{emp.name}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.06em' }}>
            <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', animation: 'pulse 2s ease-in-out infinite', display: 'inline-block' }} />
            online
          </div>
        </div>

        <div style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 20 }}>{emp.desc}</div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>tools</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {emp.tools.map(t => (
              <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-2)', background: 'var(--bg-3)', border: '1px solid var(--line-2)', padding: '4px 10px', borderRadius: 5, letterSpacing: '0.06em' }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
          <Link to="/hq" style={{ flex: 1, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.06em', color: '#0A0B0D', background: 'var(--accent)', border: 'none', padding: '10px', borderRadius: 7, cursor: 'pointer', fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}>Open in HQ →</Link>
          <button onClick={onClose} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.06em', color: 'var(--text-2)', background: 'var(--bg-3)', border: '1px solid var(--line-2)', padding: '10px 16px', borderRadius: 7, cursor: 'pointer' }}>Close</button>
        </div>
      </div>
    </div>
  )
}

function OrgNode({ emp, onClick }: { emp: Employee; onClick: () => void }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
      <div style={{ width: 48, height: 48, borderRadius: 10, background: 'var(--bg-3)', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', transition: 'border-color 0.15s, color 0.15s' }} className="org-node">
        {emp.initials}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)' }}>{emp.role}</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.04em' }}>{emp.name.split(' ')[0]}</div>
      </div>
    </div>
  )
}

export default function OrgPage() {
  const [view, setView] = useState<View>('chart')
  const [selected, setSelected] = useState<Employee | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, height: 52, display: 'flex', alignItems: 'center', padding: '0 24px', borderBottom: '1px solid var(--line)', background: 'rgba(10,11,13,0.9)', backdropFilter: 'blur(16px)', gap: 16 }}>
        <Link to="/" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          nezora<span style={{ color: 'var(--accent)' }}>.ai</span>
        </Link>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.06em' }}>/org</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <Link to="/" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textDecoration: 'none', padding: '4px 10px', border: '1px solid var(--line)', borderRadius: 5, letterSpacing: '0.06em' }}>← site</Link>
          <Link to="/hq" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#0A0B0D', background: 'var(--accent)', textDecoration: 'none', padding: '5px 14px', borderRadius: 5, fontWeight: 600, letterSpacing: '0.06em' }}>Open HQ →</Link>
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>// the team</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 12 }}>
            Meet the twelve people<br /><em>running your company</em>
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 480, lineHeight: 1.6, marginBottom: 28 }}>
            Every role covered. Every seat filled. Your full team — operational from day one.
          </p>
          {/* View toggle */}
          <div style={{ display: 'flex', gap: 4, background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 8, padding: 4, width: 'fit-content' }}>
            {([['chart', 'Org chart'], ['teams', 'By dept'], ['roster', 'Full roster']] as const).map(([v, label]) => (
              <button key={v} onClick={() => setView(v as View)} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.06em', padding: '6px 14px', borderRadius: 5, border: 'none', cursor: 'pointer', background: view === v ? 'var(--bg-3)' : 'transparent', color: view === v ? 'var(--accent)' : 'var(--muted)', transition: 'all 0.15s' }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Org chart view */}
        {view === 'chart' && (
          <div>
            {/* You */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--bg-3)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>You</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)' }}>Founder</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.04em' }}>owner & director</div>
                </div>
              </div>
            </div>
            {/* Connector */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
              <div style={{ width: 1, height: 32, background: 'var(--line-2)' }} />
            </div>
            {/* CEO */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
              <OrgNode emp={EMPLOYEES[0]} onClick={() => setSelected(EMPLOYEES[0])} />
            </div>
            {/* Connector to heads */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
              <div style={{ width: 1, height: 24, background: 'var(--line-2)' }} />
            </div>
            {/* Horizontal bar */}
            <div style={{ position: 'relative', marginBottom: 0 }}>
              <div style={{ height: 1, background: 'var(--line-2)', margin: '0 12%' }} />
            </div>
            {/* Heads row */}
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 0, padding: '0 8%' }}>
              {[1, 2, 3, 4, 5].map(idx => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                  <div style={{ width: 1, height: 24, background: 'var(--line-2)' }} />
                  <OrgNode emp={EMPLOYEES[idx]} onClick={() => setSelected(EMPLOYEES[idx])} />
                </div>
              ))}
            </div>
            {/* Connector to reports */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
              <div style={{ width: 1, height: 20, background: 'var(--line-2)' }} />
            </div>
            <div style={{ height: 1, background: 'var(--line-2)', margin: '0 6%', marginBottom: 0 }} />
            {/* Reports row */}
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 4%' }}>
              {[6, 7, 8, 9, 10, 11].map(idx => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 1, height: 20, background: 'var(--line-2)' }} />
                  <OrgNode emp={EMPLOYEES[idx]} onClick={() => setSelected(EMPLOYEES[idx])} />
                </div>
              ))}
            </div>

            {/* Legend */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginTop: 60 }}>
              <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: '8px 0 0 8px', padding: '20px 24px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>how hierarchy works</div>
                <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}>You direct the CEO. The CEO coordinates department heads. Each head manages their specialists. Orders flow top-down; work and insights flow back up.</div>
              </div>
              <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>how to give orders</div>
                <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}>Message any employee directly in HQ. Brief the CEO for company-wide missions. Each employee reports back on their progress automatically.</div>
              </div>
            </div>
          </div>
        )}

        {/* Teams view */}
        {view === 'teams' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {DEPARTMENTS.map(dept => (
              <div key={dept.name} style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 8, padding: '20px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>{dept.name}</div>
                {dept.empIndices.map(idx => {
                  const emp = EMPLOYEES[idx]
                  return (
                    <div key={emp.initials} onClick={() => setSelected(emp)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--line)', cursor: 'pointer' }}>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--bg-3)', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 9, fontWeight: 600, color: 'var(--text-2)', flexShrink: 0 }}>{emp.initials}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{emp.role}</div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.04em' }}>{emp.name}</div>
                      </div>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s ease-in-out infinite' }} />
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        )}

        {/* Roster view */}
        {view === 'roster' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {EMPLOYEES.map(emp => (
              <div key={emp.initials} onClick={() => setSelected(emp)} style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 8, padding: '20px', cursor: 'pointer', transition: 'background 0.15s, border-color 0.15s' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--bg-3)', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 12 }}>{emp.initials}</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: 2 }}>{emp.role}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.06em', marginBottom: 8 }}>{emp.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.55, marginBottom: 12 }}>{emp.desc}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {emp.tools.map(t => (
                    <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', background: 'var(--bg-3)', border: '1px solid var(--line)', padding: '3px 7px', borderRadius: 4, letterSpacing: '0.06em' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 80, padding: '60px 0', borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>// they're waiting</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 20 }}>Ready to give your first order?</h2>
          <Link to="/hq" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: '#0A0B0D', background: 'var(--accent)', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, letterSpacing: '0.06em' }}>Open HQ →</Link>
        </div>
      </div>

      {selected && <ProfileModal emp={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
