import React from 'react';

/**
 * Badge Component
 * 
 * A compact badge component for displaying status, categories, or labels.
 * Implements Apple-inspired design with semantic colors and reduced saturation backgrounds.
 * 
 * Requirements: 1.1, 1.4, 11.3, 19.7
 * 
 * @example
 * <Badge variant="default" size="sm">Default</Badge>
 * <Badge variant="success" size="md">Success</Badge>
 * <Badge variant="primary" icon={<Icon />}>With Icon</Badge>
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant with semantic colors */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'primary';
  /** Badge size */
  size?: 'sm' | 'md';
  /** Optional icon element */
  icon?: React.ReactNode;
  /** Badge content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'sm',
      icon,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    // Size specifications (Requirements 1.1)
    // Small: 8px padding (px-2 py-0.5), 12px text (text-xs)
    // Medium: 12px padding (px-3 py-1), 14px text (text-sm)
    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
    };

    // Base styles (Requirements 1.1, 1.4)
    const baseClasses = 'inline-flex items-center gap-1 rounded-full font-medium';

    // Variant styles with semantic colors and reduced saturation backgrounds (Requirements 1.4, 11.3, 19.7)
    const variantClasses = {
      default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300',
      success: 'bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400',
      warning: 'bg-warning-50 dark:bg-warning-900/20 text-warning-600 dark:text-warning-400',
      error: 'bg-error-50 dark:bg-error-900/20 text-error-600 dark:text-error-400',
      primary: 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400',
    };

    // Icon size based on badge size
    const iconSize = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
    };

    // Combine all classes
    const badgeClasses = `
      ${baseClasses}
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <span
        ref={ref}
        className={badgeClasses}
        role={props.role}
        aria-label={props['aria-label']}
        onClick={props.onClick}
      >
        {icon && <span className={iconSize[size]}>{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
