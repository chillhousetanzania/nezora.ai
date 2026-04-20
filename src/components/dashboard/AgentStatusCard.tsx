import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

/**
 * Agent Status Card Component
 * 
 * Displays the current status of an AI agent, including their avatar, role,
 * current task, and energy level.
 * 
 * Requirements: 2.3, 2.4, 8.1
 */

export interface AgentStatusCardProps {
  /** Agent's name */
  name: string;
  /** Agent's role or designation */
  role: string;
  /** Agent's current status */
  status: 'active' | 'idle' | 'offline' | 'busy';
  /** Description of the current task */
  currentTask: string;
  /** Energy level from 0 to 100 */
  energyLevel: number;
  /** Agent's avatar image URL or icon/text */
  avatar?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const AgentStatusCard: React.FC<AgentStatusCardProps> = ({
  name,
  role,
  status,
  currentTask,
  energyLevel,
  avatar,
  className = '',
  onClick,
}) => {
  // Normalize energy level
  const normalizedEnergy = Math.min(Math.max(energyLevel, 0), 100);

  // Map status to badge variant
  const statusVariant = {
    active: 'success' as const,
    busy: 'warning' as const,
    idle: 'default' as const,
    offline: 'error' as const,
  }[status];

  // Energy bar color based on level
  let energyColorClass = 'bg-primary-500 dark:bg-primary-500';
  if (normalizedEnergy < 20) {
    energyColorClass = 'bg-error-500 dark:bg-error-500';
  } else if (normalizedEnergy < 50) {
    energyColorClass = 'bg-warning-500 dark:bg-warning-500';
  } else if (normalizedEnergy >= 80) {
    energyColorClass = 'bg-success-500 dark:bg-success-500';
  }

  return (
    <Card
      variant="default"
      padding="lg"
      hoverable
      className={`flex flex-col gap-6 ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        {/* Agent Avatar (64px, rounded-2xl, gradient background) */}
        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800/40 dark:to-primary-900/40 text-primary-700 dark:text-primary-300 overflow-hidden shadow-soft-sm">
          {avatar ? avatar : <span className="text-xl font-bold">{name.charAt(0)}</span>}
        </div>

        {/* Agent Info */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 truncate">
              {name}
            </h3>
            <Badge variant={statusVariant} size="sm" className="flex-shrink-0">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 capitalize">
            {role}
          </p>
        </div>
      </div>

      {/* Current Task Description */}
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
          Current Task
        </span>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">
          {currentTask || 'No active task at the moment.'}
        </p>
      </div>

      {/* Energy Progress Bar */}
      <div className="flex flex-col gap-1.5 mt-auto">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-neutral-500 dark:text-neutral-400">Energy Level</span>
          <span className="text-neutral-700 dark:text-neutral-300">{Math.round(normalizedEnergy)}%</span>
        </div>
        <div className="w-full h-2 rounded-full border border-neutral-200/50 dark:border-neutral-700/50 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ease-out ${energyColorClass}`}
            style={{ width: `${normalizedEnergy}%` }}
          />
        </div>
      </div>
    </Card>
  );
};
