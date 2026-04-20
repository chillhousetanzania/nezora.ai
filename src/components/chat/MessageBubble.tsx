import React from 'react';

/**
 * Message Bubble Component
 * 
 * Displays a single chat message with different styles for the user and the agent.
 * 
 * Requirements: 3.1, 3.2, 12.3
 */

export interface MessageBubbleProps {
  /** The message text/content */
  content: string | React.ReactNode;
  /** Whether the message is from the user or the agent */
  sender: 'user' | 'agent';
  /** Timestamp string (e.g., '10:42 AM') */
  timestamp: string;
  /** Agent's avatar node if sender is 'agent' */
  avatar?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  content,
  sender,
  timestamp,
  avatar,
  className = '',
}) => {
  const isUser = sender === 'user';

  // Base classes for the message container
  const containerClasses = `flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4 ${className}`;

  // Bubble style logic Based on sender
  const bubbleClasses = isUser
    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl rounded-tr-md'
    : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50 shadow-soft-sm rounded-2xl rounded-tl-md';

  return (
    <div className={containerClasses}>
      {!isUser && avatar && (
        <div className="flex-shrink-0 mr-3 mt-1 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold overflow-hidden shadow-soft-sm">
          {avatar}
        </div>
      )}
      
      <div className={`flex flex-col max-w-[70%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-3 ${bubbleClasses}`}>
          {typeof content === 'string' ? (
            <p className="text-sm leading-relaxed font-normal whitespace-pre-wrap">
              {content}
            </p>
          ) : (
            content
          )}
        </div>
        
        {/* Timestamp */}
        <span className={`text-xs text-neutral-400 dark:text-neutral-500 mt-1 px-1`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};
