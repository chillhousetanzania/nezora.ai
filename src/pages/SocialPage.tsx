import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Plus, ExternalLink, CheckCircle, AlertCircle, TrendingUp, Users, Heart, MessageCircle } from 'lucide-react';

interface SocialAccount {
  id: string;
  platform: string;
  icon: typeof Instagram;
  username: string;
  connected: boolean;
  followers: string;
  engagement: string;
  color: string;
  gradient: string;
  recentPosts: number;
}

const socialAccounts: SocialAccount[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    icon: Instagram,
    username: '@yourcompany',
    connected: false,
    followers: '—',
    engagement: '—',
    color: '#E4405F',
    gradient: 'from-[#833AB4] via-[#E4405F] to-[#FCAF45]',
    recentPosts: 0,
  },
  {
    id: 'twitter',
    platform: 'Twitter / X',
    icon: Twitter,
    username: '@yourcompany',
    connected: false,
    followers: '—',
    engagement: '—',
    color: '#1DA1F2',
    gradient: 'from-[#1DA1F2] to-[#0d8ecf]',
    recentPosts: 0,
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    icon: Linkedin,
    username: 'Your Company',
    connected: false,
    followers: '—',
    engagement: '—',
    color: '#0A66C2',
    gradient: 'from-[#0A66C2] to-[#004182]',
    recentPosts: 0,
  },
];

const mockScheduledPosts = [
  { id: '1', platform: 'Instagram', icon: '📸', title: 'Brand story carousel', time: 'Tomorrow, 6:00 PM', status: 'ready' },
  { id: '2', platform: 'Twitter', icon: '🐦', title: 'Industry insights thread (5 tweets)', time: 'Wed, 10:00 AM', status: 'ready' },
  { id: '3', platform: 'LinkedIn', icon: '💼', title: 'Company milestone announcement', time: 'Thu, 9:00 AM', status: 'review' },
  { id: '4', platform: 'Instagram', icon: '📸', title: 'Product teaser reel', time: 'Fri, 7:00 PM', status: 'draft' },
  { id: '5', platform: 'Twitter', icon: '🐦', title: 'Weekend engagement poll', time: 'Sat, 12:00 PM', status: 'ready' },
];

export default function SocialPage() {
  const [accounts, setAccounts] = useState(socialAccounts);

  const toggleConnect = (id: string) => {
    setAccounts(prev => prev.map(a =>
      a.id === id ? {
        ...a,
        connected: !a.connected,
        followers: !a.connected ? (id === 'instagram' ? '1,247' : id === 'twitter' ? '892' : '534') : '—',
        engagement: !a.connected ? (id === 'instagram' ? '4.8%' : id === 'twitter' ? '3.2%' : '5.1%') : '—',
        recentPosts: !a.connected ? (id === 'instagram' ? 12 : id === 'twitter' ? 28 : 8) : 0,
      } : a
    ));
  };

  const connectedCount = accounts.filter(a => a.connected).length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold">Social Media Hub</h1>
        <p className="text-slate-400 mt-1">Connect your accounts and let your AI team manage your social presence.</p>
      </motion.div>

      {/* Connected Accounts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {accounts.map((account, i) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${account.gradient} flex items-center justify-center`}>
                  <account.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{account.platform}</h3>
                  <p className="text-xs text-slate-400">{account.username}</p>
                </div>
              </div>
              {account.connected ? (
                <CheckCircle className="w-5 h-5 text-neon-green" />
              ) : (
                <AlertCircle className="w-5 h-5 text-slate-500" />
              )}
            </div>

            {account.connected ? (
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Users className="w-3 h-3 text-slate-400" />
                  </div>
                  <p className="font-heading font-bold text-lg mt-1">{account.followers}</p>
                  <p className="text-[10px] text-slate-500">Followers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3 text-slate-400" />
                  </div>
                  <p className="font-heading font-bold text-lg mt-1">{account.engagement}</p>
                  <p className="text-[10px] text-slate-500">Engagement</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Heart className="w-3 h-3 text-slate-400" />
                  </div>
                  <p className="font-heading font-bold text-lg mt-1">{account.recentPosts}</p>
                  <p className="text-[10px] text-slate-500">Posts</p>
                </div>
              </div>
            ) : (
              <div className="py-4 text-center">
                <p className="text-sm text-slate-500 mb-1">Not connected</p>
                <p className="text-xs text-slate-600">Connect to start posting</p>
              </div>
            )}

            <button
              onClick={() => toggleConnect(account.id)}
              className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                account.connected
                  ? 'bg-white/5 hover:bg-red-500/10 text-slate-400 hover:text-red-400 border border-white/10'
                  : `bg-gradient-to-r ${account.gradient} text-white hover:shadow-lg`
              }`}
            >
              {account.connected ? 'Disconnect' : 'Connect Account'}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl font-semibold">Upcoming Posts</h2>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neon-purple bg-neon-purple/10 rounded-xl hover:bg-neon-purple/20 transition-all">
            <Plus className="w-4 h-4" />
            Create Post
          </button>
        </div>

        <div className="space-y-3">
          {mockScheduledPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5"
            >
              <div className="text-xl">{post.icon}</div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium">{post.title}</h4>
                <p className="text-xs text-slate-500">{post.platform} · {post.time}</p>
              </div>
              <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${
                post.status === 'ready' ? 'bg-neon-green/20 text-neon-green' :
                post.status === 'review' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-slate-500/20 text-slate-400'
              }`}>
                {post.status}
              </span>
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
