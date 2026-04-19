export default function MarketingCampaigns() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-16 w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-[3.5rem] leading-none font-bold tracking-[-0.02em] text-on-surface mb-2 font-headline">Campaigns</h2>
          <p className="text-lg text-on-surface-variant font-body max-w-2xl">Manage and monitor your active marketing initiatives.</p>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 hover:shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] transition-all duration-300">
          <span className="material-symbols-outlined">add</span>
          New Campaign
        </button>
      </div>

      {/* Metric Overview (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.04)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-surface-tint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">campaign</span>
            <span className="text-xs font-medium tracking-[0.05em] uppercase text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">Active</span>
          </div>
          <h3 className="text-4xl font-bold tracking-tight text-on-surface mb-2">12</h3>
          <p className="text-sm text-on-surface-variant">Live campaigns across all channels</p>
        </div>

        <div className="bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.04)]">
          <div className="flex justify-between items-start mb-6">
            <span className="material-symbols-outlined text-secondary text-3xl">group_add</span>
            <span className="text-xs font-medium tracking-[0.05em] uppercase text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">This Month</span>
          </div>
          <h3 className="text-4xl font-bold tracking-tight text-on-surface mb-2">4.2k</h3>
          <p className="text-sm text-on-surface-variant">Total leads generated</p>
        </div>

        <div className="bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.04)]">
          <div className="flex justify-between items-start mb-6">
            <span className="material-symbols-outlined text-tertiary text-3xl">trending_up</span>
            <span className="text-xs font-medium tracking-[0.05em] uppercase text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">Global</span>
          </div>
          <h3 className="text-4xl font-bold tracking-tight text-on-surface mb-2">18%</h3>
          <p className="text-sm text-on-surface-variant">Average conversion rate</p>
        </div>
      </div>

      {/* Campaign List */}
      <div className="space-y-8 pb-32 md:pb-0">
        <h3 className="text-2xl font-bold tracking-tight text-on-surface">Active Initiatives</h3>

        {/* Campaign Card 1 */}
        <div className="bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.04)] flex flex-col md:flex-row gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-surface-tint/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase">Active</span>
              <span className="text-sm text-on-surface-variant font-medium">Q3 Lead Gen</span>
            </div>
            <h4 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">Enterprise Software Demo Drive</h4>
            <p className="text-on-surface-variant mb-6 leading-relaxed max-w-2xl">Targeting C-level executives in the FinTech sector to drive signups for our new AI-powered analytics dashboard webinar.</p>
            <div className="flex gap-6 mb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-sm">flag</span>
                <span className="text-sm font-medium text-on-surface">Objective:</span>
                <span className="text-sm text-on-surface-variant">500 MQLs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-sm">event</span>
                <span className="text-sm font-medium text-on-surface">Ends:</span>
                <span className="text-sm text-on-surface-variant">Nov 15, 2023</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-72 bg-surface-container-low rounded-xl p-6 flex flex-col justify-center">
            <div className="flex justify-between items-end mb-4">
              <span className="text-sm font-medium text-on-surface-variant">Progress</span>
              <span className="text-2xl font-bold text-primary">68%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" style={{ width: "68%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-on-surface-variant font-medium">
              <span>340 Leads</span>
              <span>Target: 500</span>
            </div>
          </div>
        </div>

        {/* Campaign Card 2 */}
        <div className="bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.04)] flex flex-col md:flex-row gap-8 relative overflow-hidden group">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase">Active</span>
              <span className="text-sm text-on-surface-variant font-medium">Product Launch</span>
            </div>
            <h4 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">Nezora Copilot Beta Announcement</h4>
            <p className="text-on-surface-variant mb-6 leading-relaxed max-w-2xl">Multi-channel awareness campaign driving early access registrations for the new intelligent coding assistant.</p>
            <div className="flex gap-6 mb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-sm">flag</span>
                <span className="text-sm font-medium text-on-surface">Objective:</span>
                <span className="text-sm text-on-surface-variant">10k Waitlist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-sm">event</span>
                <span className="text-sm font-medium text-on-surface">Ends:</span>
                <span className="text-sm text-on-surface-variant">Dec 01, 2023</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-72 bg-surface-container-low rounded-xl p-6 flex flex-col justify-center">
            <div className="flex justify-between items-end mb-4">
              <span className="text-sm font-medium text-on-surface-variant">Progress</span>
              <span className="text-2xl font-bold text-primary">42%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" style={{ width: "42%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-on-surface-variant font-medium">
              <span>4.2k Signups</span>
              <span>Target: 10k</span>
            </div>
          </div>
        </div>

        {/* Campaign Card 3 (Draft) */}
        <div className="bg-surface-container-lowest opacity-80 rounded-[1.5rem] p-8 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.02)] flex flex-col md:flex-row gap-8 relative border border-outline-variant/20">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase">Draft</span>
              <span className="text-sm text-on-surface-variant font-medium">Holiday Promo</span>
            </div>
            <h4 className="text-2xl font-bold text-on-surface mb-3 tracking-tight text-on-surface-variant">End of Year Upsell Journey</h4>
            <p className="text-on-surface-variant mb-6 leading-relaxed max-w-2xl">Email sequence targeting free-tier users with a special annual subscription discount.</p>
            <div className="flex gap-6 mb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-sm">flag</span>
                <span className="text-sm font-medium text-on-surface">Objective:</span>
                <span className="text-sm text-on-surface-variant">15% Upgrade Rate</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-72 flex items-center justify-center">
            <button className="bg-surface-container-high text-on-surface px-6 py-3 rounded-xl font-medium tracking-wide hover:bg-surface-container-highest transition-colors">
              Continue Editing
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
