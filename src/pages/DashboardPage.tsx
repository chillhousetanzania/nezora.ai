import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare, Clock, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { agents } from '../data/agents';
import { Card } from '../components/ui';

import { HealthScoreRing } from '../components/dashboard/HealthScoreRing';
import { AIInsightCard } from '../components/dashboard/AIInsightCard';
import { DecisionsNeededSection, Decision } from '../components/dashboard/DecisionsNeededSection';
import { AgentStatusCard } from '../components/dashboard/AgentStatusCard';
import { RecentActivityTimeline, ActivityItem } from '../components/dashboard/RecentActivityTimeline';

/* ── Mock Data ─────────────────────────────────────── */
const insights = [
  { id: '1', title: 'Strong Brand Momentum', description: 'Your content engagement has increased 23% this week. Instagram carousel posts are your top performers — consider doubling down on this format.', category: 'Opportunity', priority: 'high' as const },
  { id: '2', title: 'Audience Growth Slowing', description: 'Follower growth rate dipped 4% compared to last week. Consider launching a targeted campaign or collaboration to reignite growth.', category: 'Risk', priority: 'medium' as const },
  { id: '3', title: 'Optimal Posting Times Shift', description: 'Your audience activity has shifted — peak engagement now happens between 6-8 PM instead of the previous 12-2 PM window.', category: 'Trend', priority: 'low' as const },
];

const decisionsNeeded: Decision[] = [
  { id: '1', title: 'Approve Holiday Campaign', description: 'Canvas created 4 Instagram posts for the upcoming holiday. Ready for your review.', urgency: 'high', timestamp: '2 hours ago', source: 'Canvas' },
  { id: '2', title: 'Budget Reallocation', description: 'Ledger recommends moving $500 from Twitter ads to Instagram Reels based on ROI data.', urgency: 'medium', timestamp: '4 hours ago', source: 'Ledger' },
  { id: '3', title: 'Partner Collaboration', description: 'Scout identified a potential brand collaboration opportunity with 25K+ reach.', urgency: 'low', timestamp: '1 day ago', source: 'Scout' },
];

const recentActivity: ActivityItem[] = [
  { id: '1', author: 'Chief', avatar: '🎯', action: 'Updated the Q2 strategic roadmap', timestamp: '5 min ago', target: '' },
  { id: '2', author: 'Maven', avatar: '📊', action: 'Completed competitor analysis report', timestamp: '18 min ago', target: '' },
  { id: '3', author: 'Canvas', avatar: '🎨', action: 'Created 3 new Instagram post designs', timestamp: '32 min ago', target: '' },
  { id: '4', author: 'Pulse', avatar: '📱', action: 'Scheduled 7 posts across all platforms', timestamp: '1 hour ago', target: '' },
  { id: '5', author: 'Ledger', avatar: '💰', action: 'Updated monthly budget projection', timestamp: '2 hours ago', target: '' },
];


/* ── Page Component ────────────────────────────────── */
export default function DashboardPage() {
  const { user, company } = useApp();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* ── Hero: Health Score + AI Insights ──────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col lg:flex-row gap-6 items-stretch"
      >
        {/* Left: Health Score */}
        <Card variant="glass" padding="lg" className="flex flex-col items-center justify-center text-center lg:min-w-[320px]">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Company Health</h2>
          <p className="text-sm text-neutral-500 mb-8">Overall performance this week</p>
          
          <HealthScoreRing score={82} size={160} strokeWidth={8} />
          
          <div className="flex w-full justify-between mt-8 px-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">8</p>
              <p className="text-xs text-neutral-500 font-medium">Agents</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">28</p>
              <p className="text-xs text-neutral-500 font-medium">Tasks Done</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600 dark:text-success-500">94%</p>
              <p className="text-xs text-neutral-500 font-medium">On Track</p>
            </div>
          </div>
        </Card>

        {/* Right: AI Insights */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-primary-500" />
              AI Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {insights.map((insight, i) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <AIInsightCard
                  title={insight.title}
                  description={insight.description}
                  icon={<Sparkles />}
                  category={insight.category}
                  priority={insight.priority}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Decisions Needed ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <DecisionsNeededSection decisions={decisionsNeeded} />
      </motion.div>

      {/* ── Agent Status Grid ────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Your AI Team</h2>
          <button
            onClick={() => navigate('/team')}
            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 flex items-center gap-1 transition-colors font-medium"
          >
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
              className="h-full"
            >
              <AgentStatusCard
                name={agent.name}
                role={agent.role}
                status={agent.status as any}
                currentTask={agent.currentTask}
                energyLevel={70 + i * 3}
                avatar={agent.emoji}
                onClick={() => navigate(`/chat/${agent.id}`)}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Recent Activity Timeline ─────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <RecentActivityTimeline activities={recentActivity} />
      </motion.div>
    </div>
  );
}
