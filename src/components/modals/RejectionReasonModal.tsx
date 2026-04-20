import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

/**
 * Rejection Reason Modal Component
 * 
 * Flow for providing a mandatory reason when rejecting content.
 * 
 * Requirements: 5.7, 13.1, 13.2
 */

export interface RejectionReasonModalProps {
  /** Modal open state */
  isOpen: boolean;
  /** Close / Cancel handler */
  onClose: () => void;
  /** Confirm handler */
  onConfirm: (reason: string) => void;
}

export const RejectionReasonModal: React.FC<RejectionReasonModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [reason, setReason] = useState('');

  const handleConfirm = () => {
    if (reason.trim()) {
      onConfirm(reason.trim());
      setReason(''); // reset for next time
    }
  };

  const handleClose = () => {
    setReason('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Provide Rejection Reason"
      description="Please explain why this content is being rejected. This feedback helps your AI agents improve future content generation."
      size="md"
    >
      <div className="flex flex-col gap-6 mt-4">
        
        <div className="flex flex-col gap-2">
          <label htmlFor="rejection-reason" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Rejection Reason <span className="text-error-500">*</span>
          </label>
          <textarea
            id="rejection-reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="e.g., The tone is too casual, please revise using our professional brand voice guidelines."
            className="w-full min-h-[120px] p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 shadow-soft-sm resize-y"
            required
          />
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-2">
          <Button variant="secondary" size="md" onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            size="md" 
            onClick={handleConfirm}
            disabled={!reason.trim()}
          >
            Confirm Rejection
          </Button>
        </div>

      </div>
    </Modal>
  );
};
