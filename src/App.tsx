import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Existing pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AgentWorkspace from './pages/AgentWorkspace';
import ContentGeneration from './pages/ContentGeneration';
import Analytics from './pages/Analytics';
import StartupProfile from './pages/StartupProfile';

// Phase 3 — Internal Workspaces (MainLayout)
import AiCommandCenter from './pages/AiCommandCenter';
import ApprovalsQueue from './pages/ApprovalsQueue';
import ContentCalendar from './pages/ContentCalendar';
import MarketingCampaigns from './pages/MarketingCampaigns';
import SalesWorkspace from './pages/SalesWorkspace';

// Phase 3 — Standalone External Pages
import LandingPagePrimary from './pages/LandingPagePrimary';
import LandingPageSecondary from './pages/LandingPageSecondary';
import LoginAlternative from './pages/LoginAlternative';

// Phase 3 — Onboarding Flow (Standalone, no MainLayout)
import OnboardingWelcome from './pages/onboarding/Welcome';
import OnboardingRole from './pages/onboarding/Role';
import OnboardingStartupName from './pages/onboarding/StartupName';
import OnboardingIndustry from './pages/onboarding/Industry';
import OnboardingTargetAudience from './pages/onboarding/TargetAudience';
import OnboardingBrandVoice from './pages/onboarding/BrandVoice';
import OnboardingGoals from './pages/onboarding/Goals';
import OnboardingFinish from './pages/onboarding/Finish';

function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone Auth & Landing */}
        <Route path="/login" element={<Login />} />
        <Route path="/login-alt" element={<LoginAlternative />} />
        <Route path="/landing" element={<LandingPagePrimary />} />
        <Route path="/landing-alt" element={<LandingPageSecondary />} />

        {/* Onboarding Flow (no nav/shell) */}
        <Route path="/onboarding/welcome" element={<OnboardingWelcome />} />
        <Route path="/onboarding/role" element={<OnboardingRole />} />
        <Route path="/onboarding/startup-name" element={<OnboardingStartupName />} />
        <Route path="/onboarding/industry" element={<OnboardingIndustry />} />
        <Route path="/onboarding/audience" element={<OnboardingTargetAudience />} />
        <Route path="/onboarding/brand-voice" element={<OnboardingBrandVoice />} />
        <Route path="/onboarding/goals" element={<OnboardingGoals />} />
        <Route path="/onboarding/finish" element={<OnboardingFinish />} />
        <Route path="/onboarding" element={<Navigate to="/onboarding/welcome" replace />} />

        {/* Main App Shell (with sidebar/nav) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<AgentWorkspace />} />
          <Route path="/content" element={<ContentGeneration />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<StartupProfile />} />

          {/* Phase 3 Internal Workspaces */}
          <Route path="/command-center" element={<AiCommandCenter />} />
          <Route path="/approvals" element={<ApprovalsQueue />} />
          <Route path="/calendar" element={<ContentCalendar />} />
          <Route path="/campaigns" element={<MarketingCampaigns />} />
          <Route path="/sales" element={<SalesWorkspace />} />

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

