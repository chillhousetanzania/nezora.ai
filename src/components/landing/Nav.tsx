import { useLanding } from '../../context/LandingContext'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Team', href: '#team' },
  { label: 'Platform', href: '#how' },
  { label: 'Demo', href: '#live' },
  { label: 'Integrations', href: '#stack' },
  { label: 'Pricing', href: '#plans' },
]

export default function Nav() {
  const { openOnboarding } = useLanding()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Subtle glassy effect that increases as you scroll
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 20)
    })
  }, [scrollY])

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-[100] h-20 px-6 lg:px-12 flex items-center transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200/20 shadow-soft-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 outline-none group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 shadow-soft-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <span className="font-heading font-semibold text-lg text-neutral-800 tracking-tight">
            Nezora
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-100/50 rounded-full px-2 py-1.5 border border-neutral-200/30">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 px-4 py-2 rounded-full hover:bg-white hover:shadow-soft-sm transition-all duration-300"
              onClick={e => handleAnchor(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="/login" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 hidden sm:block transition-colors">
            Sign in
          </a>
          <button 
            onClick={openOnboarding}
            className="h-10 px-6 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 hover:shadow-soft-lg transition-all duration-300 active:scale-95"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
