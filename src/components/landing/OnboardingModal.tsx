import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
    }
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

  if (!onboardingOpen) return null

  return (
    <div className="ob-overlay" onClick={e => { if (e.target === e.currentTarget) closeOnboarding() }}>
      <div className="ob-modal">
        {/* Progress pips */}
        <div className="ob-pips">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`ob-pip${i <= step ? ' active' : ''}`} />
          ))}
        </div>

        {/* Step 0: Idea */}
        {step === 0 && (
          <>
            <div className="ob-step-label">// step 01</div>
            <div className="ob-step-title">What are you building?</div>
            <div className="ob-step-sub">Describe your idea in a sentence or two. No business plan needed.</div>
            <textarea
              className="ob-textarea"
              placeholder="e.g. A subscription box for artisan coffee lovers..."
              value={idea}
              onChange={e => setIdea(e.target.value)}
              autoFocus
            />
            <div className="ob-chips">
              {EXAMPLE_IDEAS.map(ex => (
                <button key={ex} className="ob-chip" onClick={() => setIdea(ex)}>{ex}</button>
              ))}
            </div>
          </>
        )}

        {/* Step 1: Company name */}
        {step === 1 && (
          <>
            <div className="ob-step-label">// step 02</div>
            <div className="ob-step-title">Name your company</div>
            <div className="ob-step-sub">This is what your employees will call your company. You can change it later.</div>
            <input
              className="ob-input"
              placeholder="e.g. Brewly, Artisan Co., The Daily Grind..."
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              autoFocus
            />
          </>
        )}

        {/* Step 2: Work style */}
        {step === 2 && (
          <>
            <div className="ob-step-label">// step 03</div>
            <div className="ob-step-title">How do you like to work?</div>
            <div className="ob-step-sub">This sets the default autonomy level for your employees.</div>
            <div className="ob-style-options">
              {STYLE_OPTIONS.map(opt => (
                <div
                  key={opt.value}
                  className={`ob-style-option${style === opt.value ? ' selected' : ''}`}
                  onClick={() => setStyle(opt.value)}
                >
                  <div className="ob-style-radio" />
                  <div>
                    <div className="ob-style-name">{opt.label}</div>
                    <div className="ob-style-desc">{opt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 3: Hiring */}
        {step === 3 && (
          <>
            <div className="ob-step-label">// step 04</div>
            <div className="ob-step-title">
              {hiredCount < OB_HIRE_ORDER.length
                ? `Hiring your team… (${hiredCount}/${OB_HIRE_ORDER.length})`
                : 'Your company is live. 🎉'}
            </div>
            <div className="ob-step-sub">
              {hiredCount < OB_HIRE_ORDER.length
                ? 'Your employees are being assigned.'
                : `${companyName || 'Your company'} is fully staffed and ready to operate.`}
            </div>

            <div className="ob-hire-list">
              {OB_HIRE_ORDER.map((emp, i) => {
                const isVisible = visibleRows.includes(i)
                const isHired = hiredCount > i
                return (
                  <div
                    key={emp.initials}
                    className={`ob-hire-row${isVisible ? ' visible' : ''}${isHired ? ' hired' : ''}`}
                  >
                    <div className="ob-hire-check">
                      {isHired && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#0A0B0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="ob-hire-initials">{emp.initials}</span>
                    <span className="ob-hire-name">{emp.name}</span>
                    <span className="ob-hire-role">{emp.title}</span>
                  </div>
                )
              })}
            </div>

            {hiredCount >= OB_HIRE_ORDER.length && (
              <div className="ob-stats">
                <div className="ob-stat">
                  <div className="ob-stat-val">12</div>
                  <div className="ob-stat-key">employees</div>
                </div>
                <div className="ob-stat">
                  <div className="ob-stat-val">24/7</div>
                  <div className="ob-stat-key">operations</div>
                </div>
                <div className="ob-stat">
                  <div className="ob-stat-val">∞</div>
                  <div className="ob-stat-key">potential</div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Nav */}
        <div className="ob-nav">
          {step > 0 && step < 3 ? (
            <button className="ob-back" onClick={goBack}>← back</button>
          ) : (
            <div />
          )}
          <button
            className="ob-next"
            onClick={goNext}
            disabled={
              (step === 0 && !idea.trim()) ||
              (step === 3 && hiredCount < OB_HIRE_ORDER.length)
            }
          >
            {step === 3 ? 'Open HQ →' : step === 2 ? 'Build my team →' : 'Continue →'}
          </button>
        </div>
      </div>
    </div>
  )
}
