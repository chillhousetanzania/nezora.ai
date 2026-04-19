import { useState, useRef, useEffect } from 'react'
import { getDemoScript, DEMO_EXAMPLES, type DemoLine } from '../../data/demoScript'

export default function LiveDemo() {
  const [input, setInput] = useState('')
  const [lines, setLines] = useState<DemoLine[]>([])
  const [running, setRunning] = useState(false)
  const logRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const runDemo = (brief: string) => {
    if (running) return
    const script = getDemoScript(brief)
    setLines([])
    setRunning(true)
    let idx = 0

    intervalRef.current = setInterval(() => {
      if (idx >= script.length) {
        clearInterval(intervalRef.current!)
        setRunning(false)
        return
      }
      setLines(prev => [...prev.slice(-8), script[idx]])
      idx++
    }, 850)
  }

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight
    }
  }, [lines])

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  return (
    <section className="section" id="live">
      <div className="section-label">// live demo</div>
      <h2 className="section-title">Watch your team <em>respond</em></h2>
      <p className="section-sub">
        Type any business idea and watch your employees assess it, plan, and kick off execution in real time.
      </p>

      <div className="demo-wrap">
        <div className="demo-toolbar">
          <div className="demo-dot" style={{ background: '#FF5F57' }} />
          <div className="demo-dot" style={{ background: '#FEBC2E' }} />
          <div className="demo-dot" style={{ background: '#28C840' }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)', marginLeft: 8, letterSpacing: '0.06em' }}>
            nezora · company terminal
          </span>
        </div>

        <div className="demo-input-row">
          <input
            className="demo-input"
            placeholder="Describe your business idea..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && input.trim()) runDemo(input) }}
          />
          <button
            className="demo-submit"
            onClick={() => { if (input.trim()) runDemo(input) }}
            disabled={running}
          >
            {running ? 'running...' : 'Brief →'}
          </button>
        </div>

        <div className="demo-examples">
          {DEMO_EXAMPLES.map(ex => (
            <button
              key={ex}
              className="demo-example"
              onClick={() => { setInput(ex); runDemo(ex) }}
            >
              {ex}
            </button>
          ))}
        </div>

        <div className="demo-log" ref={logRef}>
          {lines.length === 0 ? (
            <div style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>
              &gt; waiting for brief...
            </div>
          ) : (
            lines.map((line, i) => (
              <div key={i} className="demo-log-line">
                <span className="demo-log-ts">{line.ts}</span>
                <span className="demo-log-agent">[{line.agent}]</span>
                <span className="demo-log-msg">{line.msg}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
