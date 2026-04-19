import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, Eye, Heart, MessageCircle, Share, BarChart3 } from 'lucide-react';

const overviewStats = [
  { label: 'Total Reach', value: '24,891', change: '+12.3%', up: true, icon: Eye },
  { label: 'Engagement', value: '3,247', change: '+8.7%', up: true, icon: Heart },
  { label: 'Followers', value: '2,673', change: '+5.2%', up: true, icon: Users },
  { label: 'Shares', value: '482', change: '-2.1%', up: false, icon: Share },
];

const weeklyData = [
  { day: 'Mon', reach: 65, engagement: 45 },
  { day: 'Tue', reach: 78, engagement: 52 },
  { day: 'Wed', reach: 90, engagement: 68 },
  { day: 'Thu', reach: 72, engagement: 48 },
  { day: 'Fri', reach: 95, engagement: 75 },
  { day: 'Sat', reach: 55, engagement: 40 },
  { day: 'Sun', reach: 48, engagement: 35 },
];

const topContent = [
  { title: 'Brand intro carousel', platform: 'Instagram', reach: '4,521', engagement: '12.3%', type: 'Carousel' },
  { title: 'Industry insights thread', platform: 'Twitter', reach: '3,892', engagement: '8.7%', type: 'Thread' },
  { title: 'Company story video', platform: 'LinkedIn', reach: '2,716', engagement: '15.1%', type: 'Video' },
  { title: 'Product teaser reel', platform: 'Instagram', reach: '2,340', engagement: '9.4%', type: 'Reel' },
  { title: 'Tips & tricks post', platform: 'Twitter', reach: '1,891', engagement: '6.2%', type: 'Post' },
];

const agentPerformance = [
  { name: 'Canvas', role: 'Content Creator', emoji: '🎨', tasksCompleted: 24, contentPieces: 18, score: 94 },
  { name: 'Maven', role: 'CMO', emoji: '📊', tasksCompleted: 19, contentPieces: 12, score: 91 },
  { name: 'Pulse', role: 'Social Media', emoji: '📱', tasksCompleted: 32, contentPieces: 28, score: 88 },
  { name: 'Chief', role: 'CEO', emoji: '🎯', tasksCompleted: 15, contentPieces: 6, score: 96 },
];

export default function AnalyticsPage() {
  const maxReach = Math.max(...weeklyData.map(d => d.reach));

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold">Analytics</h1>
        <p className="text-slate-400 mt-1">Track your AI team's performance and social media impact.</p>
      </motion.div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-5 hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-5 h-5 text-slate-400" />
              <span className={`flex items-center gap-1 text-xs font-medium ${stat.up ? 'text-neon-green' : 'text-red-400'}`}>
                {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <h3 className="font-heading text-2xl font-bold">{stat.value}</h3>
            <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 glass rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-lg font-semibold">Weekly Performance</h2>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neon-purple" />
                <span className="text-slate-400">Reach</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neon-blue" />
                <span className="text-slate-400">Engagement</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end gap-3 h-48">
            {weeklyData.map((data, i) => (
              <div key={data.day} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex gap-1 items-end h-40">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.reach / maxReach) * 100}%` }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-neon-purple to-neon-purple/60 rounded-t-lg"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.engagement / maxReach) * 100}%` }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-neon-blue to-neon-blue/60 rounded-t-lg"
                  />
                </div>
                <span className="text-[11px] text-slate-500">{data.day}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Agent Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="font-heading text-lg font-semibold mb-4">Agent Performance</h2>
          <div className="space-y-4">
            {agentPerformance.map((agent) => (
              <div key={agent.name} className="flex items-center gap-3">
                <div className="text-xl">{agent.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{agent.name}</span>
                    <span className="text-xs text-neon-green font-medium">{agent.score}%</span>
                  </div>
                  <div className="mt-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${agent.score}%` }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">{agent.tasksCompleted} tasks · {agent.contentPieces} content</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass rounded-2xl p-6"
      >
        <h2 className="font-heading text-lg font-semibold mb-4">Top Performing Content</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 border-b border-white/5">
                <th className="text-left py-3 font-medium">Content</th>
                <th className="text-left py-3 font-medium">Platform</th>
                <th className="text-left py-3 font-medium">Type</th>
                <th className="text-right py-3 font-medium">Reach</th>
                <th className="text-right py-3 font-medium">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {topContent.map((item, i) => (
                <motion.tr
                  key={item.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-3 text-sm font-medium">{item.title}</td>
                  <td className="py-3 text-sm text-slate-400">{item.platform}</td>
                  <td className="py-3">
                    <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-300">{item.type}</span>
                  </td>
                  <td className="py-3 text-sm text-right font-medium">{item.reach}</td>
                  <td className="py-3 text-sm text-right text-neon-green font-medium">{item.engagement}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
