import { useLanding } from '../../context/LandingContext'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const { openOnboarding } = useLanding()

  return (
    <section className="py-32 px-6 lg:px-12 mt-12 bg-neutral-900 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-[80px]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">Launch</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-8 tracking-tight leading-[1.1]">
          Your company is waiting.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Launch it today.</span>
        </h2>
        
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Register your idea. Meet your team. Start building — in under 60 seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium text-lg hover:shadow-glow-primary transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98]" 
            onClick={openOnboarding}
          >
            Launch your company
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#team"
            className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-white/10 border border-white/20 text-white font-medium text-lg hover:bg-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center"
            onClick={e => { e.preventDefault(); document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Meet the team first
          </a>
        </div>
      </div>
    </section>
  )
}
