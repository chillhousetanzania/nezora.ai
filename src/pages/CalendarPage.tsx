import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Eye, Edit3, Trash2 } from 'lucide-react';
import { Card, Badge } from '../components/ui';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

interface ContentItem {
  id: string;
  title: string;
  platform: string;
  type: string;
  status: 'draft' | 'scheduled' | 'published' | 'review';
  agent: string;
  color: string;
}

const mockContent: Record<number, ContentItem[]> = {
  2: [
    { id: '1', title: 'Brand intro carousel', platform: '📸 Instagram', type: 'Carousel', status: 'scheduled', agent: 'Canvas', color: '#ec4899' },
  ],
  5: [
    { id: '2', title: 'Industry insights thread', platform: '🐦 Twitter', type: 'Thread', status: 'scheduled', agent: 'Maven', color: '#06b6d4' },
  ],
  8: [
    { id: '3', title: 'Behind-the-scenes reel', platform: '📸 Instagram', type: 'Reel', status: 'draft', agent: 'Canvas', color: '#ec4899' },
    { id: '4', title: 'Weekly tips post', platform: '💼 LinkedIn', type: 'Post', status: 'review', agent: 'Maven', color: '#06b6d4' },
  ],
  12: [
    { id: '5', title: 'Product teaser video', platform: '📸 Instagram', type: 'Reel', status: 'scheduled', agent: 'Canvas', color: '#ec4899' },
  ],
  15: [
    { id: '6', title: 'Customer story post', platform: '🐦 Twitter', type: 'Post', status: 'draft', agent: 'Pulse', color: '#f59e0b' },
    { id: '7', title: 'Blog announcement', platform: '💼 LinkedIn', type: 'Article', status: 'scheduled', agent: 'Maven', color: '#06b6d4' },
  ],
  18: [
    { id: '8', title: 'Engagement poll', platform: '🐦 Twitter', type: 'Poll', status: 'scheduled', agent: 'Pulse', color: '#f59e0b' },
  ],
  20: [
    { id: '9', title: 'Tutorial carousel', platform: '📸 Instagram', type: 'Carousel', status: 'draft', agent: 'Canvas', color: '#ec4899' },
  ],
  22: [
    { id: '10', title: 'Milestone announcement', platform: '💼 LinkedIn', type: 'Post', status: 'review', agent: 'Chief', color: '#8b5cf6' },
  ],
  25: [
    { id: '11', title: 'Weekend vibes story', platform: '📸 Instagram', type: 'Story', status: 'scheduled', agent: 'Pulse', color: '#f59e0b' },
  ],
  28: [
    { id: '12', title: 'Monthly recap thread', platform: '🐦 Twitter', type: 'Thread', status: 'draft', agent: 'Maven', color: '#06b6d4' },
  ],
};

const statusVariant: Record<string, 'default' | 'primary' | 'success' | 'warning'> = {
  draft: 'default',
  scheduled: 'primary',
  published: 'success',
  review: 'warning',
};

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const selectedContent = selectedDay ? mockContent[selectedDay] || [] : [];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-200">Content Calendar</h1>
        <p className="text-neutral-500 mt-1">Plan, review, and schedule content across all platforms.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1"
        >
          <Card variant="default" padding="lg">
            {/* Month Nav */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentMonth(m => Math.max(0, m - 1))}
                className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-500" />
              </button>
              <h2 className="font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                {months[currentMonth]} {currentYear}
              </h2>
              <button
                onClick={() => setCurrentMonth(m => Math.min(11, m + 1))}
                className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {days.map(d => (
                <div key={d} className="text-center text-xs font-medium text-neutral-500 py-2">{d}</div>
              ))}
            </div>

            {/* Calendar cells */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, i) => {
                const content = day ? mockContent[day] : undefined;
                const isSelected = day === selectedDay;
                const isToday = day === 20;
                return (
                  <button
                    key={i}
                    onClick={() => day && setSelectedDay(day)}
                    disabled={!day}
                    className={`relative aspect-square rounded-xl flex flex-col items-center justify-start p-1.5 text-sm transition-all duration-200 ${
                      !day ? 'cursor-default' :
                      isSelected ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-500 shadow-soft-sm' :
                      isToday ? 'bg-secondary-50 dark:bg-secondary-900/10 border border-secondary-300 dark:border-secondary-700' :
                      'hover:bg-neutral-100 dark:hover:bg-neutral-700/30 border border-transparent'
                    }`}
                  >
                    {day && (
                      <>
                        <span className={`text-xs font-medium ${
                          isToday ? 'text-secondary-600 dark:text-secondary-400' :
                          isSelected ? 'text-primary-600 dark:text-primary-400' :
                          'text-neutral-600 dark:text-neutral-300'
                        }`}>
                          {day}
                        </span>
                        {content && (
                          <div className="flex gap-0.5 mt-1 flex-wrap justify-center">
                            {content.map((c) => (
                              <div
                                key={c.id}
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: c.color }}
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Add content button */}
            <button className="mt-4 w-full h-12 flex items-center justify-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-200">
              <Plus className="w-4 h-4" />
              Create Content
            </button>
          </Card>
        </motion.div>

        {/* Side Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-80"
        >
          <Card variant="default" padding="lg">
            <h3 className="font-heading font-semibold text-neutral-700 dark:text-neutral-200 mb-4">
              {selectedDay ? `${months[currentMonth]} ${selectedDay}` : 'Select a day'}
            </h3>

            {selectedDay && selectedContent.length === 0 && (
              <div className="text-center py-10">
                <p className="text-neutral-500 text-sm">No content scheduled</p>
                <button className="mt-3 h-10 px-4 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all">
                  + Add content
                </button>
              </div>
            )}

            <div className="space-y-3">
              {selectedContent.map((item) => (
                <div key={item.id} className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4 border border-neutral-200/10 dark:border-neutral-600/10 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-600 dark:text-neutral-300">{item.platform}</span>
                    <Badge variant={statusVariant[item.status]} size="sm">{item.status}</Badge>
                  </div>
                  <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">{item.title}</h4>
                  <p className="text-xs text-neutral-500">By {item.agent} · {item.type}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <button className="p-1.5 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-error-50 dark:hover:bg-error-500/10 transition-colors text-neutral-400 hover:text-error-500">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {!selectedDay && (
              <div className="text-center py-10">
                <p className="text-neutral-500 text-sm">Click a day to see scheduled content</p>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
