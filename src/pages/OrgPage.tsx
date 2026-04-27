import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, X, ExternalLink, ChevronRight, Users, LayoutGrid, List } from 'lucide-react'
import { EMPLOYEES, type Employee } from '../data/employees'

type View = 'chart' | 'teams' | 'roster'

const DEPARTMENTS = [
  { name: 'Leadership', empIndices: [0], color: 'primary' },
  { name: 'Growth', empIndices: [1, 5, 6], color: 'success' },
  { name: 'Product & Eng', empIndices: [2, 3, 4], color: 'secondary' },
  { name: 'Business Ops', empIndices: [7, 8, 10, 11], color: 'warning' },
  { name: 'Intelligence', empIndices: [9], color: 'error' },
]

function ProfileModal({ emp, onClose }: { emp: Employee; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[500] flex items-center justify-center p-4"
      >
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-soft-xl border border-neutral-200/50 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 pb-4 flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-200 flex items-center justify-center text-lg font-bold text-primary-600 flex-shrink-0">
              {emp.initials}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-0.5">{emp.role}</h3>
              <p className="text-sm text-primary-500 font-medium mb-0.5">{emp.title}</p>
              <p className="text-sm text-neutral-400">{emp.name}</p>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold text-success-600 bg-success-50 border border-success-500/20 px-2 py-1 rounded-md uppercase tracking-wider flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
              Online
            </span>
          </div>

          {/* Description */}
          <div className="px-6 pb-4">
            <p className="text-sm text-neutral-600 leading-relaxed">{emp.desc}</p>
          </div>

          {/* Tools */}
          <div className="px-6 pb-6">
            <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-2">Tools</p>
            <div className="flex flex-wrap gap-2">
              {emp.tools.map(t => (
                <span key={t} className="text-xs font-medium text-neutral-600 bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-lg">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 pb-6 flex gap-2 border-t border-neutral-100 pt-4">
            <Link to="/hq" className="flex-1 flex items-center justify-center gap-2 h-10 bg-neutral-900 text-white text-sm font-semibold rounded-xl no-underline hover:bg-neutral-800 transition-colors shadow-soft-sm">
              <ExternalLink className="w-3.5 h-3.5" />
              Open in HQ
            </Link>
            <button onClick={onClose} className="h-10 px-5 text-sm font-medium text-neutral-600 bg-neutral-100 rounded-xl border border-neutral-200/50 hover:bg-neutral-200/50 transition-colors">
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function OrgNode({ emp, onClick }: { emp: Employee; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      onClick={onClick}
      className="flex flex-col items-center gap-2 cursor-pointer group"
    >
      <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 shadow-soft-xs flex items-center justify-center text-xs font-bold text-neutral-600 group-hover:border-primary-300 group-hover:text-primary-600 group-hover:shadow-soft-md transition-all">
        {emp.initials}
      </div>
      <div className="text-center">
        <div className="text-xs font-semibold text-neutral-700">{emp.role}</div>
        <div className="text-[10px] text-neutral-400">{emp.name.split(' ')[0]}</div>
      </div>
    </motion.div>
  )
}

export default function OrgPage() {
  const [view, setView] = useState<View>('chart')
  const [selected, setSelected] = useState<Employee | null>(null)

  const viewOptions: { key: View; label: string; icon: React.ElementType }[] = [
    { key: 'chart', label: 'Org chart', icon: Users },
    { key: 'teams', label: 'By dept', icon: LayoutGrid },
    { key: 'roster', label: 'Full roster', icon: List },
  ]

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">

      {/* Nav */}
      <nav className="sticky top-0 z-[100] h-14 flex items-center px-6 border-b border-neutral-200/50 bg-white/80 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-soft-sm">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-semibold text-base text-neutral-800 tracking-tight">Nezora</span>
        </Link>
        <span className="text-xs text-neutral-400 font-medium ml-2">/org</span>
        <div className="ml-auto flex gap-3">
          <Link to="/" className="text-xs text-neutral-500 no-underline px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors font-medium">
            ← Site
          </Link>
          <Link to="/hq" className="text-xs text-white no-underline px-4 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors font-semibold shadow-soft-sm">
            Open HQ →
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 mb-5">
            <Users className="w-3.5 h-3.5 text-primary-500" />
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">The Team</span>
          </div>
          <h1 className="text-5xl font-heading font-semibold text-neutral-800 tracking-tight leading-[1.1] mb-4">
            Meet the twelve people<br /><span className="text-primary-500">running your company</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-lg leading-relaxed mb-8">
            Every role covered. Every seat filled. Your full team — operational from day one.
          </p>
          {/* View toggle */}
          <div className="flex gap-1 bg-white border border-neutral-200/50 rounded-xl p-1 w-fit shadow-soft-xs">
            {viewOptions.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setView(key)}
                className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-medium transition-all ${
                  view === key
                    ? 'bg-neutral-900 text-white shadow-soft-sm'
                    : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Org chart view */}
        {view === 'chart' && (
          <div>
            {/* Scrollable chart on mobile */}
            <div className="overflow-x-auto pb-4 -mx-4 sm:mx-0 px-4 sm:px-0">
            {/* You */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-sm font-bold text-white shadow-soft-md">
                  You
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-neutral-800">Founder</div>
                  <div className="text-[11px] text-neutral-400">owner & director</div>
                </div>
              </div>
            </div>
            {/* Connector */}
            <div className="flex justify-center mb-0">
              <div className="w-px h-8 bg-neutral-200" />
            </div>
            {/* CEO */}
            <div className="flex justify-center mb-0">
              <OrgNode emp={EMPLOYEES[0]} onClick={() => setSelected(EMPLOYEES[0])} />
            </div>
            {/* Connector to heads */}
            <div className="flex justify-center mb-0">
              <div className="w-px h-6 bg-neutral-200" />
            </div>
            {/* Horizontal bar */}
            <div className="relative mb-0">
              <div className="h-px bg-neutral-200 mx-[12%]" />
            </div>
            {/* Heads row */}
            <div className="flex justify-around px-[8%] mb-0">
              {[1, 2, 3, 4, 5].map(idx => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-px h-6 bg-neutral-200" />
                  <OrgNode emp={EMPLOYEES[idx]} onClick={() => setSelected(EMPLOYEES[idx])} />
                </div>
              ))}
            </div>
            {/* Connector to reports */}
            <div className="flex justify-center mt-3">
              <div className="w-px h-5 bg-neutral-200" />
            </div>
            <div className="h-px bg-neutral-200 mx-[6%] mb-0" />
            {/* Reports row */}
            <div className="flex justify-around px-[4%]">
              {[6, 7, 8, 9, 10, 11].map(idx => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-px h-5 bg-neutral-200" />
                  <OrgNode emp={EMPLOYEES[idx]} onClick={() => setSelected(EMPLOYEES[idx])} />
                </div>
              ))}
            </div>
            {/* end scroll container */}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 sm:mt-16">
              <div className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-soft-xs">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">How hierarchy works</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">You direct the CEO. The CEO coordinates department heads. Each head manages their specialists. Orders flow top-down; work and insights flow back up.</p>
              </div>
              <div className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-soft-xs">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">How to give orders</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">Message any employee directly in HQ. Brief the CEO for company-wide missions. Each employee reports back on their progress automatically.</p>
              </div>
            </div>
          </div>
        )}

        {/* Teams view */}
        {view === 'teams' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {DEPARTMENTS.map(dept => (
              <div key={dept.name} className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-soft-xs">
                <h4 className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-4">{dept.name}</h4>
                {dept.empIndices.map(idx => {
                  const emp = EMPLOYEES[idx]
                  return (
                    <div key={emp.initials} onClick={() => setSelected(emp)} className="flex items-center gap-3 py-3 border-b border-neutral-100 last:border-0 cursor-pointer hover:bg-neutral-50 -mx-2 px-2 rounded-lg transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-neutral-100 border border-neutral-200/50 flex items-center justify-center text-[11px] font-bold text-neutral-600 flex-shrink-0">
                        {emp.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-neutral-700">{emp.role}</div>
                        <div className="text-[11px] text-neutral-400">{emp.name}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-success-400 flex-shrink-0" />
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        )}

        {/* Roster view */}
        {view === 'roster' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {EMPLOYEES.map(emp => (
              <motion.div
                key={emp.initials}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(emp)}
                className="bg-white rounded-2xl border border-neutral-200/50 p-5 cursor-pointer hover:shadow-soft-md transition-shadow shadow-soft-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-200/50 flex items-center justify-center text-sm font-bold text-primary-600 mb-3">
                  {emp.initials}
                </div>
                <div className="text-base font-semibold text-neutral-800 mb-0.5">{emp.role}</div>
                <div className="text-xs text-primary-500 font-medium mb-2">{emp.title}</div>
                <p className="text-xs text-neutral-500 leading-relaxed mb-3 line-clamp-2">{emp.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {emp.tools.map(t => (
                    <span key={t} className="text-[10px] font-medium text-neutral-500 bg-neutral-100 border border-neutral-200/50 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20 pt-12 border-t border-neutral-200">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 mb-5">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">They're waiting</span>
          </div>
          <h2 className="text-4xl font-heading font-semibold text-neutral-800 tracking-tight mb-5">
            Ready to give your first order?
          </h2>
          <Link to="/hq" className="inline-flex items-center gap-2 no-underline h-12 px-8 bg-neutral-900 text-white text-sm font-semibold rounded-2xl hover:bg-neutral-800 transition-all shadow-soft-md hover:shadow-soft-lg active:scale-[0.98]">
            Open HQ →
          </Link>
        </div>
      </div>

      {selected && <ProfileModal emp={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
