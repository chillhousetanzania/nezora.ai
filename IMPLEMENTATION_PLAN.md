# Nezora — Complete Master Implementation Plan

> **Purpose**: This document is the single source of truth for the entire Nezora project. It is written so that ANY developer or LLM can read it, understand the full codebase, and implement any feature without needing additional context.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Existing Codebase Reference](#2-existing-codebase-reference)
3. [Design System Reference](#3-design-system-reference)
4. [Phase 2: Core Intelligence Features](#4-phase-2-core-intelligence-features)
5. [Phase 3: Content Engine & Integrations](#5-phase-3-content-engine--integrations)
6. [Phase 4: Real AI & Autonomous Operation](#6-phase-4-real-ai--autonomous-operation)
7. [Data Architecture](#7-data-architecture)
8. [Testing & Verification](#8-testing--verification)

---

## 1. Project Overview

### What is Nezora?

Nezora is an **AI-powered virtual company builder**. A solo founder registers their startup idea and instantly receives a team of 8 AI agents (CEO, CMO, Content Creator, Social Media Manager, CFO, CTO, Operations Manager, Sales Director) that collaborate to run the company — creating content, managing social media, developing strategy, and more.

### Current State (Phase 1 Complete)

Phase 1 is a **fully functional UI prototype** with simulated/mock data. No real AI APIs are connected. All agent responses come from pre-written response pools. The app has 10 working pages with full routing, animations, and interactivity.

### App URL

- **Local dev**: `http://localhost:5177/` (or next available port)
- **Dev command**: `npm run dev` from `d:\websites\nezora\`

### Tech Stack

| Layer | Technology | Version |
|:--|:--|:--|
| Build tool | Vite | 6.x |
| Framework | React | 18.3.x |
| Language | TypeScript | 5.6.x |
| Styling | Tailwind CSS | 3.4.x |
| Animations | Framer Motion | 11.x |
| Routing | React Router DOM | 7.x |
| Icons | Lucide React | 0.468.x |
| State | React Context | (built-in) |

---

## 2. Existing Codebase Reference

### File Structure

```
d:\websites\nezora\
├── index.html                    # Entry HTML with Google Fonts (Inter + Space Grotesk)
├── package.json                  # Dependencies and scripts
├── vite.config.ts                # Vite config, port 5173, auto-open
├── tsconfig.json                 # TypeScript strict mode config
├── tailwind.config.js            # Custom colors, fonts, animations, shadows
├── postcss.config.js             # PostCSS with Tailwind + Autoprefixer
│
└── src/
    ├── main.tsx                  # ReactDOM entry, wraps with BrowserRouter + AppProvider
    ├── App.tsx                   # Route definitions (public + protected)
    ├── index.css                 # Global CSS: Tailwind directives, glass classes, gradient-text,
    │                             #   custom scrollbar, typing animation, particle animation
    ├── vite-env.d.ts             # Vite type reference
    │
    ├── context/
    │   └── AppContext.tsx         # Global state: auth, user, company, notifications, onboarding
    │
    ├── data/
    │   ├── agents.ts             # 8 agent definitions with id, name, role, title, emoji, color,
    │   │                         #   description, personality, skills[], status, currentTask, avatar
    │   └── mockResponses.ts      # Greeting + response pools per agent ID, getGreeting(), getResponse()
    │
    ├── components/
    │   └── layout/
    │       ├── AppLayout.tsx      # Sidebar + TopBar + <Outlet /> wrapper
    │       ├── Sidebar.tsx        # Left nav: 72px collapsed → 200px on hover, 7 nav items + logout
    │       └── TopBar.tsx         # Top bar: search input, notification bell+dropdown, user avatar
    │
    └── pages/
        ├── LandingPage.tsx        # Hero, animated agent grid, features, how-it-works, CTA, footer
        ├── LoginPage.tsx          # Email + password form, simulated login → navigate('/dashboard')
        ├── SignUpPage.tsx         # Name + email + password, simulated → navigate('/onboarding')
        ├── OnboardingPage.tsx     # 5-step wizard: Name→Industry→Vision→Audience→Launch (team assembly)
        ├── DashboardPage.tsx      # 4 stat cards, 8 agent cards, recent activity feed
        ├── TeamPage.tsx           # 8 detailed agent profile cards with skills, description
        ├── ChatPage.tsx           # Left: agent list. Right: message area. Simulated responses.
        ├── CalendarPage.tsx       # Monthly calendar grid, day selection, side panel with content items
        ├── SocialPage.tsx         # 3 platform cards (IG/Twitter/LinkedIn), connect toggle, upcoming posts
        ├── AnalyticsPage.tsx      # Overview stats, animated bar chart, agent performance, top content table
        └── SettingsPage.tsx       # 5 tabs: Profile, Company, Notifications, Appearance, Billing
```

### Key Data Types

#### Agent (from `src/data/agents.ts`)
```typescript
interface Agent {
  id: string;          // 'chief', 'maven', 'canvas', 'pulse', 'ledger', 'forge', 'atlas', 'scout'
  name: string;        // 'Chief', 'Maven', 'Canvas', etc.
  role: string;        // 'CEO', 'CMO', 'Content Creator', etc.
  title: string;       // 'Chief Executive Officer', etc.
  emoji: string;       // '🎯', '📊', '🎨', etc.
  color: string;       // Hex color: '#8b5cf6', '#06b6d4', etc.
  description: string; // Long text description of role
  personality: string; // Personality traits
  skills: string[];    // Array of 4 skill tags
  status: 'online' | 'busy' | 'thinking';
  currentTask: string; // What they're currently doing
  avatar: string;      // Same as emoji (for now)
}
```

#### AppContext State (from `src/context/AppContext.tsx`)
```typescript
interface Company {
  name: string;
  tagline: string;
  industry: string;       // 'tech', 'fashion', 'food', etc.
  description: string;
  mission: string;
  problem: string;
  audience: string;
  audienceAge: string;
  audienceLocation: string;
}

interface Notification {
  id: string;
  agentId: string;
  agentName: string;
  message: string;
  time: string;
  read: boolean;
}

interface AppState {
  isAuthenticated: boolean;
  isOnboarded: boolean;
  user: { name: string; email: string } | null;
  company: Company;
  notifications: Notification[];
  login(name: string, email: string): void;
  logout(): void;
  completeOnboarding(): void;
  updateCompany(updates: Partial<Company>): void;
  markNotificationRead(id: string): void;
}
```

#### MockMessage (from `src/data/mockResponses.ts`)
```typescript
interface MockMessage {
  id: string;
  sender: 'agent' | 'user';
  text: string;
  time: string;
  card?: {
    title: string;
    items: string[];
    type: 'strategy' | 'content' | 'report' | 'task';
  };
}
```

### Routing Structure (from `src/App.tsx`)

| Route | Page | Auth Required | Layout |
|:--|:--|:--|:--|
| `/` | LandingPage | No | None (standalone) |
| `/login` | LoginPage | No | None |
| `/signup` | SignUpPage | No | None |
| `/onboarding` | OnboardingPage | Yes | None (standalone) |
| `/dashboard` | DashboardPage | Yes | AppLayout (sidebar + topbar) |
| `/team` | TeamPage | Yes | AppLayout |
| `/chat` | ChatPage | Yes | AppLayout |
| `/chat/:agentId` | ChatPage | Yes | AppLayout |
| `/calendar` | CalendarPage | Yes | AppLayout |
| `/social` | SocialPage | Yes | AppLayout |
| `/analytics` | AnalyticsPage | Yes | AppLayout |
| `/settings` | SettingsPage | Yes | AppLayout |

### Current Chat Behavior

1. User selects an agent from the left panel (or arrives via `/chat/:agentId`)
2. Agent sends an auto-greeting (from `getGreeting()` pool)
3. User types a message → sends it → "agent is thinking" typing indicator shows
4. After 1.2-2.7s random delay, a random response from `getResponse(agentId)` pool appears
5. Messages are stored in React state (not persisted — lost on refresh)

---

## 3. Design System Reference

### Colors

| Token | Hex | Tailwind Class | Usage |
|:--|:--|:--|:--|
| Navy 900 | `#0a0a1a` | `bg-navy-900` | Page backgrounds |
| Navy 800 | `#0f0f2a` | `bg-navy-800` | Card backgrounds (glass) |
| Navy 700 | `#14143a` | `bg-navy-700` | Hover states |
| Purple | `#8b5cf6` | `text-neon-purple` | Primary accent, active states, CTAs |
| Blue | `#06b6d4` | `text-neon-blue` | Secondary accent, links |
| Pink | `#ec4899` | `text-neon-pink` | Content Creator color |
| Green | `#10b981` | `text-neon-green` | Success, online status |
| Text Primary | `#f8fafc` | `text-slate-50` | Main text |
| Text Secondary | `#94a3b8` | `text-slate-400` | Descriptions, meta |
| Text Muted | `#64748b` | `text-slate-500` | Timestamps, hints |

### CSS Utilities (defined in `src/index.css`)

| Class | Effect |
|:--|:--|
| `.glass` | `bg: rgba(15,15,42,0.6)`, `backdrop-filter: blur(20px)`, border `rgba(139,92,246,0.15)` |
| `.glass-strong` | Same but 0.8 opacity, 30px blur, 0.2 border |
| `.gradient-text` | Purple→Blue gradient on text (background-clip) |
| `.gradient-border` | Pseudo-element gradient border effect |
| `.particle` | 4px floating animated dot |
| `.typing-dot` | Bouncing dot animation for "thinking" indicator |

### Typography

| Usage | Font | Tailwind |
|:--|:--|:--|
| Headings | Space Grotesk | `font-heading` |
| Body text | Inter | `font-body` (default) |

### Component Patterns

Every card/panel uses: `glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300`

Every input uses: `bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-purple/50 transition-all`

Every primary button uses: `bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl hover:shadow-glow-purple transition-all duration-300`

---

## 4. Phase 2: Core Intelligence Features

> **Goal**: Make agents feel alive — they talk to each other, produce visible work, and the founder can observe and approve everything.

---

### Feature 2.1: Team Meetings (Group Chat)

**What it is**: A chat room where multiple agents discuss topics together. The founder observes and can interject.

**Files to create/modify**:

#### [NEW] `src/pages/MeetingsPage.tsx`

```
Route: /meetings
Layout: AppLayout
```

**UI Specification**:
- Full-width glass card, no left sidebar
- Top bar: Meeting title (editable), list of participating agents (avatar row), "End Meeting" button
- Center: Chat-like message area, but multiple agents speak
- Each message shows the agent's emoji + name + color-coded left border
- Bottom: Founder's input bar + "Start New Meeting" button
- Right sidebar (collapsible): "Meeting Notes" — auto-generated summary of key decisions

**Data Structure**:
```typescript
// Add to src/data/meetings.ts
interface Meeting {
  id: string;
  title: string;
  participants: string[];  // agent IDs
  messages: MeetingMessage[];
  status: 'active' | 'ended';
  createdAt: string;
  summary?: string;       // auto-generated from messages
}

interface MeetingMessage {
  id: string;
  agentId: string;        // or 'founder'
  text: string;
  time: string;
  referencedAgent?: string; // if they're responding to another agent
}
```

**Simulated Behavior**:
1. User clicks "Start New Meeting" → modal asks: select topic + select agents (checkboxes)
2. Meeting starts → agents take turns responding (2-4 second intervals)
3. Each agent responds in character to the previous message OR the topic
4. Sequence: Chief speaks first (sets direction) → CMO adds marketing angle → Canvas suggests visuals → others chime in
5. After 6-8 auto-messages, agents pause and wait for founder input
6. Founder sends a message → triggers 2-3 more agent responses

**Mock response pools** — add to `src/data/meetingResponses.ts`:
```typescript
// Responses are keyed by topic category
const meetingResponses: Record<string, Record<string, string[]>> = {
  'marketing': {
    'chief': ["Let's align on our Q2 marketing priorities. Maven, what's the data showing?", ...],
    'maven': ["Based on our audience analysis, I see three high-opportunity channels...", ...],
    'canvas': ["I can create a visual campaign around that theme. Think bold colors and...", ...],
    // etc.
  },
  'product': { ... },
  'growth': { ... },
  'general': { ... },
};
```

**Routing**: Add `/meetings` to sidebar nav (between Chat and Calendar), add to `App.tsx` routes.

**Sidebar update**: In `Sidebar.tsx`, add between Chat and Calendar:
```tsx
{ to: '/meetings', icon: UsersRound, label: 'Meetings' }
```

---

### Feature 2.2: Agent Task Board (Kanban)

**What it is**: A visual kanban board showing what every agent is working on. Agents auto-generate tasks.

#### [NEW] `src/pages/TaskBoardPage.tsx`

```
Route: /tasks
Layout: AppLayout
```

**UI Specification**:
- 4 columns: `To Do` | `In Progress` | `In Review` | `Done`
- Each column is a vertical glass card with a colored header
- Task cards inside columns show: agent emoji, task title, priority badge (low/medium/high), due date tag
- Filter bar at top: filter by agent (multi-select), priority, status
- "Create Task" button opens a modal
- Cards are draggable between columns (use `framer-motion` layout animations)

**Data Structure**:
```typescript
// Add to src/data/tasks.ts
interface Task {
  id: string;
  title: string;
  description: string;
  agentId: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  dueDate?: string;
  tags: string[];
}

// Initial mock data — 15-20 tasks across all agents and statuses
const mockTasks: Task[] = [
  { id: '1', title: 'Draft Q2 marketing strategy', description: '...', agentId: 'maven', status: 'in-progress', priority: 'high', createdAt: '2026-04-19', dueDate: '2026-04-25', tags: ['marketing', 'strategy'] },
  { id: '2', title: 'Design Instagram post templates', description: '...', agentId: 'canvas', status: 'review', priority: 'medium', createdAt: '2026-04-18', tags: ['design', 'social'] },
  // ... 15+ more tasks distributed across agents and columns
];
```

**Interactions**:
- Clicking a task card opens a detail modal (shows full description, comments from the agent, status dropdown, priority selector)
- Drag-and-drop between columns updates status
- Filter dropdown highlights active filters with purple badges

**Routing**: Add `/tasks` to sidebar (with `CheckSquare` icon from lucide, between Team and Chat).

---

### Feature 2.3: Content Preview & Approval System

**What it is**: Canvas (and other agents) create content cards that show mockup social media posts. Founder can approve, reject, or request changes.

#### [NEW] `src/pages/ContentPage.tsx`

```
Route: /content
Layout: AppLayout
```

**UI Specification**:
- Tab bar at top: `All` | `Pending Review` | `Approved` | `Published` | `Rejected`
- Content items displayed as a grid of cards (3 columns on desktop, 1 on mobile)
- Each card shows:
  - Platform icon (Instagram/Twitter/LinkedIn) in top-left
  - Mock post preview: colored background card with text overlay simulating a social post
  - Caption text (truncated to 2 lines)
  - Agent who created it (emoji + name)
  - Status badge (Draft / Pending Review / Approved / Published)
  - 3 action buttons: ✅ Approve | ✏️ Edit | ❌ Reject
- Clicking "Approve" changes status with a green animation flash
- Clicking "Reject" shows a text input for rejection reason

**Data Structure**:
```typescript
// Add to src/data/content.ts
interface ContentPiece {
  id: string;
  title: string;
  caption: string;
  platform: 'instagram' | 'twitter' | 'linkedin' | 'tiktok';
  type: 'post' | 'carousel' | 'reel' | 'story' | 'thread' | 'article';
  status: 'draft' | 'pending' | 'approved' | 'published' | 'rejected';
  createdBy: string;       // agent ID
  createdAt: string;
  scheduledFor?: string;
  mockImageBg: string;     // CSS gradient or color for the mock preview
  hashtags: string[];
  rejectionReason?: string;
}

// 12-15 mock content pieces across platforms and statuses
```

**Routing**: Add `/content` to sidebar (with `FileImage` icon from lucide, between Calendar and Social).

---

### Feature 2.4: Agent Cross-Referencing in Chat

**What it is**: When chatting with one agent, they reference other agents and trigger actions. E.g., Maven says "Let me ask Canvas to create visuals" → Canvas gets a task.

#### [MODIFY] `src/data/mockResponses.ts`

Add cross-reference responses to each agent's response pool. Format:

```typescript
// New response type that references another agent
interface CrossRefResponse {
  text: string;
  referencedAgent: string;     // agent ID being referenced
  triggerAction?: 'create-task' | 'notify' | 'meeting';
  triggerDetails?: string;     // detail for the triggered action
}

// Example: Add to Maven's responses
{
  text: "Great idea! Let me coordinate with Canvas to create some visual mockups. I'll set up a task for the design work.",
  referencedAgent: 'canvas',
  triggerAction: 'create-task',
  triggerDetails: 'Create visual mockups for marketing campaign'
}
```

#### [MODIFY] `src/pages/ChatPage.tsx`

When a cross-reference response is selected:
1. Show the agent's message with the referenced agent's name highlighted in their color
2. After 1 second, show a small toast notification: "📋 Task created for Canvas: Create visual mockups..."
3. Add a notification to the AppContext notifications array

---

### Feature 2.5: Quick Actions on Dashboard

**What it is**: Pre-built action buttons on the dashboard that trigger common workflows.

#### [MODIFY] `src/pages/DashboardPage.tsx`

Add a new section between the stats and agent grid:

```tsx
// Quick Actions section
<div className="space-y-3">
  <h2 className="font-heading text-xl font-semibold">Quick Actions</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {quickActions.map(action => (
      <button className="glass rounded-xl p-4 text-left hover:bg-white/5 ...">
        <span className="text-2xl">{action.emoji}</span>
        <p className="text-sm font-medium mt-2">{action.title}</p>
        <p className="text-xs text-slate-500">{action.subtitle}</p>
      </button>
    ))}
  </div>
</div>
```

**Quick Action Items**:
```typescript
const quickActions = [
  { emoji: '📝', title: 'Generate 5 Posts', subtitle: 'Canvas creates social content', action: 'generate-posts' },
  { emoji: '📊', title: 'Weekly Strategy', subtitle: 'Chief reviews this week', action: 'weekly-strategy' },
  { emoji: '🎯', title: 'Competitor Analysis', subtitle: 'Maven researches rivals', action: 'competitor-analysis' },
  { emoji: '📋', title: 'Pitch Deck Draft', subtitle: 'Scout creates a pitch', action: 'pitch-deck' },
];
```

**Clicking a quick action**: Navigate to `/chat/{relevant-agent-id}` and auto-send a pre-written prompt. E.g., "Generate 5 Posts" → goes to `/chat/canvas` and auto-sends "Please create 5 Instagram post ideas for our brand."

---

### Feature 2.6: Notification System Enhancement

#### [MODIFY] `src/context/AppContext.tsx`

Add a function to push new notifications:

```typescript
addNotification: (agentId: string, agentName: string, message: string) => void;
```

Implementation:
```typescript
const addNotification = (agentId: string, agentName: string, message: string) => {
  const newNotif: Notification = {
    id: Date.now().toString(),
    agentId,
    agentName,
    message,
    time: 'Just now',
    read: false,
  };
  setNotifications(prev => [newNotif, ...prev]);
};
```

Add a red dot counter that auto-increments when agents "complete tasks" (use a `setInterval` to add random notifications every 60-90 seconds).

---

### Feature 2.7: Agent Profile Modal

**What it is**: Clicking an agent's name/avatar anywhere in the app opens a detailed profile modal.

#### [NEW] `src/components/modals/AgentProfileModal.tsx`

**UI Specification**:
- Full-screen overlay with centered glass modal (max-w-lg)
- Agent emoji/avatar large at top (64px)
- Name, title, status badge
- "Personality" section (their personality description)
- "Skills" grid with pill badges
- "Current Task" with progress indicator
- "Recent Activity" — last 5 things they did
- "Chat with [Name]" button → navigates to `/chat/{agentId}`
- Close button (X) in top-right

**Usage**: Import and render conditionally in any page. Pass `agentId` as prop. Triggered by clicking agent avatar anywhere.

---

### Feature 2.8: Brand Kit Generator (Onboarding Enhancement)

#### [MODIFY] `src/pages/OnboardingPage.tsx`

After Step 5 (Launch), add a Step 5.5: "Your Brand Identity" that auto-generates:

**UI**: Show a glass card with:
- Suggested brand colors (3-color palette) based on industry
- Suggested tagline (if not provided)
- Brand tone of voice: e.g., "Professional yet approachable"
- Target audience persona card

**Color Palette Logic** (simulated — no AI needed):
```typescript
const industryPalettes: Record<string, { primary: string; secondary: string; accent: string }> = {
  'tech': { primary: '#8b5cf6', secondary: '#06b6d4', accent: '#10b981' },
  'fashion': { primary: '#ec4899', secondary: '#f43f5e', accent: '#f59e0b' },
  'food': { primary: '#f97316', secondary: '#ef4444', accent: '#84cc16' },
  'health': { primary: '#10b981', secondary: '#06b6d4', accent: '#8b5cf6' },
  'finance': { primary: '#3b82f6', secondary: '#1e40af', accent: '#10b981' },
  // ... etc for all 12 industries
};
```

Store the brand kit in AppContext under `company.brandKit`.

---

### Feature 2.9: Activity Timeline

#### [NEW] `src/pages/ActivityPage.tsx`

```
Route: /activity
```

**UI Specification**:
- Vertical timeline layout (like GitHub activity)
- Each entry: timestamp | agent emoji + name | action description
- Filter bar at top: filter by agent, date range, action type
- Group entries by date ("Today", "Yesterday", "April 17", etc.)
- Optional: right panel showing details of selected activity

**Data Structure**:
```typescript
interface ActivityEntry {
  id: string;
  agentId: string;
  action: string;          // "Created Instagram post draft"
  type: 'content' | 'strategy' | 'task' | 'social' | 'meeting' | 'analysis';
  timestamp: string;
  details?: string;
  relatedId?: string;      // link to task, content piece, etc.
}
```

Generate 30-50 mock activity entries spanning the last 7 days.

**Note**: This can be a sub-page or combined into the Dashboard as a tab/section rather than a standalone page. Use judgment.

---

## 5. Phase 3: Content Engine & Integrations

> **Goal**: Agents produce real, visible deliverables. Content is generated, previewed, and can be published.

---

### Feature 3.1: Document Generation

#### [NEW] `src/pages/DocumentsPage.tsx`

```
Route: /documents
```

**Document Types**:
- Business Plan (by Chief + Ledger)
- Marketing Strategy (by Maven)
- Pitch Deck Outline (by Scout)
- Brand Guidelines (by Canvas)
- Financial Projections (by Ledger)
- Technical Architecture (by Forge)
- Content Calendar Plan (by Pulse)

**UI Specification**:
- Grid of document cards, each showing: icon, title, created by (agent), date, status (Draft/Final), word count
- "Generate New" button → modal with dropdown of document types
- Clicking a document opens a full-page reader view:
  - Glass card with formatted markdown-style content
  - Sections with headers, bullet points, tables
  - "Download PDF" button (simulated — just shows toast "PDF download coming in Phase 4")
  - "Send to Agent" button — forward to another agent for review

**Mock Content**: Pre-write 3-4 full documents (300-500 words each) as string constants in `src/data/documents.ts`.

---

### Feature 3.2: Social Media Post Composer

#### [NEW] `src/components/modals/PostComposerModal.tsx`

**A modal for creating/editing social media posts.

**UI Specification**:
- Left side: Text editor for caption
  - Character count with platform limits (Twitter: 280, Instagram: 2200, LinkedIn: 3000)
  - Hashtag suggestions (mock data)
  - Emoji picker button
- Right side: Preview panel showing how the post would look on the selected platform
  - Instagram: Square card with gradient background + text overlay
  - Twitter: Tweet-style card
  - LinkedIn: Professional post card
- Bottom bar: Platform selector (IG/X/LI/TikTok toggles), Schedule picker (date + time), Post/Schedule button

**Triggered from**: Content page "Create" button, Calendar "Create Content" button, or Chat (when agent says "I'll create a post").

---

### Feature 3.3: Enhanced Analytics with Platform Breakdown

#### [MODIFY] `src/pages/AnalyticsPage.tsx`

Add two new sections:

1. **Platform Breakdown** — 3 cards (Instagram, Twitter, LinkedIn) each showing:
   - Followers, Posts this month, Top post, Engagement rate
   - Mini sparkline chart (CSS-animated line using divs)

2. **Content Performance Heatmap** — A 7×4 grid (days × weeks) showing posting density
   - Each cell colored by number of posts (empty → light purple → dark purple)
   - Similar to GitHub contribution graph

---

### Feature 3.4: Agent Energy/Activity System

#### [MODIFY] `src/data/agents.ts`

Add to Agent interface:
```typescript
interface Agent {
  // ... existing fields
  energy: number;         // 0-100, decreases as they "work"
  tasksToday: number;     // auto-increments
  lastActive: string;     // timestamp
}
```

#### [MODIFY] Dashboard + Team pages

Show energy bar on each agent card:
```tsx
<div className="w-full h-1.5 bg-white/5 rounded-full">
  <div
    className="h-full rounded-full bg-gradient-to-r from-neon-green to-neon-blue"
    style={{ width: `${agent.energy}%` }}
  />
</div>
<span className="text-[10px] text-slate-500">{agent.energy}% energy</span>
```

Agent energy decreases slightly each time they "respond" in chat or "complete" a task. It slowly regenerates over time (simulated with setInterval).

---

### Feature 3.5: Founder Command Center (Enhanced Dashboard)

#### [MODIFY] `src/pages/DashboardPage.tsx`

Add a "Company Pulse" section showing:
- **Health Score**: Overall company health as a large circular progress ring (0-100), calculated from: content created, tasks completed, strategy updates
- **Active Workflows**: Horizontal scrollable cards showing in-progress workflows (e.g., "Instagram Campaign Q2 — 60% complete")
- **Decisions Needed**: Cards with amber border for items requiring founder approval (content pieces, strategy changes, budget requests)

---

## 6. Phase 4: Real AI & Autonomous Operation

> **Goal**: Connect real AI APIs, enable actual social media posting, and make agents truly autonomous. This phase requires API keys.

---

### Feature 4.1: Real AI Agent Responses

#### [NEW] `src/services/aiService.ts`

```typescript
interface AIServiceConfig {
  provider: 'openai' | 'anthropic' | 'gemini';
  apiKey: string;
  model: string;
}

async function getAgentResponse(
  agentId: string,
  userMessage: string,
  conversationHistory: MockMessage[],
  companyContext: Company
): Promise<string> {
  const agent = getAgentById(agentId);
  const systemPrompt = buildAgentSystemPrompt(agent, companyContext);

  // Call the selected AI API
  const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({
      systemPrompt,
      messages: conversationHistory,
      userMessage,
    }),
  });
  return response.json().then(r => r.text);
}
```

**System Prompts** (one per agent):
```typescript
function buildAgentSystemPrompt(agent: Agent, company: Company): string {
  return `You are ${agent.name}, the ${agent.title} of ${company.name}.

Company: ${company.name}
Industry: ${company.industry}
Description: ${company.description}
Target Audience: ${company.audience}

Your personality: ${agent.personality}
Your skills: ${agent.skills.join(', ')}

Rules:
- Stay in character as the ${agent.role} at all times
- Give specific, actionable advice related to your expertise
- Reference other team members by name when relevant (Chief, Maven, Canvas, Pulse, Ledger, Forge, Atlas, Scout)
- Keep responses concise (2-4 paragraphs max)
- Use occasional emojis matching your personality
- Always align advice with the company's mission and target audience
`;
}
```

**Backend**: Since this is a frontend-only app, you'll need one of:
- Option A: Call AI APIs directly from the browser (requires exposing API key — only for development)
- Option B: Add a minimal Express/Node server or use Vercel API routes
- Option C: Use Vercel AI SDK with Next.js (would require migrating from Vite — significant effort)

**Recommendation**: For now, use Option A with a `.env` file and Vite's `import.meta.env.VITE_OPENAI_KEY`. Add a warning that this is dev-only.

---

### Feature 4.2: AI Content Generation

#### [NEW] `src/services/contentService.ts`

Use DALL-E 3 API (or similar) to generate actual images:

```typescript
async function generatePostImage(prompt: string, platform: string): Promise<string> {
  // Returns a URL to the generated image
  const size = platform === 'instagram' ? '1024x1024' : '1792x1024';
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: `Social media post image for ${platform}: ${prompt}`,
      n: 1,
      size,
    }),
  });
  const data = await response.json();
  return data.data[0].url;
}
```

Integrate with Content Creator (Canvas) agent — when Canvas says "I'll create visuals", actually generate an image.

---

### Feature 4.3: Social Media API Integration

#### [NEW] `src/services/socialService.ts`

**Instagram** (Meta Graph API):
- Requires Meta Business Account + access token
- Post images via `/me/media` → `/me/media_publish`

**Twitter/X** (X API v2):
- Requires API key + bearer token
- Post via `POST /2/tweets`

**LinkedIn** (LinkedIn API):
- Requires organization access token
- Post via `/ugcPosts`

Each integration needs:
1. OAuth connection flow (redirect to platform → get token → store in state)
2. Post publishing function
3. Analytics fetching function

**For Phase 4 MVP**: Start with Twitter API v2 (simplest to integrate) and add others after.

---

### Feature 4.4: Persistent Storage (Supabase)

When ready to persist data beyond page refreshes:

#### [NEW] `src/services/supabase.ts`

Database schema:

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Companies
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  tagline TEXT,
  industry TEXT,
  description TEXT,
  audience TEXT,
  brand_kit JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chat Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  agent_id TEXT NOT NULL,
  sender TEXT NOT NULL, -- 'user' or agent_id
  text TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  agent_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'todo',
  priority TEXT DEFAULT 'medium',
  due_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Content
CREATE TABLE content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id),
  title TEXT NOT NULL,
  caption TEXT,
  platform TEXT,
  type TEXT,
  status TEXT DEFAULT 'draft',
  created_by TEXT, -- agent_id
  image_url TEXT,
  scheduled_for TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 7. Data Architecture

### State Management Evolution

| Phase | Approach | Details |
|:--|:--|:--|
| Phase 1 (current) | React Context | All state in `AppContext.tsx`, lost on refresh |
| Phase 2 | Context + localStorage | Persist company/chat to localStorage |
| Phase 3 | Context + Zustand | Migrate to Zustand for complex state (tasks, content, meetings) |
| Phase 4 | Zustand + Supabase | Full backend persistence, real-time subscriptions |

### localStorage Persistence (Phase 2 quick win)

#### [MODIFY] `src/context/AppContext.tsx`

Add load/save to localStorage:

```typescript
// On mount
useEffect(() => {
  const saved = localStorage.getItem('nezora-state');
  if (saved) {
    const state = JSON.parse(saved);
    setIsAuthenticated(state.isAuthenticated);
    setIsOnboarded(state.isOnboarded);
    setUser(state.user);
    setCompany(state.company);
  }
}, []);

// On state change
useEffect(() => {
  if (isAuthenticated) {
    localStorage.setItem('nezora-state', JSON.stringify({
      isAuthenticated, isOnboarded, user, company
    }));
  }
}, [isAuthenticated, isOnboarded, user, company]);
```

Also add localStorage for chat messages in `ChatPage.tsx`:
```typescript
// Save messages to localStorage on change
useEffect(() => {
  localStorage.setItem('nezora-messages', JSON.stringify(messages));
}, [messages]);

// Load on mount
const [messages, setMessages] = useState<Record<string, MockMessage[]>>(() => {
  const saved = localStorage.getItem('nezora-messages');
  return saved ? JSON.parse(saved) : {};
});
```

---

## 8. Testing & Verification

### For Each Feature

1. **Visual check**: Open in browser, verify styling matches design system
2. **Interaction check**: Click every button, fill every form, verify navigation
3. **State check**: Verify data flows correctly (e.g., onboarding data shows in settings)
4. **Responsive check**: Test at 1366px (desktop), 768px (tablet), 375px (mobile)
5. **Animation check**: Verify Framer Motion animations don't cause layout shifts

### Key User Flows to Always Test

| Flow | Steps |
|:--|:--|
| New user | Landing → Sign Up → Onboarding (all 5 steps) → Dashboard |
| Returning user | Login → Dashboard → check notifications → chat with agent |
| Content workflow | Dashboard → Quick Action → Chat → Agent creates content → Content page → Approve |
| Meeting flow | Meetings → Start meeting → Watch agents discuss → Interject → End meeting |
| Task management | Task Board → Create task → Drag between columns → Mark done |

### Build Verification

Run `npm run build` before deploying to catch TypeScript errors:
```bash
cd d:\websites\nezora
npm run build
```

Must complete with 0 errors. Warnings about unused imports are acceptable but should be cleaned up.

---

## Implementation Priority Order

> [!IMPORTANT]
> Build features in this exact order for minimum dependencies:

1. **localStorage persistence** (Feature 2.6 prerequisite, 30 min)
2. **Agent Profile Modal** (Feature 2.7, used everywhere, 1 hour)
3. **Task Board** (Feature 2.2, standalone page, 2-3 hours)
4. **Content Preview & Approval** (Feature 2.3, standalone page, 2-3 hours)
5. **Quick Actions on Dashboard** (Feature 2.5, small addition, 30 min)
6. **Team Meetings** (Feature 2.1, complex but high-impact, 3-4 hours)
7. **Cross-referencing in Chat** (Feature 2.4, modifier, 1-2 hours)
8. **Notification Enhancement** (Feature 2.6, modifier, 1 hour)
9. **Brand Kit Generator** (Feature 2.8, onboarding modifier, 1-2 hours)
10. **Activity Timeline** (Feature 2.9, standalone page, 2 hours)
11. **Documents Page** (Feature 3.1, standalone page, 3 hours)
12. **Post Composer Modal** (Feature 3.2, complex modal, 2-3 hours)
13. **Enhanced Analytics** (Feature 3.3, modifier, 2 hours)
14. **Agent Energy System** (Feature 3.4, modifier, 1 hour)
15. **Command Center Dashboard** (Feature 3.5, modifier, 2 hours)

Phase 4 features (4.1-4.4) require API keys and are separate workstreams.

---

## Environment Variables (for Phase 4)

Add to `d:\websites\nezora\.env`:
```
VITE_OPENAI_KEY=sk-...
VITE_ANTHROPIC_KEY=sk-ant-...
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

Add `.env` to `.gitignore`:
```
node_modules
.env
dist
```
