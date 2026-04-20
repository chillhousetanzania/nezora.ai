import React, { useEffect, useState } from 'react';

/**
 * Health Score Ring Component
 * 
 * Displays a circular progress indicator for a health score (0-100).
 * Features a gradient stroke and smooth transitions.
 * 
 * Requirements: 2.1, 2.2, 8.3, 8.6
 */

export interface HealthScoreRingProps {
  /** The health score from 0 to 100 */
  score: number;
  /** Optional label to display alongside or strictly for accessibility */
  label?: string;
  /** Additional CSS classes */
  className?: string;
  /** Size of the ring in pixels */
  size?: number;
  /** Stroke width of the ring in pixels */
  strokeWidth?: number;
}

export const HealthScoreRing: React.FC<HealthScoreRingProps> = ({
  score,
  label = 'Health Score',
  className = '',
  size = 48,
  strokeWidth = 4,
}) => {
  // Constrain score between 0 and 100
  const normalizedScore = Math.min(Math.max(score, 0), 100);
  
  // Transition state to handle initial load animation
  const [animatedScore, setAnimatedScore] = useState(0);
  
  useEffect(() => {
    // Slight delay to ensure the initial 0 is rendered before animating
    const timer = setTimeout(() => {
      setAnimatedScore(normalizedScore);
    }, 50);
    return () => clearTimeout(timer);
  }, [normalizedScore]);

  // Viewport dimensions based on size and stroke width
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  // Determine stroke color based on score
  // Using semantic colors: success (>80), warning (50-80), error (<50)
  // For the gradient, we'll use predefined Tailwind classes or CSS variables
  let strokeClasses = 'text-success-500';
  if (animatedScore < 50) {
    strokeClasses = 'text-error-500';
  } else if (animatedScore < 80) {
    strokeClasses = 'text-warning-500';
  }

  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
      role="meter"
      aria-valuenow={animatedScore}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <svg className="w-full h-full transform -rotate-90">
        <defs>
          {/* Gradient for the progress ring */}
          <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* We can use currentcolor to inherit the color set by Tailwind text-* classes, or just define explicit values here. Using currentColor for flexibility. */}
            <stop offset="0%" stopColor="currentColor" />
            <stop offset="100%" stopColor="currentColor" stopOpacity={0.8} />
          </linearGradient>
        </defs>

        {/* Background Track */}
        <circle
          className="text-neutral-100 dark:text-neutral-800 transition-colors duration-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />

        {/* Progress Ring */}
        <circle
          className={`transition-all duration-400 ease-out ${strokeClasses}`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#score-gradient)"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
      </svg>
      
      {/* Score Value (Centered) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-100">
          {Math.round(animatedScore)}
        </span>
      </div>
    </div>
  );
};
