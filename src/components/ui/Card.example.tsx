import { Card } from './Card';
import { Heart, TrendingUp, Users, Calendar, Sparkles } from 'lucide-react';

/**
 * Card Component Examples
 * 
 * This file demonstrates all Card variants, padding sizes, and states.
 * Use this as a reference for implementing cards throughout the application.
 */

export const CardExamples = () => {
  return (
    <div className="p-8 space-y-12 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default" padding="md">
            <h3 className="font-heading text-lg font-semibold mb-2">Default Card</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Solid background with subtle shadow. Best for primary content containers.
            </p>
          </Card>
          
          <Card variant="glass" padding="md">
            <h3 className="font-heading text-lg font-semibold mb-2">Glass Card</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Translucent with backdrop blur. Perfect for overlays and hero sections.
            </p>
          </Card>
          
          <Card variant="elevated" padding="md">
            <h3 className="font-heading text-lg font-semibold mb-2">Elevated Card</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Stronger shadow for emphasis. Use for important content or modals.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Padding Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default" padding="sm">
            <h3 className="font-heading text-base font-semibold mb-1">Small (16px)</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Compact padding for dense layouts
            </p>
          </Card>
          
          <Card variant="default" padding="md">
            <h3 className="font-heading text-lg font-semibold mb-2">Medium (24px)</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Standard padding for most cards
            </p>
          </Card>
          
          <Card variant="default" padding="lg">
            <h3 className="font-heading text-xl font-semibold mb-3">Large (32px)</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Generous padding for hero sections
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Hoverable Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default" padding="md" hoverable>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold mb-2">Hoverable Card</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Hover over this card to see the scale and shadow animation
                </p>
              </div>
            </div>
          </Card>
          
          <Card variant="glass" padding="md" hoverable>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold mb-2">Glass + Hover</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Glass variant with hover effects
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-semibold mb-6">Real-World Examples</h2>
        
        {/* Metric Card */}
        <div className="mb-6">
          <h3 className="font-heading text-lg font-semibold mb-4">Metric Card</h3>
          <Card variant="default" padding="lg">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-500" />
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400">
                +12%
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-4xl font-semibold">2,847</h3>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Total Engagements
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Up from 2,541 last week. Great progress on social media campaigns.
              </p>
            </div>
          </Card>
        </div>

        {/* Agent Status Card */}
        <div className="mb-6">
          <h3 className="font-heading text-lg font-semibold mb-4">Agent Status Card</h3>
          <Card variant="default" padding="lg" hoverable>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-3xl">
                🤖
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading text-lg font-semibold">Chief</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400">
                    Online
                  </span>
                </div>
                <p className="text-sm text-neutral-500 mb-3">Strategic Planning Agent</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  Currently analyzing Q4 marketing strategy
                </p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>Energy</span>
                    <span>87%</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-success-500 to-primary-500 transition-all duration-slower"
                      style={{ width: '87%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Insight Card */}
        <div className="mb-6">
          <h3 className="font-heading text-lg font-semibold mb-4">AI Insight Card</h3>
          <Card variant="glass" padding="lg" hoverable>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Opportunity Detected
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  Your Instagram engagement is 34% higher on posts published between 2-4 PM. 
                  Consider scheduling more content during this window.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                    Social Media
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                    High Priority
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Content Grid */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Content Grid</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="default" padding="md" hoverable>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                  Instagram
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-warning-50 dark:bg-warning-900/20 text-warning-600 dark:text-warning-400">
                  Pending
                </span>
              </div>
              <div className="aspect-square rounded-xl mb-3 bg-gradient-to-br from-purple-500 to-pink-500 p-6 flex items-center justify-center text-white text-center">
                <p className="text-base font-medium leading-relaxed">
                  New product launch announcement with stunning visuals...
                </p>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 line-clamp-2">
                Excited to announce our latest innovation! Check out the details...
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                <Users className="w-3 h-3" />
                <span>Created by Maven</span>
                <span>•</span>
                <Calendar className="w-3 h-3" />
                <span>2 hours ago</span>
              </div>
            </Card>

            <Card variant="default" padding="md" hoverable>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                  LinkedIn
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400">
                  Approved
                </span>
              </div>
              <div className="aspect-square rounded-xl mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 p-6 flex items-center justify-center text-white text-center">
                <p className="text-base font-medium leading-relaxed">
                  Thought leadership article on industry trends...
                </p>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 line-clamp-2">
                Exploring the future of AI in business operations...
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                <Users className="w-3 h-3" />
                <span>Created by Canvas</span>
                <span>•</span>
                <Calendar className="w-3 h-3" />
                <span>1 day ago</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
