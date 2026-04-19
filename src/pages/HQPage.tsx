import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { EMPLOYEES } from '../data/employees'

const KPI_DATA = [
  { label: 'MRR', value: '$4,280', delta: '+12%', up: true, spark: [30, 38, 35, 42, 48, 44, 52, 58, 55, 62] },
  { label: 'Subscribers', value: '1,847', delta: '+8%', up: true, spark: [20, 24, 22, 28, 30, 27, 32, 35, 38, 42] },
  { label: '7-Day Reach', value: '94.2K', delta: '+21%', up: true, spark: [40, 45, 42, 50, 55, 60, 57, 65, 70, 75] },
  { label: 'Open Tickets', value: '3', delta: '-40%', up: false, spark: [12, 10, 14, 8, 10, 7, 9, 6, 5, 3] },
]

const ACTIVITY = [
  { time: '09:14', agent: 'CMO', msg: 'Published 3 Instagram posts — combined reach 14.2K', type: 'post' },
  { time: '08:52', agent: 'Engineering', msg: 'Merged PR #47: payment flow v2 to main', type: 'code' },
  { time: '08:31', agent: 'Sales', msg: 'Demo booked with Arko Labs — Wednesday 14:00', type: 'sales' },
  { time: '07:58', agent: 'Content', msg: 'Weekly reel uploaded to TikTok — 2.1K views in 1h', type: 'post' },
  { time: '07:20', agent: 'CFO', msg: 'Monthly P&L ready for review in Notion', type: 'finance' },
  { time: '06:44', agent: 'Support', msg: 'Closed 4 tickets — avg resolution time 8 min', type: 'support' },
]

const MISSIONS = [
  { title: 'Q2 growth campaign', owner: 'CMO', progress: 72, status: 'running' },
  { title: 'Checkout redesign', owner: 'Design', progress: 45, status: 'running' },
  { title: 'Investor deck v3', owner: 'CEO', progress: 90, status: 'review' },
  { title: 'Support knowledge base', owner: 'Support', progress: 20, status: 'queued' },
]

const SHIPPED = [
  { type: 'reel', label: 'TikTok Reel', sub: '2.1K views', icon: '🎵' },
  { type: 'post', label: 'IG Carousel', sub: '4 slides', icon: '📷' },
  { type: 'code', label: 'PR #47 merged', sub: 'payment flow', icon: '⚡' },
  { type: 'brief', label: 'Campaign brief', sub: 'Q2 launch', icon: '📋' },
  { type: 'post', label: 'X thread', sub: '12 posts', icon: '𝕏' },
  { type: 'ad', label: 'Ad set live', sub: '$40/day', icon: '📊' },
]

