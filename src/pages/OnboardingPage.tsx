import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, ArrowLeft, Building2, Factory, Lightbulb, Target, Rocket, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { agents } from '../data/agents';
import { Card, Badge } from '../components/ui';

const industries = [
  { id: 'tech', label: 'Technology', emoji: '💻' },
  { id: 'fashion', label: 'Fashion', emoji: '👗' },
  { id: 'food', label: 'Food & Beverage', emoji: '🍔' },
  { id: 'health', label: 'Health & Fitness', emoji: '🏋️' },
  { id: 'finance', label: 'Finance', emoji: '💰' },
  { id: 'education', label: 'Education', emoji: '📚' },
  { id: 'entertainment', label: 'Entertainment', emoji: '🎬' },
  { id: 'ecommerce', label: 'E-Commerce', emoji: '🛒' },
  { id: 'travel', label: 'Travel', emoji: '✈️' },
  { id: 'real-estate', label: 'Real Estate', emoji: '🏠' },
  { id: 'automotive', label: 'Automotive', emoji: '🚗' },
  { id: 'other', label: 'Other', emoji: '🌟' },
];

const stepIcons = [Building2, Factory, Lightbulb, Target, Rocket];
const stepLabels = ['Name', 'Industry', 'Vision', 'Audience', 'Launch'];

