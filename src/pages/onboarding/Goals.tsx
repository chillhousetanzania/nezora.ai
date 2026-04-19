const goals = [
  { value: "Rapid Growth", checked: true },
  { value: "Market Research" },
  { value: "Efficient Operations", checked: true },
  { value: "Product-Market Fit" },
  { value: "Scaling Sales" },
  { value: "Content Dominance" },
];

export default function OnboardingGoals() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col items-center justify-center antialiased relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-surface-container-low blur-[150px]"></div>
      </div>
      <main className="w-full max-w-3xl px-6 py-12 md:py-24 flex flex-col items-center z-10 relative">
        {/* Progress Bar */}
        <div className="w-full mb-16 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4 text-xs text-on-surface-variant font-medium tracking-wide uppercase">
            <span>Step 5</span>
            <span>5 of 8</span>
          </div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden flex">
            <div className="bg-primary h-full rounded-full transition-all duration-500 ease-out" style={{ width: "62.5%" }}></div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-headline font-bold text-on-surface tracking-tight mb-4 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            What is your primary focus right now?
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto font-body">
            Select the goals that matter most to your business. This helps Nezora AI tailor your operating environment.
          </p>
        </div>

        {/* Goals Pill Grid */}
        <div className="w-full max-w-2xl">
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {goals.map((goal) => (
              <label key={goal.value} className="cursor-pointer group relative">
                <input className="peer sr-only" name="goal" type="checkbox" value={goal.value} defaultChecked={goal.checked} />
                <div className={`px-6 py-4 rounded-full border font-medium transition-all duration-300 ease-out flex items-center gap-2 ${goal.checked
                  ? "border-transparent bg-primary-fixed text-on-primary-fixed shadow-[0_8px_24px_-8px_rgba(0,62,199,0.2)]"
                  : "border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                  }`}>
                  <span>{goal.value}</span>
                  {goal.checked && (
                    <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  )}
                </div>
              </label>
            ))}
          </div>
          <div className="flex justify-center items-center gap-6 mt-12 w-full max-w-md mx-auto">
            <button className="px-8 py-4 rounded-xl text-primary font-semibold transition-colors hover:bg-surface-container-low focus:outline-none" type="button">
              Skip for now
            </button>
            <button className="px-10 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold shadow-[0_8px_24px_-12px_rgba(0,62,199,0.4)] hover:shadow-[0_16px_32px_-12px_rgba(0,62,199,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex-1 flex justify-center items-center gap-2" type="submit">
              <span>Continue</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
