export interface DemoLine {
  ts: string
  agent: string
  msg: string
}

export function getDemoScript(brief: string): DemoLine[] {
  const topic = brief.trim() || 'your idea'
  return [
    { ts: '00:01', agent: 'CEO', msg: `Brief received. Assessing market opportunity for "${topic}".` },
    { ts: '00:03', agent: 'CMO', msg: 'Running competitive analysis. Drafting initial go-to-market thesis.' },
    { ts: '00:06', agent: 'Product', msg: 'Mapping core user journey. Writing first spec draft in Notion.' },
    { ts: '00:09', agent: 'Engineering', msg: 'Tech stack selected. Scaffold repo created. CI pipeline live.' },
    { ts: '00:12', agent: 'Design', msg: 'Brand moodboard ready. Starting component library in Figma.' },
    { ts: '00:16', agent: 'Content', msg: 'First 3 reels scripted. Scheduling week-1 social calendar.' },
    { ts: '00:20', agent: 'Sales', msg: 'ICP defined. Outbound sequence loaded — 40 prospects queued.' },
    { ts: '00:24', agent: 'CEO', msg: 'Week-1 plan locked. Company is live. Your move, founder.' },
  ]
}

export const DEMO_EXAMPLES = [
  'An app that helps dog owners track vet appointments',
  'A newsletter summarising AI news for non-technical founders',
  'Online store selling custom embroidered hats',
]
