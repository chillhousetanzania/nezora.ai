import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from './context/AppContext';
import AppLayout from './components/layout/AppLayout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import TeamPage from './pages/TeamPage';
import ChatPage from './pages/ChatPage';
import CalendarPage from './pages/CalendarPage';
import SocialPage from './pages/SocialPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import HQPage from './pages/HQPage';
import OrgPage from './pages/OrgPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useApp();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/onboarding" element={
        <ProtectedRoute>
          <OnboardingPage />
        </ProtectedRoute>
      } />

      {/* Protected app routes */}
      <Route element={
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      }>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:agentId" element={<ChatPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* Nezora product pages */}
      <Route path="/hq" element={<HQPage />} />
      <Route path="/org" element={<OrgPage />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
