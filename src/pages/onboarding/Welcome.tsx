export default function OnboardingWelcome() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col antialiased">
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-70 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <main className="flex-grow flex flex-col justify-center items-center px-6 py-12 relative z-10 w-full max-w-4xl mx-auto min-h-screen">
        <div className="w-full flex justify-between items-center mb-16 md:mb-24 absolute top-8 left-0 px-6 md:px-12">
          <div className="text-xl font-bold tracking-tighter text-primary flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
            Nezora AI
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-8 h-1.5 rounded-full bg-primary"></div>
              {[...Array(7)].map((_, i) => <div key={i} className="w-2 h-1.5 rounded-full bg-surface-variant"></div>)}
            </div>
            <span className="text-[11px] font-medium tracking-wide uppercase font-label text-on-surface-variant ml-2">1 of 8</span>
          </div>
        </div>
        <div className="w-full max-w-2xl flex flex-col items-start mt-12 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-on-surface mb-6 leading-tight">
            Welcome, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">Founder.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-body mb-12 max-w-xl leading-relaxed">
            Let's set up your startup's AI operating system in a few minutes.
          </p>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-medium text-lg px-8 py-4 rounded-xl shadow-[0_24px_48px_-12px_rgba(0,62,199,0.25)] hover:shadow-[0_24px_48px_-12px_rgba(0,62,199,0.4)] transition-all duration-300 flex items-center gap-3 group">
            Get Started
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
}
