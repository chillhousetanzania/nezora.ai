import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

/**
 * Button Component
 * 
 * A versatile button component with multiple variants, sizes, and states.
 * Implements Apple-inspired design with smooth micro-interactions.
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.5, 1.6, 8.1, 8.2, 8.6, 13.1, 13.2, 19.1
 * 
 * @example
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" size="lg" icon={<Icon />}>With Icon</Button>
 * <Button variant="ghost" loading>Loading...</Button>
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state with spinner */
  loading?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
  /** Icon position relative to text */
  iconPosition?: 'left' | 'right';
  /** Full width button */
  fullWidth?: boolean;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    // Size specifications (Requirements 1.1, 13.1)
    const sizeClasses = {
      sm: 'h-10 px-4 text-sm',      // 40px height
      md: 'h-12 px-6 text-base',    // 48px height
      lg: 'h-14 px-8 text-lg',      // 56px height
    };

    // Base styles (Requirements 1.2, 1.5, 8.1, 13.2)
    const baseClasses = 'rounded-xl font-medium transition-all duration-normal ease-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2';

    // Variant styles (Requirements 1.3, 1.4, 1.6)
    const variantClasses = {
      primary: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-glow-primary',
      secondary: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 shadow-soft-sm',
      ghost: 'text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20',
      danger: 'bg-error-500 text-white hover:bg-error-600',
    };

    // Disabled styles
    const disabledClasses = 'opacity-50 cursor-not-allowed';

    // Full width
    const widthClasses = fullWidth ? 'w-full' : '';

    // Combine all classes
    const buttonClasses = `
      ${baseClasses}
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${disabled || loading ? disabledClasses : ''}
      ${widthClasses}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    // Icon size based on button size
    const iconSize = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };

    // Render icon or loading spinner
    const renderIcon = () => {
      if (loading) {
        return <Loader2 className={`${iconSize[size]} animate-spin`} />;
      }
      if (icon) {
        return <span className={iconSize[size]}>{icon}</span>;
      }
      return null;
    };

    return (
      <motion.button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        whileHover={!disabled && !loading ? { scale: 1.02 } : undefined}
        whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
        transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
        type={props.type}
        onClick={props.onClick}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        name={props.name}
        value={props.value}
        form={props.form}
        formAction={props.formAction}
        formEncType={props.formEncType}
        formMethod={props.formMethod}
        formNoValidate={props.formNoValidate}
        formTarget={props.formTarget}
        aria-label={props['aria-label']}
        aria-disabled={disabled || loading}
        aria-busy={loading}
      >
        {iconPosition === 'left' && renderIcon()}
        {children}
        {iconPosition === 'right' && renderIcon()}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
