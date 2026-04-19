export default function Analytics() {
  return (
    <>
      <style>{`
        .ai-pulse {
            animation: aiPulse 3s infinite alternate;
        }
        @keyframes aiPulse {
            0% { box-shadow: 0 0 0 0 rgba(0, 76, 237, 0.1); }
            100% { box-shadow: 0 0 20px 10px rgba(0, 76, 237, 0.05); }
        }
        .smooth-line-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
            animation: dash 2s ease-out forwards;
        }
        @keyframes dash {
            to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Header Section */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-[3.5rem] leading-none font-bold tracking-tight text-on-surface mb-2">Analytics</h1>
          <p className="text-on-surface-variant text-lg tracking-wide max-w-2xl">Your digital presence, decoded.</p>
        </div>
        
        {/* Time Toggle */}
        <div className="flex items-center bg-surface-container-low p-1 rounded-full w-fit">
          <button className="px-6 py-2 rounded-full text-sm font-medium tracking-wide bg-surface-container-lowest shadow-[0_4px_12px_rgba(26,27,31,0.06)] text-on-surface">Weekly</button>
          <button className="px-6 py-2 rounded-full text-sm font-medium tracking-wide text-on-surface-variant hover:text-on-surface transition-colors">Monthly</button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(180px,auto)]">
        
        {/* High Level Metric 1: Growth */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-[1.5rem] p-8 flex flex-col justify-between shadow-[0_12px_32px_-8px_rgba(26,27,31,0.04)] relative overflow-hidden group">
          <div className="flex justify-between items-start mb-6 z-10 relative">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant font-semibold">Audience Growth</span>
            <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-full" style={{ fontVariationSettings: "'FILL' 0" }}>trending_up</span>
          </div>
          <div className="z-10 relative">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[3rem] font-bold leading-none tracking-tighter text-on-surface">14.2k</span>
              <span className="text-sm font-semibold text-secondary-container bg-secondary-fixed px-2 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-sm text-on-surface-variant">Total active followers</p>
          </div>
          {/* Subtle background decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-fixed-dim to-transparent rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
        </div>

        {/* High Level Metric 2: Conversion */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-[1.5rem] p-8 flex flex-col justify-between shadow-[0_12px_32px_-8px_rgba(26,27,31,0.04)] relative overflow-hidden group">
          <div className="flex justify-between items-start mb-6 z-10 relative">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant font-semibold">Conversion Rate</span>
            <span className="material-symbols-outlined text-secondary bg-secondary-fixed p-2 rounded-full" style={{ fontVariationSettings: "'FILL' 0" }}>ads_click</span>
          </div>
          <div className="z-10 relative">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[3rem] font-bold leading-none tracking-tighter text-on-surface">4.8%</span>
              <span className="text-sm font-semibold text-secondary-container bg-secondary-fixed px-2 py-1 rounded-full">+1.2%</span>
            </div>
            <p className="text-sm text-on-surface-variant">Click-through to CTA</p>
          </div>
          {/* Subtle background decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-secondary-fixed-dim to-transparent rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
        </div>

        {/* AI Insight Card */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-[1.5rem] p-8 flex flex-col justify-between shadow-[0_12px_32px_-8px_rgba(26,27,31,0.04)] ai-pulse relative overflow-hidden border border-outline-variant/15">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-surface-tint" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="text-xs font-bold uppercase tracking-widest text-surface-tint">AI Insight</span>
          </div>
          <p className="text-xl font-medium leading-snug text-on-surface mb-6">Your LinkedIn posts are <span className="text-primary font-bold">30% more effective</span> when published at 9 AM EST on Tuesdays.</p>
          <button className="self-start text-sm font-semibold text-primary hover:text-primary-container flex items-center gap-1 transition-colors">
            Schedule next post <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
          </button>
        </div>

        {/* Main Engagement Chart (Span 8) */}
        <div className="md:col-span-8 md:row-span-2 bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_12px_32px_-8px_rgba(26,27,31,0.04)] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-semibold text-on-surface">Engagement Overview</h3>
              <p className="text-sm text-on-surface-variant">Impressions vs Interactions over time</p>
            </div>
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>more_horiz</span>
            </button>
          </div>
          
          {/* SVG Chart Mockup */}
          <div className="flex-grow w-full relative min-h-[250px]">
            <svg className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 300">
              {/* Grid lines */}
              <line stroke="#f4f3f8" strokeWidth="2" x1="0" x2="800" y1="50" y2="50"></line>
              <line stroke="#f4f3f8" strokeWidth="2" x1="0" x2="800" y1="125" y2="125"></line>
              <line stroke="#f4f3f8" strokeWidth="2" x1="0" x2="800" y1="200" y2="200"></line>
              <line stroke="#f4f3f8" strokeWidth="2" x1="0" x2="800" y1="275" y2="275"></line>
              
              {/* Gradient for primary line */}
              <defs>
                <linearGradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#003ec7"></stop>
                  <stop offset="100%" stopColor="#0052ff"></stop>
                </linearGradient>
                <linearGradient id="areaGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#003ec7" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="#003ec7" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              
              {/* Area under curve */}
              <path d="M0,250 C100,200 200,220 300,150 C400,80 500,100 600,40 C700,-20 800,20 800,20 L800,275 L0,275 Z" fill="url(#areaGrad)"></path>
              {/* Smooth Line */}
              <path className="smooth-line-path" d="M0,250 C100,200 200,220 300,150 C400,80 500,100 600,40 C700,-20 800,20 800,20" fill="none" stroke="url(#lineGrad)" strokeLinecap="round" strokeWidth="4"></path>
              {/* Data points */}
              <circle cx="300" cy="150" fill="#ffffff" r="6" stroke="#003ec7" strokeWidth="3"></circle>
              <circle cx="600" cy="40" fill="#ffffff" r="6" stroke="#003ec7" strokeWidth="3"></circle>
            </svg>
            
            {/* X Axis Labels */}
            <div className="absolute bottom-0 w-full flex justify-between text-xs text-on-surface-variant font-medium translate-y-6">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Goal Progress (Span 4) */}
        <div className="md:col-span-4 md:row-span-2 bg-surface-container-low rounded-[1.5rem] p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-on-surface">Weekly Goals</h3>
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>track_changes</span>
            </div>
            
            <div className="space-y-8">
              {/* Goal 1 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-on-surface">Publish Content</span>
                  <span className="text-on-surface-variant">3 / 5</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full w-[60%]"></div>
                </div>
              </div>
              
              {/* Goal 2 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-on-surface">Network Growth</span>
                  <span className="text-on-surface-variant">80 / 100</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full w-[80%]"></div>
                </div>
              </div>

              {/* Goal 3 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-on-surface">Engagement Score</span>
                  <span className="text-on-surface-variant">45 / 50</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary-container rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 flex gap-4 items-center">
            <div className="bg-primary-fixed text-primary p-2 rounded-full shrink-0">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>emoji_events</span>
            </div>
            <p className="text-sm text-on-surface-variant"><strong className="text-on-surface">On track!</strong> You're 20% ahead of last week's pacing.</p>
          </div>
        </div>

      </div>
    </>
  );
}
