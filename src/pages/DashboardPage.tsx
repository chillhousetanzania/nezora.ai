import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, FileText, Calendar, TrendingUp, MessageSquare, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { agents } from '../data/agents';

const statCards = [
  { label: 'Active Agents', value: '8', icon: Users, color: 'from-neon-purple to-violet-600', change: 'All online' },
  { label: 'Content Ready', value: '12', icon: FileText, color: 'from-neon-blue to-cyan-600', change: '3 new today' },
  { label: 'Posts Scheduled', value: '28', icon: Calendar, color: 'from-neon-pink to-rose-600', change: 'This week' },
  { label: 'Strategy Updates', value: '3', icon: TrendingUp, color: 'from-neon-green to-emerald-600', change: 'Needs review' },
];

export default function DashboardPage() {
  const { user, company } = useApp();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-heading text-2xl md:text-3xl font-bold">
          Welcome back, {user?.name || 'Founder'} 👋
        </h1>
        <p className="text-slate-400 mt-1">
          {company.name ? `${company.name} HQ` : 'Your AI team'} is hard at work. Here's what's happening.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass rounded-2xl p-5 hover:bg-white/5 transition-all duration-300 cursor-default group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-lg">{stat.change}</span>
            </div>
            <h3 className="font-heading text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* AI Team */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl font-semibold">Your AI Team</h2>
          <button
            onClick={() => navigate('/team')}
            className="text-sm text-neon-purple hover:text-neon-purple/80 flex items-center gap-1 transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              onClick={() => navigate(`/chat/${agent.id}`)}
              className="glass rounded-2xl p-5 hover:bg-white/5 hover:shadow-glow-purple transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${agent.color}20` }}
                >
                  {agent.emoji}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{agent.name}</h3>
                  <p className="text-xs text-slate-400">{agent.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-3 line-clamp-2">{agent.currentTask}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${
                    agent.status === 'online' ? 'bg-neon-green' :
                    agent.status === 'busy' ? 'bg-yellow-400' : 'bg-neon-blue animate-pulse'
                  }`} />
                  <span className="text-[11px] text-slate-400 capitalize">{agent.status}</span>
                </div>
                <button className="flex items-center gap-1 text-xs text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity">
                  <MessageSquare className="w-3 h-3" />
                  Chat
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="glass rounded-2xl p-6"
      >
        <h2 className="font-heading text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { agent: '🎯 Chief', action: 'Updated the Q2 strategic roadmap', time: '5 min ago', color: '#8b5cf6' },
            { agent: '📊 Maven', action: 'Completed competitor analysis report', time: '18 min ago', color: '#06b6d4' },
            { agent: '🎨 Canvas', action: 'Created 3 new Instagram post designs', time: '32 min ago', color: '#ec4899' },
            { agent: '📱 Pulse', action: 'Scheduled 7 posts across all platforms', time: '1 hour ago', color: '#f59e0b' },
            { agent: '💰 Ledger', action: 'Updated monthly budget projection', time: '2 hours ago', color: '#10b981' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
              <div className="text-xl min-w-[32px]">{item.agent.split(' ')[0]}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{item.agent.split(' ')[1]}</span>{' '}
                  <span className="text-slate-400">{item.action}</span>
                </p>
              </div>
              <span className="text-xs text-slate-500 whitespace-nowrap">{item.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
