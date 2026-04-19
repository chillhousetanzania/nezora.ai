const ITEMS = [
  'CEO · strategy & vision',
  'CMO · brand & growth',
  'Engineering · build & ship',
  'Design · pixel-perfect',
  'Product · roadmap & specs',
  'Content · reels & posts',
  'Sales · pipeline & close',
  'Support · always on',
  'Finance · runway & P&L',
  'Data · insights & dashboards',
  'Legal · contracts & compliance',
  'HR & Ops · people & process',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-text">{item}</span>
            <span className="ticker-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}
