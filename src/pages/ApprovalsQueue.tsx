export default function ApprovalsQueue() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tight mb-2">Pending Approvals</h1>
        <p className="text-on-surface-variant font-body">Review and authorize AI-generated actions before execution.</p>
      </div>
      {/* Filters / Status Bar */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-error"></span>
          <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">High Risk (1)</span>
        </div>
        <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Medium Risk (2)</span>
        </div>
        <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Low Risk (4)</span>
        </div>
      </div>
      {/* Queue */}
      <div className="space-y-8 pb-32">
        {/* High Risk Card (Bento Style) */}
        <div className="bg-surface-container-lowest rounded-xl p-6 relative overflow-hidden shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)] border border-outline-variant/20">
          {/* Intelligence Pulse */}
          <div className="absolute inset-0 bg-surface-tint opacity-5 animate-pulse pointer-events-none rounded-xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-error/10 text-error px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">High Risk</span>
                <span className="text-sm text-on-surface-variant font-medium">Marketing Agent</span>
              </div>
              <h2 className="text-xl font-bold text-on-surface mb-3">Execute $15,000 Ad Campaign Shift</h2>
              <p className="text-on-surface-variant mb-4 leading-relaxed">
                The AI detected a 40% drop in ROI on Meta Ads and suggests reallocating the remaining monthly budget to Google Search Ads focusing on "Enterprise Solutions".
              </p>
              {/* Audit Log Preview */}
              <div className="bg-surface-container-low p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-on-surface mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">history</span> Context
                </h3>
                <ul className="text-sm text-on-surface-variant space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant mt-1.5 flex-shrink-0"></span>
                    <span>Analyzed performance data across 5 campaigns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant mt-1.5 flex-shrink-0"></span>
                    <span>Identified keyword "Enterprise" as having highest conversion probability (87%).</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-outline-variant/20 pt-6 md:pt-0 md:pl-6">
              <div className="mb-6">
                <div className="text-sm text-on-surface-variant mb-1">Impact Estimate</div>
                <div className="text-2xl font-bold text-on-surface">+12% ROI</div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl py-3 font-medium shadow-[0_8px_16px_-4px_rgba(0,62,199,0.2)] hover:shadow-[0_12px_24px_-4px_rgba(0,62,199,0.3)] transition-all">
                  Approve Action
                </button>
                <button className="w-full bg-surface-container-high text-on-surface rounded-xl py-3 font-medium hover:bg-surface-container-highest transition-colors">
                  Edit Parameters
                </button>
                <button className="w-full text-error rounded-xl py-3 font-medium hover:bg-error/5 transition-colors">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Medium Risk Card */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-500/10 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Med Risk</span>
                <span className="text-sm text-on-surface-variant font-medium">Customer Support Agent</span>
              </div>
              <h2 className="text-lg font-bold text-on-surface mb-2">Publish Knowledge Base Article</h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Drafted a new public article addressing the recent API latency issues. Content is verified against engineering logs, but requires tone approval.
              </p>
            </div>
            <div className="flex flex-row md:flex-col items-center justify-end gap-3 min-w-[140px]">
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl py-2 font-medium">Approve</button>
              <button className="w-full bg-surface-container-high text-on-surface rounded-xl py-2 font-medium">Review</button>
            </div>
          </div>
        </div>
        {/* Low Risk Card */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Low Risk</span>
                <span className="text-sm text-on-surface-variant font-medium">Data Agent</span>
              </div>
              <h2 className="text-lg font-bold text-on-surface mb-2">Archive Q2 Raw Data Logs</h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Logs older than 90 days are ready for cold storage to optimize database performance.
              </p>
            </div>
            <div className="flex flex-row md:flex-col items-center justify-end gap-3 min-w-[140px]">
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl py-2 font-medium">Approve</button>
              <button className="w-full text-on-surface-variant rounded-xl py-2 font-medium hover:bg-surface-container-low">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
