import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal Component', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  afterEach(() => {
    // Clean up body overflow style
    document.body.style.overflow = '';
  });

  describe('Rendering', () => {
    it('should not render when isOpen is false', () => {
      render(
        <Modal isOpen={false} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('should render when isOpen is true', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should render with description', () => {
      render(
        <Modal
          isOpen={true}
          onClose={mockOnClose}
          title="Test Modal"
          description="This is a description"
        >
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByText('This is a description')).toBeInTheDocument();
    });

    it('should render close button with 48px touch target', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const closeButton = screen.getByLabelText('Close modal');
      expect(closeButton).toBeInTheDocument();
      
      // Check that button has proper size classes (w-12 h-12 = 48px)
      expect(closeButton.className).toContain('w-12');
      expect(closeButton.className).toContain('h-12');
    });
  });

  describe('Sizes', () => {
    it('should apply sm size (448px)', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" size="sm">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain('max-w-md');
    });

    it('should apply md size (512px) by default', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain('max-w-lg');
    });

    it('should apply lg size (672px)', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" size="lg">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain('max-w-2xl');
    });

    it('should apply xl size (896px)', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" size="xl">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain('max-w-4xl');
    });

    it('should apply full size (1280px)', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" size="full">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain('max-w-7xl');
    });
  });

  describe('Styling', () => {
    it('should apply rounded-2xl border radius', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain('rounded-2xl');
    });

    it('should apply 32px padding (p-8)', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain('p-8');
    });

    it('should apply backdrop blur', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      // Find backdrop by checking for backdrop-blur-sm class
      const backdrop = document.querySelector('.backdrop-blur-sm');
      expect(backdrop).toBeInTheDocument();
      expect(backdrop?.className).toContain('bg-neutral-900/80');
    });
  });

  describe('Close Functionality', () => {
    it('should call onClose when close button is clicked', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const closeButton = screen.getByLabelText('Close modal');
      fireEvent.click(closeButton);

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should call onClose when backdrop is clicked and closeOnBackdrop is true', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" closeOnBackdrop={true}>
          <p>Content</p>
        </Modal>
      );

      // Click the backdrop (the container div)
      const backdrop = document.querySelector('.backdrop-blur-sm');
      if (backdrop) {
        fireEvent.click(backdrop);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      }
    });

    it('should not call onClose when backdrop is clicked and closeOnBackdrop is false', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" closeOnBackdrop={false}>
          <p>Content</p>
        </Modal>
      );

      const backdrop = document.querySelector('.backdrop-blur-sm');
      if (backdrop) {
        fireEvent.click(backdrop);
        expect(mockOnClose).not.toHaveBeenCalled();
      }
    });

    it('should call onClose when Escape key is pressed and closeOnEscape is true', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" closeOnEscape={true}>
          <p>Content</p>
        </Modal>
      );

      fireEvent.keyDown(document, { key: 'Escape' });

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should not call onClose when Escape key is pressed and closeOnEscape is false', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" closeOnEscape={false}>
          <p>Content</p>
        </Modal>
      );

      fireEvent.keyDown(document, { key: 'Escape' });

      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('should not call onClose when clicking inside modal content', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const content = screen.getByText('Content');
      fireEvent.click(content);

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('Body Scroll Lock', () => {
    it('should prevent body scroll when modal is open', () => {
      const { rerender } = render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      expect(document.body.style.overflow).toBe('hidden');

      rerender(
        <Modal isOpen={false} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(
        <Modal
          isOpen={true}
          onClose={mockOnClose}
          title="Test Modal"
          description="Test description"
        >
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
      expect(dialog).toHaveAttribute('aria-describedby', 'modal-description');
    });

    it('should not have aria-describedby when no description is provided', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).not.toHaveAttribute('aria-describedby');
    });

    it('should have accessible close button', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const closeButton = screen.getByLabelText('Close modal');
      expect(closeButton).toBeInTheDocument();
    });
  });

  describe('Custom className', () => {
    it('should apply custom className to modal content', () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Test Modal" className="custom-class">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toContain('custom-class');
    });
  });
});
