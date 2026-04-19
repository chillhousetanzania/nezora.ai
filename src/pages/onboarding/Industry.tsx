export default function OnboardingIndustry() {
  const industries = [
    { icon: "cloud", label: "SaaS" },
    { icon: "shopping_cart", label: "E-commerce" },
    { icon: "account_balance", label: "Fintech" },
    { icon: "monitor_heart", label: "Healthcare" },
    { icon: "psychology", label: "AI/ML", selected: true },
    { icon: "school", label: "EdTech" },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center p-6 antialiased">
      <div className="w-full max-w-3xl flex flex-col gap-12">
        {/* Progress */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-xs flex items-center justify-between gap-2">
            {[...Array(3)].map((_, i) => <div key={i} className="h-1 flex-1 bg-primary rounded-full"></div>)}
            {[...Array(5)].map((_, i) => <div key={i} className="h-1 flex-1 bg-surface-container-highest rounded-full"></div>)}
          </div>
          <span className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">Step 3 of 8</span>
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface font-headline leading-tight">
            Which industry best describes your startup?
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl font-body">
            This helps us tailor your operating environment.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((ind) =>
            ind.selected ? (
              <button key={ind.label} className="flex flex-col items-center justify-center p-8 rounded-xl bg-primary-fixed ring-2 ring-primary/40 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] transition-all duration-300 relative overflow-hidden outline-none border-none">
                <div className="absolute inset-0 bg-surface-tint opacity-10 blur-xl rounded-xl"></div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4 relative z-10">{ind.icon}</span>
                <span className="text-base font-bold text-on-primary-fixed relative z-10 font-body">{ind.label}</span>
              </button>
            ) : (
              <button key={ind.label} className="flex flex-col items-center justify-center p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-lowest hover:shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] transition-all duration-300 group ring-1 ring-outline-variant/15 outline-none border-none">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary mb-4 transition-colors">{ind.icon}</span>
                <span className="text-base font-semibold text-on-surface font-body">{ind.label}</span>
              </button>
            )
          )}
        </div>

        {/* Action */}
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] transition-all duration-300 flex items-center gap-2 outline-none border-none">
            Continue
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
