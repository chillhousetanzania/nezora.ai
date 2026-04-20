import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

/**
 * AI Insight Card Component
 * 
 * Displays an AI-generated insight with category and priority badges.
 * Uses glass variant and hover animations.
 * 
 * Requirements: 2.1, 2.2, 2.5, 8.1
 */

export interface AIInsightCardProps {
  /** Title of the insight */
  title: string;
  /** Description text */
  description: string;
  /** Icon to display */
  icon: React.ReactNode;
  /** Category text */
  category: string;
  /** Priority level */
  priority: 'low' | 'medium' | 'high';
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const AIInsightCard: React.FC<AIInsightCardProps> = ({
  title,
  description,
  icon,
  category,
  priority,
  className = '',
  onClick,
}) => {
  // Map priority to badge variant
  const priorityVariant = {
    low: 'default' as const,
    medium: 'warning' as const,
    high: 'error' as const,
  }[priority];

  return (
    <Card
      variant="glass"
      padding="lg"
      hoverable
      className={`flex flex-col gap-4 ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Icon in rounded-xl container with 10% opacity background */}
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
          {icon}
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 justify-end">
          <Badge variant="default" size="sm">
            {category}
          </Badge>
          <Badge variant={priorityVariant} size="sm">
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </Badge>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* Title (lg, semibold) */}
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
        
        {/* Description (relaxed leading) */}
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Card>
  );
};
