import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Bell, Palette, CreditCard, Save, Moon, Sun, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Card, Badge } from '../components/ui';

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

  const inputClass = "w-full h-12 bg-neutral-50 dark:bg-neutral-700/50 border border-neutral-200/15 dark:border-neutral-600/15 rounded-xl px-4 text-sm text-neutral-700 dark:text-neutral-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200";
  const labelClass = "block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2";

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-200">Settings</h1>
        <p className="text-neutral-500 mt-1">Manage your account, company, and preferences.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tab Nav */}
        <div className="md:w-56 shrink-0">
          <Card variant="default" padding="sm">
            <div className="flex md:flex-col gap-1 overflow-x-auto p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700/30'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          <Card variant="default" padding="lg">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-200">Profile Settings</h2>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-2xl font-semibold text-white">
                    {user?.name?.charAt(0) || 'F'}
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-700 dark:text-neutral-200">{user?.name || 'Founder'}</h3>
                    <p className="text-sm text-neutral-500">{user?.email || 'founder@example.com'}</p>
                    <button className="text-xs text-primary-500 hover:text-primary-600 mt-1 transition-colors">Change avatar</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input type="text" defaultValue={user?.name} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input type="email" defaultValue={user?.email} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Role</label>
                    <input type="text" defaultValue="Founder & CEO" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Timezone</label>
                    <select className={inputClass}>
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
                <h2 className="font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-200">Company Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Company Name</label>
                    <input type="text" defaultValue={company.name} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Industry</label>
                    <input type="text" defaultValue={company.industry} className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Description</label>
                    <textarea
                      defaultValue={company.description}
                      rows={3}
                      className="w-full min-h-[120px] bg-neutral-50 dark:bg-neutral-700/50 border border-neutral-200/15 dark:border-neutral-600/15 rounded-xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 resize-none"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Target Audience</label>
                    <input type="text" defaultValue={company.audience} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Location</label>
                    <input type="text" defaultValue={company.audienceLocation} className={inputClass} />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-200">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    { key: 'agentUpdates', label: 'Agent Updates', desc: 'Get notified when agents complete tasks or need your attention' },
                    { key: 'contentReady', label: 'Content Ready', desc: 'Notifications when new content is ready for review' },
                    { key: 'socialPosts', label: 'Social Media Posts', desc: 'Alerts when content is posted on social media' },
                    { key: 'weeklyReport', label: 'Weekly Report', desc: 'Receive a weekly performance summary email' },
                    { key: 'emailDigest', label: 'Email Digest', desc: 'Daily email digest of all agent activities' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700/30 rounded-xl">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{item.label}</h4>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                      </div>
                      <button
                        onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                        className={`w-11 h-6 rounded-full transition-all duration-300 relative ${
                          notifications[item.key as keyof typeof notifications] ? 'bg-primary-500' : 'bg-neutral-300 dark:bg-neutral-600'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full bg-white shadow-soft-sm absolute top-0.5 transition-all duration-300 ${
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
                <h2 className="font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-200">Appearance</h2>
                <div className="flex gap-4">
                  <button
                    onClick={() => setDarkMode(true)}
                    className={`flex-1 p-6 rounded-2xl text-center transition-all duration-300 ${
                      darkMode
                        ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-500 shadow-soft-sm'
                        : 'bg-neutral-50 dark:bg-neutral-700/30 border-2 border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
                    }`}
                  >
                    <Moon className="w-8 h-8 mx-auto mb-3 text-primary-500" />
                    <p className="font-medium text-sm text-neutral-700 dark:text-neutral-200">Dark Mode</p>
                    <p className="text-xs text-neutral-500 mt-1">Easy on the eyes</p>
                  </button>
                  <button
                    onClick={() => setDarkMode(false)}
                    className={`flex-1 p-6 rounded-2xl text-center transition-all duration-300 ${
                      !darkMode
                        ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-500 shadow-soft-sm'
                        : 'bg-neutral-50 dark:bg-neutral-700/30 border-2 border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
                    }`}
                  >
                    <Sun className="w-8 h-8 mx-auto mb-3 text-warning-500" />
                    <p className="font-medium text-sm text-neutral-700 dark:text-neutral-200">Light Mode</p>
                    <p className="text-xs text-neutral-500 mt-1">Coming soon</p>
                  </button>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <h2 className="font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-200">Billing & Plan</h2>
                <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-6 border border-primary-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="primary" size="sm">CURRENT PLAN</Badge>
                      <h3 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mt-2">Starter</h3>
                      <p className="text-sm text-neutral-500 mt-1">Free plan — 3 agents, 10 content pieces/month</p>
                    </div>
                    <button className="h-10 px-6 text-sm font-medium bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-glow-primary transition-all active:scale-[0.98]">
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
                    <Card key={plan.name} variant="default" padding="md" hoverable>
                      <h4 className="font-heading font-semibold text-neutral-700 dark:text-neutral-200">{plan.name}</h4>
                      <p className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mt-1">
                        {plan.price}<span className="text-sm text-neutral-500 font-normal">/mo</span>
                      </p>
                      <ul className="mt-3 space-y-2">
                        {plan.features.map(f => (
                          <li key={f} className="text-xs text-neutral-500 flex items-center gap-2">
                            <Check className="w-3 h-3 text-primary-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full mt-4 h-10 text-sm font-medium bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-xl text-primary-600 dark:text-primary-400 transition-all">
                        Select Plan
                      </button>
                    </Card>
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
                  className="text-sm text-success-500 font-medium"
                >
                  ✓ Saved successfully
                </motion.span>
              )}
              <button
                onClick={handleSave}
                className="flex items-center gap-2 h-12 px-6 text-sm font-medium bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-glow-primary transition-all duration-300 active:scale-[0.98]"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
