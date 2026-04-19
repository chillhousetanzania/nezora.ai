import { useState } from 'react'
import { useLanding } from '../../context/LandingContext'

const PALETTES: { key: 'lime' | 'amber' | 'violet'; color: string }[] = [
  { key: 'lime', color: '#A5F26A' },
  { key: 'amber', color: '#FFB84D' },
  { key: 'violet', color: '#B388FF' },
]

export default function TweaksPanel() {
  const { palette, theme, headline, setPalette, setTheme, setHeadline, replayIntro } = useLanding()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="tweaks-toggle" onClick={() => setOpen(o => !o)} title="Design tweaks">
        ⚙
      </button>

      {open && (
        <div className="tweaks-panel">
          <div className="tweaks-section-title">accent</div>
          <div className="tweaks-swatches">
            {PALETTES.map(p => (
              <div
                key={p.key}
                className={`tweaks-swatch${palette === p.key ? ' active' : ''}`}
                style={{ background: p.color }}
                onClick={() => setPalette(p.key)}
                title={p.key}
              />
            ))}
          </div>

          <div className="tweaks-section-title">theme</div>
          <div className="tweaks-row" style={{ marginBottom: 16 }}>
            <button className={`tweaks-btn${theme === 'dark' ? ' active' : ''}`} onClick={() => setTheme('dark')}>dark</button>
            <button className={`tweaks-btn${theme === 'light' ? ' active' : ''}`} onClick={() => setTheme('light')}>light</button>
          </div>

          <div className="tweaks-section-title">headline</div>
          <div className="tweaks-row">
            {[0, 1, 2].map(h => (
              <button
                key={h}
                className={`tweaks-btn${headline === h ? ' active' : ''}`}
                onClick={() => setHeadline(h)}
              >
                {h + 1}
              </button>
            ))}
          </div>

          <button className="tweaks-replay" onClick={() => { setOpen(false); replayIntro() }}>
            ↺ replay intro
          </button>
        </div>
      )}
    </>
  )
}
