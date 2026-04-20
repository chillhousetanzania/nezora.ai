import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

/**
 * Card Component Tests
 * 
 * Tests for the Card component covering all variants, padding sizes, and states.
 * Validates: Requirements 1.1, 1.2, 1.3, 1.6, 8.1, 8.6, 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 19.2
 */

describe('Card', () => {
  describe('Variants', () => {
    it('renders default variant with correct styles', () => {
      const { container } = render(<Card variant="default">Default Card</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-white', 'dark:bg-neutral-800', 'shadow-soft-md');
    });

    it('renders glass variant with correct styles', () => {
      const { container } = render(<Card variant="glass">Glass Card</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-white/60', 'dark:bg-neutral-800/60', 'backdrop-blur-xl');
    });

    it('renders elevated variant with correct styles', () => {
      const { container } = render(<Card variant="elevated">Elevated Card</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-white', 'dark:bg-neutral-800', 'shadow-soft-lg');
    });
  });

  describe('Padding Sizes', () => {
    it('renders small padding (16px)', () => {
      const { container } = render(<Card padding="sm">Small Padding</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('p-4');
    });

    it('renders medium padding (24px)', () => {
      const { container } = render(<Card padding="md">Medium Padding</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('p-6');
    });

    it('renders large padding (32px)', () => {
      const { container } = render(<Card padding="lg">Large Padding</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('p-8');
    });
  });

  describe('Base Styles', () => {
    it('applies rounded-2xl border radius', () => {
      const { container } = render(<Card>Card Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('rounded-2xl');
    });

    it('applies subtle borders with 10% opacity', () => {
      const { container } = render(<Card>Card Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('border', 'border-neutral-200/10', 'dark:border-neutral-700/10');
    });

    it('applies transition styles', () => {
      const { container } = render(<Card>Card Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('transition-all', 'duration-normal');
    });
  });

  describe('Hoverable State', () => {
    it('applies cursor-pointer when hoverable', () => {
      const { container } = render(<Card hoverable>Hoverable Card</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('cursor-pointer');
    });

    it('does not apply cursor-pointer when not hoverable', () => {
      const { container } = render(<Card>Non-hoverable Card</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).not.toHaveClass('cursor-pointer');
    });
  });

  describe('Interactions', () => {
    it('calls onClick handler when clicked', () => {
      const handleClick = vi.fn();
      const { container } = render(<Card onClick={handleClick}>Clickable Card</Card>);
      const card = container.firstChild as HTMLElement;
      fireEvent.click(card);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onMouseEnter handler on hover', () => {
      const handleMouseEnter = vi.fn();
      const { container } = render(<Card onMouseEnter={handleMouseEnter}>Hover Card</Card>);
      const card = container.firstChild as HTMLElement;
      fireEvent.mouseEnter(card);
      expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    });

    it('calls onMouseLeave handler when mouse leaves', () => {
      const handleMouseLeave = vi.fn();
      const { container } = render(<Card onMouseLeave={handleMouseLeave}>Hover Card</Card>);
      const card = container.firstChild as HTMLElement;
      fireEvent.mouseLeave(card);
      expect(handleMouseLeave).toHaveBeenCalledTimes(1);
    });
  });

  describe('Custom Props', () => {
    it('accepts custom className', () => {
      const { container } = render(<Card className="custom-class">Card Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = vi.fn();
      render(<Card ref={ref}>Card Content</Card>);
      expect(ref).toHaveBeenCalled();
    });

    it('passes through native div props', () => {
      const { container } = render(<Card role="region" aria-label="test-card">Card Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveAttribute('role', 'region');
      expect(card).toHaveAttribute('aria-label', 'test-card');
    });
  });

  describe('Content Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Card>
          <h2>Card Title</h2>
          <p>Card description</p>
        </Card>
      );
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card description')).toBeInTheDocument();
    });

    it('renders complex nested content', () => {
      render(
        <Card>
          <div>
            <span>Nested</span>
            <span>Content</span>
          </div>
        </Card>
      );
      expect(screen.getByText('Nested')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });
});
