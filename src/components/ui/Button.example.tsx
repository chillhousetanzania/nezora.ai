import { Button } from './Button';
import { Heart, Download, Trash2, Send } from 'lucide-react';

/**
 * Button Component Examples
 * 
 * This file demonstrates all Button variants, sizes, and states.
 * Use this as a reference for implementing buttons throughout the application.
 */

export const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-12 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Small (40px)</Button>
          <Button variant="primary" size="md">Medium (48px)</Button>
          <Button variant="primary" size="lg">Large (56px)</Button>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" icon={<Heart />}>
            Like
          </Button>
          <Button variant="secondary" icon={<Download />}>
            Download
          </Button>
          <Button variant="ghost" icon={<Send />} iconPosition="right">
            Send Message
          </Button>
          <Button variant="danger" icon={<Trash2 />}>
            Delete
          </Button>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="secondary" loading>
            Loading...
          </Button>
          <Button variant="primary" loading icon={<Heart />}>
            Processing
          </Button>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Full Width Buttons</h2>
        <div className="space-y-4 max-w-md">
          <Button variant="primary" fullWidth>
            Full Width Primary
          </Button>
          <Button variant="secondary" fullWidth icon={<Download />}>
            Full Width with Icon
          </Button>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Size Combinations</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm" icon={<Heart />}>
              Small with Icon
            </Button>
            <Button variant="secondary" size="sm" icon={<Download />}>
              Small Secondary
            </Button>
            <Button variant="ghost" size="sm">
              Small Ghost
            </Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" icon={<Send />}>
              Large with Icon
            </Button>
            <Button variant="danger" size="lg" icon={<Trash2 />}>
              Large Danger
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Real-World Examples</h2>
        <div className="space-y-6">
          {/* Approval Flow */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-soft-md">
            <h3 className="font-heading text-lg font-semibold mb-4">Content Approval</h3>
            <div className="flex gap-3">
              <Button variant="primary" size="lg" className="flex-1">
                Approve & Publish
              </Button>
              <Button variant="secondary" size="lg" className="flex-1">
                Request Changes
              </Button>
              <Button variant="danger" size="lg">
                Reject
              </Button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-soft-md">
            <h3 className="font-heading text-lg font-semibold mb-4">Form Actions</h3>
            <div className="flex justify-end gap-3">
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary" icon={<Send />}>
                Submit
              </Button>
            </div>
          </div>

          {/* Card Actions */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-soft-md">
            <h3 className="font-heading text-lg font-semibold mb-4">Card Actions</h3>
            <div className="flex gap-2">
              <Button variant="primary" size="sm" className="flex-1">
                View Details
              </Button>
              <Button variant="secondary" size="sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
