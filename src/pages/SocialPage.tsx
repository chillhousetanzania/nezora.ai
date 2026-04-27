import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Plus, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, Badge, Button } from '../components/ui';
import { ContentPreviewCard } from '../components/content/ContentPreviewCard';
import { FilterBar } from '../components/content/FilterBar';
import { EmptyState } from '../components/ui/EmptyState';
import { ApprovalModal } from '../components/modals/ApprovalModal';
import { RejectionReasonModal } from '../components/modals/RejectionReasonModal';

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
  { id: 'instagram', platform: 'Instagram', icon: Instagram, username: '@yourcompany', connected: false, followers: '—', engagement: '—', color: '#E4405F', gradient: 'from-[#833AB4] via-[#E4405F] to-[#FCAF45]', recentPosts: 0 },
  { id: 'twitter', platform: 'Twitter / X', icon: Twitter, username: '@yourcompany', connected: false, followers: '—', engagement: '—', color: '#1DA1F2', gradient: 'from-[#1DA1F2] to-[#0d8ecf]', recentPosts: 0 },
  { id: 'linkedin', platform: 'LinkedIn', icon: Linkedin, username: 'Your Company', connected: false, followers: '—', engagement: '—', color: '#0A66C2', gradient: 'from-[#0A66C2] to-[#004182]', recentPosts: 0 },
];

interface ContentPiece {
  id: string;
  caption: string;
  platform: string;
  status: 'pending' | 'approved' | 'draft' | 'rejected';
  createdBy: string;
  scheduledFor: string;
  mockImageBg: string;
}

