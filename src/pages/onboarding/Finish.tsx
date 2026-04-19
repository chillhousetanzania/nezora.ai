const summaryCards = [
  { bg: "bg-primary-fixed", icon: "badge", label: "Identity", title: "Nexus Alpha", subtitle: "Primary AI Agent" },
  { bg: "bg-secondary-fixed", icon: "domain", label: "Industry Context", title: "Financial Services", subtitle: "Enterprise Wealth Management" },
  { bg: "bg-tertiary-fixed", icon: "record_voice_over", label: "Brand Voice", title: "Authoritative & Clear", subtitle: "Professional, concise, actionable" },
  { bg: "bg-surface-container-highest", icon: "flag", label: "Primary Goal", title: "Client Onboarding", subtitle: "Automate initial document collection" },
];

export default function OnboardingFinish() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col antialiased">
      <main className="flex-grow flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-fixed opacity-40 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary-fixed opacity-30 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>

        <div className="max-w-3xl w-full flex flex-col items-center z-10">
          {/* Step Indicator */}
          <div className="mb-12 flex items-center justify-center space-x-2">
            {[...Array(7)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-surface-container-highest"></div>)}
            <div className="w-8 h-2 rounded-full bg-primary"></div>
          </div>

          {/* Header Section */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center mb-6 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] relative">
              <div className="absolute inset-0 bg-primary opacity-10 rounded-full filter blur-md"></div>
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="text-[3.5rem] font-bold tracking-tight leading-tight mb-4 text-on-surface">Ready to launch.</h1>
            <p className="text-lg text-on-surface-variant max-w-xl mx-auto">Your Nezora AI environment is fully configured and ready to transform your workflow.</p>
          </div>

          {/* Summary Bento Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {summaryCards.map((card) => (
              <div key={card.label} className="bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_8px_32px_-8px_rgba(26,27,31,0.04)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center space-x-1">
                    <span className="text-sm font-medium">Edit</span>
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center text-on-primary-fixed flex-shrink-0`}>
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-medium tracking-widest uppercase text-on-surface-variant mb-1 block">{card.label}</span>
                    <h3 className="text-xl font-semibold text-on-surface mb-1">{card.title}</h3>
                    <p className="text-sm text-on-surface-variant">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Launch Action */}
          <div className="flex flex-col items-center space-y-6 w-full max-w-md">
            <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 px-8 rounded-full text-lg font-semibold tracking-wide shadow-[0_24px_48px_-12px_rgba(0,62,199,0.4)] hover:shadow-[0_24px_48px_-12px_rgba(0,62,199,0.6)] transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden">
              <span className="relative z-10">Launch Nezora AI</span>
              <span className="material-symbols-outlined relative z-10 text-xl">rocket_launch</span>
              <div className="absolute inset-0 bg-surface-tint opacity-10 blur-xl"></div>
            </button>
            <button className="text-primary font-medium hover:text-primary-container transition-colors px-6 py-2">
              Save as draft &amp; exit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
