import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const COLS = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how' },
      { label: 'Meet the team', href: '#team' },
      { label: 'Integrations', href: '#stack' },
      { label: 'Pricing', href: '#plans' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 mb-16">
          <div className="col-span-2 md:pr-12">
            <a href="/" className="flex items-center gap-2.5 outline-none group mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 shadow-soft-sm flex items-center justify-center transition-transform group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <span className="font-heading font-semibold text-xl text-white tracking-tight">
                Nezora
              </span>
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Walk in with an idea. Walk out with a fully-staffed company running 24/7.
            </p>
          </div>

          {COLS.map(col => (
            <div key={col.title}>
              <h4 className="font-semibold text-white mb-6 tracking-wide">{col.title}</h4>
              <ul className="flex flex-col gap-4">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-neutral-500">© 2026 Nezora · All rights reserved</span>
          <span className="text-sm font-medium text-neutral-500 flex items-center gap-1.5">
            Built with <Sparkles className="w-4 h-4 text-primary-500" />
          </span>
        </div>
      </div>
    </footer>
  )
}
