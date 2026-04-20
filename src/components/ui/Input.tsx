import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * Input Component
 * 
 * A versatile input component supporting multiple input types with labels, validation, and states.
 * Implements Apple-inspired design with soft borders and smooth focus transitions.
 * 
 * Requirements: 1.1, 1.2, 1.5, 8.1, 8.6, 9.5, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 17.6, 19.3
 * 
 * @example
 * <Input type="text" label="Email" placeholder="Enter your email" />
 * <Input type="password" label="Password" error="Password is required" />
 * <Input type="textarea" label="Message" rows={4} />
 */

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'size'> {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea';
  /** Label text displayed above input */
  label: string;
  /** Placeholder text */
  placeholder?: string;
  /** Error message to display */
  error?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Required field indicator */
  required?: boolean;
  /** Input value */
  value?: string | number;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Number of rows for textarea */
  rows?: number;
  /** Additional CSS classes */
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      type = 'text',
      label,
      placeholder,
      error,
      disabled = false,
      required = false,
      value,
      onChange,
      onBlur,
      rows = 4,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${React.useId()}`;
    
    // Base styles (Requirements 1.2, 1.5, 13.1, 13.2, 13.3)
    const baseClasses = 'w-full px-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 border text-neutral-700 dark:text-neutral-200 placeholder-neutral-400 transition-all duration-normal';
    
    // Height specification (Requirements 1.1, 13.1)
    const heightClasses = type === 'textarea' ? 'py-3' : 'h-12';
    
    // Border styles (Requirements 1.5, 13.3)
    const borderClasses = error 
      ? 'border-error-500' 
      : 'border-neutral-200/15 dark:border-neutral-700/15';
    
    // Focus state (Requirements 8.1, 8.6, 13.4)
    const focusClasses = error
      ? 'focus:outline-none focus:border-error-500 focus:ring-2 focus:ring-error-500/20'
      : 'focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20';
    
    // Disabled state (Requirements 13.7)
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    // Combine all classes
    const inputClasses = `
      ${baseClasses}
      ${heightClasses}
      ${borderClasses}
      ${focusClasses}
      ${disabledClasses}
      ${className}
    `.trim().replace(/\s+/g, ' ');
    
    // Label styles (Requirements 9.5, 13.5)
    const labelClasses = 'block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2';
    
    // Error message styles (Requirements 13.6)
    const errorClasses = 'mt-2 text-sm text-error-500 flex items-center gap-1';

    return (
      <div className="w-full">
        {/* Label (Requirements 13.5) */}
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
        
        {/* Input or Textarea */}
        {type === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={inputId}
            className={inputClasses}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            rows={rows}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={inputId}
            type={type}
            className={inputClasses}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        
        {/* Error message (Requirements 13.6, 17.6) */}
        {error && (
          <div className={errorClasses} id={`${inputId}-error`} role="alert">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
