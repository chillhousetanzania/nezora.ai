export default function AgentWorkspace() {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full mt-8">
      {/* Left Column: Workspace & Chat */}
      <div className="flex-grow flex flex-col gap-8 min-w-0 md:w-2/3">
        {/* Agent Header & Status */}
        <section className="flex flex-col gap-6">
          {/* Agent Selector */}
          <div className="flex items-center justify-between">
            <div className="relative group cursor-pointer inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl hover:bg-surface-container-highest transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>person_check</span>
              </div>
              <div>
                <span className="text-on-surface font-semibold block text-sm">CEO Agent</span>
                <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">Active Workspace</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant ml-2" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-xl bg-surface-container-high text-on-surface font-medium hover:bg-surface-container-highest transition-colors flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>pause</span>
                Pause Agent
              </button>
            </div>
          </div>
          
          {/* Active Status Card */}
          <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 pulse-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
            </div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary mt-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <h2 className="text-on-surface font-semibold text-lg tracking-tight">Active Operation</h2>
                </div>
                <p className="text-on-surface-variant font-medium text-lg leading-relaxed max-w-2xl">
                  CEO Agent is analyzing <span className="text-primary font-semibold">Q4 strategy</span>, comparing recent market shifts against our internal KPIs to synthesize a revised resource allocation plan.
                </p>
                <div className="mt-4 flex gap-4">
                  <span className="text-sm text-on-surface-variant flex items-center gap-1 bg-surface py-1 px-3 rounded-full border border-outline-variant/20">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span>
                    Est. completion: 12m
                  </span>
                  <span className="text-sm text-on-surface-variant flex items-center gap-1 bg-surface py-1 px-3 rounded-full border border-outline-variant/20">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>database</span>
                    Scanning 4 data sources
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="flex-grow flex flex-col bg-surface-container-lowest rounded-[1.5rem] shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] overflow-hidden min-h-[500px]">
          <div className="p-6 border-b border-surface-container-low/50 flex justify-between items-center bg-surface-container-lowest/80 backdrop-blur-md">
            <h3 className="text-on-surface font-semibold tracking-tight">Strategic Dialogue</h3>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</span>
            </button>
          </div>
          <div className="flex-grow p-6 flex flex-col gap-8 overflow-y-auto bg-surface">
            {/* User Message */}
            <div className="flex gap-4 justify-end">
              <div className="bg-surface-container-low text-on-surface rounded-2xl rounded-tr-none px-5 py-4 max-w-[80%]">
                <p className="text-on-surface-variant leading-relaxed">
                  Review the current draft for the Q4 board deck. Are we leaning too heavily into the new product launch and neglecting the core enterprise retention metrics?
                </p>
              </div>
              <img alt="Founder" className="w-10 h-10 rounded-full object-cover shadow-sm bg-surface-container-high" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmqk7RNGJUvYUN8IHBWNE5l2iSLzL9OxcDjuvmZtrotENrnXmSYlbDWKilc5oBW0O3pJXtH2PtzbZgKrHADFarutaq7MdJ73s-pkyCHhPHPZCAG2HwGl9GfwIQ4tu56uO93KF-fDwuUBvTI1mntwYyRBohkKiqXdiXCJkoTdoixNblVmi4Ni5U4vpAuqJR4TQlX28AXxu777Uyu4c5MoLjWP2cKSf98ppXrOXDv09b5lUS6tKpW8g35LfO8TjAI_5NIapsz4pYiw5u" />
            </div>

            {/* Agent Response */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary shadow-sm flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>smart_toy</span>
              </div>
              <div className="flex flex-col gap-3 max-w-[85%]">
                <div className="bg-surface-container-lowest border border-outline-variant/10 text-on-surface rounded-2xl rounded-tl-none px-5 py-4 shadow-sm shadow-blue-500/5">
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    I've analyzed the draft alongside our latest retention data. You're correct to flag this. 
                  </p>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    The current narrative allocates 65% of its focus to the new launch, while enterprise churn has ticked up by 1.2% this quarter. I recommend restructuring Section 3 to highlight our renewed "Core Value" initiative.
                  </p>
                  
                  {/* Embedded Actionable UI */}
                  <div className="bg-surface-container-low rounded-xl p-4 mt-4 border border-outline-variant/20">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>edit_document</span>
                      <span className="font-medium text-on-surface text-sm">Suggested Revision: Section 3</span>
                    </div>
                    <p className="text-xs text-on-surface-variant mb-3 line-clamp-2">Drafting a new slide sequence focusing on enterprise success stories and the upcoming feature parity rollout designed to stabilize churn.</p>
                    <button className="text-sm font-medium text-primary hover:text-primary-container transition-colors flex items-center gap-1">
                      Review Output
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 bg-surface-container-lowest border-t border-surface-container-low/50">
            <div className="relative flex items-center bg-surface-container-low rounded-[1.5rem] p-2 pr-4 border border-outline-variant/20 focus-within:border-primary/40 focus-within:bg-surface-container-lowest transition-all">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>add_circle</span>
              </button>
              <input className="flex-grow bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 text-sm py-3 px-2 outline-none" placeholder="Direct the CEO Agent..." type="text" />
              <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow ml-2">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_upward</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Task Queue Drawer */}
      <aside className="md:w-1/3 flex flex-col gap-6">
        <div className="bg-surface-container-low rounded-[1.5rem] p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-on-surface font-semibold tracking-tight text-lg">Task Queue</h3>
            <span className="bg-surface-container-highest text-on-surface-variant text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">3 Pending</span>
          </div>
          
          <div className="flex flex-col gap-4 flex-grow">
            {/* Task Item 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider">High Priority</span>
                <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>more_vert</span>
                </button>
              </div>
              <h4 className="text-on-surface font-medium text-sm mb-1">Finalize Investor Update</h4>
              <p className="text-on-surface-variant text-xs mb-4 line-clamp-2">Compile final metrics from Stripe and Hubspot to generate the monthly investor dispatch.</p>
              <button className="w-full py-2 bg-gradient-to-br from-primary to-primary-container rounded-lg text-white text-sm font-medium shadow-sm hover:shadow-md transition-all">
                Start Task
              </button>
            </div>

            {/* Task Item 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Scheduled</span>
              </div>
              <h4 className="text-on-surface font-medium text-sm mb-1">Review Competitor Pricing</h4>
              <p className="text-on-surface-variant text-xs mb-4 line-clamp-2">Analyze recent pricing tier changes from top 3 competitors and model impact on our margins.</p>
              <button className="w-full py-2 bg-surface text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary-fixed hover:border-primary/0 transition-all">
                Queue Next
              </button>
            </div>

            {/* Task Item 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/10 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer group opacity-75">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Backlog</span>
              </div>
              <h4 className="text-on-surface font-medium text-sm mb-1">Draft Q1 Hiring Plan</h4>
              <p className="text-on-surface-variant text-xs mb-4 line-clamp-2">Align with department heads on engineering headcount requirements based on roadmap.</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
