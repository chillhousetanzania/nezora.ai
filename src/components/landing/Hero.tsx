import { useLanding } from '../../context/LandingContext'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

// Redesigned premium Hero component abandoning the retro "Tower" for a clean Apple-inspired layout
export default function Hero() {
  const { headline, openOnboarding } = useLanding()

  // Simplified array of headlines mapped to the current state
  const HEADLINES = [
    <>Launch your startup.<br /><span className="text-primary-500">Fully staffed.</span><br />In 60 seconds.</>,
    <>One brilliant idea.<br /><span className="text-secondary-500">Twelve experts.</span><br />Zero hiring.</>,
    <>Build much faster.<br /><span className="text-primary-500">Scale smarter.</span><br />Lead better.</>,
  ]

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 px-6 lg:px-12 flex items-center overflow-hidden bg-neutral-50" id="hero">
      {/* Background soft gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px] gap-16 items-center relative z-10">
        
        {/* Left Copy block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200/50 shadow-soft-sm mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Now in Early Access</span>
          </div>

          <h1 className="text-[3.5rem] leading-[1.05] md:text-[4.5rem] font-heading font-semibold text-neutral-900 mb-6 tracking-tight">
            {HEADLINES[headline] || HEADLINES[0]}
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-10 max-w-lg">
            Register your idea. In seconds, your company comes to life — complete with a fully operational team of AI experts who execute, collaborate, and grow your business 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <button 
              onClick={openOnboarding}
              className="h-14 px-8 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium text-lg hover:shadow-glow-primary transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              Build your team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#how" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#how')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="h-14 px-8 rounded-2xl bg-white border border-neutral-200 text-neutral-700 font-medium text-lg hover:bg-neutral-50 hover:shadow-soft-sm transition-all duration-300 flex items-center justify-center"
            >
              See how it works
            </a>
          </div>

          <div className="flex items-center gap-8 md:gap-12 text-sm text-neutral-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success-500" />
              <span>12 AI Employees</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-500" />
              <span>Start in 60s</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-500">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>24/7 Operations</span>
            </div>
          </div>
        </motion.div>

        {/* Right Graphic: Abstract representation of the App Dashboard instead of the Tower */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:h-[600px] w-full"
        >
          {/* Main Dashboard Panel */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl rounded-3xl border border-white/80 shadow-soft-xl shadow-neutral-200/50 p-6 flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-700 origin-bottom-right">
            {/* Nav mockup */}
            <div className="flex justify-between items-center mb-8 border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400" />
                <div>
                  <div className="h-4 w-24 bg-neutral-200 rounded-full mb-2" />
                  <div className="h-3 w-16 bg-neutral-100 rounded-full" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-neutral-100" />
                <div className="w-8 h-8 rounded-full bg-neutral-100" />
              </div>
            </div>

            {/* Content Mockup */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Agent Cards */}
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="p-4 bg-white rounded-2xl border border-neutral-100 shadow-soft-sm flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-3 w-full bg-neutral-200 rounded-full mb-2" />
                      <div className="h-2 w-2/3 bg-neutral-100 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Large Chart/Insight Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2" />
                
                <div>
                  <div className="h-3 w-20 bg-neutral-800 rounded-full mb-6" />
                  {/* Fake Chart bars */}
                  <div className="flex items-end gap-2 h-32 mb-6">
                    {[40, 70, 45, 90, 65, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-neutral-800">
                  <div className="h-4 w-32 bg-white/20 rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Action elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-24 bg-white p-4 rounded-2xl shadow-soft-lg border border-neutral-100 flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-success-500" />
            <span className="text-sm font-medium text-neutral-800">CFO generated Q3 report</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-32 bg-white p-4 rounded-2xl shadow-soft-lg border border-neutral-100 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-sm">✨</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-2 w-16 bg-neutral-200 rounded-full" />
              <span className="text-xs font-semibold text-primary-500">Marketing ROI +24%</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
