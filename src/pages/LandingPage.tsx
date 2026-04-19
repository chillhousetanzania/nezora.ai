import { useState, useEffect } from 'react'
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
    <div style={{ minHeight: '100vh' }}>
      <IntroOverlay
        onDone={() => setIntroDone(true)}
        triggerReplay={triggerIntroReplay}
      />

      <div className={`dolly-target${introDone ? ' arrived' : ''}`}>
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
      </div>

      <OnboardingModal />
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
