import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Input } from './Input';

/**
 * Modal Component Examples
 * 
 * Demonstrates various Modal configurations and use cases.
 */

export const ModalExamples: React.FC = () => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [smallOpen, setSmallOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);
  const [fullOpen, setFullOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [noBackdropOpen, setNoBackdropOpen] = useState(false);
  const [noEscapeOpen, setNoEscapeOpen] = useState(false);

  return (
    <div className="p-8 space-y-8 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <div>
        <h1 className="font-heading text-4xl font-semibold mb-2 text-neutral-700 dark:text-neutral-200">
          Modal Component
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Flexible modal dialogs with backdrop blur and smooth animations
        </p>
      </div>

      {/* Basic Modal */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Basic Modal
        </h2>
        <Button onClick={() => setBasicOpen(true)}>Open Basic Modal</Button>
        <Modal
          isOpen={basicOpen}
          onClose={() => setBasicOpen(false)}
          title="Basic Modal"
          description="This is a basic modal with title and description"
        >
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              This is the modal content. You can put any React components here.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Click the close button, press Escape, or click outside to close.
            </p>
            <div className="flex gap-3 pt-4">
              <Button variant="primary" onClick={() => setBasicOpen(false)}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={() => setBasicOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      </section>

      {/* Size Variants */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Size Variants
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setSmallOpen(true)}>Small (448px)</Button>
          <Button onClick={() => setBasicOpen(true)}>Medium (512px)</Button>
          <Button onClick={() => setLargeOpen(true)}>Large (672px)</Button>
          <Button onClick={() => setFullOpen(true)}>Full (1280px)</Button>
        </div>

        <Modal
          isOpen={smallOpen}
          onClose={() => setSmallOpen(false)}
          title="Small Modal"
          size="sm"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            This is a small modal (max-width: 448px)
          </p>
        </Modal>

        <Modal
          isOpen={largeOpen}
          onClose={() => setLargeOpen(false)}
          title="Large Modal"
          size="lg"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            This is a large modal (max-width: 672px)
          </p>
        </Modal>

        <Modal
          isOpen={fullOpen}
          onClose={() => setFullOpen(false)}
          title="Full Width Modal"
          size="full"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            This is a full width modal (max-width: 1280px)
          </p>
        </Modal>
      </section>

      {/* Form Modal */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Form Modal
        </h2>
        <Button onClick={() => setFormOpen(true)}>Open Form Modal</Button>
        <Modal
          isOpen={formOpen}
          onClose={() => setFormOpen(false)}
          title="Create New Item"
          description="Fill out the form below to create a new item"
          size="md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFormOpen(false);
            }}
            className="space-y-4"
          >
            <Input
              label="Item Name"
              type="text"
              placeholder="Enter item name"
              value=""
              onChange={() => {}}
            />
            <Input
              label="Description"
              type="textarea"
              placeholder="Enter description"
              value=""
              onChange={() => {}}
            />
            <div className="flex gap-3 pt-4">
              <Button type="submit" variant="primary" fullWidth>
                Create Item
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setFormOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </section>

      {/* Close Behavior */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Close Behavior
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setNoBackdropOpen(true)}>
            No Backdrop Close
          </Button>
          <Button onClick={() => setNoEscapeOpen(true)}>
            No Escape Close
          </Button>
        </div>

        <Modal
          isOpen={noBackdropOpen}
          onClose={() => setNoBackdropOpen(false)}
          title="No Backdrop Close"
          description="This modal won't close when clicking the backdrop"
          closeOnBackdrop={false}
        >
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              You must use the close button or press Escape to close this modal.
            </p>
            <Button onClick={() => setNoBackdropOpen(false)}>Close</Button>
          </div>
        </Modal>

        <Modal
          isOpen={noEscapeOpen}
          onClose={() => setNoEscapeOpen(false)}
          title="No Escape Close"
          description="This modal won't close when pressing Escape"
          closeOnEscape={false}
        >
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              You must use the close button or click outside to close this modal.
            </p>
            <Button onClick={() => setNoEscapeOpen(false)}>Close</Button>
          </div>
        </Modal>
      </section>

      {/* Confirmation Modal */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Confirmation Modal
        </h2>
        <Button variant="danger" onClick={() => setBasicOpen(true)}>
          Delete Item
        </Button>
        <Modal
          isOpen={basicOpen}
          onClose={() => setBasicOpen(false)}
          title="Confirm Deletion"
          description="Are you sure you want to delete this item? This action cannot be undone."
          size="sm"
        >
          <div className="flex gap-3 pt-4">
            <Button
              variant="danger"
              fullWidth
              onClick={() => {
                // Handle deletion
                setBasicOpen(false);
              }}
            >
              Delete
            </Button>
            <Button variant="ghost" onClick={() => setBasicOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      </section>

      {/* Long Content Modal */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Long Content Modal
        </h2>
        <Button onClick={() => setBasicOpen(true)}>Open Long Content</Button>
        <Modal
          isOpen={basicOpen}
          onClose={() => setBasicOpen(false)}
          title="Terms and Conditions"
          description="Please read and accept our terms"
          size="lg"
        >
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={i} className="text-neutral-600 dark:text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            ))}
            <div className="flex gap-3 pt-4 sticky bottom-0 bg-white dark:bg-neutral-800">
              <Button variant="primary" fullWidth onClick={() => setBasicOpen(false)}>
                Accept
              </Button>
              <Button variant="ghost" onClick={() => setBasicOpen(false)}>
                Decline
              </Button>
            </div>
          </div>
        </Modal>
      </section>
    </div>
  );
};

export default ModalExamples;
