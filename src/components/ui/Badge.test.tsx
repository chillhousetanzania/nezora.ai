import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';
import { Check } from 'lucide-react';

/**
 * Badge Component Tests
 * 
 * Tests for the Badge component covering all variants, sizes, and icon support.
 * 
 * Requirements: 1.1, 1.4, 11.3, 19.7
 */

describe('Badge', () => {
  describe('Variants', () => {
    it('renders default variant with correct styles', () => {
      render(<Badge variant="default">Default</Badge>);
      const badge = screen.getByText('Default');
      expect(badge).toBeInTheDocument();
      expect(badge.className).toContain('bg-neutral-100');
      expect(badge.className).toContain('text-neutral-600');
    });

    it('renders success variant with semantic colors', () => {
      render(<Badge variant="success">Success</Badge>);
      const badge = screen.getByText('Success');
      expect(badge.className).toContain('bg-success-50');
      expect(badge.className).toContain('text-success-600');
    });

    it('renders warning variant with semantic colors', () => {
      render(<Badge variant="warning">Warning</Badge>);
      const badge = screen.getByText('Warning');
      expect(badge.className).toContain('bg-warning-50');
      expect(badge.className).toContain('text-warning-600');
    });

    it('renders error variant with semantic colors', () => {
      render(<Badge variant="error">Error</Badge>);
      const badge = screen.getByText('Error');
      expect(badge.className).toContain('bg-error-50');
      expect(badge.className).toContain('text-error-600');
    });

    it('renders primary variant with semantic colors', () => {
      render(<Badge variant="primary">Primary</Badge>);
      const badge = screen.getByText('Primary');
      expect(badge.className).toContain('bg-primary-50');
      expect(badge.className).toContain('text-primary-600');
    });
  });

  describe('Sizes', () => {
    it('renders small size with correct padding and text size', () => {
      render(<Badge size="sm">Small</Badge>);
      const badge = screen.getByText('Small');
      expect(badge.className).toContain('px-2');
      expect(badge.className).toContain('py-0.5');
      expect(badge.className).toContain('text-xs');
    });

    it('renders medium size with correct padding and text size', () => {
      render(<Badge size="md">Medium</Badge>);
      const badge = screen.getByText('Medium');
      expect(badge.className).toContain('px-3');
      expect(badge.className).toContain('py-1');
      expect(badge.className).toContain('text-sm');
    });
  });

  describe('Icon Support', () => {
    it('renders with icon', () => {
      render(
        <Badge icon={<Check data-testid="check-icon" />}>
          With Icon
        </Badge>
      );
      expect(screen.getByText('With Icon')).toBeInTheDocument();
      expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    });

    it('renders without icon', () => {
      render(<Badge>No Icon</Badge>);
      expect(screen.getByText('No Icon')).toBeInTheDocument();
    });
  });

  describe('Border Radius', () => {
    it('applies rounded-full border radius for pill shape', () => {
      render(<Badge>Pill Shape</Badge>);
      const badge = screen.getByText('Pill Shape');
      expect(badge.className).toContain('rounded-full');
    });
  });

  describe('Accessibility', () => {
    it('renders as span element', () => {
      render(<Badge>Accessible</Badge>);
      const badge = screen.getByText('Accessible');
      expect(badge.tagName).toBe('SPAN');
    });

    it('supports aria-label', () => {
      render(<Badge aria-label="Status badge">Active</Badge>);
      const badge = screen.getByLabelText('Status badge');
      expect(badge).toBeInTheDocument();
    });

    it('supports custom role', () => {
      render(<Badge role="status">Status</Badge>);
      const badge = screen.getByRole('status');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className', () => {
      render(<Badge className="custom-class">Custom</Badge>);
      const badge = screen.getByText('Custom');
      expect(badge.className).toContain('custom-class');
    });

    it('preserves base classes with custom className', () => {
      render(<Badge className="custom-class">Custom</Badge>);
      const badge = screen.getByText('Custom');
      expect(badge.className).toContain('inline-flex');
      expect(badge.className).toContain('rounded-full');
      expect(badge.className).toContain('custom-class');
    });
  });
});
