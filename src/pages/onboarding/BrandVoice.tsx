export default function OnboardingBrandVoice() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center font-body antialiased">
      <div className="w-full max-w-4xl px-6 py-12 flex flex-col items-center">
        {/* Progress Indicator */}
        <div className="w-full flex flex-col items-center mb-12">
          <span className="text-on-surface-variant text-sm font-medium tracking-widest uppercase mb-4 font-label">Step 6 of 8</span>
          <div className="w-64 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">How should your brand sound?</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">Select the core tone that dictates how Nezora AI interacts with your audience. You can refine this later.</p>
        </div>

        {/* Voice Selection Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Professional & Authoritative */}
          <button className="group relative flex flex-col items-start p-8 bg-surface-container-lowest rounded-[1.5rem] text-left transition-all duration-300 hover:shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] border border-outline-variant/20 hover:border-primary/40 focus:outline-none">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
              <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors duration-300">work</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-3 tracking-tight">Professional & Authoritative</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">Clear, concise, and expert. Ideal for B2B, legal, finance, or establishing thought leadership without fluff.</p>
            <div className="mt-auto w-full flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              Select Voice <span className="material-symbols-outlined ml-1 text-[18px]">arrow_forward</span>
            </div>
          </button>

          {/* Card 2: Friendly & Accessible (Selected) */}
          <button className="group relative flex flex-col items-start p-8 bg-surface-container-lowest rounded-[1.5rem] text-left transition-all duration-300 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] border-2 border-primary ring-4 ring-primary-fixed/50 focus:outline-none">
            <div className="absolute inset-0 rounded-[1.5rem] shadow-[0_0_0_4px_rgba(0,76,237,0.1)] animate-pulse pointer-events-none"></div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mood</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-3 tracking-tight">Friendly & Accessible</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">Warm, conversational, and approachable. Builds immediate rapport and makes complex topics feel easy.</p>
            <div className="mt-auto w-full flex items-center text-sm font-medium text-primary">
              Selected Voice <span className="material-symbols-outlined ml-1 text-[18px]">check_circle</span>
            </div>
          </button>

          {/* Card 3: Bold & Disruptive */}
          <button className="group relative flex flex-col items-start p-8 bg-surface-container-lowest rounded-[1.5rem] text-left transition-all duration-300 hover:shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] border border-outline-variant/20 hover:border-primary/40 focus:outline-none">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
              <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors duration-300">bolt</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-3 tracking-tight">Bold & Disruptive</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">Confident, punchy, and unconventional. Perfect for modern brands looking to stand out and challenge the status quo.</p>
            <div className="mt-auto w-full flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              Select Voice <span className="material-symbols-outlined ml-1 text-[18px]">arrow_forward</span>
            </div>
          </button>
        </div>

        {/* Action Area */}
        <div className="flex items-center justify-between w-full max-w-3xl mt-8">
          <button className="text-on-surface-variant hover:text-on-surface font-medium text-sm flex items-center transition-colors px-4 py-2 rounded-lg hover:bg-surface-container-low">
            <span className="material-symbols-outlined mr-2 text-[18px]">arrow_back</span> Back
          </button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold py-4 px-10 rounded-[1.5rem] flex items-center shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5">
            Continue <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
