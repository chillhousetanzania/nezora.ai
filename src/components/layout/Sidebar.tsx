import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, MessageSquare, Calendar, Share2, BarChart3, Settings, LogOut, FileImage, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { to: '/team', icon: Users, label: 'Team' },
  { to: '/chat', icon: MessageSquare, label: 'Chat' },
  { to: '/social', icon: FileImage, label: 'Content' },
  { to: '/calendar', icon: Calendar, label: 'Calendar' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const { logout, user } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav className="max-md:hidden fixed left-0 top-0 h-screen w-[72px] hover:w-[200px] bg-white dark:bg-neutral-900 border-r border-neutral-200/10 dark:border-neutral-700/10 transition-all duration-200 ease-out z-50 flex flex-col group overflow-hidden shadow-soft-sm">
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-4 border-b border-neutral-200/10 dark:border-neutral-700/10 shrink-0">
          <div className="min-w-[40px] h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-heading font-semibold text-lg shrink-0">
            N
          </div>
          <span className="font-heading font-semibold text-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-700 dark:text-neutral-200">
            Nezora
          </span>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4 space-y-1 px-3 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-l-4 border-primary-500'
                    : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-l-4 border-transparent'
                }`
              }
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>

        {/* User section + Logout */}
        <div className="p-3 border-t border-neutral-200/10 dark:border-neutral-700/10 space-y-1 shrink-0">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-medium shrink-0">
              {user?.name?.charAt(0).toUpperCase() || 'F'}
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">
              {user?.name || 'Founder'}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-neutral-500 hover:text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 transition-all duration-200 w-full"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Logout
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-t border-neutral-200/20 dark:border-neutral-700/20 z-50 flex items-center justify-around px-2 shadow-soft-xl">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
          </NavLink>
        ))}
      </nav>
    </>
  );
}
