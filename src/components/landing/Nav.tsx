import { useLanding } from '../../context/LandingContext'

const NAV_LINKS = [
  { label: '/team', href: '#team' },
  { label: '/org', href: '/org' },
  { label: '/how', href: '#how' },
  { label: '/live', href: '#live' },
  { label: '/stack', href: '#stack' },
  { label: '/plans', href: '#plans' },
]

export default function Nav() {
  const { openOnboarding } = useLanding()

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="nez-nav">
      <a href="/" className="nav-logo">
        nezora<span>.ai</span>
      </a>

      <div className="nav-links">
        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="nav-link"
            onClick={e => handleAnchor(e, l.href)}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button className="btn-ghost">Sign in</button>
        <button className="btn-primary" onClick={openOnboarding}>
          Launch company
        </button>
      </div>
    </nav>
  )
}
