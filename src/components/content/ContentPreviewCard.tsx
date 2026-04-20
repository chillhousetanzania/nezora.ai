import React from 'react';
import { Check, Edit2, X } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

/**
 * Content Preview Card Component
 * 
 * Displays a preview of social media content with platform, status badges,
 * an aspect-square mock image, captions, and action buttons.
 * 
 * Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 8.1, 8.7
 */

export interface ContentPreviewCardProps {
  /** The platform this content is for (e.g. Instagram, Twitter) */
  platform: string;
  /** Current status of the content */
  status: 'draft' | 'pending' | 'approved' | 'rejected';
  /** Main caption/text content */
  caption: string;
  /** Image URL or gradient classes for mock */
  imageSource?: string;
  /** Target date/time string */
  scheduledFor?: string;
  /** Author or agent name */
  author?: string;
  /** Action Handlers */
  onApprove?: () => void;
  onEdit?: () => void;
  onReject?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  platform,
  status,
  caption,
  imageSource,
  scheduledFor,
  author,
  onApprove,
  onEdit,
  onReject,
  className = '',
}) => {
  // Map status to badge variants
  const statusVariant = {
    draft: 'default' as const,
    pending: 'warning' as const,
    approved: 'success' as const,
    rejected: 'error' as const,
  }[status];

  // Map platform to specific colors/icons if needed, or just display text
  
  return (
    <Card 
      variant="default" 
      padding="lg" 
      hoverable 
      className={`flex flex-col gap-4 ${className}`}
    >
      {/* Top Header: Platform and Status */}
      <div className="flex items-center justify-between">
        <Badge variant="primary" size="md">
          {platform}
        </Badge>
        <Badge variant={statusVariant} size="md" className="capitalize">
          {status}
        </Badge>
      </div>

      {/* Mock Post Preview (Aspect Square) */}
      <div className="w-full aspect-square rounded-xl overflow-hidden shadow-soft-sm bg-neutral-100 dark:bg-neutral-800 relative group">
        {imageSource ? (
          <img src={imageSource} alt="Content preview" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-800/40 flex items-center justify-center p-6 text-center">
             <span className="text-primary-800/20 dark:text-primary-200/10 font-heading font-bold text-4xl transform -rotate-12">Mock Preview</span>
          </div>
        )}
      </div>

      {/* Caption & Metadata */}
      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 line-clamp-2 h-10 mb-3">
          {caption}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-neutral-100 dark:border-neutral-700/50">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Scheduled For</span>
            <span className="text-xs text-neutral-600 dark:text-neutral-400">{scheduledFor || 'Not scheduled'}</span>
          </div>
          {author && (
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Created By</span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">{author}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={onReject}
          className="col-span-1 text-error-500 hover:bg-error-50 dark:hover:bg-error-900/20 dark:text-error-400"
          aria-label="Reject"
        >
          <X className="w-4 h-4 text-inherit" />
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={onEdit}
          className="col-span-1"
          aria-label="Edit"
        >
          <Edit2 className="w-4 h-4" />
        </Button>
        <Button 
          variant="primary" 
          size="sm" 
          onClick={onApprove}
          className="col-span-1"
          aria-label="Approve"
        >
          <Check className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};
