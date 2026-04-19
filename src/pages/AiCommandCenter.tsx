export default function AiCommandCenter() {
  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-140px)] relative w-full -mt-6">
      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-4 py-8 flex flex-col gap-8 scroll-smooth pb-40">
        {/* Date Separator */}
        <div className="flex justify-center">
          <span className="text-[11px] font-medium tracking-wider uppercase text-on-surface-variant bg-surface-container py-1 px-3 rounded-full">Today</span>
        </div>

        {/* Founder Message */}
        <div className="flex flex-col items-end gap-2">
          <div className="bg-primary/5 text-on-surface px-6 py-4 rounded-3xl rounded-tr-sm max-w-[85%] border border-primary/10 shadow-sm">
            <p className="text-sm md:text-base leading-relaxed">Review the latest analytics report and draft an update for the team on our Q3 goals.</p>
          </div>
          <span className="text-[11px] text-on-surface-variant/70 mr-2 tracking-wide">10:42 AM</span>
        </div>

        {/* AI Response */}
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-3 mb-1 ml-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <span className="text-sm font-semibold text-primary">Nezora</span>
          </div>
          
          <div className="bg-surface-container-lowest px-6 py-5 rounded-3xl rounded-tl-sm w-full md:max-w-[90%] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/10 relative overflow-hidden">
            {/* Intelligence Pulse */}
            <div className="absolute -inset-1 bg-surface-tint opacity-5 blur-xl rounded-full mix-blend-multiply animate-pulse"></div>
            
            <div className="relative z-10 flex flex-col gap-6">
              <p className="text-sm md:text-base leading-relaxed text-on-surface">I've analyzed the Q3 data. We are exceeding targets in engagement but seeing a slight dip in conversion rates. Here is a summary chart and a drafted update for the team.</p>
              
              {/* Bento Grid Result Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mini Chart Card */}
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Q3 Engagement</span>
                    <span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-secondary-container/20 to-primary-container/20 rounded-lg flex items-end px-2 pb-2 gap-2">
                    <div className="w-full bg-primary/40 rounded-t-sm h-[40%]"></div>
                    <div className="w-full bg-primary/60 rounded-t-sm h-[60%]"></div>
                    <div className="w-full bg-primary/80 rounded-t-sm h-[85%]"></div>
                    <div className="w-full bg-primary rounded-t-sm h-[100%]"></div>
                  </div>
                </div>

                {/* Draft Card */}
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col gap-2 border border-outline-variant/20">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-sm">edit_document</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Draft Update</span>
                  </div>
                  <p className="text-xs text-on-surface-variant line-clamp-3 italic">"Team, great work on Q3 engagement metrics! We've seen a 24% increase in active users. Let's refocus our efforts on the conversion funnel for Q4..."</p>
                  <button className="mt-auto text-xs font-semibold text-primary hover:text-primary-container transition-colors text-left flex items-center gap-1">
                    Review Draft <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
          <span className="text-[11px] text-on-surface-variant/70 ml-12 tracking-wide">10:43 AM</span>
        </div>

        {/* Founder Command */}
        <div className="flex flex-col items-end gap-2">
          <div className="bg-primary/5 text-on-surface px-6 py-4 rounded-3xl rounded-tr-sm max-w-[85%] border border-primary/10 shadow-sm">
            <p className="text-sm md:text-base leading-relaxed">Looks good. Schedule all ready posts for next week.</p>
          </div>
          <span className="text-[11px] text-on-surface-variant/70 mr-2 tracking-wide">10:45 AM</span>
        </div>

        {/* AI Action Confirmation */}
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-3 mb-1 ml-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <span className="text-sm font-semibold text-primary">Nezora</span>
          </div>
          
          <div className="bg-surface-container-lowest px-6 py-6 rounded-3xl rounded-tl-sm w-full md:max-w-[80%] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-2 border-primary/10 relative">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_clock</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Confirm Schedule</h4>
                  <p className="text-xs text-on-surface-variant">4 posts queued for Oct 12 - Oct 16</p>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button className="flex-1 bg-surface-container-high hover:bg-surface-dim text-on-surface font-medium text-sm py-3 rounded-xl transition-colors">
                  Review First
                </button>
                <button className="flex-1 bg-gradient-to-br from-primary to-primary-container text-on-primary font-medium text-sm py-3 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-surface via-surface/95 to-transparent pt-8 pb-4 z-20">
        {/* Suggested Prompts */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x">
          <button className="snap-start whitespace-nowrap bg-primary-fixed/50 hover:bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-4 py-2 rounded-full transition-colors border border-primary/10">
            Draft weekly newsletter
          </button>
          <button className="snap-start whitespace-nowrap bg-surface-container-highest hover:bg-surface-dim text-on-surface-variant text-xs font-medium px-4 py-2 rounded-full transition-colors border border-outline-variant/20">
            Summarize latest feedback
          </button>
          <button className="snap-start whitespace-nowrap bg-surface-container-highest hover:bg-surface-dim text-on-surface-variant text-xs font-medium px-4 py-2 rounded-full transition-colors border border-outline-variant/20">
            Check server status
          </button>
        </div>
        
        {/* Input Field */}
        <div className="relative flex items-center">
          <div className="absolute left-4 text-outline flex items-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>add_circle</span>
          </div>
          <input className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary/40 rounded-2xl py-4 pl-12 pr-16 text-sm text-on-surface placeholder:text-outline shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all outline-none" placeholder="Command Nezora..." type="text" />
          <button className="absolute right-2 bg-primary text-on-primary w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_upward</span>
          </button>
        </div>
        
        <div className="text-center mt-2 hidden md:block">
          <span className="text-[10px] text-outline font-medium tracking-wide uppercase">Press Enter to send</span>
        </div>
      </div>
    </div>
  );
}
