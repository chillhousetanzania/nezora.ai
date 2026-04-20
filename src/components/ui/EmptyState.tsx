import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Button, ButtonProps } from './Button';

/**
 * Empty State Component
 * 
 * Displays a friendly message and a call-to-action when there is no data to show.
 * 
 * Requirements: 15.3, 15.4, 15.5
 */

export interface EmptyStateProps {
  /** Icon to display above the text */
  icon: LucideIcon;
  /** Primary heading */
  title: string;
  /** Explanatory description */
  description: string;
  /** Primary configuration for the Action button */
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    variant?: ButtonProps['variant'];
  };
  /** Additional CSS classes */
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  action,
  className = '',
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col items-center justify-center p-8 md:p-12 text-center border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl bg-neutral-50/50 dark:bg-neutral-900/50 ${className}`}
    >
      <div className="w-16 h-16 mb-5 rounded-2xl bg-white dark:bg-neutral-800 shadow-soft-sm flex items-center justify-center text-primary-500">
        <Icon className="w-8 h-8 opacity-80" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mb-6 leading-relaxed">
        {description}
      </p>

      {action && (
        <Button 
          variant={action.variant || 'primary'} 
          size="md" 
          onClick={action.onClick}
          icon={action.icon}
          iconPosition="left"
        >
          {action.label}
        </Button>
      )}
    </motion.div>
  );
};
