import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

/**
 * Action Card Component
 * 
 * Used within agent messages to present actionable tasks or lists to the user.
 * 
 * Requirements: 3.3
 */

export interface ActionCardProps {
  /** The title of the action card */
  title: string;
  /** List of items or subtasks */
  items: string[];
  /** Approve button click handler */
  onApprove?: () => void;
  /** View Details button click handler */
  onViewDetails?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  items,
  onApprove,
  onViewDetails,
  className = '',
}) => {
  return (
    <Card variant="default" padding="md" className={`max-w-md w-full my-2 bg-white dark:bg-neutral-800 ${className}`}>
      <div className="flex flex-col gap-3">
        {/* Title */}
        <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 border-b border-neutral-100 dark:border-neutral-700 pb-2">
          {title}
        </h4>
        
        {/* Item List with checkmarks */}
        {items && items.length > 0 && (
          <ul className="flex flex-col gap-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1 mt-1">
          <Button 
            variant="primary" 
            size="sm" 
            className="flex-1"
            onClick={onApprove}
          >
            Approve
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="flex-1"
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};
