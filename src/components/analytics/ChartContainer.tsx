import React from 'react';
import { Calendar } from 'lucide-react';
import { Card } from '../ui/Card';

/**
 * Chart Container Component
 * 
 * A generalized wrapper for displaying data visualization charts.
 * Features a header with title, optional subtitle, and an integrated date range picker placeholder.
 * 
 * Requirements: 7.2
 */

export interface ChartContainerProps {
  /** Title of the chart */
  title: string;
  /** Optional descriptive subtitle */
  subtitle?: string;
  /** Selected date range string */
  dateRangeStr?: string;
  /** Actual chart components (e.g. from Recharts) */
  children: React.ReactNode;
  /** Action right slot (e.g. more filters) */
  actionNode?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  subtitle,
  dateRangeStr = 'Last 30 Days',
  children,
  actionNode,
  className = '',
}) => {
  return (
    <Card variant="default" padding="lg" className={`flex flex-col h-full ${className}`}>
      
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">{title}</h3>
          {subtitle && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{subtitle}</p>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          {/* Date Range Picker Placeholder */}
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-xl transition-colors">
            <Calendar className="w-4 h-4 text-neutral-400" />
            {dateRangeStr}
          </button>
          
          {/* External Action Component */}
          {actionNode}
        </div>
      </div>
      
      {/* Chart Content Area */}
      <div className="flex-1 w-full min-h-[300px] relative">
        {children}
      </div>
      
    </Card>
  );
};
