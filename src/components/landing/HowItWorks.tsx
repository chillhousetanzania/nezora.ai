import { Card } from '../ui'
import { motion } from 'framer-motion'
import { Sparkles, Users, MessageSquare } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: Sparkles,
    title: 'Describe your idea',
    desc: 'Tell us what you\'re building in plain language. No business plan required — a sentence is enough to get started.',
    visual: (
      <div className="flex items-center gap-2">
        <div className="bg-neutral-50 border border-neutral-200/60 rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-600 flex items-center gap-2 shadow-soft-xs">
          <span>We're building an app for dog owners</span>
          <span className="w-0.5 h-4 bg-primary-500 animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    num: '02',
    icon: Users,
    title: 'Meet your team',
    desc: 'Your company assembles instantly — 12 specialised employees appear, each ready to take ownership of their domain.',
    visual: (
      <div className="flex gap-2 items-center">
        {['AC', 'MW', 'DK', 'ZF'].map((init, i) => (
          <motion.div 
            key={init}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200/50 flex items-center justify-center text-xs font-semibold text-primary-600 shadow-soft-sm"
          >
            {init}
          </motion.div>
        ))}
        <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-500">
          +8
        </div>
      </div>
    ),
  },
  {
    num: '03',
    icon: MessageSquare,
    title: 'Give orders, they execute',
    desc: 'Chat with any employee, assign missions, and watch work happen in real time — posts go live, code gets shipped, deals get closed.',
    visual: (
      <div className="flex flex-col gap-3 w-full">
        <div className="self-end bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl rounded-tr-md px-4 py-2 text-sm shadow-soft-sm max-w-[80%]">
          Launch our Instagram today
        </div>
        <div className="self-start bg-neutral-100 text-neutral-700 rounded-2xl rounded-tl-md px-4 py-2 text-sm shadow-soft-xs max-w-[80%] flex items-center gap-2">
          <span className="text-xs font-bold text-primary-600">CMO</span>
          On it — first 3 posts scheduled ✓
        </div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto" id="how">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">How It Works</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-neutral-900 mb-4 tracking-tight">
          Three steps to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">running company</span>
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
          No hiring. No onboarding. No management overhead. Just describe, meet, and lead.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card variant="elevated" padding="lg" className="h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-heading font-bold text-neutral-900">
                    {step.num}
                  </span>
                </div>
                
                <div className="h-28 flex items-center mb-6">
                  {step.visual}
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