const AGENT_REPLIES: Record<string, string[]> = {
  CEO: ['Working on the Q3 strategy now. I\'ll have a draft in Notion by EOD.', 'Reviewed the investor deck — a few changes flagged. Check Notion.', 'Weekly priorities locked. Let\'s focus on growth and retention this week.'],
  CMO: ['Campaign metrics are looking strong. Engagement up 18% this week.', 'Scheduling next week\'s posts now. Any themes you want me to prioritise?', 'Competitor analysis done — I found 3 content gaps we should own.'],
  Engineering: ['PR #47 is merged. Working on the mobile payment edge cases next.', 'Tech debt review done. I flagged 4 issues worth addressing before v2 launch.', 'CI/CD pipeline is green. All tests passing.'],
  Design: ['UI revisions for checkout are 80% done. Preview link in Figma.', 'Brand guide updated with new illustration style. Awaiting your sign-off.', 'Component library v2 is ready for Engineering hand-off.'],
  Product: ['Roadmap updated through Q3. Three features cut, two promoted.', 'User interview summary in Notion — 5 key pain points surfaced.', 'Sprint planning done. Team velocity is up 15% from last month.'],
  Content: ['Reel posted — 2.1K views in first hour. Strong open.', 'Next week\'s content calendar is drafted. 14 pieces across 4 platforms.', 'Script for the brand video is ready for your review.'],
  Sales: ['Pipeline updated — 6 active deals, $28K combined value.', 'Demo with Arko Labs booked for Wednesday. I\'ll prep the deck.', 'Outreach sequence sent to 40 new prospects this morning.'],
  Support: ['All open tickets resolved. CSAT score: 4.8/5 this week.', 'FAQ updated with 12 new entries based on recent common queries.', 'Escalation rate down to 2% — lowest this month.'],
  CFO: ['Runway is 14 months at current burn. P&L sent to Notion.', 'Invoice to Arko Labs sent. Payment terms: net 30.', 'Monthly close done. Revenue up 12% MoM.'],
  Data: ['Retention cohort analysis ready — D30 is at 68%, strong signal.', 'Dashboard updated with new funnel metrics. Conversion at 3.4%.', 'Anomaly detected in signup flow — drop at step 3. Flagged for Product.'],
  Legal: ['NDA reviewed and clean. Ready to send to Arko Labs.', 'Privacy policy updated for GDPR compliance. Published.', 'IP registration filed. ETA 6–8 weeks for confirmation.'],
  'HR & Ops': ['All internal processes documented in Notion this week.', 'Onboarding checklist updated. Ready for next hire.', 'Team retrospective notes sent — 3 action items logged.'],
}

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const w = 64, h = 24
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export default function HQPage() {
  const [activeAgent, setActiveAgent] = useState(0)
  const [messages, setMessages] = useState<{ from: 'user' | 'agent'; text: string; time: string }[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const [introOpen, setIntroOpen] = useState(true)

  const emp = EMPLOYEES[activeAgent]

  useEffect(() => {
    const greeting = (AGENT_REPLIES[emp.role] || AGENT_REPLIES['CEO'])[0]
    setMessages([{ from: 'agent', text: greeting, time: now() }])
  }, [activeAgent])

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages, typing])

  useEffect(() => {
    const t = setTimeout(() => setIntroOpen(false), 2400)
    return () => clearTimeout(t)
  }, [])

  function now() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const send = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMsg, time: now() }])
    setTyping(true)
    setTimeout(() => {
      const replies = AGENT_REPLIES[emp.role] || AGENT_REPLIES['CEO']
      const reply = replies[Math.floor(Math.random() * replies.length)]
      setMessages(prev => [...prev, { from: 'agent', text: reply, time: now() }])
      setTyping(false)
    }, 1400 + Math.random() * 600)
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)', color: 'var(--text)', overflow: 'hidden', position: 'relative' }}>

      {/* Intro overlay */}
      {introOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, transition: 'opacity 0.4s', opacity: introOpen ? 1 : 0 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 18, fontWeight: 600, letterSpacing: '0.06em', color: 'var(--text)' }}>nezora<span style={{ color: 'var(--accent)' }}>.ai</span></div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.08em' }}>welcome, founder · booting HQ<span className="cursor" /></div>
          <div style={{ width: 100, height: 2, background: 'var(--line-2)', borderRadius: 1, overflow: 'hidden', marginTop: 4 }}>
            <div style={{ height: '100%', background: 'var(--accent)', animation: 'fill 2s cubic-bezier(0.4,0,0.2,1) forwards' }} />
          </div>
        </div>
      )}

      {/* Top bar */}
      <div style={{ height: 52, borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', padding: '0 20px', gap: 16, flexShrink: 0, background: 'var(--bg-2)' }}>
        <Link to="/" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          nezora<span style={{ color: 'var(--accent)' }}>.ai</span>
        </Link>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.06em' }}>/hq</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.06em' }}>
            <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', animation: 'pulse 2s ease-in-out infinite' }} />
            all systems on
          </span>
          <Link to="/org" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textDecoration: 'none', padding: '4px 10px', border: '1px solid var(--line)', borderRadius: 5, letterSpacing: '0.06em', transition: 'color 0.15s, border-color 0.15s' }}>org chart →</Link>
          <Link to="/" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', textDecoration: 'none', padding: '4px 10px', border: '1px solid var(--line)', borderRadius: 5, letterSpacing: '0.06em' }}>← site</Link>
        </div>
      </div>

      {/* 3-column body */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '240px 1fr 320px', overflow: 'hidden' }}>

        {/* Sidebar */}
        <div style={{ borderRight: '1px solid var(--line)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Company card */}
          <div style={{ padding: '16px', borderBottom: '1px solid var(--line)', background: 'var(--bg-2)' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: 6 }}>// your company</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 8 }}>Founder HQ</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent)', letterSpacing: '-0.02em' }}>$4.3K</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.06em' }}>MRR</div>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em' }}>1,847</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.06em' }}>subs</div>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent-2)', letterSpacing: '-0.02em' }}>+8%</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.06em' }}>7d</div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div style={{ padding: '12px 8px', borderBottom: '1px solid var(--line)' }}>
            {['Overview', 'Missions', 'Outputs', 'Integrations', 'Analytics', 'Settings'].map((item, i) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 6, marginBottom: 2, color: i === 0 ? 'var(--accent)' : 'var(--text-2)', background: i === 0 ? 'rgba(165,242,106,0.08)' : 'transparent', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.04em' }}>
                {item}
              </div>
            ))}
          </div>

          {/* Team roster */}
          <div style={{ flex: 1, overflow: 'auto', padding: '12px 8px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8, padding: '0 4px' }}>team · 12 online</div>
            {EMPLOYEES.map((emp, i) => (
              <div
                key={emp.initials}
                onClick={() => setActiveAgent(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 8px', borderRadius: 6, marginBottom: 2, cursor: 'pointer', background: activeAgent === i ? 'var(--bg-3)' : 'transparent', border: `1px solid ${activeAgent === i ? 'var(--line-2)' : 'transparent'}`, transition: 'background 0.12s' }}
              >
                <div style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--bg-3)', border: `1px solid ${activeAgent === i ? 'var(--accent)' : 'var(--line-2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 9, fontWeight: 600, color: activeAgent === i ? 'var(--accent)' : 'var(--text-2)', flexShrink: 0 }}>
                  {emp.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{emp.role}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.04em' }}>{emp.name.split(' ')[0]}</div>
                </div>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, animation: 'pulse 2s ease-in-out infinite' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div style={{ overflow: 'auto', padding: '24px' }}>
          <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>// week overview</div>
              <h1 style={{ fontSize: 22, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em' }}>Your company is running.</h1>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-2)', background: 'var(--bg-3)', border: '1px solid var(--line-2)', padding: '7px 14px', borderRadius: 6, cursor: 'pointer', letterSpacing: '0.04em' }}>New mission</button>
              <button style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#0A0B0D', background: 'var(--accent)', border: 'none', padding: '7px 14px', borderRadius: 6, cursor: 'pointer', fontWeight: 600, letterSpacing: '0.04em' }}>Brief team →</button>
            </div>
          </div>

          {/* KPI cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginBottom: 24 }}>
            {KPI_DATA.map(kpi => (
              <div key={kpi.label} style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 8, padding: '16px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: 8 }}>{kpi.label}</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 4 }}>{kpi.value}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: kpi.up ? 'var(--accent)' : 'var(--warn)', letterSpacing: '0.04em' }}>{kpi.delta}</span>
                  <Sparkline data={kpi.spark} />
                </div>
              </div>
            ))}
          </div>

          {/* Activity + Missions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 24 }}>
            {/* Activity */}
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 8, padding: '16px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: 14, textTransform: 'uppercase' }}>// overnight activity</div>
              {ACTIVITY.map(a => (
                <div key={a.time + a.agent} style={{ display: 'flex', gap: 10, paddingBottom: 10, marginBottom: 10, borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', flexShrink: 0 }}>{a.time}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', flexShrink: 0, fontWeight: 500 }}>[{a.agent}]</span>
                  <span style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.5 }}>{a.msg}</span>
                </div>
              ))}
            </div>

            {/* Missions */}
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 8, padding: '16px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: 14, textTransform: 'uppercase' }}>// missions in flight</div>
              {MISSIONS.map(m => (
                <div key={m.title} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{m.title}</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: m.status === 'running' ? 'var(--accent)' : m.status === 'review' ? 'var(--accent-2)' : 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.status}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <div style={{ flex: 1, height: 3, background: 'var(--line-2)', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${m.progress}%`, background: m.status === 'queued' ? 'var(--muted)' : 'var(--accent)', borderRadius: 2, transition: 'width 0.6s ease' }} />
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.04em', flexShrink: 0 }}>{m.progress}%</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)' }}>{m.owner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipped */}
          <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 8, padding: '16px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: 14, textTransform: 'uppercase' }}>// shipped overnight</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
              {SHIPPED.map(s => (
                <div key={s.label} style={{ background: 'var(--bg-3)', border: '1px solid var(--line)', borderRadius: 8, padding: '12px 10px', textAlign: 'center', cursor: 'default' }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text)', marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.04em' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat rail */}
        <div style={{ borderLeft: '1px solid var(--line)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Agent header */}
          <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', background: 'var(--bg-2)', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--bg-3)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 600, color: 'var(--accent)' }}>
                {emp.initials}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em' }}>{emp.role}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.04em' }}>{emp.title}</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--accent)', background: 'rgba(165,242,106,0.1)', border: '1px solid rgba(165,242,106,0.2)', padding: '3px 7px', borderRadius: 4, letterSpacing: '0.06em' }}>online</span>
              </div>
            </div>
          </div>

          {/* Chat tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--line)', flexShrink: 0 }}>
            {['chat', 'brief', 'logs'].map((tab, i) => (
              <div key={tab} style={{ flex: 1, padding: '8px', textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.06em', color: i === 0 ? 'var(--accent)' : 'var(--muted)', borderBottom: i === 0 ? '2px solid var(--accent)' : '2px solid transparent', cursor: 'pointer' }}>
                {tab}
              </div>
            ))}
          </div>

          {/* Messages */}
          <div ref={chatRef} style={{ flex: 1, overflow: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '85%', padding: '10px 12px', borderRadius: msg.from === 'user' ? '10px 10px 2px 10px' : '10px 10px 10px 2px', background: msg.from === 'user' ? 'var(--accent)' : 'var(--bg-3)', color: msg.from === 'user' ? '#0A0B0D' : 'var(--text)', fontSize: 13, lineHeight: 1.5, border: msg.from === 'agent' ? '1px solid var(--line-2)' : 'none' }}>
                  {msg.text}
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--muted)', marginTop: 3, letterSpacing: '0.04em' }}>{msg.time}</span>
              </div>
            ))}
            {typing && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ padding: '8px 12px', background: 'var(--bg-3)', border: '1px solid var(--line-2)', borderRadius: '10px 10px 10px 2px', display: 'flex', gap: 4, alignItems: 'center' }}>
                  {[0, 1, 2].map(d => (
                    <div key={d} className="typing-dot" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--muted)' }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ padding: '12px', borderTop: '1px solid var(--line)', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                style={{ flex: 1, background: 'var(--bg-3)', border: '1px solid var(--line-2)', borderRadius: 7, padding: '9px 12px', fontSize: 13, color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif', outline: 'none' }}
                placeholder={`Message ${emp.role}...`}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send() }}
              />
              <button onClick={send} style={{ background: 'var(--accent)', border: 'none', borderRadius: 7, padding: '9px 14px', color: '#0A0B0D', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, cursor: 'pointer', letterSpacing: '0.04em' }}>→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
