export default function OnboardingTargetAudience() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center p-6 antialiased">
      <main className="w-full max-w-2xl mx-auto flex flex-col gap-12 pt-12 pb-24 relative z-10">
        {/* Progress Header */}
        <header className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center justify-center gap-2">
            {[...Array(3)].map((_, i) => <div key={i} className="h-1.5 w-1.5 rounded-full bg-surface-container-highest"></div>)}
            <div aria-current="step" className="h-1.5 w-8 rounded-full bg-primary"></div>
            {[...Array(4)].map((_, i) => <div key={i} className="h-1.5 w-1.5 rounded-full bg-surface-container-highest"></div>)}
          </div>
          <p className="text-[11px] font-medium tracking-widest uppercase text-on-surface-variant font-label">Step 4 of 8</p>
        </header>

        {/* Main Content */}
        <div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl md:text-[3.5rem] leading-tight font-bold tracking-tight text-on-surface font-headline">
              Who is your ideal customer?
            </h1>
            <p className="text-lg text-on-surface-variant font-body">
              Describe your target audience in a few words.
            </p>
          </div>

          {/* Input Form */}
          <form className="flex flex-col gap-8 w-full mt-4">
            <div className="relative group">
              <label className="sr-only" htmlFor="audience-input">Target Audience Description</label>
              <textarea
                className="w-full bg-surface-container-low border-none rounded-xl p-6 text-on-surface text-lg font-body placeholder:text-outline-variant focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] outline-none"
                id="audience-input"
                name="audience"
                placeholder="e.g. Small business owners looking to automate their marketing efforts..."
                rows={5}
              ></textarea>
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-outline-variant/20 group-focus-within:border-transparent transition-colors"></div>
            </div>

            {/* Intelligence Pulse / Contextual Tip */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] relative overflow-hidden">
              <div className="absolute inset-0 bg-surface-tint opacity-5 pointer-events-none animate-pulse"></div>
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body relative z-10">
                Be as specific as possible. Mentioning demographics, interests, and pain points helps Nezora AI tailor responses more accurately.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <button className="w-full sm:w-auto px-6 py-4 rounded-full text-on-surface font-medium font-body hover:bg-surface-container-low transition-colors" type="button">
                Back
              </button>
              <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold font-body shadow-[0_8px_20px_-6px_rgba(0,62,199,0.3)] hover:shadow-[0_12px_24px_-6px_rgba(0,62,199,0.4)] transition-all flex items-center justify-center gap-2 group" type="button">
                Continue
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="flex justify-center mt-2">
              <button className="text-sm font-medium text-primary hover:text-primary-container font-body transition-colors" type="button">
                Skip for now
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
