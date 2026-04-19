export default function SalesWorkspace() {
  return (
    <main className="flex-1 flex flex-col lg:flex-row gap-8 p-6 lg:p-8 max-w-[1600px] mx-auto w-full mt-4">
      {/* Left Column: Pipeline & Lead List */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* Pipeline Summary (Glassmorphism) */}
        <section className="bg-surface-container-lowest rounded-[1.5rem] p-6 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <h2 className="text-lg font-bold text-on-surface mb-6 tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stacked_bar_chart</span>
            Active Pipeline
          </h2>
          <div className="flex justify-between items-end gap-2">
            <div className="flex flex-col items-center flex-1 bg-surface-container-low rounded-xl p-3">
              <span className="text-3xl font-extrabold text-on-surface tracking-tighter">42</span>
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mt-1">Discovery</span>
            </div>
            <div className="flex flex-col items-center flex-1 bg-primary/10 rounded-xl p-3 border border-primary/20">
              <span className="text-3xl font-extrabold text-primary tracking-tighter">18</span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">Pitch</span>
            </div>
            <div className="flex flex-col items-center flex-1 bg-surface-container-low rounded-xl p-3">
              <span className="text-3xl font-extrabold text-on-surface tracking-tighter">7</span>
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mt-1">Closing</span>
            </div>
          </div>
        </section>

        {/* Lead List */}
        <section className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4 px-2">
            <h2 className="text-xl font-bold tracking-tight">Priority Leads</h2>
            <button className="text-sm font-semibold text-primary hover:text-primary-container transition-colors flex items-center gap-1">
              Filter <span className="material-symbols-outlined text-[18px]">filter_list</span>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {/* Active Lead Item */}
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-[0_8px_24px_-8px_rgba(26,27,31,0.08)] border-l-4 border-primary cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-on-surface">Sarah Jenkins</h3>
                  <p className="text-sm text-on-surface-variant">VP Growth, Acme Corp</p>
                </div>
                <div className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full text-xs font-bold tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                  94
                </div>
              </div>
              <div className="text-xs text-on-surface-variant flex items-center gap-1 mt-3">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                Last active: 2 hours ago
              </div>
            </div>

            {/* Inactive Lead Items */}
            <div className="bg-surface-container-low hover:bg-white p-4 rounded-xl cursor-pointer transition-all hover:shadow-[0_8px_24px_-8px_rgba(26,27,31,0.04)] border border-transparent hover:border-outline-variant/20">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-on-surface">David Chen</h3>
                  <p className="text-sm text-on-surface-variant">Director IT, TechFlow</p>
                </div>
                <div className="bg-surface-container-highest text-on-surface px-2 py-1 rounded-full text-xs font-bold tracking-wider">
                  82
                </div>
              </div>
              <div className="text-xs text-on-surface-variant flex items-center gap-1 mt-3">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                Last active: 1 day ago
              </div>
            </div>

            <div className="bg-surface-container-low hover:bg-white p-4 rounded-xl cursor-pointer transition-all hover:shadow-[0_8px_24px_-8px_rgba(26,27,31,0.04)] border border-transparent hover:border-outline-variant/20">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-on-surface">Elena Rodriguez</h3>
                  <p className="text-sm text-on-surface-variant">CEO, StartUp Hub</p>
                </div>
                <div className="bg-surface-container-highest text-on-surface px-2 py-1 rounded-full text-xs font-bold tracking-wider">
                  75
                </div>
              </div>
              <div className="text-xs text-on-surface-variant flex items-center gap-1 mt-3">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                Last active: 3 days ago
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Detail View & AI Agent */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* Lead Detail Card (Bento Style) */}
        <section className="bg-surface-container-lowest rounded-[1.5rem] shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] overflow-hidden flex flex-col">
          {/* Header Area */}
          <div className="p-8 pb-6 flex justify-between items-start bg-surface-container-low/50">
            <div className="flex gap-5 items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                SJ
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-1">Sarah Jenkins</h2>
                <p className="text-on-surface-variant font-medium flex items-center gap-2">
                  VP Growth @ Acme Corp
                  <a className="text-primary hover:text-primary-container" href="#"><span className="material-symbols-outlined text-[18px]">open_in_new</span></a>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-5 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">history</span>
                View History
              </button>
            </div>
          </div>

          {/* Bento Grid Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Info Block */}
            <div className="bg-surface-container-low rounded-xl p-5">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">business_center</span>
                Company Profile
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-sm text-on-surface-variant">Industry</span>
                  <span className="text-sm font-semibold text-on-surface">SaaS / Fintech</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-sm text-on-surface-variant">Size</span>
                  <span className="text-sm font-semibold text-on-surface">500-1000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-on-surface-variant">Revenue</span>
                  <span className="text-sm font-semibold text-on-surface">$50M+ ARR</span>
                </div>
              </div>
            </div>

            {/* Activity Block */}
            <div className="bg-surface-container-low rounded-xl p-5">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                Recent Activity
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                    <span className="material-symbols-outlined text-primary text-[14px]">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-on-surface">Opened "Q3 Proposal" Email</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Today, 10:24 AM</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="bg-surface-container-highest p-1.5 rounded-full mt-0.5">
                    <span className="material-symbols-outlined text-on-surface-variant text-[14px]">language</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-on-surface">Visited Pricing Page</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Yesterday, 3:15 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agent Insights */}
        <section className="mt-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary pulse-glow" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            Agent Suggestions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Suggestion Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 relative overflow-hidden hover:shadow-[0_12px_32px_-12px_rgba(26,27,31,0.08)] transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary-container"></div>
              <h4 className="font-bold text-on-surface mb-2 text-lg">Send Follow-up Draft</h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Sarah just opened the Q3 proposal. It's an optimal time to send a quick check-in highlighting the enterprise tier ROI.</p>
              <div className="bg-surface p-4 rounded-lg border border-outline-variant/10 mb-5 text-sm italic text-on-surface-variant font-serif">
                "Hi Sarah, noticed you were reviewing the Q3 proposal. Given your focus on growth at Acme Corp, I'd love to highlight how..."
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md shadow-primary/20 flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">send</span>
                Review &amp; Send Draft
              </button>
            </div>

            {/* Suggestion Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 relative hover:shadow-[0_12px_32px_-12px_rgba(26,27,31,0.08)] transition-all flex flex-col">
              <div className="absolute top-0 left-0 w-1 h-full bg-surface-container-highest"></div>
              <h4 className="font-bold text-on-surface mb-2 text-lg">Connect on LinkedIn</h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed flex-1">She recently posted an article about scaling SaaS teams. Engaging with her post could build rapport before the next meeting.</p>
              <button className="w-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold py-3 px-4 rounded-xl transition-all flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                View LinkedIn Profile
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
