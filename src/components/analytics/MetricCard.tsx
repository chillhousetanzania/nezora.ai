import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card } from '../ui/Card';

/**
 * Metric Card Component
 * 
 * Displays a key performance indicator with its value and a trend analysis.
 * Features customizable icons and responsive layout.
 * 
 * Requirements: 7.1, 7.3
 */

export interface MetricCardProps {
  /** Title of the metric */
  title: string;
  /** Current value to display */
  value: string;
  /** Percentage change (positive or negative) */
  trendValue: number;
  /** Whether a larger number is a "good" thing */
  trendIsFavorable?: boolean;
  /** Optional icon to display next to the title */
  icon?: React.ReactNode;
  /** Simple array of numbers for a mock sparkline */
  sparklineData?: number[];
  /** Optional CSS classes */
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  trendValue,
  trendIsFavorable = true,
  icon,
  sparklineData,
  className = '',
}) => {
  const isPositive = trendValue >= 0;
  
  // Determine if the trend is "good" or "bad" based on whether it's favorable
  const isTrendGood = isPositive === trendIsFavorable;
  const trendColorClass = isTrendGood 
    ? 'text-success-600 dark:text-success-500 bg-success-50 dark:bg-success-500/10' 
    : 'text-error-600 dark:text-error-500 bg-error-50 dark:bg-error-500/10';

  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <Card variant="default" padding="md" hoverable className={`flex flex-col ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {title}
        </h3>
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between mt-1">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {value}
          </span>
          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium w-fit ${trendColorClass}`}>
            <TrendIcon className="w-3 h-3" />
            <span>{Math.abs(trendValue)}%</span>
            <span className="text-neutral-500 dark:text-neutral-400 font-normal ml-1 bg-transparent">vs last month</span>
          </div>
        </div>

        {/* Mock Sparkline (SVG) */}
        {sparklineData && sparklineData.length > 0 && (
          <div className="w-16 h-10 mb-1">
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
              <path
                d={generateSparklinePath(sparklineData, 100, 40)}
                fill="none"
                stroke={isTrendGood ? '#10B981' : '#EF4444'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-sm"
              />
            </svg>
          </div>
        )}
      </div>
    </Card>
  );
};

// Helper function to generate an SVG path for a sparkline
function generateSparklinePath(data: number[], width: number, height: number): string {
  if (!data || data.length === 0) return '';
  
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 2; // Keep line from touching edges
  
  return data.map((val, i) => {
    const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
    const y = height - padding - ((val - min) / range) * (height - padding * 2);
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
}
