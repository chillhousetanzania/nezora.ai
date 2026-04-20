import React from 'react';
import { motion } from 'framer-motion';

/**
 * Typing Indicator Component
 * 
 * Displays animated dots to indicate that an agent is typing/thinking.
 * 
 * Requirements: 3.4
 */

export interface TypingIndicatorProps {
  /** Name of the agent who is typing */
  agentName: string;
  /** Agent's avatar node */
  avatar?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  agentName,
  avatar,
  className = '',
}) => {
  // Dot animation variants (staggered bounce)
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -4 },
  };

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
  };

  return (
    <div className={`flex w-full justify-start mb-4 ${className}`}>
      {avatar && (
        <div className="flex-shrink-0 mr-3 mt-1 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold overflow-hidden shadow-soft-sm">
          {avatar}
        </div>
      )}
      
      <div className="flex flex-col items-start max-w-[70%]">
        <div className="px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 shadow-soft-sm rounded-2xl rounded-tl-md flex items-center gap-1.5 h-[44px]">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0 }}
          />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0.15 }}
          />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0.3 }}
          />
        </div>
        
        {/* Agent Name text */}
        <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 px-1">
          {agentName} is thinking...
        </span>
      </div>
    </div>
  );
};
