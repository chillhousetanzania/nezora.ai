import { Bell, Search } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const { user, notifications, markNotificationRead } = useApp();
  const [showNotifs, setShowNotifs] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="h-16 glass-strong border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search agents, tasks, content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-purple/50 focus:bg-white/10 transition-all duration-200"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifs(!showNotifs)}
            className="relative p-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            <Bell className="w-5 h-5 text-slate-400" />
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-neon-purple rounded-full text-[10px] font-bold flex items-center justify-center"
              >
                {unreadCount}
              </motion.span>
            )}
          </button>

          <AnimatePresence>
            {showNotifs && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-12 w-80 glass-strong rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-4 border-b border-white/10">
                  <h3 className="font-heading font-semibold text-sm">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notif) => (
                    <button
                      key={notif.id}
                      onClick={() => {
                        markNotificationRead(notif.id);
                        navigate(`/chat/${notif.agentId}`);
                        setShowNotifs(false);
                      }}
                      className={`w-full p-4 text-left hover:bg-white/5 transition-colors border-b border-white/5 ${
                        !notif.read ? 'bg-neon-purple/5' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${!notif.read ? 'bg-neon-purple' : 'bg-transparent'}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">{notif.agentName}</p>
                          <p className="text-xs text-slate-400 mt-0.5 truncate">{notif.message}</p>
                          <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User avatar */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">{user?.name || 'Founder'}</p>
            <p className="text-xs text-slate-400">Founder</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-sm font-bold">
            {user?.name?.charAt(0).toUpperCase() || 'F'}
          </div>
        </div>
      </div>
    </header>
  );
}
