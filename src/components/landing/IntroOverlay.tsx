import { useEffect, useRef, useState } from 'react'

interface Props {
  onDone: () => void
  triggerReplay: number
}

export default function IntroOverlay({ onDone, triggerReplay }: Props) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const play = () => {
    setHidden(false)
    setOpen(false)

    const t1 = setTimeout(() => setOpen(true), 1700)
    const t2 = setTimeout(() => {
      setHidden(true)
      onDone()
    }, 3100)
    timerRef.current.push(t1, t2)
  }

  useEffect(() => {
    timerRef.current.forEach(clearTimeout)
    timerRef.current = []
    play()
  }, [triggerReplay])

  if (hidden) return null

  return (
    <div className={`intro-overlay${open ? ' open' : ''}`}>
      <div className="intro-shutter-top" />
      <div className="intro-shutter-bottom" />
      <div className="intro-center">
        <div className="intro-logo">nezora<span style={{ color: 'var(--accent)' }}>.ai</span></div>
        <div className="intro-tagline">
          initialising your company<span className="cursor" />
        </div>
        <div className="intro-bar">
          <div className="intro-bar-fill" />
        </div>
      </div>
    </div>
  )
}
