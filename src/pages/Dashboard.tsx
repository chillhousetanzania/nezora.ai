export default function Dashboard() {
  return (
    <>
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold text-on-surface tracking-tight mb-2">Good morning, Alex</h1>
          <p className="text-on-surface-variant text-lg">Here's what your agents are working on today.</p>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-medium shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(26,27,31,0.12)] transition-shadow flex items-center gap-2 w-fit">
          <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>add</span>
          New Task
        </button>
      </section>

      {/* Section 1: Startup Snapshot (Bento Grid) */}
      <section>
        <h2 className="text-xl font-headline font-semibold text-on-surface mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>query_stats</span>
          Startup Snapshot
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed-dim/20 rounded-full blur-xl"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="text-on-surface-variant font-label tracking-wide uppercase text-sm">Growth</div>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>trending_up</span>
            </div>
            <div className="text-4xl font-headline font-bold text-on-surface mb-2">+12%</div>
            <div className="text-sm text-on-surface-variant flex items-center gap-1">
              <span className="text-secondary font-medium">↑ 2.4%</span> vs last week
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20">
            <div className="flex justify-between items-start mb-4">
              <div className="text-on-surface-variant font-label tracking-wide uppercase text-sm">Content Ready</div>
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>edit_document</span>
            </div>
            <div className="text-4xl font-headline font-bold text-on-surface mb-2">5</div>
            <div className="flex gap-2 mt-3">
              <span className="bg-surface-container-low text-on-surface-variant text-xs px-2 py-1 rounded-md">3 Articles</span>
              <span className="bg-surface-container-low text-on-surface-variant text-xs px-2 py-1 rounded-md">2 Posts</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20">
            <div className="flex justify-between items-start mb-4">
              <div className="text-on-surface-variant font-label tracking-wide uppercase text-sm">Active Leads</div>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
            </div>
            <div className="text-4xl font-headline font-bold text-on-surface mb-2">24</div>
            <div className="w-full bg-surface-container-high rounded-full h-1.5 mt-4">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <div className="text-xs text-on-surface-variant mt-2 text-right">70% to goal</div>
          </div>
        </div>
      </section>

      {/* Main Content Area Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Wider) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Section 2: Today's AI Suggestions */}
          <section>
            <h2 className="text-xl font-headline font-semibold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-surface-tint opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              Today's AI Suggestions
            </h2>
            <div className="space-y-4">
              {/* Suggestion Card 1 */}
              <div className="bg-surface-container-lowest/80 backdrop-blur-md rounded-xl p-6 border border-outline-variant/15 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-container"></div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,76,237,0.15)]">
                    <span className="material-symbols-outlined text-on-primary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>campaign</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-on-surface text-lg mb-1">Marketing Agent Update</h3>
                    <p className="text-on-surface-variant mb-4">Your Marketing Agent drafted 3 new posts for LinkedIn based on yesterday's product release notes.</p>
                    <div className="flex gap-3">
                      <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-container transition-colors">Review Posts</button>
                      <button className="bg-surface-container-high text-on-surface px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-container-highest transition-colors">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Suggestion Card 2 */}
              <div className="bg-surface-container-lowest/80 backdrop-blur-md rounded-xl p-6 border border-outline-variant/15 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-container-high group-hover:bg-secondary/50 transition-colors"></div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>person_search</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-on-surface text-lg mb-1">Lead Generation Alert</h3>
                    <p className="text-on-surface-variant mb-4">Found 12 high-intent leads matching your ideal customer profile in the tech sector.</p>
                    <div className="flex gap-3">
                      <button className="bg-surface-container-high text-on-surface px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-container-highest transition-colors">View Leads</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Task Progress */}
          <section>
            <h2 className="text-xl font-headline font-semibold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>checklist</span>
              Task Progress
            </h2>
            <div className="bg-surface-container-low rounded-xl p-6 space-y-6">
              {/* Progress 1 */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <h4 className="font-medium text-on-surface">Q3 Content Strategy</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Research Agent</p>
                  </div>
                  <span className="text-sm font-medium text-primary">85%</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              {/* Progress 2 */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <h4 className="font-medium text-on-surface">Competitor Analysis Report</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Analytics Agent</p>
                  </div>
                  <span className="text-sm font-medium text-secondary">40%</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Narrower) */}
        <div className="space-y-12">
          {/* Section 4: Latest Activity Feed */}
          <section>
            <h2 className="text-xl font-headline font-semibold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>history</span>
              Latest Activity
            </h2>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-outline-variant/10 relative">
              {/* Vertical Line */}
              <div className="absolute left-10 top-10 bottom-10 w-px bg-surface-container-highest"></div>
              <div className="space-y-8 relative">
                {/* Activity Item 1 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center z-10 shrink-0">
                    <span className="material-symbols-outlined text-on-primary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>done</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface"><span className="font-medium">SEO Agent</span> optimized homepage meta tags.</p>
                    <p className="text-xs text-on-surface-variant mt-1">10 mins ago</p>
                  </div>
                </div>
                {/* Activity Item 2 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center z-10 shrink-0 border border-surface-container-lowest">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface"><span className="font-medium">Sales Agent</span> sent follow-up emails to 5 prospects.</p>
                    <p className="text-xs text-on-surface-variant mt-1">2 hours ago</p>
                  </div>
                </div>
                {/* Activity Item 3 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center z-10 shrink-0 border border-surface-container-lowest">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>database</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface"><span className="font-medium">System</span> synced new CRM contacts.</p>
                    <p className="text-xs text-on-surface-variant mt-1">Yesterday</p>
                  </div>
                </div>
              </div>
              <button className="w-full text-center text-sm font-medium text-primary mt-6 hover:text-primary-container transition-colors">View All Activity</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
