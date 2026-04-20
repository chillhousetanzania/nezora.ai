import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Modal Component
 * 
 * A flexible modal dialog with backdrop blur, smooth animations, and multiple sizes.
 * Implements Apple-inspired design with generous padding and soft shadows.
 * 
 * Requirements: 1.1, 1.2, 1.6, 8.3, 8.6, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 19.4
 * 
 * @example
 * <Modal isOpen={isOpen} onClose={handleClose} title="Modal Title" size="md">
 *   <p>Modal content goes here</p>
 * </Modal>
 */

export interface ModalProps {
  /** Controls modal visibility */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Optional description below title */
  description?: string;
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Allow closing by clicking backdrop */
  closeOnBackdrop?: boolean;
  /** Allow closing with Escape key */
  closeOnEscape?: boolean;
  /** Modal content */
  children: React.ReactNode;
  /** Additional CSS classes for modal content */
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  size = 'md',
  closeOnBackdrop = true,
  closeOnEscape = true,
  children,
  className = '',
}) => {
  // Size specifications (Requirements 14.3)
  const sizeClasses = {
    sm: 'max-w-md',     // 448px
    md: 'max-w-lg',     // 512px
    lg: 'max-w-2xl',    // 672px
    xl: 'max-w-4xl',    // 896px
    full: 'max-w-7xl',  // 1280px
  };

  // Handle Escape key press (Requirements 14.6)
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle backdrop click (Requirements 14.6)
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur (Requirements 14.1, 8.6) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
            className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm z-40"
            onClick={handleBackdropClick}
            aria-hidden="true"
          />

          {/* Modal container */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            {/* Modal content (Requirements 14.2, 14.3, 14.4) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
              className={`
                bg-white dark:bg-neutral-800 
                rounded-2xl 
                shadow-soft-xl 
                p-8 
                w-full 
                ${sizeClasses[size]}
                ${className}
              `.trim().replace(/\s+/g, ' ')}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              aria-describedby={description ? 'modal-description' : undefined}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button (Requirements 14.5) */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1 pr-8">
                  <h2
                    id="modal-title"
                    className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200"
                  >
                    {title}
                  </h2>
                  {description && (
                    <p
                      id="modal-description"
                      className="mt-2 text-base text-neutral-600 dark:text-neutral-400"
                    >
                      {description}
                    </p>
                  )}
                </div>

                {/* Close button (Requirements 14.5 - 48px touch target) */}
                <button
                  onClick={onClose}
                  className="
                    flex-shrink-0
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    text-neutral-500
                    hover:bg-neutral-100 dark:hover:bg-neutral-700
                    transition-all duration-normal
                    focus:outline-none focus:ring-2 focus:ring-primary-500
                  "
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal body */}
              <div className="text-neutral-700 dark:text-neutral-200">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

Modal.displayName = 'Modal';
