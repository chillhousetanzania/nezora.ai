import React from 'react';

/**
 * Skeleton Component
 * 
 * A pulsing placeholder used while content is loading.
 * Helps prevent layout shifts and improves perceived performance.
 * 
 * Requirements: 15.1, 15.2, 15.5
 */

export interface SkeletonProps {
  /** Optional fixed width */
  width?: string | number;
  /** Optional fixed height */
  height?: string | number;
  /** Shape of the skeleton */
  shape?: 'box' | 'circle' | 'text';
  /** Additional CSS classes */
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  shape = 'box',
  className = '',
}) => {
  const shapeClasses = {
    box: 'rounded-xl',
    circle: 'rounded-full',
    text: 'rounded-lg max-w-full',
  };

  const defaultDimensions = {
    text: { height: '1.2em' },
    circle: { width: '40px', height: '40px' },
    box: { width: '100%', height: '100px' },
  };

  const currentShape = shapeClasses[shape];
  const defaults = defaultDimensions[shape];

  return (
    <div
      className={`animate-pulse bg-neutral-200 dark:bg-neutral-700/80 ${currentShape} ${className}`}
      style={{
        width: width || defaults.width || undefined,
        height: height || defaults.height || undefined,
      }}
      aria-hidden="true"
    />
  );
};

/**
 * Common Skeleton Patterns
 */

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-soft-sm border border-neutral-200/10 dark:border-neutral-700/10 ${className}`}>
    <div className="flex items-center gap-4 mb-4">
      <Skeleton shape="circle" width={48} height={48} />
      <div className="space-y-2 flex-1">
        <Skeleton shape="text" width="40%" />
        <Skeleton shape="text" width="20%" />
      </div>
    </div>
    <div className="space-y-3">
      <Skeleton shape="text" />
      <Skeleton shape="text" />
      <Skeleton shape="text" width="80%" />
    </div>
  </div>
);
