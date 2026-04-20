import React from 'react';
import { motion } from 'framer-motion';

/**
 * Card Component
 * 
 * A versatile card component with multiple variants and padding sizes.
 * Implements Apple-inspired design with soft shadows and rounded corners.
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.6, 8.1, 8.6, 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 19.2
 * 
 * @example
 * <Card variant="default" padding="md">Content</Card>
 * <Card variant="glass" padding="lg" hoverable>Hoverable Card</Card>
 */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: 'default' | 'glass' | 'elevated';
  /** Padding size */
  padding?: 'sm' | 'md' | 'lg';
  /** Enable hover effects with scale and shadow increase */
  hoverable?: boolean;
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hoverable = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    // Padding specifications (Requirements 1.1, 10.3)
    const paddingClasses = {
      sm: 'p-4',    // 16px
      md: 'p-6',    // 24px
      lg: 'p-8',    // 32px
    };

    // Base styles (Requirements 1.2, 10.1, 10.4)
    const baseClasses = 'rounded-2xl border border-neutral-200/10 dark:border-neutral-700/10 transition-all duration-normal';

    // Variant styles (Requirements 1.3, 1.6, 10.2, 10.5)
    const variantClasses = {
      default: 'bg-white dark:bg-neutral-800 shadow-soft-md',
      glass: 'bg-white/60 dark:bg-neutral-800/60 backdrop-blur-xl border-neutral-200/15 dark:border-neutral-700/15 shadow-soft-md',
      elevated: 'bg-white dark:bg-neutral-800 shadow-soft-lg',
    };

    // Hoverable styles (Requirements 8.1, 8.6, 10.7)
    const hoverableClasses = hoverable ? 'cursor-pointer' : '';

    // Combine all classes
    const cardClasses = `
      ${baseClasses}
      ${paddingClasses[padding]}
      ${variantClasses[variant]}
      ${hoverableClasses}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    // Hover animation configuration
    const hoverAnimation = hoverable
      ? { scale: 1.01, boxShadow: '0 12px 32px 0 rgba(0, 0, 0, 0.16)' }
      : undefined;

    return (
      <motion.div
        ref={ref}
        className={cardClasses}
        whileHover={hoverAnimation}
        transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        role={props.role}
        aria-label={props['aria-label']}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
