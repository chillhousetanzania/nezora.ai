# 🏢 Nezora

**Walk in with an idea. Walk out with a team.**

Nezora is an AI-powered virtual company builder. Register your startup idea and instantly get a full AI team — CEO, CMO, CTO, Content Creator, and more — all working together to bring your vision to life.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173/` (or next available port).

## 🤖 The AI Team

| Agent | Role | Specialty |
|:--|:--|:--|
| 🎯 Chief | CEO | Strategic direction, team coordination |
| 📊 Maven | CMO | Marketing strategy, campaigns |
| 🎨 Canvas | Content Creator | Visual content, copywriting |
| 📱 Pulse | Social Media | Posting, engagement, analytics |
| 💰 Ledger | CFO | Financial planning, budgets |
| 💻 Forge | CTO | Tech architecture, product roadmap |
| 📋 Atlas | Operations | Workflows, task management |
| 🤝 Scout | Sales | Sales strategy, pitch decks |

## 📱 Features (Phase 1)

- **Landing Page** — Animated building metaphor with agent grid
- **Onboarding Wizard** — 5-step company setup with team assembly animation
- **Dashboard** — Stats, agent cards, activity feed
- **AI Chat** — 1-on-1 conversations with simulated agent responses
- **Content Calendar** — Interactive monthly calendar with mock posts
- **Social Media Hub** — Connect/disconnect platforms, upcoming posts
- **Analytics** — Bar charts, engagement metrics, agent performance
- **Settings** — Profile, company, notifications, appearance, billing

## 🛠 Tech Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** — Custom dark glassmorphism design system
- **Framer Motion** — Smooth animations and transitions
- **React Router v7** — Full routing with protected routes
- **Lucide React** — Premium icon library

## 📁 Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Routes
├── index.css             # Global styles & design tokens
├── context/
│   └── AppContext.tsx     # Global state (auth, company, notifications)
├── data/
│   ├── agents.ts         # 8 AI agent definitions
│   └── mockResponses.ts  # Simulated chat responses
├── components/
│   └── layout/
│       ├── AppLayout.tsx  # Sidebar + TopBar wrapper
│       ├── Sidebar.tsx    # Collapsible navigation
│       └── TopBar.tsx     # Search, notifications, profile
└── pages/
    ├── LandingPage.tsx
    ├── LoginPage.tsx
    ├── SignUpPage.tsx
    ├── OnboardingPage.tsx
    ├── DashboardPage.tsx
    ├── TeamPage.tsx
    ├── ChatPage.tsx
    ├── CalendarPage.tsx
    ├── SocialPage.tsx
    ├── AnalyticsPage.tsx
    └── SettingsPage.tsx
```

## 🗺 Roadmap

See [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) for the complete roadmap.

- **Phase 1** ✅ — UI prototype with simulated agents
- **Phase 2** — Team meetings, task board, content approval, cross-agent references
- **Phase 3** — Document generation, post composer, enhanced analytics
- **Phase 4** — Real AI APIs (OpenAI/Claude), social media integration, database persistence

## 📄 License

Private — All rights reserved.
