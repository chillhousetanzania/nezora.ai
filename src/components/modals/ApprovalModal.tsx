import React from 'react';
import { Check, X, Edit2 } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

/**
 * Approval Modal Component
 * 
 * Flow for reviewing, approving, or requesting changes to social media content.
 * 
 * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 12.2
 */

export interface ApprovalModalProps {
  /** Modal open state */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Approval handler */
  onApprove: () => void;
  /** Request changes handler */
  onRequestChanges: () => void;
  /** Reject handler */
  onReject: () => void;
  
  /** Content Details */
  contentDetails: {
    platform: string;
    caption: string;
    imageSource?: string;
    createdBy: string;
    scheduledFor: string;
    status: string;
  };
}

export const ApprovalModal: React.FC<ApprovalModalProps> = ({
  isOpen,
  onClose,
  onApprove,
  onRequestChanges,
  onReject,
  contentDetails,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Review Content"
      description="Review this generated content before publishing or scheduling."
      size="xl"
    >
      <div className="flex flex-col gap-6 mt-4">
        
        {/* Content Preview (large, centered) */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-soft-md bg-neutral-100 dark:bg-neutral-800 relative group flex-shrink-0">
            {contentDetails.imageSource ? (
              <img src={contentDetails.imageSource} alt="Content preview" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-800/40 flex items-center justify-center p-6 text-center">
                 <span className="text-primary-800/20 dark:text-primary-200/10 font-heading font-bold text-4xl transform -rotate-12">Preview</span>
              </div>
            )}
          </div>
          
          {/* Metadata Grid */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-700/50">
               <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Caption</h4>
               <p className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap leading-relaxed">
                 {contentDetails.caption}
               </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Platform</span>
                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{contentDetails.platform}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Status</span>
                <div><Badge variant="warning" size="sm">{contentDetails.status}</Badge></div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Created By</span>
                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{contentDetails.createdBy}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Scheduled For</span>
                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{contentDetails.scheduledFor}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-neutral-100 dark:border-neutral-800 mt-2">
          <Button variant="danger" size="md" onClick={onReject} icon={<X />} iconPosition="left">
            Reject
          </Button>
          <Button variant="secondary" size="md" onClick={onRequestChanges} icon={<Edit2 />} iconPosition="left">
            Request Changes
          </Button>
          <Button variant="primary" size="md" onClick={onApprove} icon={<Check />} iconPosition="left">
            Approve & Publish
          </Button>
        </div>

      </div>
    </Modal>
  );
};
