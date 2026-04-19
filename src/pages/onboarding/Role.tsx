export default function OnboardingRole() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen antialiased flex flex-col items-center justify-center relative overflow-hidden">
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-secondary/5 blur-[80px] pointer-events-none z-0"></div>
      <main className="w-full max-w-[600px] px-6 py-12 z-10 relative">
        {/* Progress Indicator */}
        <div className="flex items-center space-x-4 mb-12">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-[0_8px_16px_-6px_rgba(26,27,31,0.04)]">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <div className="flex-1">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-label tracking-widest uppercase text-on-surface-variant font-medium">Step 2 of 8</span>
              <span className="text-xs font-label text-primary font-medium">25%</span>
            </div>
            <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full w-[25%] transition-all duration-500 ease-out"></div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-surface-container-lowest rounded-[2rem] p-10 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] relative overflow-hidden">
          <div className="absolute inset-0 rounded-[2rem] border-[0.5px] border-outline-variant/20 pointer-events-none"></div>
          <div className="mb-10 text-center">
            <span className="inline-block p-4 rounded-2xl bg-surface-container-low text-primary mb-6 shadow-sm shadow-primary/5">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            </span>
            <h1 className="text-3xl font-headline font-semibold tracking-tight text-on-surface mb-3">Tell us about your role.</h1>
            <p className="text-on-surface-variant font-body">This helps us tailor the Nezora AI experience to your specific workflows.</p>
          </div>

          {/* Role Selection Options */}
          <form className="space-y-4 mb-10">
            {[
              { value: "solo_founder", label: "Solo Founder" },
              { value: "technical_founder", label: "Technical Founder", checked: true },
              { value: "ceo", label: "CEO" },
              { value: "marketing_lead", label: "Marketing Lead" },
              { value: "operations_lead", label: "Operations Lead" },
            ].map((role) => (
              <label key={role.value} className="relative flex items-center p-5 cursor-pointer rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors group">
                <input className="peer sr-only" name="role" type="radio" value={role.value} defaultChecked={role.checked} />
                <div className="w-6 h-6 rounded-full border-[1.5px] border-outline-variant/50 peer-checked:border-primary peer-checked:border-[6px] mr-5 transition-all duration-200 ease-out flex-shrink-0 bg-surface-container-lowest"></div>
                <div className="flex-1">
                  <span className="block text-base font-medium text-on-surface group-hover:text-primary transition-colors">{role.label}</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 peer-checked:opacity-100 peer-checked:border-[1px] peer-checked:border-primary/20 transition-all pointer-events-none"></div>
              </label>
            ))}
          </form>

          {/* Actions */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-surface-container-highest">
            <button className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors px-4 py-2 rounded-lg hover:bg-surface-container-low" type="button">Skip</button>
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-medium px-8 py-3.5 rounded-xl flex items-center space-x-2 hover:shadow-[0_8px_16px_-4px_rgba(0,62,199,0.25)] transition-all transform hover:-translate-y-0.5" type="button">
              <span>Continue</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
