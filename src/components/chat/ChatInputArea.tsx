import React, { useState } from 'react';
import { Paperclip, Smile, Send } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Chat Input Area Component
 * 
 * Fixed input area for sending messages in the chat interface.
 * 
 * Requirements: 13.1, 13.2, 13.4
 */

export interface ChatInputAreaProps {
  /** Send message handler */
  onSendMessage: (message: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const ChatInputArea: React.FC<ChatInputAreaProps> = ({
  onSendMessage,
  disabled = false,
  className = '',
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200/50 dark:border-neutral-800/50 ${className}`}>
      <form 
        onSubmit={handleSubmit}
        className={`flex items-end gap-2 max-w-4xl mx-auto bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-2 border border-transparent transition-colors duration-200 focus-within:bg-white focus-within:border-primary-500/50 focus-within:shadow-glow-primary ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <div className="flex gap-1 pb-1">
          <button 
            type="button" 
            disabled={disabled}
            className="p-2 text-neutral-400 hover:text-primary-500 transition-colors rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20"
            aria-label="Add attachment"
          >
            <Paperclip className="w-5 h-5" />
          </button>
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Message your AI..."
          className="flex-1 max-h-32 min-h-[40px] appearance-none bg-transparent border-0 outline-none resize-none py-3 px-2 text-[15px] text-neutral-900 dark:text-neutral-50 placeholder:text-neutral-400"
          rows={1}
          style={{ height: '40px' }} // 56px total container height roughly with padding
        />

        <div className="flex gap-1 pb-1">
          <button 
            type="button" 
            disabled={disabled}
            className="p-2 text-neutral-400 hover:text-primary-500 transition-colors rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20"
            aria-label="Add emoji"
          >
            <Smile className="w-5 h-5" />
          </button>
          
          <motion.button
            type="submit"
            disabled={!message.trim() || disabled}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-xl transition-all duration-200 ${
              message.trim() && !disabled
                ? 'bg-primary-500 text-white shadow-soft-sm'
                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400'
            }`}
            aria-label="Send message"
          >
            <Send className="w-5 h-5 ml-0.5" />
          </motion.button>
        </div>
      </form>
      <div className="text-center mt-2">
        <span className="text-[10px] text-neutral-400 dark:text-neutral-600">
          AI agents may produce inaccurate information about people, places, or facts.
        </span>
      </div>
    </div>
  );
};
