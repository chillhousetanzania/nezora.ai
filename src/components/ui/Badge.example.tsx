import React from 'react';
import { Badge } from './Badge';
import { Check, AlertTriangle, X, Star, Info } from 'lucide-react';

/**
 * Badge Component Examples
 * 
 * Demonstrates all variants, sizes, and icon support for the Badge component.
 * 
 * Requirements: 1.1, 1.4, 11.3, 19.7
 */

export const BadgeExamples: React.FC = () => {
  return (
    <div className="p-8 space-y-12 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <div>
        <h1 className="font-heading text-3xl font-semibold mb-2">Badge Component</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Compact badges for displaying status, categories, or labels with semantic colors.
        </p>
      </div>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="primary">Primary</Badge>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold">Sizes</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-600 dark:text-neutral-400 w-20">Small:</span>
            <Badge size="sm" variant="default">Default</Badge>
            <Badge size="sm" variant="success">Success</Badge>
            <Badge size="sm" variant="warning">Warning</Badge>
            <Badge size="sm" variant="error">Error</Badge>
            <Badge size="sm" variant="primary">Primary</Badge>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-600 dark:text-neutral-400 w-20">Medium:</span>
            <Badge size="md" variant="default">Default</Badge>
            <Badge size="md" variant="success">Success</Badge>
            <Badge size="md" variant="warning">Warning</Badge>
            <Badge size="md" variant="error">Error</Badge>
            <Badge size="md" variant="primary">Primary</Badge>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold">With Icons</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success" icon={<Check />}>Approved</Badge>
          <Badge variant="warning" icon={<AlertTriangle />}>Pending</Badge>
          <Badge variant="error" icon={<X />}>Rejected</Badge>
          <Badge variant="primary" icon={<Star />}>Featured</Badge>
          <Badge variant="default" icon={<Info />}>Info</Badge>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold">Real-world Examples</h2>
        
        {/* Status Badges */}
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-medium">Status Indicators</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success" size="sm">Online</Badge>
            <Badge variant="warning" size="sm">Busy</Badge>
            <Badge variant="error" size="sm">Offline</Badge>
            <Badge variant="default" size="sm">Away</Badge>
          </div>
        </div>

        {/* Content Status */}
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-medium">Content Status</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default" size="md">Draft</Badge>
            <Badge variant="warning" size="md">Pending Review</Badge>
            <Badge variant="success" size="md" icon={<Check />}>Approved</Badge>
            <Badge variant="primary" size="md">Published</Badge>
            <Badge variant="error" size="md" icon={<X />}>Rejected</Badge>
          </div>
        </div>

        {/* Platform Tags */}
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-medium">Platform Tags</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" size="sm">Instagram</Badge>
            <Badge variant="primary" size="sm">Twitter</Badge>
            <Badge variant="primary" size="sm">LinkedIn</Badge>
            <Badge variant="primary" size="sm">TikTok</Badge>
          </div>
        </div>

        {/* Priority Levels */}
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-medium">Priority Levels</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="error" size="md">High Priority</Badge>
            <Badge variant="warning" size="md">Medium Priority</Badge>
            <Badge variant="default" size="md">Low Priority</Badge>
          </div>
        </div>
      </section>

      {/* In Context */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-semibold">In Context</h2>
        
        {/* Card with badges */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-soft-md space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">Social Media Post</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Created by Maven • 2 hours ago
              </p>
            </div>
            <Badge variant="warning" size="sm">Pending</Badge>
          </div>
          
          <p className="text-neutral-700 dark:text-neutral-300">
            Check out our latest product launch! 🚀 We're excited to share this with you.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" size="sm">Instagram</Badge>
            <Badge variant="default" size="sm">#product</Badge>
            <Badge variant="default" size="sm">#launch</Badge>
            <Badge variant="default" size="sm">#tech</Badge>
          </div>
        </div>

        {/* Agent status card */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-soft-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-2xl">
              🤖
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-heading text-lg font-semibold">Maven</h3>
                <Badge variant="success" size="sm" icon={<Check />}>Online</Badge>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Content Creation Agent
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BadgeExamples;
