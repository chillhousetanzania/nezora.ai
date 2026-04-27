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
  const [activeNav, setActiveNav] = useState('Overview')
  const [mobileModal, setMobileModal] = useState<'none' | 'team' | 'chat' | 'menu'>('none')
  const [chatTab, setChatTab] = useState('Chat')

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
    <div className="h-[100dvh] flex flex-col bg-neutral-50 text-neutral-900 overflow-hidden relative">

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
      <div className="h-14 border-b border-neutral-200/60 flex items-center px-3 sm:px-5 gap-2 sm:gap-4 flex-shrink-0 bg-white/80 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-soft-sm flex-shrink-0">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-semibold text-base text-neutral-800 tracking-tight">Nezora HQ</span>
        </Link>
        <div className="ml-auto flex gap-1.5 sm:gap-3 items-center">
          <span className="flex items-center gap-2 text-xs font-medium text-success-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
            </span>
            <span className="hidden sm:inline">All systems on</span>
          </span>
          <Link to="/org" className="hidden sm:block text-xs text-neutral-500 no-underline px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors font-medium">
            Org Chart →
          </Link>
          <Link to="/" className="hidden sm:block text-xs text-neutral-500 no-underline px-2 sm:px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors font-medium">
            ← Site
          </Link>
        </div>
      </div>

      {/* Mobile Modals (Bottom Sheets) */}
      <AnimatePresence>
        {mobileModal !== 'none' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-[200] bg-neutral-900/40 backdrop-blur-sm"
              onClick={() => setMobileModal('none')}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className={`lg:hidden fixed bottom-0 left-0 right-0 z-[210] bg-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden ${mobileModal === 'chat' ? 'h-[92dvh]' : 'max-h-[85dvh]'}`}
            >
              {/* Handle bar */}
              <div className="w-full flex justify-center pt-3 pb-1 flex-shrink-0 bg-white" onClick={() => setMobileModal('none')}>
                <div className="w-12 h-1.5 bg-neutral-200 rounded-full" />
              </div>

              {/* TEAM MODAL */}
              {mobileModal === 'team' && (
                <div className="flex-1 overflow-auto p-4 pt-0">
                  <div className="mb-4 pt-2">
                    <h2 className="text-xl font-heading font-semibold text-neutral-900">Your Team</h2>
                    <p className="text-sm text-neutral-500">Select an agent to chat with.</p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-2 space-y-1">
                    {EMPLOYEES.map((e, i) => (
                      <div
                        key={e.initials}
                        onClick={() => { setActiveAgent(i); setMobileModal('chat'); }}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                          activeAgent === i ? 'bg-white shadow-soft-sm border border-neutral-200/60' : 'hover:bg-neutral-100 border border-transparent'
                        }`}
                      >
                        <div className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center text-sm font-bold ${
                          activeAgent === i ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white' : 'bg-neutral-200 text-neutral-600'
                        }`}>
                          {e.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-neutral-800">{e.role}</div>
                          <div className="text-xs text-neutral-500">{e.title}</div>
                        </div>
                        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-success-600 bg-success-50 px-2 py-1 rounded-md uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                          Online
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MENU MODAL */}
              {mobileModal === 'menu' && (
                <div className="flex-1 overflow-auto p-4 pt-0">
                  <div className="mb-4 pt-2">
                    <h2 className="text-xl font-heading font-semibold text-neutral-900">Menu</h2>
                    <p className="text-sm text-neutral-500">Navigate your company HQ.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {NAV_ITEMS.map((item) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={item.label}
                          onClick={() => { setActiveNav(item.label); setMobileModal('none'); }}
                          className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all ${
                            activeNav === item.label
                              ? 'bg-primary-50 border-primary-200 text-primary-600'
                              : 'bg-white border-neutral-200/60 text-neutral-600 hover:bg-neutral-50'
                          }`}
                        >
                          <Icon className={`w-6 h-6 ${activeNav === item.label ? 'text-primary-500' : 'text-neutral-400'}`} />
                          <span className="text-sm font-medium">{item.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* CHAT MODAL */}
              {mobileModal === 'chat' && (
                <div className="flex-1 flex flex-col overflow-hidden bg-neutral-50">
                  {/* Rich Agent Header */}
                  <div className="px-4 pb-3 pt-1 border-b border-neutral-200/60 flex items-center justify-between bg-white flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center text-sm font-bold text-primary-600">
                        {emp.initials}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-neutral-800">{emp.role}</div>
                        <div className="text-xs text-neutral-400">{emp.title}</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] font-semibold text-success-600 bg-success-50 border border-success-500/20 px-2 py-1 rounded-md uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                      Online
                    </span>
                  </div>
                  
                  {/* Chat Tabs */}
                  <div className="flex border-b border-neutral-200/60 bg-white flex-shrink-0">
                    {['Chat', 'Brief', 'Logs'].map((tab) => (
                      <div
                        key={tab}
                        onClick={() => setChatTab(tab)}
                        className={`flex-1 py-3 text-center text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors ${
                          chatTab === tab
                            ? 'text-primary-500 border-b-2 border-primary-500 bg-primary-50/30'
                            : 'text-neutral-400 border-b-2 border-transparent hover:text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>

                  {chatTab === 'Chat' ? (
                    <>
                      <div ref={chatRef} className="flex-1 overflow-auto p-4 flex flex-col gap-3">
                        {messages.map((msg, i) => (
                          <div key={i} className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                            <div className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-soft-sm ${
                              msg.from === 'user'
                                ? 'bg-gradient-to-br from-neutral-800 to-neutral-900 text-white rounded-2xl rounded-br-sm'
                                : 'bg-white text-neutral-800 rounded-2xl rounded-bl-sm border border-neutral-200/60'
                            }`}>
                              {msg.text}
                            </div>
                            <span className="text-[10px] text-neutral-400 mt-1 px-1 font-medium">{msg.time}</span>
                          </div>
                        ))}
                        {typing && (
                          <div className="flex items-center gap-1.5">
                            <div className="px-4 py-3.5 bg-white rounded-2xl rounded-bl-sm border border-neutral-200/60 shadow-soft-sm flex gap-1 items-center">
                              {[0, 1, 2].map(d => (
                                <motion.div key={d} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }} className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-3 bg-white border-t border-neutral-200/60 flex-shrink-0 pb-safe">
                        <div className="flex gap-2">
                          <input
                            className="flex-1 bg-neutral-50 border border-neutral-200/60 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all shadow-inner-xs"
                            placeholder={`Message ${emp.role}...`}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') send() }}
                          />
                          <button
                            onClick={send}
                            className="w-[46px] h-[46px] flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:shadow-glow-primary transition-all shadow-soft-sm active:scale-95"
                          >
                            <Send className="w-4 h-4 ml-0.5" />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center p-6 text-center">
                      <p className="text-sm text-neutral-400">Content for {chatTab} is not available in the current prototype.</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 3-column body */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[240px_1fr_320px] overflow-hidden">

        {/* Sidebar — hidden on mobile, shown on lg+ */}
        <div className="hidden lg:flex border-r border-neutral-200/60 flex-col overflow-hidden bg-white">
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
                  onClick={() => setActiveNav(item.label)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 cursor-pointer text-sm font-medium transition-colors ${
                    activeNav === item.label
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
        <div className="overflow-auto p-4 sm:p-6 bg-neutral-50">
          {activeNav === 'Overview' && (
            <div className="animate-in fade-in duration-300">
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {/* Activity */}
                <div className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-4 h-4 text-primary-500" />
                    <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overnight Activity</h3>
                  </div>
                  <div className="space-y-3">
                    {ACTIVITY.map((a, i) => (
                      <div key={a.time + a.agent + i} className="flex gap-3 pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
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
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
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
          )}

          {activeNav === 'Missions' && (
            <div className="animate-in fade-in duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-heading font-semibold text-neutral-800 tracking-tight">Missions</h1>
                  <p className="text-sm text-neutral-500 mt-1">Manage active and past company objectives.</p>
                </div>
                <button className="text-sm text-white bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 rounded-xl font-semibold hover:shadow-glow-primary transition-all shadow-soft-sm">
                  New Mission +
                </button>
              </div>
              <div className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-soft-xs">
                 <div className="space-y-6">
                   {MISSIONS.map(m => (
                     <div key={m.title} className="border-b border-neutral-100 last:border-0 pb-6 last:pb-0">
                       <div className="flex justify-between items-center mb-4">
                         <div>
                           <span className="text-sm font-semibold text-neutral-800 block mb-0.5">{m.title}</span>
                           <span className="text-xs text-neutral-500">Led by {m.owner}</span>
                         </div>
                         <StatusBadge status={m.status} />
                       </div>
                       <div className="flex gap-3 items-center">
                         <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                           <div
                             className={`h-full rounded-full transition-all duration-1000 ${
                               m.status === 'queued' ? 'bg-neutral-300' : 'bg-gradient-to-r from-primary-500 to-secondary-500'
                             }`}
                             style={{ width: `${m.progress}%` }}
                           />
                         </div>
                         <span className="text-xs font-medium text-neutral-700 w-10 text-right">{m.progress}%</span>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          )}

          {activeNav === 'Outputs' && (
            <div className="animate-in fade-in duration-300">
              <div className="mb-6">
                <h1 className="text-2xl font-heading font-semibold text-neutral-800 tracking-tight">Recent Outputs</h1>
                <p className="text-sm text-neutral-500 mt-1">Review work product shipped by your team.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {SHIPPED.map(s => (
                  <div key={s.label} className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs hover:shadow-soft-sm transition-shadow cursor-pointer group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-xl group-hover:bg-primary-50 transition-colors">{s.icon}</div>
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-400 bg-neutral-50 px-2 py-1 rounded-md border border-neutral-200/40">{s.type}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-800 mb-1">{s.label}</h3>
                    <p className="text-xs text-neutral-500">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeNav === 'Integrations' && (
            <div className="animate-in fade-in duration-300">
              <div className="mb-6">
                <h1 className="text-2xl font-heading font-semibold text-neutral-800 tracking-tight">Integrations</h1>
                <p className="text-sm text-neutral-500 mt-1">Connect your AI team to your essential tools.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Slack', desc: 'Team communication', connected: true, color: '#E01E5A' },
                  { name: 'Notion', desc: 'Company wiki & docs', connected: true, color: '#000000' },
                  { name: 'Github', desc: 'Code repository', connected: true, color: '#181717' },
                  { name: 'Figma', desc: 'Design systems', connected: false, color: '#F24E1E' },
                  { name: 'Linear', desc: 'Issue tracking', connected: false, color: '#5E6AD2' },
                  { name: 'Stripe', desc: 'Payments & billing', connected: true, color: '#008CDD' }
                ].map(tool => (
                  <div key={tool.name} className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-white text-lg shadow-soft-sm" style={{ backgroundColor: tool.color }}>
                      {tool.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-neutral-800">{tool.name}</h3>
                      <p className="text-xs text-neutral-500">{tool.desc}</p>
                    </div>
                    <div>
                      <div className={`w-10 h-5 rounded-full relative transition-colors cursor-pointer ${tool.connected ? 'bg-success-500' : 'bg-neutral-200'}`}>
                        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${tool.connected ? 'left-[22px]' : 'left-0.5'}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeNav === 'Analytics' && (
            <div className="animate-in fade-in duration-300">
              <div className="mb-6">
                <h1 className="text-2xl font-heading font-semibold text-neutral-800 tracking-tight">Team Analytics</h1>
                <p className="text-sm text-neutral-500 mt-1">Efficiency and velocity metrics for your AI ops.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">Tasks Completed</div>
                  <div className="text-3xl font-bold text-neutral-800">142</div>
                  <div className="text-xs text-success-500 font-medium mt-1">↑ 12% vs last week</div>
                </div>
                <div className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">Avg Resolution</div>
                  <div className="text-3xl font-bold text-neutral-800">14m</div>
                  <div className="text-xs text-success-500 font-medium mt-1">↓ 3m vs last week</div>
                </div>
                <div className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">Agent Active Time</div>
                  <div className="text-3xl font-bold text-neutral-800">98%</div>
                  <div className="text-xs text-neutral-400 font-medium mt-1">Stable</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-soft-xs flex flex-col">
                <h3 className="text-sm font-semibold text-neutral-800 mb-6">Tasks Completed (30 Days)</h3>
                <div className="flex-1 flex items-end gap-2 sm:gap-3 h-48 w-full">
                  {[24, 35, 42, 38, 55, 62, 58, 70, 85, 75, 90, 82, 95, 105].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${(h / 105) * 100}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                      className="flex-1 bg-gradient-to-t from-primary-400 to-secondary-400 rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-semibold text-neutral-400 uppercase tracking-widest border-t border-neutral-100 pt-3">
                  <span>1 Apr</span>
                  <span>15 Apr</span>
                  <span>30 Apr</span>
                </div>
              </div>
            </div>
          )}

          {activeNav === 'Settings' && (
            <div className="animate-in fade-in duration-300">
              <div className="mb-6">
                <h1 className="text-2xl font-heading font-semibold text-neutral-800 tracking-tight">HQ Settings</h1>
                <p className="text-sm text-neutral-500 mt-1">Configure your company control center.</p>
              </div>
              <div className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-soft-xs max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800 mb-2">Operating Mode</h3>
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-3 rounded-xl border-2 border-primary-500 bg-primary-50 text-primary-700 text-sm font-medium transition-all">Balanced Growth</button>
                      <button className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-600 text-sm font-medium hover:bg-neutral-50 transition-all">Aggressive Scaling</button>
                      <button className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-600 text-sm font-medium hover:bg-neutral-50 transition-all">Maintenance</button>
                    </div>
                  </div>
                  <hr className="border-neutral-100" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800 mb-1">Weekly Reports</h3>
                    <p className="text-xs text-neutral-500 mb-3">Receive a comprehensive PDF breakdown every Monday morning.</p>
                    <div className="flex items-center gap-2">
                       <div className="w-10 h-5 rounded-full relative bg-success-500 transition-colors cursor-pointer">
                         <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-sm left-[22px]" />
                       </div>
                       <span className="text-sm font-medium text-neutral-700">Enabled</span>
                    </div>
                  </div>
                  <hr className="border-neutral-100" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800 mb-3">Data Retention</h3>
                    <select className="w-full bg-neutral-50 border border-neutral-200/60 rounded-xl px-4 py-2.5 text-sm text-neutral-800 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20">
                      <option>Keep everything forever</option>
                      <option>Delete logs older than 90 days</option>
                      <option>Delete logs older than 30 days</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat rail — hidden on mobile, shown on lg+ */}
        <div className="hidden lg:flex border-l border-neutral-200/60 flex-col overflow-hidden bg-white">
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

      {/* Apple-Inspired Bottom Tab Bar (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-[84px] bg-white/80 backdrop-blur-xl border-t border-neutral-200/60 flex items-center justify-around px-2 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-[150]">
        <button
          onClick={() => { setMobileModal('none'); setActiveNav('Overview'); }}
          className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${mobileModal === 'none' && activeNav === 'Overview' ? 'text-primary-500' : 'text-neutral-400 hover:text-neutral-600'}`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px] font-semibold">HQ</span>
        </button>
        <button
          onClick={() => setMobileModal('team')}
          className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${mobileModal === 'team' ? 'text-primary-500' : 'text-neutral-400 hover:text-neutral-600'}`}
        >
          <Users className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Team</span>
        </button>
        <button
          onClick={() => setMobileModal('chat')}
          className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${mobileModal === 'chat' ? 'text-primary-500' : 'text-neutral-400 hover:text-neutral-600'}`}
        >
          <div className="relative">
            <Send className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-error-500 border-2 border-white rounded-full" />
          </div>
          <span className="text-[10px] font-semibold">Chat</span>
        </button>
        <button
          onClick={() => setMobileModal('menu')}
          className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${mobileModal === 'menu' ? 'text-primary-500' : 'text-neutral-400 hover:text-neutral-600'}`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Menu</span>
        </button>
      </div>

      {/* Add padding to body to prevent bottom bar overlap */}
      <style>{`
        @media (max-width: 1024px) {
          .flex-1.grid {
            padding-bottom: 84px;
          }
        }
      `}</style>
    </div>
  )
}
