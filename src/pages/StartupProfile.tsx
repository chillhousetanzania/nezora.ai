export default function StartupProfile() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center relative shadow-[0_24px_48px_-12px_rgba(26,27,31,0.08)]">
            <img alt="Startup Logo" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDwKbWtT07NH9WGi2sTjXD18w4f5buwJuiFp9e4EFNINvJNqBAKR1wRqsPTFpPIMOSvHomkZSjex0eV5iU1800KK7ugrFyRHTDb-QZcyd6HiMtH0ZeGgHc1IZs3PHOyuUxQTGUkQbQ3Z4yuJfs7Ya08e7MdVmX1mFA2d9qzdM_nd2seB8_ndlCS669z6irwvdMunWfNaTS-HXVBdIv52mqwWx6pN4BMGdLFqYT8tSt3Jw9v2vR7pTc-wiEsbYVB3wCOAvOr81qjyTE" />
            <button className="absolute bottom-0 right-0 bg-surface-container-lowest text-on-surface p-1.5 rounded-full shadow-sm hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
            </button>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Nezora AI</h1>
            <p className="text-on-surface-variant text-lg max-w-xl font-body">Next-generation predictive analytics platform for decentralized energy grids.</p>
          </div>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-medium tracking-wide shadow-[0_8px_16px_-4px_rgba(0,62,199,0.2)] hover:shadow-[0_12px_24px_-6px_rgba(0,62,199,0.3)] transition-all">
          Publish Profile
        </button>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Overview Panel (Spans 8 columns) */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.02)] ring-1 ring-outline-variant/15">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-semibold text-on-surface tracking-tight">Company Overview</h2>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
            </button>
          </div>
          <div className="space-y-4 text-on-surface-variant font-body leading-relaxed">
            <p>Nezora AI is pioneering the application of generative predictive models to optimize localized energy distribution networks. By analyzing micro-weather patterns, localized grid load histories, and edge-device sensor data, our platform dynamically balances energy storage and dispatch protocols in real-time.</p>
            <p>Founded in 2023, our mission is to eliminate grid inefficiencies and accelerate the transition to sustainable, decentralized power infrastructures through intelligent, autonomous orchestration.</p>
          </div>
        </div>

        {/* Intelligence Pulse Summary (Spans 4 columns) */}
        <div className="md:col-span-4 bg-primary-fixed rounded-xl p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
          <div className="absolute inset-0 bg-surface-tint opacity-10 blur-2xl animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>auto_awesome</span>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-primary font-label">AI Summary</h3>
            </div>
            <p className="text-on-primary-fixed font-medium leading-relaxed">
              Positioned as a highly technical B2B SaaS in the ClimaTech sector. Strong emphasis on algorithmic efficiency and systemic optimization. Brand tone is currently technical but could benefit from more human-centric impact storytelling.
            </p>
            <button className="mt-6 text-sm font-semibold text-primary hover:text-primary-container flex items-center gap-1 transition-colors">
              Regenerate <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>refresh</span>
            </button>
          </div>
        </div>

        {/* Detail Panels Row */}
        <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 relative group">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-on-surface">Target Audience</h3>
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
            </button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 0" }}>business</span>
              <span className="text-on-surface-variant text-sm">Utility Grid Operators</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 0" }}>solar_power</span>
              <span className="text-on-surface-variant text-sm">Microgrid Developers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 0" }}>account_balance</span>
              <span className="text-on-surface-variant text-sm">Municipal Planners</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 relative group">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-on-surface">Primary Goals</h3>
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface-variant font-medium">Q3 Seed Funding</span>
                <span className="text-primary font-semibold">60%</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface-variant font-medium">Beta Pilot Launches</span>
                <span className="text-primary font-semibold">3/5</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 relative group">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-on-surface">Brand Voice</h3>
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant text-xs font-semibold uppercase tracking-wider rounded-full ring-1 ring-outline-variant/20">Authoritative</span>
            <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant text-xs font-semibold uppercase tracking-wider rounded-full ring-1 ring-outline-variant/20">Precise</span>
            <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant text-xs font-semibold uppercase tracking-wider rounded-full ring-1 ring-outline-variant/20">Visionary</span>
            <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant text-xs font-semibold uppercase tracking-wider rounded-full ring-1 ring-outline-variant/20">Data-Driven</span>
          </div>
        </div>
      </div>
    </div>
  );
}
