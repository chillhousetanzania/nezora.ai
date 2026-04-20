import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

/**
 * Decisions Needed Section Component
 * 
 * Displays a horizontal scrollable list of pending decisions.
 * High urgency items have an amber accent border.
 * 
 * Requirements: 2.4, 12.2
 */

export interface Decision {
  id: string;
  title: string;
  description: string;
  urgency: 'low' | 'medium' | 'high';
  timestamp: string;
  source: string;
}

export interface DecisionsNeededSectionProps {
  /** List of decisions to display */
  decisions: Decision[];
  /** Handler for approve action */
  onApprove?: (id: string) => void;
  /** Handler for review action */
  onReview?: (id: string) => void;
  /** Handler for reject action */
  onReject?: (id: string) => void;
  /** Additional CSS classes */
  className?: string;
}

export const DecisionsNeededSection: React.FC<DecisionsNeededSectionProps> = ({
  decisions,
  onApprove,
  onReview,
  onReject,
  className = '',
}) => {
  if (!decisions || decisions.length === 0) {
    return null;
  }

  return (
    <section className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
          Decisions Needed
        </h2>
        <Badge variant="warning" size="md">
          {decisions.length} Pending
        </Badge>
      </div>

      {/* Horizontal scrollable card container with 24px (gap-6) gaps */}
      <div className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory hide-scrollbar">
        {decisions.map((decision) => (
          <Card
            key={decision.id}
            variant="default"
            padding="md"
            className={`flex-shrink-0 w-80 snap-start flex flex-col gap-4 ${
              decision.urgency === 'high' ? 'border-warning-400 dark:border-warning-500/50' : ''
            }`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {decision.source}
                </span>
                <span className="text-xs text-neutral-400">
                  {decision.timestamp}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 line-clamp-1">
                {decision.title}
              </h3>
            </div>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 min-h-[2.5rem]">
              {decision.description}
            </p>

            {/* CTAs */}
            <div className="flex gap-2 mt-auto pt-2">
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() => onApprove?.(decision.id)}
              >
                Approve
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="flex-1"
                onClick={() => onReview?.(decision.id)}
              >
                Review
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onReject?.(decision.id)}
                className="flex-none px-3"
                aria-label="Reject"
              >
                <span className="block text-center">&times;</span>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
