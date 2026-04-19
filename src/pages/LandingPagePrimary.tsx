export default function LandingPagePrimary() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col antialiased">
      {/* Main Content Canvas */}
      <main className="flex-grow pt-24 pb-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed mb-8 font-label text-sm tracking-wide shadow-[0_4px_12px_rgba(0,62,199,0.08)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Nezora OS 2.0 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 max-w-4xl leading-tight font-headline">
            The OS for <br className="hidden md:block" />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Founders.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 font-body font-light leading-relaxed">
            Intelligent agents to scale your startup from strategy to execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-lg hover:shadow-[0_12px_24px_-8px_rgba(0,62,199,0.3)] transition-all">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-outline-variant/30 text-on-surface font-semibold text-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_circle</span>
              Watch Demo
            </button>
          </div>
        </section>

        {/* Product Preview (Glassy Card) */}
        <section className="max-w-6xl mx-auto px-6 mb-32 relative">
          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative rounded-[2rem] bg-surface-container-lowest/60 backdrop-blur-2xl border border-white/40 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] overflow-hidden p-2">
            {/* Mock Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-container-highest/30">
              <div className="w-3 h-3 rounded-full bg-error/80"></div>
              <div className="w-3 h-3 rounded-full bg-primary/40"></div>
              <div className="w-3 h-3 rounded-full bg-secondary/80"></div>
            </div>
            {/* Mock App Content */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-surface-container-low/30 rounded-b-[1.5rem] min-h-[500px]">
              {/* Sidebar Mock */}
              <div className="hidden md:flex flex-col gap-4 col-span-3">
                <div className="h-8 w-24 bg-surface-container-highest/50 rounded-lg mb-4"></div>
                <div className="h-10 w-full bg-surface-container-lowest rounded-xl shadow-sm flex items-center px-4 gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">home</span>
                  <div className="h-3 w-16 bg-surface-container-highest rounded-md"></div>
                </div>
                <div className="h-10 w-full bg-transparent flex items-center px-4 gap-3 opacity-60">
                  <span className="material-symbols-outlined text-sm">smart_toy</span>
                  <div className="h-3 w-20 bg-surface-container-highest rounded-md"></div>
                </div>
                <div className="h-10 w-full bg-transparent flex items-center px-4 gap-3 opacity-60">
                  <span className="material-symbols-outlined text-sm">analytics</span>
                  <div className="h-3 w-16 bg-surface-container-highest rounded-md"></div>
                </div>
              </div>
              {/* Main Dashboard Mock */}
              <div className="col-span-1 md:col-span-9 flex flex-col gap-6">
                <div className="flex justify-between items-end mb-2">
                  <div className="space-y-2">
                    <div className="h-6 w-32 bg-surface-container-highest/60 rounded-md"></div>
                    <div className="h-4 w-48 bg-surface-container-highest/40 rounded-md"></div>
                  </div>
                  <div className="h-10 w-32 bg-primary/10 rounded-xl border border-primary/20"></div>
                </div>
                {/* Bento Grid Mock */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                      <span className="material-symbols-outlined text-primary/40">trending_up</span>
                    </div>
                    <div className="h-4 w-20 bg-surface-container-highest/50 rounded-md mb-4"></div>
                    <div className="h-8 w-16 bg-surface-container-highest rounded-md mb-2"></div>
                    <div className="h-2 w-full bg-surface-container-highest/30 rounded-full mt-4">
                      <div className="h-full w-2/3 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 relative overflow-hidden md:col-span-2 flex flex-col justify-between">
                    <div className="h-4 w-32 bg-surface-container-highest/50 rounded-md mb-4"></div>
                    {/* Fake Chart */}
                    <div className="flex items-end gap-2 h-24 mt-auto">
                      <div className="flex-1 bg-primary/20 rounded-t-sm h-1/4"></div>
                      <div className="flex-1 bg-primary/30 rounded-t-sm h-2/4"></div>
                      <div className="flex-1 bg-primary/40 rounded-t-sm h-1/3"></div>
                      <div className="flex-1 bg-primary/60 rounded-t-sm h-3/4"></div>
                      <div className="flex-1 bg-primary/80 rounded-t-sm h-full"></div>
                      <div className="flex-1 bg-primary rounded-t-sm h-5/6"></div>
                    </div>
                  </div>
                </div>
                {/* Agent Activity Mock */}
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 flex-grow relative">
                  <div className="absolute -inset-1 bg-surface-tint/5 rounded-[1.7rem] blur-sm -z-10 animate-pulse"></div>
                  <div className="h-4 w-40 bg-surface-container-highest/50 rounded-md mb-6"></div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <div className="h-3 w-1/3 bg-surface-container-highest rounded-md"></div>
                        <div className="h-2 w-full bg-surface-container-highest/40 rounded-md"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 opacity-60">
                      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant text-sm">edit_document</span>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <div className="h-3 w-1/4 bg-surface-container-highest rounded-md"></div>
                        <div className="h-2 w-5/6 bg-surface-container-highest/40 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section (Bento Grid) */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface mb-4 font-headline">Intelligence across every vector.</h2>
            <p className="text-lg text-on-surface-variant font-body">Deploy specialized agents to handle the heavy lifting.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Benefit 1 */}
            <div className="md:col-span-2 bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-700"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm mb-6">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-2 font-headline">Strategic Intelligence</h3>
                <p className="text-on-surface-variant max-w-md font-body leading-relaxed">Agents that analyze market trends, competitor movements, and synthesize data to inform your next big pivot.</p>
              </div>
            </div>
            {/* Benefit 2 */}
            <div className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-2xl transition-transform group-hover:scale-110 duration-700"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm mb-6">
                  <span className="material-symbols-outlined text-secondary">settings_suggest</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2 font-headline">Automated Operations</h3>
                <p className="text-on-surface-variant font-body leading-relaxed text-sm">Seamless workflow automation without writing a single line of code.</p>
              </div>
            </div>
            {/* Benefit 3 */}
            <div className="md:col-span-3 bg-surface-container-lowest rounded-[2rem] border border-outline-variant/20 p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="md:w-1/2 relative z-10 mb-8 md:mb-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-2 font-headline">Content Mastery</h3>
                <p className="text-on-surface-variant max-w-md font-body leading-relaxed">Generate on-brand copy, pitch decks, and social presence that actually sounds like you, scaled infinitely.</p>
              </div>
              <div className="md:w-1/2 w-full h-48 bg-surface-container-low rounded-xl relative overflow-hidden flex items-center justify-center">
                <span className="text-on-surface-variant/30 font-medium">Interactive Visual Placeholder</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimalist Footer */}
      <footer className="bg-surface-container-low/50 border-t border-surface-container-highest/30 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tighter text-on-surface font-headline">Nezora AI</span>
          </div>
          <div className="flex gap-8 text-sm text-on-surface-variant font-body">
            <a className="hover:text-primary transition-colors" href="#">Twitter</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
          </div>
          <div className="text-sm text-outline font-body">© 2024 Nezora Inc.</div>
        </div>
      </footer>
    </div>
  );
}
