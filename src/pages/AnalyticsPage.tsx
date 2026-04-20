import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, Eye, Heart, Share, BarChart3, Lightbulb, ChevronRight, ChevronDown } from 'lucide-react';
import { Card, Badge, Button } from '../components/ui';
import { MetricCard } from '../components/analytics/MetricCard';
import { ChartContainer } from '../components/analytics/ChartContainer';

const overviewStats = [
  { label: 'Total Reach', value: '24,891', trend: 12.3, isFavorable: true, icon: Eye, sparkline: [40, 48, 55, 45, 60, 75, 90] },
  { label: 'Engagement', value: '3,247', trend: 8.7, isFavorable: true, icon: Heart, sparkline: [20, 25, 30, 28, 40, 50, 68] },
  { label: 'Followers', value: '2,673', trend: 5.2, isFavorable: true, icon: Users, sparkline: [100, 105, 108, 112, 115, 120, 125] },
  { label: 'Shares', value: '482', trend: -2.1, isFavorable: false, icon: Share, sparkline: [50, 48, 60, 55, 40, 38, 35] },
];

const aiInsights = [
  { id: '1', title: 'Carousel Content Dominates', description: 'Your carousel posts are generating 3.2x more engagement than single image posts. Consider shifting 60% of content to carousel format for maximum impact.', impact: 'positive' as const },
  { id: '2', title: 'LinkedIn Opportunity', description: 'Your LinkedIn audience has grown 15% but content frequency is low. Publishing 2-3 articles per week could unlock significant B2B visibility.', impact: 'positive' as const },
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
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Analytics</h1>
        <p className="text-neutral-500">Understand your AI team's performance and social media impact.</p>
      </motion.div>

      {/* ── Key Metrics (Grid of 4) ────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <MetricCard
              title={stat.label}
              value={stat.value}
              trendValue={stat.trend}
              trendIsFavorable={stat.isFavorable}
              icon={<stat.icon className="w-4 h-4" />}
              sparklineData={stat.sparkline}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Weekly Chart ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 flex"
        >
          <ChartContainer 
            title="Weekly Performance" 
            subtitle="Reach and engagement trends over the last 7 days."
            className="w-full flex-1"
            actionNode={
              <div className="flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                  <span className="text-neutral-600 dark:text-neutral-400">Reach</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary-500" />
                  <span className="text-neutral-600 dark:text-neutral-400">Engagement</span>
                </div>
              </div>
            }
          >
            <div className="flex items-end gap-3 h-64 absolute inset-0 pb-4">
              {weeklyData.map((data, i) => (
                <div key={data.day} className="flex-1 flex flex-col items-center gap-2 h-full">
                  <div className="w-full flex gap-1 items-end flex-1 bg-neutral-50/50 dark:bg-neutral-800/20 rounded-t-xl group">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.reach / maxReach) * 100}%` }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-md opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.engagement / maxReach) * 100}%` }}
                      transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-secondary-500 to-secondary-400 rounded-t-md opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-xs font-medium text-neutral-500">{data.day}</span>
                </div>
              ))}
            </div>
          </ChartContainer>
        </motion.div>

        {/* ── AI Insights ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-6"
        >
          {aiInsights.map((insight, i) => (
            <Card key={insight.id} variant="glass" padding="md" hoverable className="flex-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shrink-0 shadow-soft-sm">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1.5">{insight.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">{insight.description}</p>
                  <button className="text-sm font-medium text-primary-500 hover:text-primary-600 flex items-center gap-1 transition-colors">
                    Apply Insight <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Agent Performance ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card variant="default" padding="lg" className="h-full">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Agent Performance</h2>
            <div className="space-y-6">
              {agentPerformance.map((agent) => (
                <div key={agent.name} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-xl shrink-0">
                    {agent.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{agent.name}</span>
                      <span className="text-xs font-semibold text-success-600 dark:text-success-500">{agent.score}% Efficiency</span>
                    </div>
                    <div className="h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden mb-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${agent.score}%` }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-neutral-500">{agent.tasksCompleted} tasks · {agent.contentPieces} content pieces</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* ── Expandable Top Content ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2"
        >
          <Card variant="default" padding="lg" className="h-full">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full flex items-center justify-between mb-4 group"
            >
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Top Performing Content</h2>
              <div className="w-8 h-8 rounded-full bg-neutral-50 dark:bg-neutral-800 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700 transition-colors flex items-center justify-center">
                <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {showDetails ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="overflow-x-auto pb-2">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="text-xs uppercase tracking-wider text-neutral-500 border-b border-neutral-200/50 dark:border-neutral-700/50">
                          <th className="py-3 font-semibold w-1/3">Content</th>
                          <th className="py-3 font-semibold">Platform</th>
                          <th className="py-3 font-semibold">Type</th>
                          <th className="py-3 font-semibold text-right">Reach</th>
                          <th className="py-3 font-semibold text-right">Eng. Rate</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                        {topContent.map((item, i) => (
                          <motion.tr
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors group"
                          >
                            <td className="py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 transition-colors">{item.title}</td>
                            <td className="py-3 text-sm text-neutral-600 dark:text-neutral-400">{item.platform}</td>
                            <td className="py-3">
                              <Badge variant="primary" size="sm">{item.type}</Badge>
                            </td>
                            <td className="py-3 text-sm text-right font-medium text-neutral-900 dark:text-neutral-100">{item.reach}</td>
                            <td className="py-3 text-sm text-right font-semibold text-success-600 dark:text-success-500 bg-success-50/0 group-hover:bg-success-50/50 dark:group-hover:bg-success-500/10 transition-colors rounded-r-lg max-w-fit ml-auto">
                              {item.engagement}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center p-8 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50/50 dark:bg-neutral-800/20"
                >
                  <p className="text-sm font-medium text-neutral-500">Analytics hidden. Click to expand and see detailed content performance data.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </div>

    </div>
  );
}
