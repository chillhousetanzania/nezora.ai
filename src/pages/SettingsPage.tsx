import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Bell, Palette, Shield, CreditCard, Save, Moon, Sun } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SettingsPage() {
  const { user, company } = useApp();
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState({
    agentUpdates: true,
    contentReady: true,
    socialPosts: true,
    weeklyReport: false,
    emailDigest: true,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold">Settings</h1>
        <p className="text-slate-400 mt-1">Manage your account, company, and preferences.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tab Nav */}
        <div className="md:w-56 shrink-0">
          <div className="glass rounded-2xl p-2 flex md:flex-col gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-neon-purple/20 text-neon-purple'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 glass rounded-2xl p-6"
        >
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="font-heading text-lg font-semibold">Profile Settings</h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-2xl font-bold">
                  {user?.name?.charAt(0) || 'F'}
                </div>
                <div>
                  <h3 className="font-medium">{user?.name || 'Founder'}</h3>
                  <p className="text-sm text-slate-400">{user?.email || 'founder@example.com'}</p>
                  <button className="text-xs text-neon-purple hover:text-neon-purple/80 mt-1 transition-colors">Change avatar</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user?.name}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Role</label>
                  <input
                    type="text"
                    defaultValue="Founder & CEO"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Timezone</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all">
                    <option value="eat">East Africa Time (EAT)</option>
                    <option value="utc">UTC</option>
                    <option value="est">Eastern (EST)</option>
                    <option value="pst">Pacific (PST)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Company Tab */}
          {activeTab === 'company' && (
            <div className="space-y-6">
              <h2 className="font-heading text-lg font-semibold">Company Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    defaultValue={company.name}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
                  <input
                    type="text"
                    defaultValue={company.industry}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                  <textarea
                    defaultValue={company.description}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Target Audience</label>
                  <input
                    type="text"
                    defaultValue={company.audience}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                  <input
                    type="text"
                    defaultValue={company.audienceLocation}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="font-heading text-lg font-semibold">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  { key: 'agentUpdates', label: 'Agent Updates', desc: 'Get notified when agents complete tasks or need your attention' },
                  { key: 'contentReady', label: 'Content Ready', desc: 'Notifications when new content is ready for review' },
                  { key: 'socialPosts', label: 'Social Media Posts', desc: 'Alerts when content is posted on social media' },
                  { key: 'weeklyReport', label: 'Weekly Report', desc: 'Receive a weekly performance summary email' },
                  { key: 'emailDigest', label: 'Email Digest', desc: 'Daily email digest of all agent activities' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h4 className="text-sm font-medium">{item.label}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                      className={`w-11 h-6 rounded-full transition-all duration-300 relative ${
                        notifications[item.key as keyof typeof notifications] ? 'bg-neon-purple' : 'bg-white/10'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-all duration-300 ${
                        notifications[item.key as keyof typeof notifications] ? 'left-[22px]' : 'left-0.5'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <h2 className="font-heading text-lg font-semibold">Appearance</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setDarkMode(true)}
                  className={`flex-1 p-6 rounded-2xl text-center transition-all duration-300 ${
                    darkMode ? 'bg-neon-purple/20 border-2 border-neon-purple' : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                  }`}
                >
                  <Moon className="w-8 h-8 mx-auto mb-3 text-neon-purple" />
                  <p className="font-medium text-sm">Dark Mode</p>
                  <p className="text-xs text-slate-400 mt-1">Easy on the eyes</p>
                </button>
                <button
                  onClick={() => setDarkMode(false)}
                  className={`flex-1 p-6 rounded-2xl text-center transition-all duration-300 ${
                    !darkMode ? 'bg-neon-purple/20 border-2 border-neon-purple' : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                  }`}
                >
                  <Sun className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <p className="font-medium text-sm">Light Mode</p>
                  <p className="text-xs text-slate-400 mt-1">Coming soon</p>
                </button>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h2 className="font-heading text-lg font-semibold">Billing & Plan</h2>
              <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-2xl p-6 border border-neon-purple/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neon-purple font-medium mb-1">CURRENT PLAN</p>
                    <h3 className="font-heading text-2xl font-bold">Starter</h3>
                    <p className="text-sm text-slate-400 mt-1">Free plan — 3 agents, 10 content pieces/month</p>
                  </div>
                  <button className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl hover:shadow-glow-purple transition-all">
                    Upgrade
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Growth', price: '$29', features: ['8 agents', '100 content/mo', '2 social channels'] },
                  { name: 'Scale', price: '$79', features: ['Unlimited agents', 'Unlimited content', 'All channels', 'Analytics'] },
                  { name: 'Enterprise', price: '$199', features: ['Custom agents', 'API access', 'White-label', 'Priority support'] },
                ].map((plan) => (
                  <div key={plan.name} className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-neon-purple/20 transition-all">
                    <h4 className="font-heading font-semibold">{plan.name}</h4>
                    <p className="font-heading text-2xl font-bold mt-1">{plan.price}<span className="text-sm text-slate-400 font-normal">/mo</span></p>
                    <ul className="mt-3 space-y-2">
                      {plan.features.map(f => (
                        <li key={f} className="text-xs text-slate-400 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-neon-purple" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 py-2 text-sm font-medium bg-white/5 hover:bg-neon-purple/10 rounded-xl text-neon-purple transition-all">
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Save button */}
          <div className="mt-8 flex items-center justify-end gap-3">
            {saved && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-neon-green"
              >
                ✓ Saved successfully
              </motion.span>
            )}
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl hover:shadow-glow-purple transition-all duration-300"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
