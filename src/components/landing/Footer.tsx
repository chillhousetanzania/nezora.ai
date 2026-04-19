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
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 16, fontWeight: 600, letterSpacing: '0.06em', color: 'var(--text)' }}>
              nezora<span style={{ color: 'var(--accent)' }}>.ai</span>
            </div>
            <p>Walk in with an idea. Walk out with a fully-staffed company running 24/7.</p>
          </div>

          {COLS.map(col => (
            <div key={col.title}>
              <div className="footer-col-title">{col.title}</div>
              <div className="footer-links">
                {col.links.map(link => (
                  <a key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2025 nezora.ai · all rights reserved</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--muted)' }}>
            // built with nezora
          </span>
        </div>
      </div>
    </footer>
  )
}
