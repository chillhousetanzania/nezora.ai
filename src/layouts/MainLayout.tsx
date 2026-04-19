import { Outlet, NavLink } from 'react-router-dom';

export default function MainLayout() {
  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    isActive 
      ? "flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 rounded-2xl px-3 py-1.5 transition-all scale-90 duration-150 ease-out"
      : "flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-300 transition-all";

  const getIconFill = (isActive: boolean) => isActive ? 1 : 0;

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      {/* TopAppBar */}
      <header className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 shadow-sm shadow-blue-500/5 bg-gradient-to-b from-slate-100/50 to-transparent">
        <button aria-label="Menu" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors p-2 rounded-full">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
        </button>
        <div className="text-xl font-bold tracking-tighter text-blue-600 dark:text-blue-500 font-headline">Nezora AI</div>
        
        {/* Desktop Nav Integration */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "text-blue-600 font-bold font-['Inter'] tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2" : "text-slate-500 dark:text-slate-400 font-['Inter'] font-semibold tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2"}>
            {({isActive}) => <><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>home</span> Home</>}
          </NavLink>
          <NavLink to="/agents" className={({isActive}) => isActive ? "text-blue-600 font-bold font-['Inter'] tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2" : "text-slate-500 dark:text-slate-400 font-['Inter'] font-semibold tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2"}>
            {({isActive}) => <><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>smart_toy</span> Agents</>}
          </NavLink>
          <NavLink to="/content" className={({isActive}) => isActive ? "text-blue-600 font-bold font-['Inter'] tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2" : "text-slate-500 dark:text-slate-400 font-['Inter'] font-semibold tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2"}>
            {({isActive}) => <><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>auto_awesome</span> Content</>}
          </NavLink>
          <NavLink to="/analytics" className={({isActive}) => isActive ? "text-blue-600 font-bold font-['Inter'] tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2" : "text-slate-500 dark:text-slate-400 font-['Inter'] font-semibold tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2"}>
            {({isActive}) => <><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>insights</span> Analytics</>}
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "text-blue-600 font-bold font-['Inter'] tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2" : "text-slate-500 dark:text-slate-400 font-['Inter'] font-semibold tracking-tight hover:bg-blue-50/50 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-2"}>
            {({isActive}) => <><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>person</span> Profile</>}
          </NavLink>
        </nav>

        <button aria-label="Notifications" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors p-2 rounded-full relative">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <Outlet />
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-3 pb-8 md:hidden border-t border-slate-100 dark:border-slate-800/50 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] rounded-t-[2rem]">
        <NavLink to="/dashboard" className={getNavClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>home</span>
              <span className="text-[11px] font-medium tracking-wide uppercase font-['Inter']">Home</span>
            </>
          )}
        </NavLink>
        <NavLink to="/agents" className={getNavClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>smart_toy</span>
              <span className="text-[11px] font-medium tracking-wide uppercase font-['Inter']">Agents</span>
            </>
          )}
        </NavLink>
        <NavLink to="/content" className={getNavClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>auto_awesome</span>
              <span className="text-[11px] font-medium tracking-wide uppercase font-['Inter']">Content</span>
            </>
          )}
        </NavLink>
        <NavLink to="/analytics" className={getNavClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>insights</span>
              <span className="text-[11px] font-medium tracking-wide uppercase font-['Inter']">Analytics</span>
            </>
          )}
        </NavLink>
        <NavLink to="/profile" className={getNavClass}>
          {({ isActive }) => (
            <>
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: `'FILL' ${getIconFill(isActive)}` }}>person</span>
              <span className="text-[11px] font-medium tracking-wide uppercase font-['Inter']">Profile</span>
            </>
          )}
        </NavLink>
      </nav>
    </div>
  );
}
