export default function ContentCalendar() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 w-full">
        {/* Page Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Content Calendar</h1>
            <p className="text-on-surface-variant mt-2">Manage and schedule your multi-platform content.</p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-1.5 rounded-xl self-start md:self-auto ghost-border">
            <button className="px-6 py-2 rounded-lg bg-surface-container-lowest text-primary font-semibold shadow-sm text-sm tracking-wide">Weekly</button>
            <button className="px-6 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-medium text-sm tracking-wide transition-colors">Monthly</button>
          </div>
        </div>

        {/* Weekly Strip (Mobile/Desktop) */}
        <div className="bg-surface-container-lowest rounded-xl p-4 ambient-shadow flex justify-between items-center overflow-x-auto gap-4 hide-scrollbar ghost-border">
          <div className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1">Mon</span>
            <span className="text-xl font-bold">12</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1">Tue</span>
            <span className="text-xl font-bold">13</span>
          </div>
          {/* Active Day */}
          <div className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg bg-primary-fixed text-on-primary-fixed cursor-pointer relative">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1">Wed</span>
            <span className="text-xl font-bold">14</span>
            <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1">Thu</span>
            <span className="text-xl font-bold">15</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1">Fri</span>
            <span className="text-xl font-bold">16</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg text-on-surface-variant opacity-50 cursor-pointer">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1">Sat</span>
            <span className="text-xl font-bold">17</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg text-on-surface-variant opacity-50 cursor-pointer">
            <span className="text-xs font-semibold uppercase tracking-widest mb-1">Sun</span>
            <span className="text-xl font-bold">18</span>
          </div>
        </div>

        {/* Content Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Day Column: Wednesday 14th (Active) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-surface-container-high/50">
              <h2 className="text-lg font-bold">Wednesday, 14th</h2>
              <span className="bg-surface-container-high text-on-surface-variant text-xs font-medium px-2.5 py-0.5 rounded-full">3 Posts</span>
            </div>

            {/* Scheduled Post Card: LinkedIn */}
            <div className="bg-surface-container-lowest rounded-xl p-5 ghost-border hover:ambient-shadow transition-shadow group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-md">
                  <span className="material-symbols-outlined text-[18px]">work</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">LinkedIn</span>
                </div>
                <span className="bg-primary-fixed text-on-primary-fixed text-xs font-bold px-2 py-1 rounded-md">Approved</span>
              </div>
              <p className="text-sm font-medium leading-relaxed mb-4 text-on-surface">"The future of generative AI in enterprise workflows is not about replacement, but augmentation. Here are 3 frameworks we use..."</p>
              <div className="flex items-center justify-between text-on-surface-variant text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>09:00 AM</span>
                </div>
                <div className="flex -space-x-2">
                  <img alt="Team member" className="w-6 h-6 rounded-full border-2 border-surface-container-lowest" data-alt="close-up portrait of a professional woman with soft natural lighting and blurred background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgd1_WZDwBLG0S3A0Opg30MYVKGxKzE7d0RV7qNAvvUi_CyxLkPKW_2VvHFbbMJjzIykZvIF_YBdUkGiyErHtWAu58MKThhtOJdquo101Du4cjA2er7uU-_nZ9Y1tQBgUUV5e26c7fCQfcXOaVqTjSJsnRHUIOAH1yiNL-F1Ig1_XFL2t3Bo2aJtQWmZYDw0TLtzG-CwrZgpy1IILoymdtg7eQDlyHStDIsmRFBCiqygLEMY3Xe3Il9lPFNdR4J9NFnLqqBgE9jjAr"/>
                </div>
              </div>
            </div>

            {/* Scheduled Post Card: Twitter */}
            <div className="bg-surface-container-lowest rounded-xl p-5 ghost-border hover:ambient-shadow transition-shadow group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-800"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                  <span className="material-symbols-outlined text-[18px]">tag</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">X / Twitter</span>
                </div>
                <span className="bg-surface-container-high text-on-surface-variant text-xs font-bold px-2 py-1 rounded-md">Draft</span>
              </div>
              <p className="text-sm font-medium leading-relaxed mb-4 text-on-surface">Thread: How we reduced model hallucination by 40% using context-aware prompt routing. 🧵👇</p>
              <div className="flex items-center justify-between text-on-surface-variant text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>01:30 PM</span>
                </div>
                <img alt="Team member" className="w-6 h-6 rounded-full border-2 border-surface-container-lowest" data-alt="close-up portrait of a professional man with short hair in a bright studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnrKEC7Ac2ZPn3Y0-zJk-sp3AG-4re__HCc27d8YRhOEgjKbGYySNCrjovg2ey_xAzEhBol5kuXdOFJ4Mz-g0EIdmH2qlRWiqeFQfqFRYC9Edg2F_S4g4j522NyKySUuYcG7oUcXsOaaLRihjJ84tTYn7PsfBUXEeq9UWUsyICOX0mpRbUblYMUliHUBqXBUtFU_TLoXtIjAvS_MVz5PIqY7Lh-kTVbPzin_0NPt1GVxY4UFnau8PJCO2yqvv-oQS77AXo8cC7lhI8"/>
              </div>
            </div>
          </div>

          {/* Day Column: Thursday 15th */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-surface-container-high/50">
              <h2 className="text-lg font-medium text-on-surface-variant">Thursday, 15th</h2>
              <span className="bg-surface-container-high text-on-surface-variant text-xs font-medium px-2.5 py-0.5 rounded-full">1 Post</span>
            </div>

            {/* Scheduled Post Card: Blog */}
            <div className="bg-surface-container-lowest rounded-xl p-5 ghost-border hover:ambient-shadow transition-shadow group cursor-pointer relative overflow-hidden opacity-80 hover:opacity-100">
              <div className="absolute top-0 left-0 w-1 h-full bg-tertiary"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-tertiary bg-tertiary-container/20 px-2 py-1 rounded-md">
                  <span className="material-symbols-outlined text-[18px]">article</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">Blog</span>
                </div>
                <span className="bg-error-container text-on-error-container text-xs font-bold px-2 py-1 rounded-md">Review Needed</span>
              </div>
              <div className="h-24 bg-surface-container-low rounded-lg mb-4 bg-cover bg-center" data-alt="abstract view of earth from space at night showing glowing city lights and network nodes" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjtdzbi25RsyrTpsOaoKz8oUpWWytVoAEPJNsGCIdadOOLhvjJeZDn6YJlTn3pRlcwJPomWe2GpffqLo38ujrHiqkKBVcCvzdLdTlq_LoISJSF4PBiknZWNLmM3M1HtMpuCibu-iawhgC6BQX9rNCC28oBeQ7RH_HmHeMtnXl45gc1CP4qopMA1OFLZk3VPPAgqjczVdZD9c7eSCggOLcesaXMl_9olWvIhQeBEdejZjA7r6kJN45VKhCRcERSGxpluL9jXVOAnIz7')" }}></div>
              <p className="text-sm font-medium leading-relaxed mb-4 text-on-surface">Article: The Ethics of Automated Decision Making in Fintech.</p>
              <div className="flex items-center justify-between text-on-surface-variant text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>10:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Day Column: Friday 16th (Empty State) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-surface-container-high/50">
              <h2 className="text-lg font-medium text-on-surface-variant">Friday, 16th</h2>
            </div>
            {/* Empty State Visualization */}
            <div className="bg-surface-container-low/50 rounded-xl p-8 border border-dashed border-outline-variant/50 flex flex-col items-center justify-center text-center h-48 group hover:bg-surface-container-low transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">add</span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant">No content scheduled</p>
              <p className="text-xs text-outline mt-1">Click to schedule a post</p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button (FAB) for quick add */}
      <button className="fixed bottom-24 md:bottom-8 right-6 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-white rounded-full flex items-center justify-center shadow-[0_8px_32px_-8px_rgba(0,62,199,0.5)] hover:scale-105 transition-transform z-40">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
      </button>
    </>
  );
}
