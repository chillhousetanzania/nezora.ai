import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Company {
  name: string;
  tagline: string;
  industry: string;
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
  login: (name: string, email: string) => void;
  logout: () => void;
  completeOnboarding: () => void;
  updateCompany: (updates: Partial<Company>) => void;
  markNotificationRead: (id: string) => void;
}

const defaultCompany: Company = {
  name: '',
  tagline: '',
  industry: '',
  description: '',
  mission: '',
  problem: '',
  audience: '',
  audienceAge: '',
  audienceLocation: '',
};

const mockNotifications: Notification[] = [
  { id: '1', agentId: 'chief', agentName: 'Chief', message: 'Strategic plan updated — needs your review', time: '5m ago', read: false },
  { id: '2', agentId: 'maven', agentName: 'Maven', message: 'New campaign concept ready for approval', time: '12m ago', read: false },
  { id: '3', agentId: 'canvas', agentName: 'Canvas', message: '3 Instagram post designs completed', time: '30m ago', read: false },
  { id: '4', agentId: 'pulse', agentName: 'Pulse', message: 'Weekly social analytics report is ready', time: '1h ago', read: true },
  { id: '5', agentId: 'forge', agentName: 'Forge', message: 'MVP architecture draft completed', time: '2h ago', read: true },
];

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [company, setCompany] = useState<Company>(defaultCompany);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const login = (name: string, email: string) => {
    setIsAuthenticated(true);
    setUser({ name, email });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsOnboarded(false);
    setUser(null);
    setCompany(defaultCompany);
  };

  const completeOnboarding = () => {
    setIsOnboarded(true);
  };

  const updateCompany = (updates: Partial<Company>) => {
    setCompany(prev => ({ ...prev, ...updates }));
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <AppContext.Provider value={{
      isAuthenticated,
      isOnboarded,
      user,
      company,
      notifications,
      login,
      logout,
      completeOnboarding,
      updateCompany,
      markNotificationRead,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppState => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
