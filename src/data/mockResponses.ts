// Simulated agent responses - keyed by agent ID
// Each agent has a pool of responses they cycle through

export interface MockMessage {
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

const greetings: Record<string, string[]> = {
  chief: [
    "Welcome back! I've been reviewing our strategic priorities. Ready to discuss our next moves?",
    "Good to see you. I've prepared an overview of where we stand and what needs your attention.",
    "The team has been busy. Let me give you a quick status update on all departments.",
  ],
  maven: [
    "Hey! I've been diving deep into market trends. Got some exciting campaign ideas to share!",
    "Great timing! I just finished analyzing our target audience demographics. Want to see what I found?",
    "I've been brainstorming with Canvas about our next content push. We've got some fire ideas 🔥",
  ],
  canvas: [
    "Hi there! 🎨 I've been working on some fresh visual concepts for our brand. Ready to take a look?",
    "Perfect timing! I just finished 3 new post designs. Want me to walk you through them?",
    "I've been experimenting with our color palette and typography. The results are looking premium!",
  ],
  pulse: [
    "Hey! 📱 Our engagement metrics are looking interesting. Let me break down what's trending.",
    "Just finished setting up this week's content schedule. We're covering all platforms!",
    "Good news — I've identified the optimal posting times for our target audience. Game changer!",
  ],
  ledger: [
    "Hello! I've updated our financial projections. The numbers are telling an interesting story.",
    "I've been crunching the numbers on our marketing budget allocation. Want to review?",
    "Our burn rate analysis is complete. I have some recommendations for optimizing spend.",
  ],
  forge: [
    "Hey! 💻 I've been evaluating tech solutions for our product roadmap. Exciting possibilities ahead.",
    "I've drafted an architecture plan for our MVP. Want to discuss the technical direction?",
    "Just finished a competitive tech analysis. Found some interesting patterns we can leverage.",
  ],
  atlas: [
    "Hi! I've mapped out our operational workflows. Found 3 areas we can streamline immediately.",
    "I've been organizing our task pipeline. Everything is now tracked and prioritized.",
    "Good timing — I just finished setting up our project management framework. We're organized!",
  ],
  scout: [
    "Hey there! 🤝 I've identified 5 potential partnership opportunities. Want to hear them out?",
    "Great news — I've drafted a pitch deck outline based on our value proposition. Ready for your review!",
    "I've been mapping out our sales funnel. Found some key touchpoints we can optimize.",
  ],
};

const responses: Record<string, string[]> = {
  chief: [
    "That's a great strategic direction. Let me coordinate with the team to make it happen.",
    "I'll have Maven look into the market implications and Forge assess the technical feasibility.",
    "Based on our current priorities, I'd recommend we focus on this in our next sprint. I'll set up a team meeting.",
    "Interesting perspective. Let me think about how this aligns with our 90-day goals and get back to you with a plan.",
    "I've flagged this as high priority. Atlas is already setting up the workflow for execution.",
  ],
  maven: [
    "Love that idea! I can see a whole campaign building around this concept. Let me sketch out a strategy.",
    "From a marketing perspective, this hits all the right notes. Our target audience will resonate with this.",
    "I'll work with Canvas to create some visual mockups. We could have content ready by end of week!",
    "The data supports this approach. Our competitors aren't doing this, which gives us a real edge. 📈",
    "Let me run some A/B test concepts. I'll have Pulse schedule some test posts to gauge audience reaction.",
  ],
  canvas: [
    "Oh I love this direction! Already seeing the visual treatment in my head. Give me a few hours. 🎨",
    "I'll create 3 different visual concepts and we can pick the winner. Color palette is going to be 🔥",
    "Great brief! I'll start with mood boards and then move to final designs. This is going to look premium.",
    "I can have the first drafts ready for review today. Want me to also create Stories and Reels formats?",
    "This aligns perfectly with our brand voice. Let me create matching content for all platforms.",
  ],
  pulse: [
    "I'll schedule this across all our channels with optimized posting times. Instagram peak is 6-8 PM for us.",
    "Great content! I'll A/B test different captions. Our audience responds best to question-style hooks. 📱",
    "This should perform well! I'll monitor engagement in real-time and adjust our strategy accordingly.",
    "I'll also create a Stories sequence to build anticipation. Cross-platform distribution will maximize reach.",
    "Engagement patterns suggest this topic is trending. Perfect timing! Let's ride this wave. 🌊",
  ],
  ledger: [
    "I've run the numbers — this is feasible within our current budget. Here's the cost breakdown.",
    "From a financial perspective, this project has a projected ROI of 3.2x over 6 months. Green light from me.",
    "I'd recommend phasing the investment to manage cash flow. Quarter 1: $X, Quarter 2: more if metrics hit.",
    "Our runway supports this initiative. I've updated the financial model to reflect these new projections.",
    "Smart allocation. This keeps us within budget while leaving a 15% buffer for opportunities. 💰",
  ],
  forge: [
    "Technically, this is very doable. I'd recommend a React + Node.js stack for the fastest time-to-market.",
    "I can architect this in a modular way so we can iterate quickly. MVP timeline: 4-6 weeks.",
    "Good thinking. The API integrations are straightforward. I'll draft the technical specification.",
    "From a scalability standpoint, this approach handles 10x growth without major refactoring. 💻",
    "I'll set up the development environment and CI/CD pipeline. We can start shipping features by next week.",
  ],
  atlas: [
    "I'll set up the task board and assign responsibilities to each team member. Clear deadlines for everyone.",
    "Workflow is mapped! Here's the critical path: [Design → Content → Review → Publish]. 3-day cycle.",
    "I've created checkpoints at each stage to ensure quality. Nothing goes out without proper review. 📋",
    "Resource allocation is optimized. Each team member has clear deliverables and timelines.",
    "Process improvement opportunity identified! We can cut turnaround time by 40% with this new workflow.",
  ],
  scout: [
    "I see strong market potential here. Let me draft an outreach strategy for our top 20 prospects.",
    "This messaging will resonate. I'll create a tailored pitch deck and sales one-pager for each segment.",
    "Partnership opportunity alert! I've found 3 complementary companies that could amplify our reach. 🤝",
    "The value proposition is crystal clear. Conversion rate should be strong with this positioning.",
    "I'll start warm outreach this week. Our unique angle gives us a real conversation starter.",
  ],
};

export const getGreeting = (agentId: string): string => {
  const pool = greetings[agentId] || greetings.chief;
  return pool[Math.floor(Math.random() * pool.length)];
};

export const getResponse = (agentId: string): string => {
  const pool = responses[agentId] || responses.chief;
  return pool[Math.floor(Math.random() * pool.length)];
};

export const getInitialMessages = (agentId: string): MockMessage[] => {
  return [
    {
      id: '1',
      sender: 'agent',
      text: getGreeting(agentId),
      time: 'Just now',
    },
  ];
};
