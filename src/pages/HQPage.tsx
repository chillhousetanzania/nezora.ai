import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Send, BarChart3, Rocket, Settings, LayoutGrid, Link2, TrendingUp, TrendingDown, ChevronRight, Users, Activity, Briefcase, Package } from 'lucide-react'
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

const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutGrid },
  { label: 'Missions', icon: Rocket },
  { label: 'Outputs', icon: Package },
  { label: 'Integrations', icon: Link2 },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Settings', icon: Settings },
]

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
    <svg width={w} height={h} className="overflow-visible">
      <polyline points={pts} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-primary-400" />
    </svg>
  )
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string }> = {
    running: { bg: 'bg-success-50 border-success-500/20', text: 'text-success-600' },
    review: { bg: 'bg-warning-50 border-warning-500/20', text: 'text-warning-600' },
    queued: { bg: 'bg-neutral-100 border-neutral-200', text: 'text-neutral-500' },
  }
  const c = config[status] || config.queued
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider border ${c.bg} ${c.text}`}>
      {status}
    </span>
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
    const t = setTimeout(() => setIntroOpen(false), 2000)
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
    <div className="h-screen flex flex-col bg-neutral-50 text-neutral-900 overflow-hidden relative">

      {/* Intro overlay */}
      <AnimatePresence>
        {introOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-soft-md">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-heading text-xl font-semibold text-neutral-800 tracking-tight">Welcome to HQ</h2>
            <p className="text-sm text-neutral-500">Loading your company dashboard...</p>
            <div className="w-24 h-1 bg-neutral-200 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top bar */}
      <div className="h-14 border-b border-neutral-200/60 flex items-center px-5 gap-4 flex-shrink-0 bg-white/80 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-soft-sm">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-semibold text-base text-neutral-800 tracking-tight">Nezora</span>
        </Link>
        <span className="text-xs text-neutral-400 font-medium">/hq</span>
        <div className="ml-auto flex gap-3 items-center">
          <span className="flex items-center gap-2 text-xs font-medium text-success-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
            </span>
            All systems on
          </span>
          <Link to="/org" className="text-xs text-neutral-500 no-underline px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors font-medium">
            Org Chart →
          </Link>
          <Link to="/" className="text-xs text-neutral-500 no-underline px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors font-medium">
            ← Site
          </Link>
        </div>
      </div>

      {/* 3-column body */}
      <div className="flex-1 grid grid-cols-[240px_1fr_320px] overflow-hidden">

        {/* Sidebar */}
        <div className="border-r border-neutral-200/60 flex flex-col overflow-hidden bg-white">
          {/* Company card */}
          <div className="p-4 border-b border-neutral-100">
            <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1">Your Company</p>
            <h3 className="text-base font-semibold text-neutral-800 mb-3">Founder HQ</h3>
            <div className="flex gap-5">
              <div>
                <div className="text-lg font-bold text-primary-500 leading-tight">$4.3K</div>
                <div className="text-[10px] text-neutral-400 font-medium uppercase">MRR</div>
              </div>
              <div>
                <div className="text-lg font-bold text-neutral-800 leading-tight">1,847</div>
                <div className="text-[10px] text-neutral-400 font-medium uppercase">Subs</div>
              </div>
              <div>
                <div className="text-lg font-bold text-success-500 leading-tight">+8%</div>
                <div className="text-[10px] text-neutral-400 font-medium uppercase">7d</div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="p-2 border-b border-neutral-100">
            {NAV_ITEMS.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 cursor-pointer text-sm font-medium transition-colors ${
                    i === 0
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </div>
              )
            })}
          </div>

          {/* Team roster */}
          <div className="flex-1 overflow-auto p-2">
            <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-2 px-2">Team · 12 online</p>
            {EMPLOYEES.map((e, i) => (
              <div
                key={e.initials}
                onClick={() => setActiveAgent(i)}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer transition-all mb-0.5 ${
                  activeAgent === i
                    ? 'bg-neutral-100 border border-neutral-200/50'
                    : 'border border-transparent hover:bg-neutral-50'
                }`}
              >
                <div className={`w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                  activeAgent === i
                    ? 'bg-primary-100 text-primary-600 border border-primary-200'
                    : 'bg-neutral-100 text-neutral-500 border border-neutral-200/50'
                }`}>
                  {e.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-neutral-700 truncate">{e.role}</div>
                  <div className="text-[11px] text-neutral-400 truncate">{e.name.split(' ')[0]}</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-success-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="overflow-auto p-6 bg-neutral-50">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1">Week Overview</p>
              <h1 className="text-2xl font-heading font-semibold text-neutral-800 tracking-tight">Your company is running.</h1>
            </div>
            <div className="flex gap-2">
              <button className="text-sm text-neutral-600 bg-white border border-neutral-200 px-4 py-2 rounded-xl hover:bg-neutral-50 transition-colors font-medium shadow-soft-xs">
                New mission
              </button>
              <button className="text-sm text-white bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 rounded-xl font-semibold hover:shadow-glow-primary transition-all shadow-soft-sm">
                Brief team →
              </button>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {KPI_DATA.map(kpi => (
              <div key={kpi.label} className="bg-white rounded-2xl border border-neutral-200/50 p-4 shadow-soft-xs hover:shadow-soft-sm transition-shadow">
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">{kpi.label}</p>
                <div className="text-2xl font-bold text-neutral-800 tracking-tight mb-1">{kpi.value}</div>
                <div className="flex justify-between items-end">
                  <div className={`flex items-center gap-1 text-xs font-semibold ${kpi.up ? 'text-success-500' : 'text-error-500'}`}>
                    {kpi.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {kpi.delta}
                  </div>
                  <Sparkline data={kpi.spark} />
                </div>
              </div>
            ))}
          </div>

          {/* Activity + Missions */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* Activity */}
            <div className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-primary-500" />
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overnight Activity</h3>
              </div>
              <div className="space-y-3">
                {ACTIVITY.map(a => (
                  <div key={a.time + a.agent} className="flex gap-3 pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                    <span className="text-[11px] text-neutral-400 font-mono flex-shrink-0 pt-0.5">{a.time}</span>
                    <span className="text-[11px] text-primary-500 font-semibold flex-shrink-0 pt-0.5">{a.agent}</span>
                    <span className="text-sm text-neutral-600 leading-relaxed">{a.msg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Missions */}
            <div className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-4 h-4 text-secondary-500" />
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Missions in Flight</h3>
              </div>
              <div className="space-y-4">
                {MISSIONS.map(m => (
                  <div key={m.title}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-neutral-700">{m.title}</span>
                      <StatusBadge status={m.status} />
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            m.status === 'queued' ? 'bg-neutral-300' : 'bg-gradient-to-r from-primary-400 to-secondary-400'
                          }`}
                          style={{ width: `${m.progress}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-neutral-400 font-medium w-8 text-right">{m.progress}%</span>
                      <span className="text-[11px] text-neutral-400">{m.owner}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shipped */}
          <div className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-4 h-4 text-success-500" />
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Shipped Overnight</h3>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {SHIPPED.map(s => (
                <div key={s.label} className="bg-neutral-50 rounded-xl border border-neutral-100 p-3 text-center hover:bg-white hover:shadow-soft-xs hover:border-neutral-200 transition-all cursor-default">
                  <div className="text-xl mb-2">{s.icon}</div>
                  <div className="text-xs font-semibold text-neutral-700 mb-0.5">{s.label}</div>
                  <div className="text-[10px] text-neutral-400">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat rail */}
        <div className="border-l border-neutral-200/60 flex flex-col overflow-hidden bg-white">
          {/* Agent header */}
          <div className="p-4 border-b border-neutral-100 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center text-sm font-bold text-primary-600">
                {emp.initials}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-neutral-800">{emp.role}</div>
                <div className="text-xs text-neutral-400">{emp.title}</div>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-success-600 bg-success-50 border border-success-500/20 px-2 py-1 rounded-md uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                Online
              </span>
            </div>
          </div>

          {/* Chat tabs */}
          <div className="flex border-b border-neutral-100 flex-shrink-0">
            {['Chat', 'Brief', 'Logs'].map((tab, i) => (
              <div key={tab} className={`flex-1 py-2.5 text-center text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors ${
                i === 0
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-neutral-400 border-b-2 border-transparent hover:text-neutral-600'
              }`}>
                {tab}
              </div>
            ))}
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 overflow-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-neutral-900 text-white rounded-2xl rounded-br-sm'
                    : 'bg-neutral-100 text-neutral-700 rounded-2xl rounded-bl-sm border border-neutral-200/50'
                }`}>
                  {msg.text}
                </div>
                <span className="text-[10px] text-neutral-400 mt-1 px-1">{msg.time}</span>
              </div>
            ))}
            {typing && (
              <div className="flex items-center gap-1.5">
                <div className="px-3.5 py-3 bg-neutral-100 rounded-2xl rounded-bl-sm border border-neutral-200/50 flex gap-1 items-center">
                  {[0, 1, 2].map(d => (
                    <motion.div
                      key={d}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
                      className="w-1.5 h-1.5 rounded-full bg-neutral-400"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-neutral-100 flex-shrink-0">
            <div className="flex gap-2">
              <input
                className="flex-1 bg-neutral-50 border border-neutral-200/50 rounded-xl px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                placeholder={`Message ${emp.role}...`}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send() }}
              />
              <button
                onClick={send}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-soft-sm active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
