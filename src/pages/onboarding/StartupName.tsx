export default function OnboardingStartupName() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:px-8 w-full max-w-4xl mx-auto min-h-screen relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="w-full max-w-2xl relative z-10 flex flex-col gap-12 lg:gap-16">
        {/* Back Action */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium tracking-wide">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {/* Progress Indicator */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 w-full max-w-[200px]">
              <div className="h-1 flex-1 bg-primary rounded-full"></div>
              <div className="h-1 flex-1 bg-primary rounded-full"></div>
              {[...Array(6)].map((_, i) => <div key={i} className="h-1 flex-1 bg-surface-container-highest rounded-full"></div>)}
            </div>
            <span className="font-label text-xs font-semibold tracking-widest uppercase text-on-surface-variant">Step 2 of 8</span>
          </div>

          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="font-headline text-4xl lg:text-[3.5rem] leading-tight font-bold tracking-tight text-on-surface">
              What is the name of your startup?
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl">
              This is how your workspace will be identified. You can always change this later in settings.
            </p>
          </div>

          {/* Input Area */}
          <div className="flex flex-col gap-2 pt-4">
            <div className="relative group">
              <input
                autoFocus
                className="w-full bg-surface-container-low border-b-2 border-surface-container-highest focus:border-primary border-t-0 border-l-0 border-r-0 px-0 py-4 text-2xl lg:text-3xl font-medium text-on-surface placeholder:text-outline-variant focus:ring-0 transition-colors bg-transparent outline-none"
                placeholder="e.g., Acme Corp, Globex, Initech"
                type="text"
              />
            </div>
            <span className="font-label text-sm text-on-surface-variant mt-2 tracking-wide">Enter your company or project name.</span>
          </div>

          {/* Action Area */}
          <div className="pt-8 flex items-center justify-between">
            <button className="bg-surface-container-high text-on-surface-variant font-medium py-4 px-8 rounded-xl opacity-50 cursor-not-allowed transition-all duration-300 flex items-center gap-2">
              Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
