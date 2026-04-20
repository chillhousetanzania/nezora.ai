import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../ui/Badge';

/**
 * Agent List Sidebar Component
 * 
 * Sidebar displaying the list of available agents for chat.
 * 
 * Requirements: 3.5, 8.6
 */

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'busy' | 'offline' | 'idle';
  emoji: string;
}

export interface AgentListSidebarProps {
  /** Array of available agents */
  agents: Agent[];
  /** ID of the currently selected agent */
  selectedAgentId: string;
  /** Selection handler */
  onSelectAgent: (id: string) => void;
  /** Additional CSS classes */
  className?: string;
}

export const AgentListSidebar: React.FC<AgentListSidebarProps> = ({
  agents,
  selectedAgentId,
  onSelectAgent,
  className = '',
}) => {
  return (
    <aside className={`w-full md:w-[240px] flex-shrink-0 flex flex-col h-full border-r border-neutral-200/50 dark:border-neutral-700/50 bg-neutral-50/50 dark:bg-neutral-900/50 overflow-y-auto ${className}`}>
      <div className="p-4 border-b border-neutral-200/50 dark:border-neutral-700/50">
        <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          Your AI Team
        </h2>
      </div>
      
      <div className="flex flex-col p-2 gap-1">
        {agents.map((agent) => {
          const isSelected = agent.id === selectedAgentId;
          
          return (
            <button
              key={agent.id}
              onClick={() => onSelectAgent(agent.id)}
              className={`group flex items-center gap-3 w-full p-2 rounded-xl text-left transition-all duration-200 ease-out relative overflow-hidden ${
                isSelected 
                  ? 'bg-white dark:bg-neutral-800 shadow-soft-sm border border-neutral-200/50 dark:border-neutral-700/50' 
                  : 'hover:bg-white/60 dark:hover:bg-neutral-800/60 border border-transparent'
              }`}
            >
              {isSelected && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-primary-500" />
              )}
              
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 text-lg shadow-sm">
                {agent.emoji}
                {/* Status Indicator */}
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white dark:border-neutral-800 ${
                  agent.status === 'online' ? 'bg-success-500' :
                  agent.status === 'busy' ? 'bg-warning-500' :
                  agent.status === 'idle' ? 'bg-neutral-400' : 'bg-error-500'
                }`} />
              </div>
              
              <div className="flex flex-col min-w-0 flex-1">
                <span className={`text-sm font-medium truncate ${isSelected ? 'text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300'}`}>
                  {agent.name}
                </span>
                <span className="text-xs text-neutral-500 truncate">
                  {agent.role}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
