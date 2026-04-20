import React from 'react';
import { Search } from 'lucide-react';

/**
 * Filter Bar Component
 * 
 * Segmented control bar to filter list items by attributes like platform and status.
 * Includes a search input.
 * 
 * Requirements: 12.3
 */

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterBarProps {
  /** Selected platform filter value */
  platform: string;
  /** Handler for platform changes */
  onPlatformChange: (val: string) => void;
  
  /** Selected status filter value */
  status: string;
  /** Handler for status changes */
  onStatusChange: (val: string) => void;
  
  /** Current search query */
  searchQuery: string;
  /** Handler for search changes */
  onSearchChange: (val: string) => void;
  
  /** Additional CSS classes */
  className?: string;
}

// Default filter values based on specs
const PLATFORM_OPTIONS: FilterOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Twitter', value: 'twitter' },
  { label: 'LinkedIn', value: 'linkedin' },
];

const STATUS_OPTIONS: FilterOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Draft', value: 'draft' },
  { label: 'Pending', value: 'pending' },
  { label: 'Approved', value: 'approved' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  platform,
  onPlatformChange,
  status,
  onStatusChange,
  searchQuery,
  onSearchChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-4 ${className}`}>
      
      {/* Search Input */}
      <div className="relative w-full md:w-64 flex-shrink-0">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-neutral-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search content..."
          className="block w-full pl-10 pr-3 py-2 border border-neutral-200/50 dark:border-neutral-700/50 rounded-xl leading-5 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 sm:text-sm shadow-soft-sm"
        />
      </div>

      <div className="flex w-full md:w-auto items-center gap-4 overflow-x-auto hide-scrollbar pb-1 md:pb-0">
        {/* Platform Filter */}
        <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl flex-shrink-0">
          {PLATFORM_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onPlatformChange(opt.value)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                platform === opt.value
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50 shadow-soft-sm'
                  : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl flex-shrink-0">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onStatusChange(opt.value)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                status === opt.value
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50 shadow-soft-sm'
                  : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
