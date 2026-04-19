import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Users, MessageSquare, Calendar, Share2, BarChart3, Settings, LogOut, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Home' },
  { to: '/team', icon: Users, label: 'Team' },
  { to: '/chat', icon: MessageSquare, label: 'Chat' },
  { to: '/calendar', icon: Calendar, label: 'Calendar' },
  { to: '/social', icon: Share2, label: 'Social' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const { logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.aside
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed left-0 top-0 h-screen w-[72px] hover:w-[200px] transition-all duration-300 z-50 glass-strong flex flex-col items-center py-6 group overflow-hidden"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 px-4 w-full">
        <div className="min-w-[40px] h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="font-heading font-bold text-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Nezora
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2 w-full px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-neon-purple/20 text-neon-purple shadow-glow-purple'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <item.icon className="min-w-[24px] w-6 h-6" />
            <span className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2.5 mx-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 w-[calc(100%-24px)]"
      >
        <LogOut className="min-w-[24px] w-6 h-6" />
        <span className="whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Logout
        </span>
      </button>
    </motion.aside>
  );
}
