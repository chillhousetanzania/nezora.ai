import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

type Palette = 'lime' | 'amber' | 'violet'
type Theme = 'dark' | 'light'

interface LandingContextValue {
  palette: Palette
  theme: Theme
  headline: number
  onboardingOpen: boolean
  introPlayed: boolean
  setPalette: (p: Palette) => void
  setTheme: (t: Theme) => void
  setHeadline: (h: number) => void
  openOnboarding: () => void
  closeOnboarding: () => void
  replayIntro: () => void
  triggerIntroReplay: number
}

const LandingContext = createContext<LandingContextValue | null>(null)

export function LandingProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = useState<Palette>('lime')
  const [theme, setThemeState] = useState<Theme>('dark')
  const [headline, setHeadline] = useState(2)
  const [onboardingOpen, setOnboardingOpen] = useState(false)
  const [introPlayed, setIntroPlayed] = useState(false)
  const [triggerIntroReplay, setTriggerIntroReplay] = useState(0)

  const setPalette = useCallback((p: Palette) => {
    setPaletteState(p)
    document.body.classList.remove('palette-lime', 'palette-amber', 'palette-violet')
    document.body.classList.add(`palette-${p}`)
  }, [])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    document.body.classList.remove('theme-dark', 'theme-light')
    document.body.classList.add(`theme-${t}`)
  }, [])

  const openOnboarding = useCallback(() => setOnboardingOpen(true), [])
  const closeOnboarding = useCallback(() => setOnboardingOpen(false), [])

  const replayIntro = useCallback(() => {
    setIntroPlayed(false)
    setTriggerIntroReplay(n => n + 1)
  }, [])

  const markIntroDone = useCallback(() => setIntroPlayed(true), [])

  useEffect(() => {
    document.body.classList.add('palette-lime', 'theme-dark')
  }, [])

  return (
    <LandingContext.Provider value={{
      palette, theme, headline, onboardingOpen, introPlayed,
      setPalette, setTheme, setHeadline,
      openOnboarding, closeOnboarding, replayIntro,
      triggerIntroReplay,
    }}>
      {children}
    </LandingContext.Provider>
  )
}

export function useLanding() {
  const ctx = useContext(LandingContext)
  if (!ctx) throw new Error('useLanding must be used within LandingProvider')
  return ctx
}