const inputClass = "w-full h-12 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/15 dark:border-neutral-700/15 rounded-xl px-4 text-sm text-neutral-700 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200";
const textareaClass = "w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/15 dark:border-neutral-700/15 rounded-xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 resize-none";

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { company, updateCompany, completeOnboarding } = useApp();
  const [isLaunching, setIsLaunching] = useState(false);
  const [assembledAgents, setAssembledAgents] = useState<number>(0);

  const nextStep = () => { if (step < 4) setStep(step + 1); };
  const prevStep = () => { if (step > 0) setStep(step - 1); };

  const handleLaunch = async () => {
    setIsLaunching(true);
    for (let i = 0; i < agents.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      setAssembledAgents(i + 1);
    }
    await new Promise(resolve => setTimeout(resolve, 800));
    completeOnboarding();
    navigate('/dashboard');
  };

  const canProceed = () => {
    switch (step) {
      case 0: return company.name.trim().length > 0;
      case 1: return company.industry.length > 0;
      case 2: return company.description.trim().length > 0;
      case 3: return company.audience.trim().length > 0;
      case 4: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-soft-sm">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="font-heading font-semibold text-lg text-neutral-700 dark:text-neutral-200">Nezora</span>
      </div>

      {/* Progress */}
      <div className="relative mb-10 flex items-center gap-2">
        {stepLabels.map((label, i) => {
          const Icon = stepIcons[i];
          return (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <motion.div
                  animate={{
                    scale: i === step ? 1.1 : 1,
                    backgroundColor: i <= step ? '#a855f7' : 'rgba(163,163,163,0.1)',
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                >
                  {i < step ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <Icon className="w-5 h-5 text-white" />
                  )}
                </motion.div>
                <span className={`text-xs font-medium ${i <= step ? 'text-primary-500' : 'text-neutral-400'}`}>
                  {label}
                </span>
              </div>
              {i < 4 && (
                <div className={`w-12 h-0.5 mx-1 mb-5 rounded-full transition-colors duration-300 ${
                  i < step ? 'bg-primary-500' : 'bg-neutral-200 dark:bg-neutral-700'
                }`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Form Card */}
      <div className="relative w-full max-w-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Card variant="default" padding="lg" className="!p-8 md:!p-10">
              {/* Step 0: Company Name */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Name your company 🏢</h2>
                    <p className="text-neutral-500 text-sm">What should your AI team call this venture?</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={company.name}
                      onChange={(e) => updateCompany({ name: e.target.value })}
                      placeholder="e.g., TechNova, GreenEats, FitPulse..."
                      className={`${inputClass} !text-lg`}
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Tagline (optional)</label>
                    <input
                      type="text"
                      value={company.tagline}
                      onChange={(e) => updateCompany({ tagline: e.target.value })}
                      placeholder="e.g., Innovation made simple"
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              {/* Step 1: Industry */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Pick your industry 🏭</h2>
                    <p className="text-neutral-500 text-sm">This helps your AI team tailor their strategies.</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {industries.map((ind) => (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => updateCompany({ industry: ind.id })}
                        className={`p-3 rounded-xl text-center transition-all duration-200 ${
                          company.industry === ind.id
                            ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-500 shadow-soft-sm'
                            : 'bg-neutral-50 dark:bg-neutral-700/30 border-2 border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{ind.emoji}</span>
                        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">{ind.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Description */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Tell us your vision 🚀</h2>
                    <p className="text-neutral-500 text-sm">Help your AI team understand what you're building.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Describe your company</label>
                    <textarea
                      value={company.description}
                      onChange={(e) => updateCompany({ description: e.target.value })}
                      placeholder="We're building a platform that..."
                      rows={4}
                      className={textareaClass}
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">What problem do you solve?</label>
                    <input
                      type="text"
                      value={company.problem}
                      onChange={(e) => updateCompany({ problem: e.target.value })}
                      placeholder="e.g., Small businesses struggle with marketing..."
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Audience */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Who's it for? 🎯</h2>
                    <p className="text-neutral-500 text-sm">Define your target audience so your team can craft the right strategy.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Target Audience</label>
                    <input
                      type="text"
                      value={company.audience}
                      onChange={(e) => updateCompany({ audience: e.target.value })}
                      placeholder="e.g., Young professionals aged 25-35"
                      className={inputClass}
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Location (optional)</label>
                    <input
                      type="text"
                      value={company.audienceLocation}
                      onChange={(e) => updateCompany({ audienceLocation: e.target.value })}
                      placeholder="e.g., Global, US, East Africa..."
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Launch */}
              {step === 4 && (
                <div className="space-y-6 text-center">
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                      {isLaunching ? 'Assembling your team...' : 'Ready to launch? 🚀'}
                    </h2>
                    <p className="text-neutral-500 text-sm">
                      {isLaunching
                        ? `${assembledAgents} of ${agents.length} agents onboarded`
                        : `Your AI team for "${company.name}" is about to come to life!`}
                    </p>
                  </div>

                  {/* Agent assembly animation */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                    {agents.map((agent, i) => (
                      <motion.div
                        key={agent.id}
                        initial={{ opacity: 0.2, scale: 0.8 }}
                        animate={{
                          opacity: isLaunching && i < assembledAgents ? 1 : (isLaunching ? 0.2 : 0.5),
                          scale: isLaunching && i < assembledAgents ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.4, type: 'spring' }}
                        className={`rounded-xl p-3 text-center transition-all ${
                          isLaunching && i < assembledAgents
                            ? 'bg-primary-50 dark:bg-primary-900/20 shadow-soft-md border border-primary-500/30'
                            : 'bg-neutral-50 dark:bg-neutral-700/30'
                        }`}
                      >
                        <div className="text-2xl mb-1">{agent.emoji}</div>
                        <p className="text-xs font-medium text-neutral-700 dark:text-neutral-200">{agent.name}</p>
                        <p className="text-[10px] text-neutral-500">{agent.role}</p>
                        {isLaunching && i < assembledAgents && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-center gap-1 mt-1"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-success-500" />
                            <span className="text-[10px] text-success-500">Ready</span>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress bar during launch */}
                  {isLaunching && (
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: `${(assembledAgents / agents.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}

                  {!isLaunching && (
                    <button
                      onClick={handleLaunch}
                      className="group h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl hover:shadow-glow-primary transition-all duration-300 flex items-center gap-2 mx-auto active:scale-[0.98]"
                    >
                      <Rocket className="w-5 h-5" />
                      Launch My Team!
                    </button>
                  )}
                </div>
              )}
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevStep}
              disabled={step === 0}
              className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2 h-10 px-6 text-sm font-medium bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-glow-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 active:scale-[0.98]"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
