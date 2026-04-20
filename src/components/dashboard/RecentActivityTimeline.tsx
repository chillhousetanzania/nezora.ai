import React from 'react';
import { Card } from '../ui/Card';

/**
 * Recent Activity Timeline Component
 * 
 * Displays a vertical timeline of recent agent activities.
 * Uses 24px gaps and timestamps in a relative format.
 * 
 * Requirements: 2.7, 12.2
 */

export interface ActivityItem {
  id: string;
  /** Name of the agent or user */
  author: string;
  /** Avatar initial or icon */
  avatar?: React.ReactNode;
  /** Conversational description of the action */
  action: string;
  /** Target of the action */
  target?: string;
  /** Relative timestamp (e.g., "2 mins ago") */
  timestamp: string;
}

export interface RecentActivityTimelineProps {
  /** List of activity events */
  activities: ActivityItem[];
  /** Additional CSS classes */
  className?: string;
}

export const RecentActivityTimeline: React.FC<RecentActivityTimelineProps> = ({
  activities,
  className = '',
}) => {
  if (!activities || activities.length === 0) {
    return null;
  }

  return (
    <Card variant="default" padding="lg" className={className}>
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
        Recent Activity
      </h2>
      
      <div className="relative border-l-2 border-neutral-100 dark:border-neutral-800 ml-4 pb-2">
        <ul className="flex flex-col gap-6">
          {activities.map((activity, index) => (
            <li key={activity.id} className="relative pl-6">
              {/* Timeline marker / Avatar */}
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 border-4 border-white dark:border-neutral-800 flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm font-bold shadow-sm">
                {activity.avatar ? activity.avatar : activity.author.charAt(0)}
              </div>
              
              <div className="flex flex-col pt-1">
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    {activity.author}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {activity.action}
                  </span>
                  {activity.target && (
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {activity.target}
                    </span>
                  )}
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                  {activity.timestamp}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
