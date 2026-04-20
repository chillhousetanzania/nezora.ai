import { useState, useRef, useEffect } from 'react'
import { getDemoScript, DEMO_EXAMPLES, type DemoLine } from '../../data/demoScript'
import { Card } from '../ui'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'

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
      setLines(prev => [...prev, script[idx]])
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
    <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto" id="live">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-50 border border-success-100 mb-4">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-success-600">Live Demo</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-neutral-900 mb-4 tracking-tight">
          Watch your team <span className="text-transparent bg-clip-text bg-gradient-to-r from-success-500 to-primary-500">respond</span>
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
          Type any business idea and watch your employees assess it, plan, and kick off execution in real time.
        </p>
      </div>

      <Card variant="elevated" padding="md" className="overflow-hidden bg-white max-w-4xl mx-auto border-neutral-200/60 shadow-soft-xl">
        {/* Fake Browser Toolbar */}
        <div className="flex items-center gap-2 pb-4 mb-2 border-b border-neutral-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-error-400" />
            <div className="w-3 h-3 rounded-full bg-warning-400" />
            <div className="w-3 h-3 rounded-full bg-success-400" />
          </div>
          <div className="ml-4 flex-1 bg-neutral-50 rounded-md h-7 border border-neutral-200/50 flex items-center justify-center">
            <span className="text-[11px] font-medium text-neutral-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-primary-500" /> nezora.ai/workspace
            </span>
          </div>
        </div>

        {/* Chat area */}
        <div className="h-[400px] overflow-y-auto mb-4 pr-2 flex flex-col gap-6" ref={logRef}>
          {lines.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
              <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-neutral-400" />
              </div>
              <p className="text-neutral-500 font-medium">Waiting for your brief...</p>
              <p className="text-sm text-neutral-400">Select an example below or type your own</p>
            </div>
          ) : (
            <AnimatePresence>
              {lines.map((line, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200/50 flex items-center justify-center shrink-0 flex-col">
                    <span className="text-[11px] font-bold text-primary-600 leading-none">{line.agent}</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-100 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-neutral-700 shadow-soft-xs relative group mt-1 max-w-[85%]">
                    <span className="absolute -top-5 left-1 text-[10px] font-medium text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {line.ts}
                    </span>
                    {line.msg}
                  </div>
                </motion.div>
              ))}
              {running && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-4 items-start"
                >
                   <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* Examples */}
        <div className="flex flex-wrap gap-2 mb-4">
          {DEMO_EXAMPLES.map(ex => (
            <button
              key={ex}
              className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200/60 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              onClick={() => { setInput(ex); runDemo(ex) }}
            >
              {ex}
            </button>
          ))}
        </div>

        {/* Input area */}
        <div className="relative">
          <input
            className="w-full h-14 bg-white border border-neutral-200 rounded-xl pl-4 pr-32 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all shadow-soft-xs"
            placeholder="Type your business idea here..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && input.trim()) runDemo(input) }}
            disabled={running}
          />
          <button
            className="absolute right-2 top-2 bottom-2 px-6 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold hover:shadow-glow-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            onClick={() => { if (input.trim()) runDemo(input) }}
            disabled={running || !input.trim()}
          >
            {running ? 'Running...' : 'Brief'} 
            {!running && <Send className="w-4 h-4 ml-1" />}
          </button>
        </div>
      </Card>
    </section>
  )
}
