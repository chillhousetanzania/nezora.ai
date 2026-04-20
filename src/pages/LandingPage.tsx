import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LandingProvider, useLanding } from '../context/LandingContext'
import IntroOverlay from '../components/landing/IntroOverlay'
import Nav from '../components/landing/Nav'
import Hero from '../components/landing/Hero'
import Ticker from '../components/landing/Ticker'
import HowItWorks from '../components/landing/HowItWorks'
import Comparison from '../components/landing/Comparison'
import EmployeesSection from '../components/landing/EmployeesSection'
import LiveDemo from '../components/landing/LiveDemo'
import Integrations from '../components/landing/Integrations'
import Pricing from '../components/landing/Pricing'
import FinalCTA from '../components/landing/FinalCTA'
import Footer from '../components/landing/Footer'
import OnboardingModal from '../components/landing/OnboardingModal'
import TweaksPanel from '../components/landing/TweaksPanel'

function LandingInner() {
  const { triggerIntroReplay } = useLanding()
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    if (triggerIntroReplay > 0) setIntroDone(false)
  }, [triggerIntroReplay])

  return (
    <div className="min-h-screen bg-white">
      <IntroOverlay
        onDone={() => setIntroDone(true)}
        triggerReplay={triggerIntroReplay}
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ 
          opacity: introDone ? 1 : 0, 
          scale: introDone ? 1 : 1.02 
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Nav />

        <main>
          <Hero />
          <Ticker />
          <HowItWorks />
          <Comparison />
          <EmployeesSection />
          <LiveDemo />
          <Integrations />
          <Pricing />
          <FinalCTA />
          <Footer />
        </main>
      </motion.div>

      <OnboardingModal />
      {/* TweaksPanel is left here as a functional overlay, though its retro CSS might need updating later if it's visible */}
      <TweaksPanel />
    </div>
  )
}

export default function LandingPage() {
  return (
    <LandingProvider>
      <LandingInner />
    </LandingProvider>
  )
}
