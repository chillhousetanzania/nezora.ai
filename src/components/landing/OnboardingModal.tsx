import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { useLanding } from '../../context/LandingContext'
import { OB_HIRE_ORDER } from '../../data/employees'

const EXAMPLE_IDEAS = [
  'A dog walking app for busy professionals',
  'Online store for custom sneakers',
  'Newsletter for indie game developers',
]

const STYLE_OPTIONS = [
  { value: 'hands-on', label: 'Hands-on', desc: 'I want to approve every major decision.' },
  { value: 'balanced', label: 'Balanced', desc: 'I set direction, the team handles the details.' },
  { value: 'autopilot', label: 'Autopilot', desc: 'Just keep me posted — run the company.' },
]

export default function OnboardingModal() {
  const { onboardingOpen, closeOnboarding } = useLanding()
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [idea, setIdea] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [style, setStyle] = useState('balanced')
  const [hiredCount, setHiredCount] = useState(0)
  const [visibleRows, setVisibleRows] = useState<number[]>([])

  useEffect(() => {
    if (!onboardingOpen) {
      setStep(0)
      setIdea('')
      setCompanyName('')
      setStyle('balanced')
      setHiredCount(0)
      setVisibleRows([])
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; }
  }, [onboardingOpen])

  const startHiring = () => {
    let i = 0
    const revealNext = () => {
      if (i >= OB_HIRE_ORDER.length) return
      const idx = i
      setVisibleRows(prev => [...prev, idx])
      setTimeout(() => {
        setHiredCount(idx + 1)
      }, 200)
      i++
      if (i < OB_HIRE_ORDER.length) setTimeout(revealNext, 160)
    }
    revealNext()
  }

  const goNext = () => {
    if (step === 2) {
      setStep(3)
      setTimeout(startHiring, 300)
    } else if (step < 3) {
      setStep(s => s + 1)
    } else {
      navigate('/hq')
    }
  }

  const goBack = () => setStep(s => Math.max(0, s - 1))

  const inputClass = "w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-xl px-4 py-3 text-base text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all shadow-sm";

  if (!onboardingOpen) return null

  return (
    <AnimatePresence>
      {onboardingOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
            onClick={closeOnboarding}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white dark:bg-neutral-900 rounded-3xl shadow-soft-xl overflow-hidden shadow-black/10 border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex gap-1.5 items-center">
                {[0, 1, 2, 3].map(i => (
                  <div 
                    key={i} 
                    className={`h-2 rounded-full transition-all duration-300 ${i <= step ? 'bg-primary-500 w-6' : 'bg-neutral-200 dark:bg-neutral-800 w-2'}`}
                  />
                ))}
              </div>
              <button 
                onClick={closeOnboarding}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-8 sm:px-10 flex-1 min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Step 0: Idea */}
                  {step === 0 && (
                    <>
                      <div>
                        <div className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Step 01</div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">What are you building?</h2>
                        <p className="text-neutral-500 dark:text-neutral-400">Describe your idea in a sentence or two. No business plan needed.</p>
                      </div>
                      <textarea
                        className={`${inputClass} min-h-[120px] resize-none pb-0`}
                        placeholder="e.g. A subscription box for artisan coffee lovers..."
                        value={idea}
                        onChange={e => setIdea(e.target.value)}
                        autoFocus
                      />
                      <div className="flex flex-wrap gap-2">
                        {EXAMPLE_IDEAS.map(ex => (
                          <button 
                            key={ex} 
                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors text-left" 
                            onClick={() => setIdea(ex)}
                          >
                            {ex}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Step 1: Company name */}
                  {step === 1 && (
                    <>
                      <div>
                        <div className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Step 02</div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Name your company</h2>
                        <p className="text-neutral-500 dark:text-neutral-400">This is what your employees will call your company. You can change it later.</p>
                      </div>
                      <input
                        className={`${inputClass} mb-8`}
                        placeholder="e.g. Brewly, Artisan Co."
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                        autoFocus
                      />
                    </>
                  )}

                  {/* Step 2: Work style */}
                  {step === 2 && (
                    <>
                      <div>
                        <div className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Step 03</div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">How do you like to work?</h2>
                        <p className="text-neutral-500 dark:text-neutral-400">This sets the default autonomy level for your employees.</p>
                      </div>
                      <div className="space-y-3">
                        {STYLE_OPTIONS.map(opt => (
                          <div
                            key={opt.value}
                            className={`p-4 rounded-xl border flex items-start gap-4 cursor-pointer transition-all duration-200 ${
                              style === opt.value 
                                ? 'bg-primary-50 dark:bg-primary-900/10 border-primary-500 shadow-sm' 
                                : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300'
                            }`}
                            onClick={() => setStyle(opt.value)}
                          >
                            <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              style === opt.value ? 'border-primary-500' : 'border-neutral-300 dark:border-neutral-600'
                            }`}>
                              {style === opt.value && <div className="w-2.5 h-2.5 bg-primary-500 rounded-full" />}
                            </div>
                            <div>
                              <div className={`font-semibold ${style === opt.value ? 'text-primary-700 dark:text-primary-400' : 'text-neutral-900 dark:text-neutral-50'}`}>
                                {opt.label}
                              </div>
                              <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{opt.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Step 3: Hiring */}
                  {step === 3 && (
                    <>
                      <div className="mb-4">
                        <div className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Step 04</div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                          {hiredCount < OB_HIRE_ORDER.length ? 'Hiring your team...' : 'Your company is live. 🎉'}
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          {hiredCount < OB_HIRE_ORDER.length ? 'Your employees are being assigned.' : `${companyName || 'Your company'} is fully staffed and ready to operate.`}
                        </p>
                      </div>

                      <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl border border-neutral-100 dark:border-neutral-800 p-4 h-[220px] overflow-y-auto no-scrollbar relative">
                        <div className="space-y-2">
                          {OB_HIRE_ORDER.map((emp, i) => {
                            const isVisible = visibleRows.includes(i)
                            const isHired = hiredCount > i
                            if (!isVisible) return null;
                            return (
                              <motion.div
                                key={emp.initials}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
                                  isHired ? 'bg-white dark:bg-neutral-800 shadow-soft-sm border border-neutral-200/50 dark:border-neutral-700/50' : 'opacity-50'
                                }`}
                              >
                                <div className={`w-6 h-6 flex items-center justify-center shrink-0 rounded-full ${
                                  isHired ? 'bg-success-100 text-success-600' : 'bg-neutral-200 dark:bg-neutral-700'
                                }`}>
                                  {isHired && <Check strokeWidth={3} className="w-3.5 h-3.5 text-success-600" />}
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-700 font-bold text-xs flex items-center justify-center shrink-0">
                                  {emp.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 truncate">{emp.name}</div>
                                  <div className="text-xs text-neutral-500 truncate">{emp.title}</div>
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Nav */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800/20 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
              {step > 0 && step < 3 ? (
                <button 
                  className="px-6 py-3 font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors" 
                  onClick={goBack}
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              <button
                className="px-8 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0"
                onClick={goNext}
                disabled={
                  (step === 0 && !idea.trim()) ||
                  (step === 3 && hiredCount < OB_HIRE_ORDER.length)
                }
              >
                {step === 3 ? 'Open HQ →' : step === 2 ? 'Build my team →' : 'Continue →'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
