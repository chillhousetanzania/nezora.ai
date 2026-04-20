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
    <header className="h-16 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/10 dark:border-neutral-700/10 flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search agents, tasks, content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/15 dark:border-neutral-700/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-neutral-700 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifs(!showNotifs)}
            className="relative p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
          >
            <Bell className="w-5 h-5 text-neutral-500" />
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary-500 rounded-full text-[10px] font-semibold text-white flex items-center justify-center"
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
                className="absolute right-0 top-12 w-80 bg-white dark:bg-neutral-800 rounded-2xl shadow-soft-xl border border-neutral-200/10 dark:border-neutral-700/10 overflow-hidden"
              >
                <div className="p-4 border-b border-neutral-200/10 dark:border-neutral-700/10">
                  <h3 className="font-heading font-semibold text-sm text-neutral-700 dark:text-neutral-200">Notifications</h3>
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
                      className={`w-full p-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors border-b border-neutral-200/10 dark:border-neutral-700/10 ${
                        !notif.read ? 'bg-primary-50/50 dark:bg-primary-900/10' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${!notif.read ? 'bg-primary-500' : 'bg-transparent'}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{notif.agentName}</p>
                          <p className="text-xs text-neutral-500 mt-0.5 truncate">{notif.message}</p>
                          <p className="text-xs text-neutral-400 mt-1">{notif.time}</p>
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
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{user?.name || 'Founder'}</p>
            <p className="text-xs text-neutral-500">Founder</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-sm font-semibold text-white shadow-soft-sm">
            {user?.name?.charAt(0).toUpperCase() || 'F'}
          </div>
        </div>
      </div>
    </header>
  );
}