const initialContentPieces: ContentPiece[] = [
  { id: '1', caption: 'Introducing our journey from idea to reality. Swipe through to see how we\'re changing the game...\n\n#startup #branding #growth', platform: 'Instagram', status: 'pending', createdBy: 'Canvas', scheduledFor: 'Tomorrow, 6:00 PM', mockImageBg: 'linear-gradient(135deg, #833AB4, #E4405F)' },
  { id: '2', caption: '5 trends every founder needs to watch in 2026. Thread incoming 🧵...\n\n#startup #tech #trends', platform: 'Twitter', status: 'approved', createdBy: 'Maven', scheduledFor: 'Wed, 10:00 AM', mockImageBg: 'linear-gradient(135deg, #1DA1F2, #0d8ecf)' },
  { id: '3', caption: 'Something exciting is coming. Stay tuned for the big reveal...\n\n#innovation #product #teaser', platform: 'Instagram', status: 'draft', createdBy: 'Canvas', scheduledFor: 'Fri, 7:00 PM', mockImageBg: 'linear-gradient(135deg, #a855f7, #06b6d4)' },
  { id: '4', caption: 'We just hit 1,000 users! Thank you to our incredible community for believing in us...\n\n#milestone #growth #community', platform: 'LinkedIn', status: 'pending', createdBy: 'Chief', scheduledFor: 'Thu, 9:00 AM', mockImageBg: 'linear-gradient(135deg, #0A66C2, #004182)' },
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
  const [contentPieces, setContentPieces] = useState(initialContentPieces);
  const [platformFilter, setPlatformFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal states
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);

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

  const filteredContent = contentPieces.filter(c => {
    const matchPlatform = platformFilter === 'all' || c.platform.toLowerCase() === platformFilter;
    const matchStatus = statusFilter === 'all' || c.status === statusFilter;
    const matchSearch = c.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPlatform && matchStatus && matchSearch;
  });

  const selectedContent = contentPieces.find(c => c.id === selectedContentId);

  // Approval Flow Handlers
  const handleOpenApproval = (id: string) => {
    setSelectedContentId(id);
    setIsApprovalModalOpen(true);
  };

  const handleOpenRejection = (id: string) => {
    setSelectedContentId(id);
    setIsRejectionModalOpen(true);
  };

  const handleApprove = () => {
    if (selectedContentId) {
      setContentPieces(prev => prev.map(c => 
        c.id === selectedContentId ? { ...c, status: 'approved' } : c
      ));
    }
    setIsApprovalModalOpen(false);
  };

  const handleRequestChanges = () => {
    if (selectedContentId) {
      setContentPieces(prev => prev.map(c => 
        c.id === selectedContentId ? { ...c, status: 'draft' } : c
      ));
    }
    setIsApprovalModalOpen(false);
  };

  const handleConfirmRejection = (reason: string) => {
    console.log("Rejected with reason:", reason);
    if (selectedContentId) {
      setContentPieces(prev => prev.map(c => 
        c.id === selectedContentId ? { ...c, status: 'rejected' } : c
      ));
    }
    setIsApprovalModalOpen(false); // Close if it was open
    setIsRejectionModalOpen(false);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Content Studio</h1>
        <p className="text-neutral-500">Manage your content, connect accounts, and schedule posts.</p>
      </motion.div>

      {/* ── Connected Accounts ────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accounts.map((account, i) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card variant="default" padding="lg" hoverable className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${account.gradient} shadow-soft-sm flex items-center justify-center`}>
                    <account.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-neutral-900 dark:text-neutral-100">{account.platform}</h3>
                    <p className="text-sm text-neutral-500">{account.username}</p>
                  </div>
                </div>
                {account.connected ? (
                  <CheckCircle className="w-5 h-5 text-success-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-neutral-300 dark:text-neutral-600" />
                )}
              </div>

              <div className="flex-grow">
                {account.connected ? (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                      <p className="font-semibold text-lg text-neutral-900 dark:text-neutral-200">{account.followers}</p>
                      <p className="text-[10px] uppercase tracking-wide text-neutral-500 mt-1">Followers</p>
                    </div>
                    <div className="text-center p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                      <p className="font-semibold text-lg text-neutral-900 dark:text-neutral-200">{account.engagement}</p>
                      <p className="text-[10px] uppercase tracking-wide text-neutral-500 mt-1">Engagement</p>
                    </div>
                    <div className="text-center p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                      <p className="font-semibold text-lg text-neutral-900 dark:text-neutral-200">{account.recentPosts}</p>
                      <p className="text-[10px] uppercase tracking-wide text-neutral-500 mt-1">Posts</p>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center">
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-1">Not connected</p>
                    <p className="text-xs text-neutral-500">Connect to synchronize your content pipeline.</p>
                  </div>
                )}
              </div>

              <Button
                variant={account.connected ? 'secondary' : 'primary'}
                fullWidth
                onClick={() => toggleConnect(account.id)}
                className={`mt-auto ${!account.connected ? `bg-gradient-to-r ${account.gradient} text-white border-0` : ''}`}
              >
                {account.connected ? 'Disconnect' : 'Connect Account'}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ── Content Studio Grid ──────────────────── */}
      <motion.div 
        className="flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Content Pipeline</h2>
        </div>
        
        {/* Filter Bar */}
        <FilterBar 
          platform={platformFilter}
          onPlatformChange={setPlatformFilter}
          status={statusFilter}
          onStatusChange={setStatusFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredContent.length > 0 ? (
              filteredContent.map((content, i) => (
                <motion.div
                  key={content.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  <ContentPreviewCard
                    platform={content.platform}
                    status={content.status}
                    caption={content.caption}
                    scheduledFor={content.scheduledFor}
                    author={content.createdBy}
                    onApprove={() => handleOpenApproval(content.id)}
                    onEdit={() => console.log('Edit clicked for', content.id)}
                    onReject={() => handleOpenRejection(content.id)}
                  />
                </motion.div>
              ))
            ) : (
               <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 className="col-span-full py-6"
               >
                 <EmptyState
                   icon={AlertCircle}
                   title="No content found"
                   description="No content matched your filters. Try adjusting the search or status."
                 />
               </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Upcoming Posts ────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card variant="default" padding="lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Upcoming Schedule</h2>
            <Button variant="primary" size="sm" icon={<Plus />} iconPosition="left">
              Create Post
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {mockScheduledPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-700/50 group"
              >
                <div className="text-xl flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-800">
                  {post.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">{post.title}</h4>
                  <p className="text-xs text-neutral-500">{post.platform} · {post.time}</p>
                </div>
                <Badge
                  variant={post.status === 'ready' ? 'success' : post.status === 'review' ? 'warning' : 'default'}
                  size="sm"
                >
                  {post.status}
                </Badge>
                <button className="p-2 ml-2 rounded-lg text-neutral-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Modals */}
      {selectedContent && (
        <ApprovalModal
          isOpen={isApprovalModalOpen}
          onClose={() => setIsApprovalModalOpen(false)}
          onApprove={handleApprove}
          onRequestChanges={handleRequestChanges}
          onReject={() => {
            setIsApprovalModalOpen(false);
            setIsRejectionModalOpen(true);
          }}
          contentDetails={{
            platform: selectedContent.platform,
            caption: selectedContent.caption,
            createdBy: selectedContent.createdBy,
            scheduledFor: selectedContent.scheduledFor,
            status: selectedContent.status,
          }}
        />
      )}

      <RejectionReasonModal
        isOpen={isRejectionModalOpen}
        onClose={() => setIsRejectionModalOpen(false)}
        onConfirm={handleConfirmRejection}
      />
    </div>
  );
}

