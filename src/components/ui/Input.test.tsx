import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

/**
 * Input Component Tests
 * 
 * Tests for the Input component covering all types, states, and validation.
 * Validates: Requirements 1.1, 1.2, 1.5, 8.1, 8.6, 9.5, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 17.6, 19.3
 */

describe('Input', () => {
  describe('Types', () => {
    it('renders text input by default', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveAttribute('type', 'text');
    });

    it('renders email input', () => {
      render(<Input type="email" label="Email" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('renders password input', () => {
      render(<Input type="password" label="Password" />);
      const input = screen.getByLabelText('Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('renders number input', () => {
      render(<Input type="number" label="Age" />);
      const input = screen.getByLabelText('Age');
      expect(input).toHaveAttribute('type', 'number');
    });

    it('renders textarea', () => {
      render(<Input type="textarea" label="Message" />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea.tagName).toBe('TEXTAREA');
    });
  });

  describe('Label', () => {
    it('renders label with correct text', () => {
      render(<Input label="Username" />);
      expect(screen.getByText('Username')).toBeInTheDocument();
    });

    it('associates label with input', () => {
      render(<Input label="Email" />);
      const input = screen.getByLabelText('Email');
      expect(input).toBeInTheDocument();
    });

    it('shows required indicator when required', () => {
      render(<Input label="Email" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('applies correct label styles', () => {
      render(<Input label="Name" />);
      const label = screen.getByText('Name').closest('label');
      expect(label).toHaveClass('text-sm', 'font-medium', 'mb-2');
    });
  });

  describe('Height and Dimensions', () => {
    it('applies 48px height to text input', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('h-12');
    });

    it('applies 48px height to email input', () => {
      render(<Input type="email" label="Email" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveClass('h-12');
    });

    it('applies 48px height to password input', () => {
      render(<Input type="password" label="Password" />);
      const input = screen.getByLabelText('Password');
      expect(input).toHaveClass('h-12');
    });

    it('applies 48px height to number input', () => {
      render(<Input type="number" label="Age" />);
      const input = screen.getByLabelText('Age');
      expect(input).toHaveClass('h-12');
    });

    it('does not apply fixed height to textarea', () => {
      render(<Input type="textarea" label="Message" />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea).not.toHaveClass('h-12');
      expect(textarea).toHaveClass('py-3');
    });
  });

  describe('Border Radius', () => {
    it('applies rounded-xl border radius', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('rounded-xl');
    });

    it('applies rounded-xl to textarea', () => {
      render(<Input type="textarea" label="Message" />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea).toHaveClass('rounded-xl');
    });
  });

  describe('Borders', () => {
    it('applies subtle border with 15% opacity', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('border-neutral-200/15', 'dark:border-neutral-700/15');
    });

    it('applies 1px border', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('border');
    });
  });

  describe('Focus States', () => {
    it('applies 2px accent border on focus', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('focus:border-primary-500', 'focus:ring-2', 'focus:ring-primary-500/20');
    });

    it('applies 200ms transition', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('transition-all', 'duration-normal');
    });

    it('removes default outline on focus', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('focus:outline-none');
    });
  });

  describe('Label Spacing', () => {
    it('applies 8px spacing above input', () => {
      render(<Input label="Name" />);
      const label = screen.getByText('Name').closest('label');
      expect(label).toHaveClass('mb-2');
    });
  });

  describe('Error States', () => {
    it('displays error message when provided', () => {
      render(<Input label="Email" error="Email is required" />);
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    it('applies error border color', () => {
      render(<Input label="Email" error="Email is required" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveClass('border-error-500');
    });

    it('applies error focus ring', () => {
      render(<Input label="Email" error="Email is required" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveClass('focus:border-error-500', 'focus:ring-error-500/20');
    });

    it('displays error icon', () => {
      render(<Input label="Email" error="Email is required" />);
      const errorDiv = screen.getByRole('alert');
      expect(errorDiv.querySelector('svg')).toBeInTheDocument();
    });

    it('sets aria-invalid when error exists', () => {
      render(<Input label="Email" error="Email is required" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('links error message with aria-describedby', () => {
      render(<Input label="Email" error="Email is required" id="email-input" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('aria-describedby', 'email-input-error');
    });
  });

  describe('Disabled State', () => {
    it('disables input when disabled prop is true', () => {
      render(<Input label="Name" disabled />);
      const input = screen.getByLabelText('Name');
      expect(input).toBeDisabled();
    });

    it('applies disabled styles', () => {
      render(<Input label="Name" disabled />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('opacity-50', 'cursor-not-allowed');
    });

    it('disables textarea when disabled', () => {
      render(<Input type="textarea" label="Message" disabled />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea).toBeDisabled();
    });
  });

  describe('Required State', () => {
    it('marks input as required', () => {
      render(<Input label="Email" required />);
      const input = screen.getByLabelText(/Email/);
      expect(input).toBeRequired();
    });

    it('marks textarea as required', () => {
      render(<Input type="textarea" label="Message" required />);
      const textarea = screen.getByLabelText(/Message/);
      expect(textarea).toBeRequired();
    });
  });

  describe('Placeholder', () => {
    it('displays placeholder text', () => {
      render(<Input label="Email" placeholder="Enter your email" />);
      const input = screen.getByPlaceholderText('Enter your email');
      expect(input).toBeInTheDocument();
    });

    it('applies placeholder color', () => {
      render(<Input label="Email" placeholder="Enter your email" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveClass('placeholder-neutral-400');
    });
  });

  describe('Textarea Specific', () => {
    it('applies default 4 rows to textarea', () => {
      render(<Input type="textarea" label="Message" />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea).toHaveAttribute('rows', '4');
    });

    it('applies custom rows to textarea', () => {
      render(<Input type="textarea" label="Message" rows={6} />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea).toHaveAttribute('rows', '6');
    });
  });

  describe('Interactions', () => {
    it('calls onChange handler when value changes', () => {
      const handleChange = vi.fn();
      render(<Input label="Name" onChange={handleChange} />);
      const input = screen.getByLabelText('Name');
      fireEvent.change(input, { target: { value: 'John' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur handler when input loses focus', () => {
      const handleBlur = vi.fn();
      render(<Input label="Name" onBlur={handleBlur} />);
      const input = screen.getByLabelText('Name');
      fireEvent.blur(input);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('updates value when controlled', () => {
      const { rerender } = render(<Input label="Name" value="John" onChange={() => {}} />);
      const input = screen.getByLabelText('Name') as HTMLInputElement;
      expect(input.value).toBe('John');
      
      rerender(<Input label="Name" value="Jane" onChange={() => {}} />);
      expect(input.value).toBe('Jane');
    });
  });

  describe('Custom Props', () => {
    it('accepts custom className', () => {
      render(<Input label="Name" className="custom-class" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = vi.fn();
      render(<Input label="Name" ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });

    it('passes through native input props', () => {
      render(<Input label="Name" id="name-input" name="username" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveAttribute('id', 'name-input');
      expect(input).toHaveAttribute('name', 'username');
    });
  });

  describe('Base Styles', () => {
    it('applies full width', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('w-full');
    });

    it('applies horizontal padding', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('px-4');
    });

    it('applies background color', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('bg-neutral-50', 'dark:bg-neutral-800');
    });

    it('applies text color', () => {
      render(<Input label="Name" />);
      const input = screen.getByLabelText('Name');
      expect(input).toHaveClass('text-neutral-700', 'dark:text-neutral-200');
    });
  });
});
